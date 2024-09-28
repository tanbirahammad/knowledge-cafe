
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
import { useEffect } from 'react'
import Bookmarks from './components/bookmarks/Bookmarks'
import { CgLayoutGrid } from 'react-icons/cg'

function App() {
  
  const[bookmark,setBookmark]=useState([]);
  const[readingTime,setReadingTime]=useState(0)
  const handleAddtoBookmark=(blog)=>{
    console.log(blog)
    const newBookMark=[...bookmark,blog];
    setBookmark(newBookMark);

  }
  const handleMarkAsRead=(time)=>{
    console.log('Mark As read',time)
    setReadingTime(readingTime+time)
  }
 

  return (
    <>
     <div className='max-w-7xl mx-auto'>
     <Header/>
     <div className='md:flex mx-auto'>
     <Blogs handleAddtoBookmark={handleAddtoBookmark} handleMarkAsRead={handleMarkAsRead}/>
     <Bookmarks readingTime={readingTime} bookmark={bookmark}/>
     </div>
     </div>
    </>
  )
}

export default App
