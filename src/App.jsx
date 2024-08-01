
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
import { useEffect } from 'react'
import Bookmarks from './components/bookmarks/Bookmarks'
import { CgLayoutGrid } from 'react-icons/cg'

function App() {
  const[bookmark,setBookmark]=useState([]);
  const handleAddtoBookmark=(blog)=>{
    console.log('bookmark added');

  }
 

  return (
    <>
     <div className='max-w-7xl mx-auto'>
     <Header/>
     <div className='md:flex mx-auto'>
     <Blogs handleAddtoBookmark={handleAddtoBookmark}/>
     <Bookmarks/>
     </div>
     </div>
    </>
  )
}

export default App
