import React, { useState } from 'react'

const Generate = () => {

    const [ pass, setPass ] = useState(null)

    const generateRandomPassword = () => {
      const charsetNumbers = "0123456789";
      const charsetSymbols = "!@#$%^&*()-_+=<>?";
      const charsetLowercase = "abcdefghijklmnopqrstuvwxyz";
      const charsetUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const charsetAll = charsetLowercase + charsetUppercase + charsetNumbers + charsetSymbols;
      
      const getRandomCharacter = (charset) => {
        const randomIndex = Math.floor(Math.random() * charset.length);
        return charset[randomIndex];
      };
    
      let password = "";
    
      // Generate 2 random numbers
      for (let i = 0; i < 2; i++) {
        password += getRandomCharacter(charsetNumbers);
      }
    
      // Generate 2 random symbols
      for (let i = 0; i < 2; i++) {
        password += getRandomCharacter(charsetSymbols);
      }
    
      // Generate 2 random lowercase letters
      for (let i = 0; i < 2; i++) {
        password += getRandomCharacter(charsetLowercase);
      }
    
      // Generate 2 random uppercase letters
      for (let i = 0; i < 2; i++) {
        password += getRandomCharacter(charsetUppercase);
      }
    
      // Generate the remaining characters to reach a total length of 10
      for (let i = 0; i < 2; i++) {
        password += getRandomCharacter(charsetAll);
      }
    
      // Shuffle the password characters to make it more random
      password = password.split('');
      for (let i = password.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [password[i], password[j]] = [password[j], password[i]];
      }
    
      setPass(password.join(''))
    }
    


  return (
    <div>
        <p className='gen-password'>{ pass || "Generate new password !!"}</p>
        <button className='gen-button' onClick={generateRandomPassword}>Generate</button>
    </div>
  )
}

export default Generate