import React from 'react';

const NoticeCard = ({ title, description, postedDate, lastDate, collegeName }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg hover:shadow-md transition duration-300 cursor-pointer hover:shadow-white">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-3 text-teal-700">{title}</h2>
        <span className="uppercase">{collegeName}</span>
        <p className="text-gray-800 mb-3">{description}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <p>Posted: {postedDate}</p>
          <p>Last Date: {lastDate}</p>
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;
