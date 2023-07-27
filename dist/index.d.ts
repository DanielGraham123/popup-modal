import * as React from 'react';
import './index.css';
interface PopupModalProps {
    children: React.ReactNode;
    handleClose: () => void;
}
export declare const PopupModal: ({ children, handleClose }: PopupModalProps) => React.JSX.Element;
export {};
