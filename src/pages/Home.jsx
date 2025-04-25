import { useState } from "react";
import { BelmondawgService } from "./../belmondawg.service.js";

function Home() {
  const [randomString, setRandomString] = useState(
    BelmondawgService.generate()
  );
  return (
    <>
      <h1>{randomString}</h1>
      <div className="card">
        <button onClick={() => setRandomString(BelmondawgService.generate())}>
          GENERUJ
        </button>
        <button onClick={() => setRandomString(BelmondawgService.randomOG())}>
          LOSUJ OG
        </button>
        <p></p>
      </div>
      <p className="read-the-docs">Poradzimy sobie w inny sposób</p>
    </>
  );
}

export default Home;
