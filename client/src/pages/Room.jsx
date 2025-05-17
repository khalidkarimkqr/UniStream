import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomId } = useParams();
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  const joinRoom = (element) => {
    const appId = Number(import.meta.env.VITE_ZEGOCLOUD_APP_ID);
    const serverSecret = import.meta.env.VITE_ZEGOCLOUD_SERVER_SECRET;

    const userId = user._id;
    const userName = user.firstname + " " + user.lastname;
    let role =
      user.role === "admin"
        ? ZegoUIKitPrebuilt.Host
        : ZegoUIKitPrebuilt.Audience;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      userId,
      userName
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);
  };

  return <div>Room</div>;
};

export default Room;
