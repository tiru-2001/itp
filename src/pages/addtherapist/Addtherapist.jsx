import "./addtherapist.scss";
import configuredUrl from "../../utils/request/request";
import { toast } from "react-toastify";
import { useRef } from "react";
const Addtherapist = () => {
  const formRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const description = formData.get("desc");
    const location = formData.get("loc");
    const number = formData.get("number");
    const languages = Array.from(formData.getAll("language"));
    try {
      const { data } = await configuredUrl.post("/therapist/add-therapist", {
        name,
        description,
        location,
        number,
        languages,
      });
      if (data.success) {
        toast.success(data.message);
        formRef.current.reset();
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <section className="add-therapist-container">
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter name" />
        <input type="text" name="desc" placeholder="Enter the description" />
        <input type="text" name="loc" placeholder="Enter the location" />
        <input type="number" name="num" placeholder="Enter the number" />
        <section className="language_section">
          <h4>language:</h4>
          <section>
            <label>
              Hindi:
              <input name="language" value="hindi" type="checkbox" />
            </label>
            <label>
              English
              <input name="language" value="english" type="checkbox" />
            </label>
            <label>
              Kannada:
              <input name="language" value="kannada" type="checkbox" />
            </label>
          </section>
        </section>
        <button>submit</button>
      </form>
    </section>
  );
};

export default Addtherapist;
