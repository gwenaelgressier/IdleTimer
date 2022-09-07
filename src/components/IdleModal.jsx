import React, { useState } from "react";
import { useIdleTimer } from "react-idle-timer";
import { Modal } from "react-bootstrap";

export default function IdleModal({ handleOffIdle, idle }) {
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

  return (
    <>
      <Modal className="doctor" show={idle} onHide={handleOffIdle} size="xl">
        <Modal.Header>
          <div className="report-header">
            <div>
              <p>Signaler un problème</p>
            </div>
            <svg
              alt="cross"
              //onClick={handleReport}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.94 2L2 10.94M2 2L10.94 10.94"
                stroke="#11886c"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Modal.Header>
        <Modal.Body>
          <p>vous aller etre deco dans 10sec</p>
        </Modal.Body>
      </Modal>
      {idleModal && <p>deconecter</p>}
    </>
  );
}
