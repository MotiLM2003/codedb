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
  console.log(systemTheme);
  if (systemTheme === 'light') {
    changeFavicon('favicon.png');
  } else {
    changeFavicon('favicon_dark.png');
  }
  useEffect(() => {}, []);
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <AppRouter />
    </div>
  );
};

export default App;
