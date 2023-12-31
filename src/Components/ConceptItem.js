const ConceptItem = (props) => {
  return (
    <div>
      <ul id="concepts">
        <li className="concept">
          <img src={props.image} alt={props.title} />
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
        </li>
      </ul>
    </div>
  );
};

export default ConceptItem;
