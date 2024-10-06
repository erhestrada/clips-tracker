import { useState, useEffect } from 'react';
import { clientId, authToken } from './config.tsx';

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getTopClips(clientId: string, authToken: string) {
        try {
          const response = await fetch("https://api.twitch.tv/helix/clips?game_id=509658&started_at=2024-10-03T16:36:58Z&ended_at=2024-10-04T16:36:58Z&is_featured=true", {
            method: 'GET',
            headers: {
              'Client-Id': clientId,
              'Authorization': 'Bearer ' + authToken
            }
          });
          const clipsData = await response.json();
          console.log(clipsData.data[0].id);
          setData(clipsData.data[0].id)
          return clipsData; // or do something with it
        } catch (error) {
          console.error(error);
        }
      }

    getTopClips(clientId, authToken);
    return () => {}
  }, []);

  return (
    <>
        <p>First id</p>
        <p>{data}</p>  
    </>
  );
}
