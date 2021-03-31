import React, { useLayoutEffect } from 'react';
import useSystemTheme from 'react-use-system-theme';
import AppRouter from './routers/AppRouter';

// document.head = document.head || document.getElementsByTagName('head')[0];

function setWindowSize() {
  let windowWidth, myHeight;
  if (typeof window.innerWidth == 'number') {
    windowWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else {
    if (
      document.documentElement &&
      (document.documentElement.clientWidth ||
        document.documentElement.clientHeight)
    ) {
      windowWidth = document.documentElement.clientWidth;
      // myHeight = document.documentElement.clientHeight;
    } else {
      if (
        document.body &&
        (document.body.clientWidth || document.body.clientHeight)
      ) {
        windowWidth = parseInt(document.body.clientWidth);
        // myHeight = document.body.clientHeight;
      }
    }
  }
  console.log(windowWidth);
  if (windowWidth < 1200) {
    console.log(windowWidth);
    document.getElementById('root').style.width = `${windowWidth}px`;
    const wrappers = document.querySelectorAll('.wrapper');

    wrappers.forEach((item) => {
      item.style.width = `${windowWidth}px`;
    });
  }
}

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

  useLayoutEffect(() => {
    window.addEventListener('resize', setWindowSize);
    setWindowSize();
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
