import React from 'react'
import './card.css'

const Card = (props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(props.prompt);
    alert('Copied successfully!');
  };

  return (
    <div className='box'>
      <img className="img" src={props.imgsrc} alt="Prompt visual" />
      <div>
        <button className="Btn" onClick={handleCopy}>copy</button>
      </div>
    </div>
  )
}

export default Card
