import React, { useState } from 'react';

const CodeInput = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']); 

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value.length <= 1 && /^\d*$/.test(value)) { 
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (index < 5 && value !== '') {
        document.getElementById(`code-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && code[index] === '') {
      const newCode = [...code];
      newCode[index - 1] = '';
      setCode(newCode);
      document.getElementById(`code-input-${index - 1}`).focus(); 
    }
  };

  const handlePaste = (e, index) => {
    e.preventDefault();
  };
console.log('Code: ', code)
  return (
    <div className="flex justify-center my-2">
      {code.map((digit, index) => (
        <input
          key={index}
          id={`code-input-${index}`}
          className="rounded-[12px] px-2 py-2 mr-2 w-[44px] h-[60px] text-center text-[24px] text-black outline-none saira"
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={(e) => handlePaste(e, index)}
        />
      ))}
    </div>
  );
};

export default CodeInput;
