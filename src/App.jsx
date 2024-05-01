
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  
  const [bookmarks, setBookmarks] = useState([]);

  const handelAddToBookmark = blog => {
    // console.log(blog);
    const newBookmarks = [...bookmarks, { ...blog, serial: bookmarks.length + 1 }];
    setBookmarks(newBookmarks);
  }


  return (
    <>
      <Header></Header>  {/* Child component has been imported here */}
      <div className="md:flex">
        <Blogs handelAddToBookmark={handelAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
