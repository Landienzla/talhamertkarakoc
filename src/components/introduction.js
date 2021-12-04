import React from "react";
import Typical from "react-typical";
import { Stack } from "react-bootstrap";
export default function Introduction() {
  return (
    <div style={{ color: "white" }}>
      <Stack gap={2}>
        <Typical
          steps={["Hello", 1000, "Hello world!", 500]}
          loop={Infinity}
          wrapper="p"
        />
        <div>Text</div>
      </Stack>
    </div>
  );
}
