import { GrRun } from "react-icons/gr";
import "../../../Styles/Pages/Home/PersonalBest/PersonalBest.scss";
const PersonalBest = () => {
  return (
    <div className="personal-best">
      <h3 className="title">Personal Bests</h3>
      <div className="bests-item">
        <div className="best-item-1">
          <p>Fastet 5K Run: 22 min</p>
          <GrRun className="best-item-icon" />
        </div>
        <div className="best-item-2">
          <p>Longest Distance Cycling: 4 miles</p>
          <img
            src="https://t4.ftcdn.net/jpg/03/41/67/47/360_F_341674745_W52Z6MTggNilG6TMeLfLisFvCdLVuj7H.jpg"
            alt=""
          />
        </div>
        <div className="best-item-2">
          <p>Longest Distance Cycling: 4 miles</p>
          <img
            src="https://t4.ftcdn.net/jpg/03/41/67/47/360_F_341674745_W52Z6MTggNilG6TMeLfLisFvCdLVuj7H.jpg"
            alt=""
          />
        </div>
        <div className="best-item-2">
          <p>Longest Roller-Skating: 2 hours</p>
          <img
            src="https://t4.ftcdn.net/jpg/03/41/67/47/360_F_341674745_W52Z6MTggNilG6TMeLfLisFvCdLVuj7H.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalBest;
