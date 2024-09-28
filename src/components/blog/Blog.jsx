import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddtoBookmark, handleMarkAsRead }) => {
  const {
    title,
    coverimg,
    authorimg,
    author,
    posted_date,
    readingtime,
    hashtags,
  } = blog;

  return (
    <>
      <div className="mb-20 ">
        <div className="mb-8">
          <img className="w-full rounded-md" src={coverimg} />
        </div>
        <div>
          <div className="flex justify-between mb-4">
            <div className="flex ">
              <img
                className="w-16 rounded-full"
                src={authorimg}
                alt=""
                srcset=""
              />
              <div className="ml-6">
                <span className="text-2xl">{author}</span>
                <p>{posted_date}</p>
              </div>
            </div>

            <div className="flex items-center ">
              <span>{readingtime} min read</span>
              <button
                onClick={() => handleAddtoBookmark(blog)}
                className="ml-2 text-red-400 text-2xl"
              >
                <CiBookmark />
              </button>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p>
          {hashtags.map((hash) => (
            <span className="gap-3">
              <a href="">{hash}</a>
            </span>
          ))}
        </p>
        <button
          onClick={()=>handleMarkAsRead(readingtime)}
          className="mt-4 underline text-purple-800"
        >
          Mark As Read
        </button>
      </div>
    </>
  );
};

export default Blog;
