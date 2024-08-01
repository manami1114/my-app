import React from "react";

function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  const [likes, setLikes] = React.useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Likes({likes})</button>
    </div>
  );
}
function Header({ title }) {
  return <h1>{title ? `Cool ${title}` : "Default Title"}</h1>;
}
<HomePage />;
export default HomePage;
