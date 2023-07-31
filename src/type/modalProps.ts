import { ReactNode } from "react";
export type ModalProps = {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  children: ReactNode;
};
