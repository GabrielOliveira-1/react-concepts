import HeaderItem from "./HeaderItem";

const Headers = (props) => {
  return (
    <div>
      <HeaderItem
        image={props.header[0].image}
        title={props.header[0].title}
        desc={props.header[0].description}
      ></HeaderItem>
    </div>
  );
};

export default Headers;
