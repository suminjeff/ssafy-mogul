import React from "react";

function ReviewCard({title, content, rating}) {
  return (
    <div style={{
      width: "200px",
      height: "200px",
      backgroundColor: "black",
    }}>
      <h1>{ title }</h1>
      <p>{ content }</p>
      <p>{ rating }</p>
    </div>
  )
}