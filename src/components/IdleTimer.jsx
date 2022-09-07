import React, { useState } from "react";
import { useIdleTimer } from "react-idle-timer";
import IdleModal from "./IdleModal";

export default function IdleTimer() {
  const [idle, setIdle] = useState(false);

  const handleOnIdle = () => {
    // alert("User is Idle", event);
    setIdle(true);
    // console.log("last active", getLastActiveTime());
  };

  const handleOffIdle = () => {
    // alert("User is Idle", event);
    setIdle(false);
    // console.log("last active", getLastActiveTime());
  };
  /*
  const handleOnActive = (event) => {
    console.log("user is active", event);
    console.log("time remaining", getRemainingTime());
  };

  const handleOnAction = (event) => {
    console.log("user did something", event);
  };
*/
  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 2,
    onIdle: handleOnIdle,
    //onActive: handleOnActive,
    //onAction: handleOnAction,
    debounce: 500,
  });

  return (
    <div>
      <h2 className="heading">
        Idle Timer works after 10 second, just leave the mouse & keyboard.
      </h2>
      {idle && (
        <>
          <p>vous allez etre deco dans 10sec</p>
          <IdleModal idle={idle} handleOffIdle={handleOffIdle} />
        </>
      )}
    </div>
  );
}
