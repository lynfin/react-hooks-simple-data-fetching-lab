import React, { useEffect, useState } from "react";

const DOGAPI = "https://dog.ceo/api/breeds/image/random";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [dogImg, setDogImg] = useState(null);

  useEffect(() => {
    fetch(DOGAPI, {})
      .then((r) => r.json())
      .then((data) => {
        setDogImg(data.message);
        setIsLoading(false);
      });
  }, []);

  const displayString = () => {
    if (isLoading) {
      return "<p>Loading...</p>";
    } else {
      return `<img src='${dogImg}' alt='A Random Dog' />`;
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImg} alt="A Random Dog"></img>
      )}
    </>
  );
}
export default App;
