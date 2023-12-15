import MyFriendsActivity from "./MyFriendsActivity/MyFriendsActivity";
import PersonalBest from "./PersonalBest/PersonalBest";
import PopularActivities from "./PopularActivities/PopularActivities";
import WeeklySchedule from "./WeeklySchedule/WeeklySchedule";
import "../../Styles/Pages/Home/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <PopularActivities></PopularActivities>
        <WeeklySchedule></WeeklySchedule>
        <PersonalBest></PersonalBest>
      </div>
      <div className="home-right">
        <MyFriendsActivity></MyFriendsActivity>
      </div>
    </div>
  );
};

export default Home;
