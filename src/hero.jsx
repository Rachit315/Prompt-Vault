import React from 'react'
import './hero.css'
import Button from './components/button'

const hero = () => {
  // Function to scroll to the bottom of the page
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className='Hero' id="hero">
      <h1>Prompt Vault🔒 </h1>
      <h1 className='h2'>GET YOUR PERFECT PROMPTS</h1>
      <p>#paste the prompt to chatgpt</p>
      <Button btn="Explore Prompts >"  className="btnn" onClick={scrollToBottom} />
    </div>
  )
}

export default hero
