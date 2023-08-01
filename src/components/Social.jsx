import React from "react";
import { data } from "../data/data";

export default function Social() {
  return (
    <>
      <div className="social">
      <>
      
        {data.social.map((val, index) => (
          <>
            {val.name} <br />
            {val.url} <br />
          </>
        ))}
      </>
      </div >
    </>
  );
}
