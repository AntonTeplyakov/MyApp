import './App.css';
import { useState } from 'react'

function App() {
  const [name, setName] = useState('mario')
  const [events, setEvents] = useState([
    {title: "marios's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])
  // let name = 'mario'
  const handleClick = (id) =>{
    setEvents(events.filter((event)=>{
      return id !== event.id
    }))
    console.log(id)
  }
  return (
    <div className="App">
      {events.map((event,index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={()=> handleClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
