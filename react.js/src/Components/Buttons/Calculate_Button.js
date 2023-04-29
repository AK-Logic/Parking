import React, { useState } from 'react'


new Date();

const MyButton = () => {
  const [text, setText] = useState('');
  const currentDate = new Date();

  const handleClick = () => {
    const currentDateString = currentDate.toLocaleString();
    setText(currentDateString);
    console.log(currentDateString);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      {text && <span>{text}</span>}
    </div>
  );
};

export default MyButton;
