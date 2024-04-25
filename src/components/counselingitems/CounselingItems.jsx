import RoundIcon from "../roundIcon/RoundIcon";
import "./counseling.scss";
const CounselingItems = ({ icon, title, desc }) => {
<<<<<<< HEAD
=======
  console.log(icon);
>>>>>>> 0879892d63fa5b732f63e4269a65f3ff971664b1
  return (
    <section className="counseling_container">
      <RoundIcon icn={icon} bg={"--icon-bg"} />
      <section>
        <h1>{title}</h1>
        {desc ? <p>{desc}</p> : <></>}
      </section>
    </section>
  );
};

export default CounselingItems;
