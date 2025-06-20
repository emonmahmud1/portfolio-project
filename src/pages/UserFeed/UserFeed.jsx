import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import UserCard from "../../components/UserCard";
import SectionTitle from "../../components/SectionTitle";

const UserFeed = () => {
  const fetchUsers = async ({ pageParam = 0 }) => {
    const response = await fetch(
      `https://proxy-server-users.vercel.app/users?take=10&skip=${pageParam}`
    );
    return response.json();
  };
 
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
        <div className="pl-4">
          <SectionTitle title="All Users" color="text-black dark:text-gray-100" />
        </div>

   
      {data.pages.map((page, pageIndex) => (
        <div key={pageIndex}>
          {page?.users?.map((user) => (
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
