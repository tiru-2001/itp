import "./rightcontent.scss";
<<<<<<< HEAD
import {
  ImManWoman,
  IoManSharp,
  MdGppGood,
  FaPeopleGroup,
} from "../../assets/icons/index";
=======
>>>>>>> 0879892d63fa5b732f63e4269a65f3ff971664b1

import { CounselingItems } from "../index";
import { Button } from "../index";
const RightContent = ({ subtitle, title, desc, content_items, btn_text }) => {
<<<<<<< HEAD
  const icon = [
    <ImManWoman />,
    <FaPeopleGroup />,
    <IoManSharp />,
    <MdGppGood />,
  ];
=======
>>>>>>> 0879892d63fa5b732f63e4269a65f3ff971664b1
  return (
    <>
      <section className="right_content">
        <section className="right_content_heading">
          <h5>Who we are</h5>
          <h2 className="sub_heading">{title}</h2>
        </section>
        <p>{desc}</p>
        <section className="counseling_types">
          {content_items.map((item, ind) => (
            <CounselingItems
              key={ind}
<<<<<<< HEAD
              icon={icon[ind]}
=======
              icon={item.icon}
>>>>>>> 0879892d63fa5b732f63e4269a65f3ff971664b1
              title={item.title}
              desc={item.desc ? item.desc : ""}
            />
          ))}
        </section>
        <Button title={btn_text} bg={"--button-bg"} />
      </section>
    </>
  );
};

export default RightContent;
