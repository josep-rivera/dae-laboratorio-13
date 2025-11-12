import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Chanchito Feliz");
  }, []);

  return <h1>Rick and Morty</h1>;
}

export default App;
