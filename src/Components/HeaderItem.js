const HeaderItem = (props) => {
  return (
    <div>
      <header>
        <img src={props.image} alt={props.title} />
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </header>
    </div>
  );
};

export default HeaderItem;
