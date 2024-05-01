

const Bookmark = ({ bookmark, serial }) => {
    // console.log(bookmark);
    const { title } = bookmark;
    return (
        <div>
            <h2>{serial} Is here {title}</h2>
        </div>
    );
};

export default Bookmark;