import { useState } from 'react';

const useContactMe = () => {
  const [emailText, setEmailText] = useState('');
  const [nameText, setNameText] = useState('');
  const [messageText, setMessageText] = useState('');

  const handleNameChange = (e) => {
    setNameText(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmailText(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessageText(e.target.value)
  }

  return {
    nameText,
    emailText,
    messageText,
    handleNameChange,
    handleEmailChange,
    handleMessageChange,
  }
};

export default useContactMe;
