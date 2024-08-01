
import { CgLayoutGrid } from "react-icons/cg";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog,handleAddtoBookmark }) => {
    
    console.log(handleAddtoBookmark)
    const { title, coverimg, authorimg, author, posted_date, readingtime, hashtags } = blog;

    return (
        <>
            <div className="mb-20 ">
                <div className="mb-8">

                    <img className="w-full rounded-md"  src={coverimg}/>
                </div>
                <div>
                    <div className="flex justify-between mb-4">
                        <div className="flex ">
                            <img className="w-16 rounded-full" src={authorimg} alt="" srcset="" />
                            <div className="ml-6">
                                <span className="text-2xl">{author}</span>
                                <p>{posted_date}</p>
                            </div>
                        </div>

                        <div className="flex items-center ">
                            <span>{readingtime} min read</span>
                            <button onClick={handleAddtoBookmark} className="ml-2 text-red-400 text-2xl"><CiBookmark /></button>
                        </div>
                    </div>
                </div>
                <h2 className="text-3xl font-bold">{title}</h2>
                <p>
                    {
                        hashtags.map(hash => <span className="gap-3"><a href="">{hash}</a></span>)
                    }
                </p>
            </div>
        </>
    );
};

export default Blog;