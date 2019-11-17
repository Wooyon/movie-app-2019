import React from "react";

function Food({ name, picture }) {
  // props

  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "kimchi",
    image:
      "https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG"
  },
  {
    name: "ramen",
    image:
      "https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG"
  },
  {
    name: "donkas",
    image:
      "https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG"
  },
  {
    name: "kimbab",
    image:
      "https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG"
  }
];

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      {/* dish는 foodILkie배열의 각각item이고 => 까지의 해석은 dish라는 각각의 아이템에 함수를 적용해서 사용해준다 라는 의미.*/}
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
