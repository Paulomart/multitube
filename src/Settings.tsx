import React, { useState } from 'react';
import { SettingsDialog } from './SettingsDialog';

export type SettingsProps = {
  videos: Array<string>;

  onVideoAdded: (url: string) => void;
  onVideoRemoved: (url: string) => void;
}

export function Settings(props: SettingsProps): JSX.Element {
  const [settingsShown, setSettingsShown] = useState(false);

  if (settingsShown) {
    return (
      <SettingsDialog
        {...props}
        onSettingsClosed={() => setSettingsShown(false)}
      />
    );
  }

  return <button className="settings-openbtn" onClick={() => setSettingsShown(true)}>open settings</button>;
}
