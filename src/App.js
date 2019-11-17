import React from "react";

function Food({ favorite }) {
  // props
  console.log(favorite); //props.fav도 다른 방법이다.
  return <h1>I love {favorite}</h1>; //아래 Food component에서 정한 prop를 Food함수에서 가져와 return할 때 {fav}를 통해 사용가능.
}

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      {/* Food함수를 총네번 각각 호출한다 */}
      <Food favorite="kimchi" />
      <Food favorite="ramen" />
      <Food favorite="noodle" />
      <Food favorite="pizza" />
    </div>
  );
}

export default App;
