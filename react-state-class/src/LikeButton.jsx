import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [count, setCount] = useState(0);
  let toggleLiked = () => {
    console.log("we are going to toggle");
    setIsLiked(!isLiked);
    setCount(count + 1);
  };

  let likeStyle = { color: "red" };

  return (
    <div>
      <p>clicks = {count}</p>
      <p onClick={toggleLiked}>
        {isLiked ? (
          <i class="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
          <i class="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
