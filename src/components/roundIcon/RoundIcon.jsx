import "./roundicon.scss";
const RoundIcon = ({ bg, icn }) => {
  console.log(icn);
  return (
    <div className="roundicon_container" style={{ background: ` var(${bg})` }}>
      {icn}
    </div>
  );
};

export default RoundIcon;
