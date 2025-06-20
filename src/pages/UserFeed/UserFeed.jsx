import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import UserCard from "../../components/UserCard";

const UserFeed = () => {
  const fetchUsers = async () => {
    const response = await fetch(
      `https://tech-test.raintor.com/api/users/GetUsersList?take=10&skip=0`
    );
    return response.json();
  };
  // Use React Query to handle paginated fetching
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    isFetchingNextPage,
    error,
  } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    getNextPageParam: (lastPage, allPages) => {
      const nextSkip = allPages.length * 10;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
  });

  const bottomObserverRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (bottomObserverRef.current) {
      observer.observe(bottomObserverRef.current);
    }

    return () => {
      if (bottomObserverRef.current) {
        observer.unobserve(bottomObserverRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage]);

  if (isLoading) return <p className="text-center">Loading users...</p>;
  if (isError)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div
      className="max-w-[1440px] mx-auto"
      style={{
        backgroundImage: `url('./images/bgimg.png')`,
        backgroundRepeat: "repeat-y",
      }}
      
    >
      <h2 className="text-2xl font-bold text-center mb-6">User Feed</h2>

      {/* Loop through each page and each user */}
      {data.pages.map((page, pageIndex) => (
        <div key={pageIndex}>
          {page.users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ))}

      {/* The invisible div to observe and trigger loading next users */}
      <div ref={bottomObserverRef} className="h-12 text-center">
        {isFetchingNextPage && <p>Loading more users...</p>}
      </div>
    </div>
  );
};

export default UserFeed;
