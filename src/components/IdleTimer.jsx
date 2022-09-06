import React from "react";
import { useIdleTimer } from "react-idle-timer";

export default function IdleTimer() {
  const handleOnIdle = (event) => {
    alert("User is Idle", event);
    console.log("last active", getLastActiveTime());
  };

  const handleOnActive = (event) => {
    console.log("user is active", event);
    console.log("time remaining", getRemainingTime());
  };

  const handleOnAction = (event) => {
    console.log("user did something", event);
  };

  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 10,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    onAction: handleOnAction,
    debounce: 500,
  });

  return (
    <div>
      <h2 className="heading">
        Idle Timer works after 10 second, just leave the mouse & keyboard.
      </h2>
    </div>
  );
}
