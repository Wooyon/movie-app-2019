import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG",
    rating: 4
  },
  {
    id: 2,
    name: "ramen",
    image:
      "https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG",
    rating: 4.3
  },
  {
    id: 3,
    name: "donkas",
    image:
      "https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG",
    rating: 4.9
  },
  {
    id: 4,
    name: "kimbab",
    image:
      "https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG",
    rating: 4.5
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I love {name}</h2>
      <h2>👍{rating}/5.0</h2>
      <img src={picture} alt={name}></img>
    </div>
  );
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        ></Food>
      ))}
    </div>
  );
}

export default App;
