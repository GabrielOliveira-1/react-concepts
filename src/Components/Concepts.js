import ConceptItem from "./ConceptItem";

const Concepts = (props) => {
  return (
    <div>
      <ConceptItem
        image={props.concept[0].image}
        title={props.concept[0].title}
        desc={props.concept[0].description}
      />
      <ConceptItem
        image={props.concept[1].image}
        title={props.concept[1].title}
        desc={props.concept[1].description}
      />
      <ConceptItem
        image={props.concept[2].image}
        title={props.concept[2].title}
        desc={props.concept[2].description}
      />
    </div>
  );
};

export default Concepts;
