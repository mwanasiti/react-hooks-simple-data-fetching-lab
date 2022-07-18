// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogPhoto, setDogPhoto] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogPhoto(data.message);
      });
  }, []);

  if (!dogPhoto) return <p>Loading...</p>;

  return <img src={dogPhoto} alt="A Random Dog" />;
}

export default App;