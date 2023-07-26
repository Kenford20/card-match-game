import { createContext, ReactNode, useContext, useState } from 'react';

const ModalContext = createContext(false);
const ModalUpdateContext = createContext(() => {});

interface Props {
  children?: ReactNode
}

export const useModal = () => {
  return useContext(ModalContext);
}

export const useToggleModal = () => {
  return useContext(ModalUpdateContext);
}

export const ModalProvider = ({ children }: Props) => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const toggleModal = () => {
    console.log('modalz', isModalOpen)
    setisModalOpen(prevState => !prevState);
  }

  return (
    <ModalContext.Provider value={isModalOpen}>
      <ModalUpdateContext.Provider value={toggleModal}>
        {children}
      </ModalUpdateContext.Provider>
    </ModalContext.Provider>
  )
}