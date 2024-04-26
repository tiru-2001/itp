import "./therapist.scss";
import { doctorCard } from "../../utils/booking/index";
import { Category, DoctorCard } from "../../components";
const Therapist = () => {
  return (
    <section className="doctors_container">
      <section className="top1">
        <Category />
      </section>
      <section className="bottom">
        {doctorCard.map((item, ind) => (
          <DoctorCard item={item} key={ind} />
        ))}
      </section>
    </section>
  );
};

export default Therapist;
