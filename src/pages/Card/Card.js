import './card.scss';
export default function Card({ eachCardData }) {
  return (
    <article>
      <section className="CardArea">
        <header>{eachCardData.name}</header>
        <div className="CardInnerArea">
          <ul>
            <li>asdf</li>
            <li>asdf</li>
            <li>asdf</li>
            <li>asdf</li>
            <li>asdf</li>
            <li>asdf</li>
            <li>asdf</li>
            <li>asdf</li>
            <li>asdf</li>
            <li>asdf</li>
            <li>asdf</li>
            <li>asdf</li>
          </ul>
        </div>
        <div className="inputBox">
          <input type="text" />
          <button>등록</button>
        </div>
      </section>
    </article>
  );
}
