

const Bookmark = ({ bookmark, serial }) => {
    // console.log(bookmark);
    const { title } = bookmark;
    return (
        <div className='bg-lime-200 mt-2'>
            <span className='bg-slate-300'>{serial + 1}. {title}</span>
            <button className='btn bg-lime-400 rounded-xl ml-44 m-4' >Transfer</button>

        </div>
          
                
        )
    
};

export default Bookmark;
// onClick = {() => handleTransferBookmark(index)}



// (
//     <div key={bookmark.id} className='bg-lime-200'>
//         <span className='bg-slate-300'>{index + 1}. {bookmark.title}</span>
//         <button className='btn bg-lime-400 rounded-xl ml-44 m-4' onClick={() => handleTransferBookmark(index)}>Transfer</button>
//     </div>
// )