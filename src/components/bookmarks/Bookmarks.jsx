import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({ bookmark, readingTime }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
        Bookmarked Blogs: {readingTime} mins
      </h2>

      {/* Bookmarks List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {bookmark.length === 0 ? (
          <p className="text-lg text-center text-gray-600 col-span-full">
            No bookmarked blogs found.
          </p>
        ) : (
          bookmark.map((book) => (
            <Bookmark key={book.id} bookmark={book} />
          ))
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
