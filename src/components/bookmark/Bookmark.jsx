import React from 'react';

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;

  return (
    <div className="bg-white p-6 m-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

export default Bookmark;
