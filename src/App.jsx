
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
import { useEffect } from 'react'

function App() {
  const[blogs,setBlogs]=useState([])

  useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])

  return (
    <>
     <Header/>
     <Blogs/>
    </>
  )
}

export default App
