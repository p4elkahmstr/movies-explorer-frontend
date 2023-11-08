import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const Card = [
  {
    image:
      "https://images.unsplash.com/photo-1682687981907-170c006e3744?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "33 слова о дизайне",
    duration: "1ч 17м",
  },
  {
    image:
      "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "33 слова о дизайне",
    duration: "1ч 17м",
  },
  {
    image:
      "https://images.unsplash.com/photo-1698094276096-05782e47238a?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "33 слова о дизайне",
    duration: "1ч 17м",
  },
  {
    image:
      "https://images.unsplash.com/photo-1698162940489-f8fa0c76ddd6?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "33 слова о дизайне",
    duration: "1ч 17м",
  },
  {
    image:
      "https://images.unsplash.com/photo-1682687220777-2c60708d6889?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "33 слова о дизайне",
    duration: "1ч 17м",
  },
  {
    image:
      "https://images.unsplash.com/photo-1698325650945-d957745b30d1?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "33 слова о дизайне",
    duration: "1ч 17м",
  },
  {
    image:
      "https://images.unsplash.com/photo-1682687220198-88e9bdea9931?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "33 слова о дизайне",
    duration: "1ч 17м",
  },
  {
    image:
      "https://images.unsplash.com/photo-1698611227506-b01ec7158cb8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "33 слова о дизайне",
    duration: "1ч 17м",
  },
  {
    image:
      "https://images.unsplash.com/photo-1682695798522-6e208131916d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "33 слова о дизайне",
    duration: "1ч 17м",
  },
  {
    image:
      "https://images.unsplash.com/photo-1698674913743-88148adc7b26?auto=format&fit=crop&q=80&w=1856&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "33 слова о дизайне",
    duration: "1ч 17м",
  },
  {
    image:
      "https://images.unsplash.com/photo-1682685796965-9814afcbff55?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "33 слова о дизайне",
    duration: "1ч 17м",
  },
  {
    image:
      "https://images.unsplash.com/photo-1698398755662-3a634390dec0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "33 слова о дизайне",
    duration: "1ч 17м",
  },
];

const MoviesCardList = () => {
  return (
    <div className="movies-card-list">
      {Card.map((el, index) => (
        <MoviesCard
          image={el.image}
          title={el.title}
          duration={el.duration}
          key={index}
        />
      ))}
    </div>
  );
};

export default MoviesCardList;
