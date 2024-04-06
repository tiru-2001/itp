import "./rightcontent.scss";

import { CounselingItems } from "../index";
import { Button } from "../index";
const RightContent = ({ subtitle, title, desc, content_items, btn_text }) => {
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
              icon={item.icon}
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
