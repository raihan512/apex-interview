import "../../../Styles/Pages/Home/PopularActivities/PopularActivities.scss";
const PopularActivities = () => {
  const galleryItems = [
    {
      id: 1,
      img: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/drew.internetconsult.com/images/2023/3/18/SPerera.jpg",
      title: "Tennis",
    },
    {
      id: 2,
      img: "https://www.shutterstock.com/image-photo/child-safety-helmet-riding-bike-600nw-2290762723.jpg",
      title: "Cycling",
    },

    {
      id: 3,
      img: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/Runner-training-on-running-track-1296x728-header-1296x728.jpg?w=1155&h=1528",
      title: "Running",
    },
    {
      id: 4,
      img: "https://images.theconversation.com/files/405661/original/file-20210610-18-imwshy.jpg?ixlib=rb-1.1.0&rect=0%2C633%2C4486%2C2243&q=45&auto=format&w=1356&h=668&fit=crop",
      title: "Hiking",
    },
    {
      id: 5,
      img: "https://akm-img-a-in.tosshub.com/indiatoday/sunsetyoga-2_647_062115121022.jpg?size=690:388",
      title: "Yoga",
    },
    {
      id: 6,
      img: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_md_2x/f_auto/primary/piultz6nngltq541xmju",
      title: "Swimming",
    },
  ];
  return (
    <div className="popular-activities">
      <h2 className="title">Popular Activities</h2>
      {/* Gallery */}
      <div className="gallery">
        {galleryItems.map((galleryItem) => (
          <div
            key={galleryItem.id}
            className="gallery-item"
            style={{
              backgroundImage: `URL(${galleryItem.img})`,
            }}
          >
            <div className="gallery-overlay">
              <p className="gallery-text">{galleryItem.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularActivities;
