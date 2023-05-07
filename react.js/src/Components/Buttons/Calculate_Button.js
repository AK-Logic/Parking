import React, { useState } from 'react'


new Date();

const MyButton = () => {
  const [text, setText] = useState('');
  
  const handleClick = () => {
    const currentDate = new Date();
    const currentDateString = currentDate.toLocaleString();
    setText(currentDateString);
    console.log(currentDateString);
  };

  return (
    <div>
      <button onClick={handleClick} className='button'>Calculate</button>
      <div>
      {text && <span>{text}</span>}
      </div>
    </div>
  );
};

export default MyButton;
