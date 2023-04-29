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
      <button onClick={handleClick}>Calculate</button>
      {text && <span>{text}</span>}
    </div>
  );
};

export default MyButton;
