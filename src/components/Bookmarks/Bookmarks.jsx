// import Bookmark from "../Bookmark/Bookmark";

// import Bookmark from "../Bookmark/Bookmark";


// const Bookmarks = ({ bookmarks }) => {
//     return (
//         <div className="w-1/3">
//             <h2 className="text-3xl">Bookmarks: {bookmarks.length}</h2>

//             {
//                 // bookmarks.map(bookmark => <Bookmark
//                 //     key={bookmark.id}
//                 //     bookmark={bookmark}></Bookmark>)

//                 bookmarks.map((bookmark, index) => (
//                     <Bookmark key={bookmark.id} bookmark={bookmark} serial={index + 1} />
//                 ))
//             }
//         </div>

//     );
// };import { useState, useEffect } from 'react';

import React, { useState, useEffect } from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
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
            <h2 className="text-3xl border-t text-center border-lime-400 rounded-2xl">Bookmarks: {currentBookmarks.length}</h2>
            {currentBookmarks.map((bookmark, index) => (
                <div key={bookmark.id}>
                    <span>{index + 1}. {bookmark.title}</span>
                    <button onClick={() => handleTransferBookmark(index)}>Transfer</button>
                </div>
            ))}
            <h2 className="text-3xl mt-28 border-t text-center border-lime-400 rounded-2xl">Transferred: {transferredBookmarks.length}</h2>
            {transferredBookmarks.map((bookmark, index) => (
                <Bookmark key={bookmark.id} bookmark={bookmark} />
            ))}
        </div>
    );
};

export default Bookmarks;
