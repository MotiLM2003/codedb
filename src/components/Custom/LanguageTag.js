import React from 'react';

const LanguageTag = ({ language }) => {
  const getClassNamee = () => {
    switch (language.toLowerCase()) {
      case 'javascript': {
        return 'bg-javascript';
      }
      case 'php': {
        return 'bg-php';
      }
      case 'python': {
        return 'bg-python';
      }
      case 'java': {
        return 'bg-java';
      }
      default: {
        return 'bg-javascript';
      }
    }
  };

  return (
    <div className='language-tag'>
      <div className={`language-tag__circle ${getClassNamee()}`}></div>
      <div className='language-tag__text'>{language}</div>
    </div>
  );
};

export default LanguageTag;
