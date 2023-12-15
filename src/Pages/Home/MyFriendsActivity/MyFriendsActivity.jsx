import { FaBell, FaCommentAlt } from "react-icons/fa";
import "../../../Styles/Pages/Home/MyFriendsActivity/MyFriendsActivity.scss";
const MyFriendsActivity = () => {
  return (
    <div className="my-friends-activity">
      {/* User */}
      <div className="user">
        <FaBell />
        <FaCommentAlt />
        <p>Kelsey Miller</p>
        <div className="user-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpmOOOrTwUFkWYXbPwheXq5ne6YQJtId61clP9L02vMIicdT9Ff9qMtIyN-9ZeXtAhzU&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      {/* Monitor */}
      <div className="monitor">
        <p className="title">Active Calories</p>
        <div className="progress">
          <div className="progress-bar">
            <p className="percentage">85%</p>
          </div>
          <div className="progress-content">
            <p>Today: 400</p>
            <p>THis Week: 3500</p>
            <p>This Month: 1400</p>
          </div>
        </div>
      </div>
      {/* Firends Activity */}
      <div className="friends-activity">
        <p className="title">Friends Activity</p>
        {/* Activity Item */}
        <div className="blog-item">
          <div className="author">
            <div className="author-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpmOOOrTwUFkWYXbPwheXq5ne6YQJtId61clP9L02vMIicdT9Ff9qMtIyN-9ZeXtAhzU&usqp=CAU"
                alt=""
              />
            </div>
            <div className="author-name">Jane</div>
          </div>
          <div className="image">
            <img
              src="https://www.shutterstock.com/image-photo/child-safety-helmet-riding-bike-600nw-2290762723.jpg"
              alt=""
            />
            <p>We completed the 30-Day Running Streak Challenge</p>
          </div>
        </div>
        {/* Activity Item */}
        <div className="blog-item">
          <div className="author">
            <div className="author-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpmOOOrTwUFkWYXbPwheXq5ne6YQJtId61clP9L02vMIicdT9Ff9qMtIyN-9ZeXtAhzU&usqp=CAU"
                alt=""
              />
            </div>
            <div className="author-name">Jane</div>
          </div>
          <div className="image">
            <img
              src="https://www.shutterstock.com/image-photo/child-safety-helmet-riding-bike-600nw-2290762723.jpg"
              alt=""
            />
            <p>We completed the 30-Day Running Streak Challenge</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFriendsActivity;
