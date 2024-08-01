
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
import { useEffect } from 'react'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {
 

  return (
    <>
     <div className='max-w-7xl mx-auto'>
     <Header/>
     <div className='md:flex mx-auto'>
     <Blogs/>
     <Bookmarks/>
     </div>
     </div>
    </>
  )
}

export default App
