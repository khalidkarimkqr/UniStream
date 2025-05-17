import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { toast } from "react-hot-toast";
import axios from "axios";

const Room = () => {
  const { roomId } = useParams();
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  const endLive = async () => {
    try {
      const res = await axios.put(
        import.meta.env.VITE_API_URL + `/end-event/${roomId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await res.data;
      if (data.success) {
        navigate("/dashboard");
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

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

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: {
          role,
        },
      },
      liveNotStartedTextForAudience:
        "Event not started yet, please wait for the host to start the event",
      onLeaveRoom: (userList) => {
        if (user.role === "admin") {
          endLive();
          return;
        } else {
          navigate("/dashboard");
        }
      },
    });
  };

  return <div>Room</div>;
};

export default Room;
