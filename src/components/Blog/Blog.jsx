

const Blog = ({ blog, handelAddToBookmark }) => {
    // console.log( blog);

    const { title, coverImage, readingTime, postDate, hashTags,
        authorName, authorImage } = blog;
    // console.log(title);
    return (
        <div className="border border-red-500 w-2/3">
            <img className="w-[220px]" src={coverImage} alt="" />
            <div className="flex justify-between">
                <div>
                    <img className="w-6 h-6" src={authorImage} alt="Image Here" />
                    <h4>{authorName }</h4>
                    <h4>{postDate}</h4>
                </div>
                <div>
                    {/* <button onClick={handelAddToBookmark} className="bg-green-400 rounded-xl">Bookmarks</button> */}
                    <button onClick={()=>handelAddToBookmark(blog)} className="bg-green-400 rounded-xl">Bookmarks</button>
                    <h4>{readingTime} min read</h4>
                </div>
            </div>

            <h1>{title}</h1>
            <p>
                {
                    hashTags.map((hash, idx) => <span key={idx}>#{hash}</span>)
                }
            </p>
        </div>
    );
};
 
export default Blog;