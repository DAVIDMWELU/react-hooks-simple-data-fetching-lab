// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setImage(data.message);
      } catch (error) {
        console.error("Error fetching image:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Random Dog</h1>
      {loading ? <p>Loading...</p> : <img src={image} alt="A Random Dog" />}
    </div>
  );
}

export default App;
