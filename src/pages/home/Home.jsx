import "./home.scss";
import {
  flexibleTreatment,
  services,
  right_content1,
  right_content2,
} from "../../utils/homepageUtils";
import lady from "../../assets/images/lady.png";
import { FaPhoneAlt, IoVideocam } from "../../assets/icons/index";
import { Button, Card, RoundIcon, RightContent } from "../../components/index";

const Home = () => {
  return (
    <section className="home_container">
      {/* section3  */}
      <section className="section3_container">
        <h1 className="main_heading">
          A flexible treatment of <br /> Psychologists
        </h1>
        <section className={"section3_content"}>
          {flexibleTreatment.map((item, ind) => (
            <Card
              key={ind}
              data={{ ...item, height: 250, width: 250, section: 2 }}
            />
          ))}
        </section>
      </section>

      {/*section 5 starts */}
      <section className="section5_container">
        <section className="section5_heading">
          <h1 className="main_heading">What I Can Offer</h1>
          <p>I Can Help You in Defferent Situations</p>
        </section>
        <section className={"section5_content"}>
          {services.map((item, ind) => (
            <Card
              key={ind}
              data={{ ...item, height: 100, width: 100, section: 3 }}
            />
          ))}
        </section>
      </section>

      {/* section 9  */}
      <section className="section9_container">
        <section className="left">
          <section className="left_content">
            <section className="left_heading">
              <h1 className="main_heading">Hello,</h1>
              <h5>Expert Clinical Psychologist</h5>
            </section>
            <section className="left_desc">
              <p>
                We understand the challenges individuals face in seeking
                therapy, from busy schedules to stigma surrounding mental
                health.Whether you're struggling with anxiety, depression,
                relationship issues, or simply need someone to talk to, our
                diverse team of therapists is here to help. Through our
                user-friendly interface, you can easily browse therapist
                profiles, schedule appointments, and engage in confidential
                video or text-based sessions.
              </p>
            </section>
            <section className="left_bottom_container">
              <section className="left_videoicon"></section>
              <RoundIcon icn={<IoVideocam />} bg={" --icon-bg"} />

              <h5>Get 15-Minutes Complimentary Zoom or Skype session</h5>
            </section>
          </section>
        </section>

        <img src={lady} alt="lady" />
      </section>

      {/* section10  */}
      <section className="section10_container">
        <section className="left">
          <section className="left_top_image">
            <img
              src="https://images.pexels.com/photos/5234582/pexels-photo-5234582.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image"
            />
          </section>
          <section className="left_bottom_image">
            <img
              src="https://images.pexels.com/photos/4098368/pexels-photo-4098368.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image"
            />
          </section>
        </section>
        <section className="right">
          <RightContent {...right_content1} />
        </section>
      </section>

      {/* section 11 starts  */}
      <section className="section11_container">
        <section className="left">
          <h2 className="sub_heading">We are Always Ready For A Challenge</h2>
          <p>
            Best in class psychiatric therapy conducted in traditional and the
            most advanced methods
          </p>
          <Button title={"Getting Started"} bg={"--button-bg"} />
        </section>
        <section className="right">
          <section className="right_content">
            <section>
              <h1>25</h1>
              <p>Years Of Experience</p>
            </section>
            <section>
              <h1>12</h1>
              <p>Qualified Doctors</p>
            </section>
            <section>
              <h1>2950</h1>
              <p>Happy Patients</p>
            </section>
            <section>
              <h1>75</h1>
              <p>All branches</p>
            </section>
          </section>
        </section>
      </section>
      {/* section 13 */}
      <section className="section13_container">
        <section className="left">
          <img src="https://plus.unsplash.com/premium_photo-1666299354044-88f3cf948713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHRhbGtpbmclMjBpbiUyMHBob25lfGVufDB8fDB8fHww" />
        </section>
        <section className="right">
          <h3>
            “ If You are in Trouble Need our Help, Contact Us Immediately, We
            are Support 24/7 ”
          </h3>
          <section className="right_bottom_container">
            <Button title={"contact Us"} bg={"--button-bg"} />
            <section className="contact_details">
              <RoundIcon icn={<FaPhoneAlt />} bg={" --icon-bg"} />
              <section className="contact_content">
                <p className="dial">Dial Now</p>
                <a href="tel: +91 9384838353"> 9384838353</a>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Home;
