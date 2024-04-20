function Printhello() {
  console.log("hello world!");
}

function handleClick() {
  console.log("Bye");
}

function handleDblClick() {
  console.log("you double click");
}

export default function Buttom() {
  return (
    <div>
      <button onClick={Printhello}>click me!</button>
      <p onMouseOver={handleClick}>
        There are countless ways to earn money, depending on your skills,
        interests, resources, and opportunities available to you. Here are some
        common methods:
      </p>
      <button onDoubleClick={handleDblClick}>Doble click on me!</button>
    </div>
  );
}
