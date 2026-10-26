import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import BlogAdmin from './admin/BlogAdmin.jsx'

function ScrollTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => { const el = hash && document.getElementById(hash.slice(1)); el ? el.scrollIntoView({ behavior: 'smooth' }) : window.scrollTo(0, 0) }, [pathname, hash])
  return null
}

export default function App() {
  return (<>
    <ScrollTop />
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/especialidades" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contact />} />
      </Route>
      <Route path="/admin/blog" element={<BlogAdmin />} />
    </Routes>
  </>)
}
