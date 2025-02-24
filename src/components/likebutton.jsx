import React, { useState } from "react";

function Likebutton({ props }) {
  const [liked, setLiked] = useState(props);

  return (
    <button onClick={() => setLiked((prev) => !prev)}  className={` ${liked ? "liked" : ""}`}>
      {liked ? "Liked" : "Like"}
    </button>
  );
}

export default Likebutton;
