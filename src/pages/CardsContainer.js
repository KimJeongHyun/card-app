import React, { useState, useEffect } from 'react';
import FetchUrl from '../config/FetchUrl.json';

import Card from './Card/Card';

import './cardContainer.scss';

const GET_CARD_DATA = FetchUrl.GET_CARD_DATA;

export default function CardContainer() {
  const [cards, setCards] = useState([]);
  const [isWindowReduced, setIsWindowReduced] = useState();

  useEffect(() => {
    fetch(GET_CARD_DATA)
      .then(res => res.json())
      .then(data => setCards(data));
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    function handleResize() {
      window.resizeTo(710, 533);
      window.innerWidth <= 710
        ? setIsWindowReduced(true)
        : setIsWindowReduced(false);
    }
  }, []);

  return (
    <main>
      <div className="CardsContainer">
        {cards.map((item, index) => (
          <Card
            key={index}
            isWindowReduced={isWindowReduced}
            eachCardData={item}
          />
        ))}
      </div>
    </main>
  );
}
