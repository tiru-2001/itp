import "./roundicon.scss";
const RoundIcon = ({ bg, icn }) => {
<<<<<<< HEAD
  return (
    <div
      className="roundicon_container"
      style={{
        background: ` var(${bg})`,
        fontSize: "1.5rem",
      }}
    >
=======
  console.log(icn);
  return (
    <div className="roundicon_container" style={{ background: ` var(${bg})` }}>
>>>>>>> 0879892d63fa5b732f63e4269a65f3ff971664b1
      {icn}
    </div>
  );
};

export default RoundIcon;
