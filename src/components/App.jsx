import React from "react";

import "../index.css";
import Card from "./Card";
import ListeningToMusicImage from "../images/illustration-hero.svg";
import MusicIcon from "../images/icon-music.svg";
import Footer from "./Footer";


function App() {
    
    return <div className = "wrapper">
    <main className="container">
    <h1 className="sr-only">Order Summary</h1>
    <Card 
    image={ListeningToMusicImage}
    alt="Person Listening to Music"
    title="Order Summary"
    description="You can now listen to millions of songs, audiobooks, and podcasts on any 
    device anywhere you like!" 
    Icon={MusicIcon}
    IconAlt="Icon of Music"
    price="$59.99"
    />
    </main>
    <Footer />
    </div>
   
}

export default App;