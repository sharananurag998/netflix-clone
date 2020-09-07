import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request.data.results);
    }
    fetchData();
  });

  return (
    <header>
      {/* Background image */}
      {/* title */}
      {/* 2 buttons */}
      {/* description */}
    </header>
  );
}

export default Banner;
