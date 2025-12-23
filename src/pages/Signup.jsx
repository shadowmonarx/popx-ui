import MobileWrapper from "../components/MobileWrapper";
import Input from "../components/Input";
import Button from "../components/Button";

const Signup = () => {
  return (
    <MobileWrapper>
      <div className="auth signup">

        {/* HEADER */}
        <div className="auth-header">
          <h1>Create your <br /> PopX account</h1>
        </div>

        {/* FORM */}
        <div className="signup-form">
          <Input label="Full Name*" placeholder="Marry Doe" />
          <Input label="Phone number*" placeholder="Marry Doe" />
          <Input label="Email address*" placeholder="Marry Doe" />
          <Input label="Password*" placeholder="Marry Doe" />
          <Input label="Company name" placeholder="Marry Doe" />

          {/* RADIO */}
          <div className="radio-group">
            <p>Are you an Agency?*</p>
            <div className="radio-options">
              <label>
                <input type="radio" name="agency" defaultChecked />
                <span>Yes</span>
              </label>
              <label>
                <input type="radio" name="agency" />
                <span>No</span>
              </label>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="signup-cta">
          <Button to="/account">Create Account</Button>
        </div>

      </div>
    </MobileWrapper>
  );
};

export default Signup;
