import "./card.scss";
const Card = ({ data: { img, title, desc, height, width, section } }) => {
  console.log(img, title, desc, height, width);

  return (
    <>
      <section className={"card_container"}>
        {section == 2 ? (
          <>
            {" "}
            <section className="img_section">
              <img
                src={img}
                style={{ height: `${height}px`, width: `${width}px` }}
                alt={title}
              />
            </section>
          </>
        ) : (
          <>
            {" "}
            <img
              src={img}
              style={{ height: `${height}px`, width: `${width}px` }}
              alt={title}
            />
          </>
        )}
        <h2>{title}</h2>
        <p>{desc}</p>
      </section>
    </>
  );
};

export default Card;
