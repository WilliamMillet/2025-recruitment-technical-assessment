import { useState } from "react";
import formatNumAndPluralisedNoun from "../../utils/formatNumAndPluralisedNoun";

const RoomGridViewCard = ({ roomData }) => {

  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const darkMode = JSON.parse(localStorage.getItem("darkMode")) || false

  // Decide what colour the available room number status should be

  let roomStatusColor;

  if (roomData.rooms_available === 0) {
    roomStatusColor = "#ff3b3b";
  } else if (roomData.rooms_available < 5) {
    roomStatusColor = "#ff903b";
  } else {
    roomStatusColor = "#3bff72";
  }

  return (
    <section
      className="room-grid-view-card"
      style={{
        backgroundColor: imageLoading ? "#ef6c00" : "transparent",
        backgroundImage: imageLoading
          ? "none"
          : `url(/assets/${roomData.building_picture})`
      }}
    >
        {/* Hidden image that is used to determine when the background image has loaded */}
      <img
        src={`/assets/${roomData.building_picture}`}
        alt={roomData.name}
        onLoad={handleImageLoad}
        style={{ display: "none" }}
      />
      <div className="rooms-available-indicator-container">
        <span
          className="room-status-color-indicator"
          style={{
            backgroundColor: roomStatusColor,
          }}
        ></span>
        <span>
          {formatNumAndPluralisedNoun(roomData.rooms_available, "room")}{" "}
          available
        </span>
      </div>
      <p className="room-name-span">{roomData.name}</p>
    </section>
  );
};

export default RoomGridViewCard;
