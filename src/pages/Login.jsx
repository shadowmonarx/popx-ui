import MobileWrapper from "../components/MobileWrapper";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  return (
    <MobileWrapper>
      <div className="auth">

        {/* 🔥 TEXT BLOCK ONLY */}
        <div className="auth-header">
          <h1>Signin to your PopX account</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        {/* FORM SHOULD NOT MOVE */}
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter email address"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
        />

        <Button disabled to="/account">Login</Button>

      </div>
    </MobileWrapper>
  );
};

export default Login;
