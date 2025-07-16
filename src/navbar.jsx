import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="logo" style={{ color: 'black', fontWeight: 'bold', fontSize: '1.5rem' }}>
        P🔒V
      </div>
      <div className="links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/" onClick={scrollToBottom} className="nav-link">Prompts</Link>
      </div>
    </div>
  )
}

export default Navbar
