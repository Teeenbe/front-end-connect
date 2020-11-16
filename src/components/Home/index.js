import React from "react";
import Image1 from "./Image1";
import Image2 from "./Image2";
import Image3 from "./Image3";

function Home() {
  return (
    <div>
      <div className="Support">
        <Image3 />
        <Image1 />
        <Image2 />
        <p>
          Support and guide bootcampers at the start of their coding journey.
        </p>
      </div>
      <a className="Mentor" href="../profiles">
        Become a SOC mentor!
      </a>
    </div>
  );
}

export default Home;
