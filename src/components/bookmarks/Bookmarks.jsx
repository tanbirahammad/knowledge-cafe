import Bookmark from "../bookmark/Bookmark";


const Bookmarks = ({bookmark,readingTime}) => {
    return (
        <>
            <div className="md:w-1/3 ml-4 ">
                <h2 className="text-3xl text-center">Bookmarked Blogs:{readingTime}</h2>
                {
                    bookmark.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}/>)
                }
            </div>
        </>
    );
};

export default Bookmarks;