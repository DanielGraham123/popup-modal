import * as React from 'react';
import './index.css';

interface PopupModalProps {
  children: React.ReactNode;
  handleClose: () => void;
}

export const PopupModal = ({ children, handleClose }: PopupModalProps) => {
  return (
    <>
      <div className="popup-box ">
        <div className="box blowup">
          <span className="close-icon" onClick={handleClose}>
            x
          </span>
          {children}
        </div>
      </div>
    </>
  );
};
