import ChangePassword from "../ChangePassword/ChangePassword";
import ChangeUsername from "../ChangeUsername/ChangeUsername";
import "./editProfile.css";

const EditProfile = () => {
  return (
    <div className="edit-profile">
      <h3 className="edit-profile__title">Edit your profile:</h3>
      <div className="edit-wrapper">
        <ChangeUsername />
        <ChangePassword />
      </div>
    </div>
  );
};

export default EditProfile;
