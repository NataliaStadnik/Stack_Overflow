import User from "../../assets/img/man.jpg";
import ButtonSvg from "../../Shared/ButtonSvg/ButtonSvg";
import InfoElement from "../../Shared/InfoElement/InfoElement";
import Delete from "../../svg/Delete";
import Logout from "../../svg/Logout";
import "./accountInfo.css";

const accountInfo = [
  { id: 0, label: "Rating", value: 1 },
  { id: 1, label: "Snippets", value: 1 },
  { id: 2, label: "Comments", value: 0 },
  { id: 3, label: "Likes", value: 0 },
  { id: 4, label: "Dislikes", value: 0 },
  { id: 5, label: "Questions", value: 0 },
  { id: 6, label: "Correct Answers", value: 0 },
  { id: 7, label: "Regular Answers", value: 0 },
];

const AccountInfo = () => {
  return (
    <div className="infos">
      <img className="infos__img" src={User} alt="user photo" />
      <div className="identity">
        <div className="identity__top top-info">
          <span className="top-info__name">denis</span>
          <span>Id: 3</span>
          <span>Role: user</span>
        </div>
        <div className="identity__btn">
          <ButtonSvg classes="infos-btn" svg={<Logout classes="infos-svg" />} />
          <ButtonSvg classes="infos-btn" svg={<Delete classes="infos-svg" />} />
        </div>
      </div>
      <ul className="infos-list">
        {accountInfo.map((elem) => (
          <InfoElement key={elem.id} label={elem.label} value={elem.value} />
        ))}
      </ul>
    </div>
  );
};

export default AccountInfo;
