import { useState, useEffect } from "react";

export default function Joker() {
  let [joke, setJOke] = useState({});
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    let response = await fetch(URL);
    let JsonResponse = await response.json();
    console.log(JsonResponse);
    setJOke({ setup: JsonResponse.setup, punchline: JsonResponse.punchline });
  };
  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(URL);
      let JsonResponse = await response.json();
      console.log(JsonResponse);
      setJOke({
        setup: JsonResponse.setup,
        punchline: JsonResponse.punchline,
      });
    }
    getFirstJoke();
  }, []);

  return (
    <div>
      <h3> Joker!</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <br></br>
      <button onClick={getNewJoke}> new joke 1</button>
    </div>
  );
}
