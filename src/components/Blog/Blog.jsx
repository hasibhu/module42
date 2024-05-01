

const Blog = ({ blog, handelAddToBookmark }) => {
    // console.log( blog);

    const { title, coverImage, readingTime, postDate, hashTags,
        authorName, authorImage } = blog;
    // console.log(title);
    return (
        <div className="border border-red-500 w-full rounded-xl p-2">
            <img className="w-[420px]" src={coverImage} alt="" />
            <div className="flex justify-between">
                <div>
                    <img className="w-10 h-10 mt-2" src={authorImage} alt="Image Here" />
                    <h4>{authorName }</h4>
                    <h4>Posted On: {postDate}</h4>
                </div>
                <div className="mt-10">
                    {/* <button onClick={handelAddToBookmark} className="bg-green-400 rounded-xl">Bookmarks</button> */}

                    <button onClick={() => handelAddToBookmark(blog)} className="bg-green-400 w-24 h-12 rounded-xl">Bookmarks</button>
                    
                    <h4>{readingTime} min read</h4>
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