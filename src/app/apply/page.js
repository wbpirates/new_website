import ApplyForm from "../../../components/Apply/Form";

const { default: Footer } = require("../../../components/Footer/Footer");
const { default: Navbar } = require("../../../components/Navbar/Navbar");
const { API_HOST } = require("../../../configs/api.config");
import "./style.css"
const page = () => {
  return (
    <div>
      <Navbar host={API_HOST} />
      <div>
        <div className="title-text">Apply Now</div>
        <ApplyForm />
      </div>
      <Footer host={API_HOST} />
    </div>
  );
};

export default page;