
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
    < >
      <div className='m-auto max-w-screen-lg p-10'>
        <Header></Header>  {/* Child component has been imported here */}
        <div className="md:flex gap-3 border border-yellow-500">
          <Blogs handelAddToBookmark={handelAddToBookmark}></Blogs>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
      
    </>
  )
}

export default App
