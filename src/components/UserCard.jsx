import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 rounded-lg shadow-sm bg-white mb-4">
      <img
        src={user.image}
        alt="user profile picture"
        className="w-24 h-24 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center gap-1">
            <h2 className="text-xl font-semibold text-gray-800">
              {user.firstName} {user.lastName} ({user.age})
            </h2>
            <div className="badge badge-dash badge-accent">{user.role}</div>
          </div>
          <p className="text-sm text-gray-500">
            {user.company.title} @ {user.company.name}
          </p>
        </div>

        <p className="text-sm text-gray-600 mt-1">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Phone:</strong> {user.phone}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          <strong>Address:</strong> {user.address.city}, {user.address.state},{" "}
          {user.address.country}
        </p>
        <p className="text-sm text-gray-600">
          <strong>University:</strong> {user.university}
        </p>
        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-700">
          <span>
            <strong>Blood:</strong> {user.bloodGroup}
          </span>
          <span>
            <strong>Gender:</strong> {user.gender}
          </span>
          <span>
            <strong>Eye Color:</strong> {user.eyeColor}
          </span>
          <span>
            <strong>Hair:</strong> {user.hair.color}, {user.hair.type}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
