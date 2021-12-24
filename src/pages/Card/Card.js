import React, { useState, useEffect } from 'react';

import FetchUrl from '../../config/FetchUrl.json';

import './card.scss';

const GET_CARD_COMMENT_DATA = FetchUrl.GET_CARD_COMMENT_DATA;

export default function Card({ eachCardData, isWindowReduced }) {
  const [cardContent, setCardContent] = useState([]);
  const [inputCardContent, setInputCardContent] = useState('');

  const isValid = inputCardContent.length > 0;

  useEffect(() => {
    fetch(GET_CARD_COMMENT_DATA)
      .then(res => res.json())
      .then(data => setCardContent(data[eachCardData.id]));
  }, []);

  function handleInput(event) {
    const { value } = event.target;
    setInputCardContent(value);
  }

  function addCardContent() {
    const newContent = {
      id: cardContent.length + 1,
      content: inputCardContent,
    };
    setCardContent([...cardContent, newContent]);
    setInputCardContent('');
  }

  function enterToAdd(event) {
    event.preventDefault();
    return event.key === 'Enter' && isValid ? addCardContent() : null;
  }

  return (
    <article>
      <section className="CardArea">
        <header>{eachCardData.name}</header>
        <div className="CardInnerArea">
          <ul>
            {cardContent
              ? cardContent.map(item => <li key={item.id}>{item.content}</li>)
              : ''}
          </ul>
        </div>
        <div className="inputBox">
          <input
            type="text"
            name="inputCardContent"
            className={isWindowReduced ? 'reduce' : ''}
            value={inputCardContent}
            onChange={handleInput}
            onKeyPress={enterToAdd}
          />
          <button
            className={isWindowReduced ? 'reduce' : ''}
            onClick={addCardContent}
            disabled={!isValid}
          >
            등록
          </button>
        </div>
      </section>
    </article>
  );
}
