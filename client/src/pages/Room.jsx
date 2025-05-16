import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

const Room = () => {
  const { roomId } = useParams();
  const { user } = useContext(AppContext);
  return <div>Room</div>;
};

export default Room;
