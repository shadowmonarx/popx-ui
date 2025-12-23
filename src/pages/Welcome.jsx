import MobileWrapper from "../components/MobileWrapper";
import Button from "../components/Button";

const Welcome = () => {
  return (
    <MobileWrapper>
      <div className="welcome">
        <h1>Welcome to PopX</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="welcome-actions">
            <Button to="/signup">Create Account</Button>

            <Button to="/login" variant="secondary">
            Already Registered? Login
            </Button>

        </div>
      </div>
    </MobileWrapper>
  );
};

export default Welcome;
