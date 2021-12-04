import React, { useState, useEffect, useRef } from "react";
import { Stack, Form } from "react-bootstrap";
import axios from "axios";
import { drawContributions } from "github-contributions-canvas";

export default function Stats() {
  const [contributionData, setContributionData] = useState();
  const canvasRef = useRef(null);
  const canvas = canvasRef.current;
  useEffect(() => {
    axios
      .get("/landienzla", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((resp) => {
        setContributionData(resp.data);
        console.log(contributionData)
      })

      .catch((err) => console.log(err));
  }, []);
  if (contributionData) {
    drawContributions(canvas, {
      data: contributionData,
      username: "landienzla",
      themeName: "solarizedDark",
      footerText: "denioz bir şeyler",
    });

    contributionData.years.splice(1, contributionData.years.length - 1);
    console.log(contributionData)
  }

  return (
    <div style={{ color: "white" }}>
      <canvas ref={canvasRef} />
      <Stack gap={2}>
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs?username=landienzla&show_icons=true&locale=en&layout=compact&theme=cobalt"
          alt="most used languages"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/wakatime?username=landienzla&theme=cobalt&v=2"
          alt="wakatime"
        />
        <img
          src="https://github-readme-stats.vercel.app/api?username=landienzla&show_icons=true&locale=en&theme=cobalt"
          alt="github stats"
        />
      </Stack>
    </div>
  );
}
