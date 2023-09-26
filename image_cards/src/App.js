import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";


function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedBeers, setSearchedBeers] = useState([]);
  const [found, setfound] = useState('')
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.punkapi.com/v2/beers");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter images based on searchQuery if it's not empty
    if (searchQuery.trim() !== "") {
      const filteredBeers = images.filter((img) =>
        img.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchedBeers(filteredBeers);
      filteredBeers.length>0 && setfound("Not Found")
    } else {
      setSearchedBeers([]); // Clear the search results if searchQuery is empty
      
    }
  }, [searchQuery, images]);

  return (
    <div className="App">
      <div className="search">
        <label >Search Beer</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
        {searchedBeers.length > 0 ? (
          <Cards images={searchedBeers} />
        ) : (
          <div>{found}</div>
        )}
      
      <Cards images={images} />
    </div>
  );
}

export default App;
