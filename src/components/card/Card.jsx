import "./card.scss";

const Card = ({ data: { img, title, desc, height, width, section } }) => {
<<<<<<< HEAD
=======
  console.log(img, title, desc, height, width);

>>>>>>> 0879892d63fa5b732f63e4269a65f3ff971664b1
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
