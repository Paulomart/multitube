import React, { useState } from 'react';

export type SettingsDialogProps = {
  videos: Array<string>;

  onVideoAdded: (url: string) => void;
  onVideoRemoved: (url: string) => void;
  onSettingsClosed: () => void;
};

export function SettingsDialog(props: SettingsDialogProps): JSX.Element {

  return (
    <div className="settingsdialog-backdrop">

      <div className="settingsdialog-box">

        <ul>
          {props.videos.map((url) => (
            <li key={url}>
              {url}
              <button onClick={() => props.onVideoRemoved(url)}>Remove</button>
            </li>
          ))}
        </ul>

        <VideoInputBox onVideoAdded={props.onVideoAdded} />

        <button onClick={() => props.onSettingsClosed()}>Close</button>

      </div>

    </div>
  )


}

type VideoInputBoxProps = {
  onVideoAdded: (url: string) => void;
}

function VideoInputBox(props: VideoInputBoxProps): JSX.Element {

  const [inputValue, setInput] = useState<string>('');

  return (
    <>
      <input value={inputValue} onChange={(e) => setInput(e.currentTarget.value)}></input>
      <button onClick={() => props.onVideoAdded(inputValue)}>Add</button>
    </>
  )
}
