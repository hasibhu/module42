

const Blog = ({ blog, handelAddToBookmark, handleReadingTime }) => {
    // console.log( blog);

    const { title, coverImage, readingTime, postDate, hashTags,
        authorName, authorImage } = blog;
    // console.log(title);
    return (
        <div className="border border-red-500 w-full rounded-xl p-2">
            <img className="w-full rounded-xl" src={coverImage} alt="" />
            <div className="flex justify-between">
                <div>
                    <img className="w-16 h-16 rounded-full mt-2" src={authorImage} alt="Image Here" />
                    <h4 >{authorName }</h4>
                    <h4>Posted On: {postDate}</h4>
                </div>
                <div className="mt-10">
                    {/* <button onClick={handelAddToBookmark} className="bg-green-400 rounded-xl">Bookmarks</button> */}

                    <button onClick={() => handelAddToBookmark(blog)} className="bg-green-400 w-24 h-12 rounded-xl">Bookmarks</button> <br />
                    
                    <button onClick={()=>handleReadingTime(readingTime)} className="btn text-purple-400 bg-slate-200 mt-3 "> {readingTime} min read</button>
                </div>
            </div>

            <h1 className="text-xl font-bold">Title: {title}</h1>
            <p>
                {
                    hashTags.map((hash, idx) => <span className="font-bold mr-2" key={idx}>#{hash}</span>)
                }
            </p>

            
        </div>
    );
};
 
export default Blog;