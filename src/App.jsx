
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  // state for bookmark
  const [bookmarks, setBookmarks] = useState([]);
  const handelAddToBookmark = blog => {
    console.log(blog);
    const newBookmarks = [...bookmarks, { ...blog, serial: bookmarks.length + 1 }];
    setBookmarks(newBookmarks);
  }

  //state for reading time 
  const [readingTime, setReadingTime] = useState(0);
  const handleReadingTime = time => {
    console.log(' time clicked', time);
    // setReadingTime(readingTime + time); //or
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }
 
  return (
    < >
      <div className='m-auto max-w-screen-xl p-6'>
        <Header></Header>  {/* Child component has been imported here */}
        <div className="md:flex gap-3 border border-yellow-500 mt-10">
          <Blogs
            handelAddToBookmark={handelAddToBookmark}
            handleReadingTime={handleReadingTime}
          ></Blogs>

          <Bookmarks
            bookmarks={bookmarks}
            handleReadingTime={handleReadingTime}
            readingTime={readingTime}
          ></Bookmarks>
        </div>
      </div>
      
    </>
  )
}

export default App
