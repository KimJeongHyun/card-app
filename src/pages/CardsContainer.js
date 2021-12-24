import React, { useState, useEffect } from 'react';
import FetchUrl from '../config/FetchUrl.json';

import Card from './Card/Card';

import './cardContainer.scss';

const GET_CARD_DATA = FetchUrl.GET_CARD_DATA;

export default function CardContainer() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch(GET_CARD_DATA)
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);

  return (
    <main>
      <div className="CardsContainer">
        {cards.map((item, index) => (
          <Card key={index} eachCardData={item} />
        ))}
      </div>
    </main>
  );
}
