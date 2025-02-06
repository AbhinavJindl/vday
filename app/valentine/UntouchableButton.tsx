import React, { useState } from 'react';


// This button can't be clicked because it moves away when you try to hover over it

function UntouchableButton() {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleMouseMove = () => {
    setPosition({
      top: position.top + Math.random() * 50,
      left: position.left + Math.random() * 50,
    });
  };

  return (
    <button
      onMouseMove={handleMouseMove}
      style={{ position: 'relative', top: position.top, left: position.left }}
      className="rounded-full bg-blue-500 text-white transition-colors flex items-center justify-center hover:bg-blue-600 h-10 w-24"
    >
      No
    </button>
  );
}


export default UntouchableButton;