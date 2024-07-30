
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
import { useEffect } from 'react'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {
 

  return (
    <>
     <Header/>
     <div className='md:flex'>
     <Blogs/>
     <Bookmarks/>
     </div>
    </>
  )
}

export default App
