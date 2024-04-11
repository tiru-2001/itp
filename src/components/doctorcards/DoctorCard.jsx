import { Link } from "react-router-dom";
import "./doctor.scss";
import { FaLocationDot } from "react-icons/fa6";
const DoctorCard = ({ item }) => {
  return (
    <section className="doctor_card">
      <section className="card_image">
        <img src={item.img} />
      </section>
      <section className="card_content">
        <section className="card_heading">
          <h5>{item.name}</h5>
          <p>{item.desc}</p>
        </section>
        <section className="card_middle">
          {/* {stars} */}
          <section className="card_location">
            <FaLocationDot />
            <p>{item.loc}</p>
          </section>
        </section>
        <section className="card_bottom">
          <p>Language: {item.lang}</p>
          <p>{item.experience} Experience</p>
        </section>
        <Link className="link" to="/private/booking">
          Book Now
        </Link>
      </section>
    </section>
  );
};

export default DoctorCard;
