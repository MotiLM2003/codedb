import React, { useEffect } from 'react';
import useSystemTheme from 'react-use-system-theme';
import AppRouter from './routers/AppRouter';

// document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
  var link = document.createElement('link'),
    oldLink = document.getElementById('favicon');
  link.id = 'favicon';
  link.rel = 'shortcut icon';
  link.href = src;
  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
}

const App = () => {
  const systemTheme = useSystemTheme();
  useEffect(() => {
    const faviconUpdate = async () => {
      //grab favicon element by ID
      const favicon = document.getElementById('favicon');
      console.log(favicon);
      if (systemTheme === 'light') {
        changeFavicon('favicon.png');
      } else {
        changeFavicon('favicon_dark.png');
      }
    };
    //run our function here
    faviconUpdate();

    //2nd paramenter passed to useEffect is dependency array so that this effect only runs on changes to count
  }, []);
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <AppRouter />
    </div>
  );
};

export default App;
