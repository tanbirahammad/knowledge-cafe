import { useEffect, useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({ handleAddtoBookmark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      <div className="md:w-2/3 ">
        <h1>Blogs:{blogs.length}</h1>
        {blogs.map((blog) => (
          <Blog
            handleAddtoBookmark={handleAddtoBookmark}
            key={blog.id}
            blog={blog}
            handleMarkAsRead={handleMarkAsRead}
          />
        ))}
      </div>
    </>
  );
};

export default Blogs;
