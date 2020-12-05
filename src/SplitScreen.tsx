import React from 'react';

export type SplitScreenProps = {
  urls: Array<string>;
};

export function SplitScreen(props: SplitScreenProps): JSX.Element {

  return (
    <div className="splitscreen">

      {props.urls.map((url) => {
        return <YouTubeEmbedded url={url}  key={url} />
      })}

    </div>
  )
}

const youtubeVideoIdRegex = /https:\/\/www\.youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/i;

export function YouTubeEmbedded(props: {url: string}) {

  const match = youtubeVideoIdRegex.exec(props.url);
  if (!match) {
    return <p>Invalid url</p>
  }

  const videoId = match[1];


  return (
    <div className="embedded">
      <iframe src={"https://www.youtube.com/embed/" + videoId} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );

}
