import MobileWrapper from "../components/MobileWrapper";
import profileImg from "../assets/images/Ellipse 114.png";

const Account = () => {
  return (
    <MobileWrapper>
      <div className="account">

        {/* TITLE */}
        <div className="account-header">
            <h2>Account Settings</h2>
        </div>


        {/* PROFILE */}
        <div className="account-profile">
          <div className="profile-image-wrapper">
            <img src={profileImg} alt="profile" />
            <span className="camera-badge"></span>
          </div>

          <div className="profile-info">
            <h3>Marry Doe</h3>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="account-desc">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>

        <hr className="account-divider" />

      </div>
    </MobileWrapper>
  );
};

export default Account;
