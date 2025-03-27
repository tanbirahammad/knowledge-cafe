import { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddtoBookmark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Blogs</h1>
        
        {/* Display loading or blogs */}
        {loading ? (
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-500">Loading blogs...</p>
            <div className="mt-4">
              <div className="w-8 h-8 border-4 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
            </div>
          </div>
        ) : (
          <>
            <p className="text-xl text-gray-700 mb-6">Total Blogs: {blogs.length}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Map through blogs and display each one */}
              {blogs.map((blog) => (
                <Blog
                  key={blog.id}
                  blog={blog}
                  handleAddtoBookmark={handleAddtoBookmark}
                  handleMarkAsRead={handleMarkAsRead}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  handleAddtoBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blogs;
