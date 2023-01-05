import React, { ReactNode, useContext } from "react";
import styles from "./ModalContext.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ModalContextProp = {
  setModal: (modal: ReactNode) => void;
  closeModal: () => void;
};

const ModalContext = React.createContext<ModalContextProp>({
  setModal(modal) {},
  closeModal() {},
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = React.useState<ReactNode | null>(null);

  const closeModal = React.useCallback(() => {
    setModal(null);
  }, []);

  return (
    <ModalContext.Provider value={{ setModal, closeModal }}>
      {!!modal && <div className={cx({ wrapper: true })}>{modal}</div>}
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
