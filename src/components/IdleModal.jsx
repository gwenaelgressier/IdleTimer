import React, { useState } from "react";
import { useIdleTimer } from "react-idle-timer";

export default function IdleModal({ handleOffIdle }) {
  const [idleModal, setIdleModal] = useState(false);

  const handleOnIdleModal = (event) => {
    setIdleModal(true);
    console.log("enter handleOnIdlemodal");
  };

  const handleOnActionModal = (event) => {
    console.log("enter handleOnActionmodal");
    handleOffIdle();
  };

  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 3,
    onIdle: handleOnIdleModal,
    onAction: handleOnActionModal,

    debounce: 500,
  });

  return <>{idleModal && <p>deconecter</p>}</>;
}
