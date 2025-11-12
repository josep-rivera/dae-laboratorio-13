import { useEffect, useState } from "react";
import Hero from "./components/Hero.jsx";
import Entities from "./components/Entities.jsx";

function App() {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character"
      );
      const data = await response.json();
      setCharacters(data);
    };
    fetchData();
    
  }, []);

    return (
      <>
      <Hero />
      <Entities data={characters} />
      </>
    );
}

export default App;
