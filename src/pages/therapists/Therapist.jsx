import "./therapist.scss";
import { doctorCard } from "../../utils/booking/index";
import { DoctorCard } from "../../components";
const Therapist = () => {
  return (
    <section className="doctors_container">
      {doctorCard.map((item, ind) => (
        <DoctorCard item={item} key={ind} />
      ))}
    </section>
  );
};

export default Therapist;
