

import  { useState, useEffect } from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    const [transferredBookmarks, setTransferredBookmarks] = useState([]);
    const [currentBookmarks, setCurrentBookmarks] = useState(bookmarks);

    const handleTransferBookmark = index => {
        const updatedBookmarks = [...currentBookmarks];
        const transferredBookmark = updatedBookmarks.splice(index, 1)[0];
        setTransferredBookmarks([...transferredBookmarks, transferredBookmark]);
        setCurrentBookmarks(updatedBookmarks);
    };


    // Update currentBookmarks when bookmarks prop changes
    useEffect(() => {
        setCurrentBookmarks(bookmarks);
    }, [bookmarks]);

    return (
        <div className="w-1/3 mt-10">
            <h1 className='text-center text-2xl mb-10'>Total Reading Time: <br /> {readingTime} </h1>
            <h2 className="text-3xl border-t text-center border-lime-400 rounded-2xl">Bookmarks: {currentBookmarks.length}</h2>


            <div >
                {currentBookmarks.map((bookmark, index) => <Bookmark
                    key={index}
                    bookmark={bookmark}
                    serial={index} 
                   
                ></Bookmark>)}
           </div>

      
            <h2 className="text-3xl mt-28 border-t text-center border-lime-400 rounded-2xl">Transferred: {transferredBookmarks.length}</h2>
            {transferredBookmarks.map((bookmark, index) => (
                <Bookmark key={bookmark.id} bookmark={bookmark} />
            ))}
        </div>
    );
};

export default Bookmarks;
