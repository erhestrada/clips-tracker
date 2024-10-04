import { clientId, authToken } from './config.tsx';

async function getTopClips(clientId: string, authToken: string) {
  try {
    const response = await fetch("https://api.twitch.tv/helix/clips?game_id=509658&started_at=2024-10-03T16:36:58Z&ended_at=2024-10-04T16:36:58Z&is_featured=true", {
      method: 'GET',
      headers: {
        'Client-Id': clientId,
        'Authorization': 'Bearer ' + authToken
      }
    });
    const data = await response.json();
    console.log(data); // Return data here
    return data; // or do something with it
  } catch (error) {
    console.error(error);
  }
}

function App() {
  getTopClips(clientId, authToken)
  return (
    <h1>HELLO</h1>
  )
}

export default App
