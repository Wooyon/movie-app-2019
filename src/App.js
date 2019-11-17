import React from "react";

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG"
  },
  {
    id: 2,
    name: "ramen",
    image:
      "https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG"
  },
  {
    id: 3,
    name: "donkas",
    image:
      "https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG"
  },
  {
    id: 4,
    name: "kimbab",
    image:
      "https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG"
  }
];

function Food({ name, picture }) {
  // props

  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {/* dish는 foodILkie배열의 각각item이고 => 까지의 해석은 dish라는 각각의 아이템에 함수를 적용해서 사용해준다 라는 의미.*/}
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
      {/*  위는 renderFood라는함수를 호출해서 foodILike의 각각 object에 적용시킴*/}
    </div>
  );
}

export default App;
