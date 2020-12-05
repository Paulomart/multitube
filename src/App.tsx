import React, { useEffect, useState } from 'react';
import './App.css';

import { Settings } from './Settings';
import { SplitScreen } from './SplitScreen';

let initialState: Array<string> = [];
try {
  const hash = decodeURIComponent(window.location.hash);
  initialState = JSON.parse(hash.substr(1));
} catch (err) {
  console.log(err);
  initialState = [
    'https://www.youtube.com/watch?v=gnt2wZBg89g',
    'https://www.youtube.com/watch?v=la538KIVszQ',
    'https://www.youtube.com/watch?v=Ky5l9ZxsG9M'
  ];
}

function useUrlState(initialState: Array<string>): [Array<string>, (newVideos: Array<string>) => void] {
  const [videos, setStateVideos] = useState<Array<string>>(initialState);

  const set = (newVideos: Array<string>): void => {
    setStateVideos(newVideos);
    window.location.hash = encodeURIComponent(JSON.stringify(newVideos));
  };

  return [videos, set];
}

function App() {
  const [videos, setVideos] = useUrlState(initialState);

  const handleVideoAdded = (videoUrl: string) => {
    const copy = videos.slice();
    if (!copy.includes(videoUrl)) {
      copy.push(videoUrl);
      setVideos(copy);
    }
  }

  const handleVideoRemoved = (videoUrl: string) => {
    const copy = videos.slice();
    const index = copy.indexOf(videoUrl);
    copy.splice(index, 1);
    setVideos(copy);
  }

  return (
    <>
      <Settings
        onVideoAdded={handleVideoAdded}
        onVideoRemoved={handleVideoRemoved}
        videos={videos}
      />

      <SplitScreen
        urls={videos}
      />
    </>
  );
}

export default App;
