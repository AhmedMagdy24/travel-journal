import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import data from './data';



function App() {
  const cards = data.map(item => {
    return (
        <Main 
            img={item.title}
            location={item.location}
            googleMapsUrl={item.googleMapsUrl}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            imageUrl={item.imageUrl}
            title={item.title} 
        />
    )
})    

  return (
      <div>
        <Navbar />
        {cards}
      </div>
   
  );
}

export default App;
