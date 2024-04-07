import "./home.scss";
import {
  flexibleTreatment,
  services,
  right_content1,
  homeCarouselData,
  right_content2,
} from "../../utils/homepageUtils";
import lady from "../../assets/images/lady.png";
import { FaPhoneAlt, IoVideocam } from "../../assets/icons/index";
import {
  Button,
  Card,
  RoundIcon,
  RightContent,
  HomeCarousel,
} from "../../components/index";

import { psychiatrist } from "../../utils/booking";
const Home = () => {
  return (
    <section className="home_container">
      {/* section1 slider */}
      <section className="section1_container">
        <HomeCarousel carouselData={homeCarouselData} />
      </section>
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
              src="https://media.istockphoto.com/id/1649071889/photo/vulnerable-woman-shares-something-with-therapist-during-therapy-session.webp?b=1&s=170667a&w=0&k=20&c=PQACie40c4Te7q4zIT45YxV9vNO-yAi8Z5jNCWZBn08="
              alt="image"
            />
          </section>
          <section className="left_bottom_image">
            <img src="https://media.istockphoto.com/id/1488894519/photo/university-student-motions-towards-her-chest-as-she-describes-the-discomfort-she-has-been.webp?b=1&s=170667a&w=0&k=20&c=bjaAtr39WLFSNtT9pFT2-lJLsl0HFUPfjIHITW5RlF0=" />
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
      {/* section 12 */}
      <section className="section12_container">
        <section className="section12_heading">
          <h1 className="main_heading">Our Psychiatrist</h1>
          <p>
            Our team of expert psychiatrists provides unparalleled mental health
            care, delivering{" "}
          </p>
          <p>
            compassionate and effective treatment tailored to each individual's
            needs.
          </p>
        </section>
        <section className={"section12_content"}>
          {psychiatrist.map((item, ind) => (
            <Card
              key={ind}
              data={{ ...item, height: 250, width: 250, section: 3 }}
            />
          ))}
        </section>
      </section>

      {/* section 13 */}
      <section className="section13_container">
        <section className="left">
          <img src="https://media.istockphoto.com/id/1134890323/photo/woman-using-smartphone-the-concept-of-using-the-phone-is-essential-in-everyday-life.webp?b=1&s=170667a&w=0&k=20&c=Y-seAx-M62ly0f29GuKXvFYrRCVvPnl8MFwYSK5s1DU="></img>
        </section>
        <section className="right">
          <h3>
            “ If You are in Trouble Need our Help, Contact Us Immediately, We
            are Support 24/7 ”
          </h3>
          <section className="right_bottom_container">
            <Button title={"contact us"} bg={"--button-bg"} />
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
