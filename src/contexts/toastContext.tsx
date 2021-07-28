import React, {createContext, useReducer, useState} from "react";

interface Notifications {
  idToast: number,
  messageToast: string;
}
export const ToastContext = createContext<Notifications>({} as Notifications)

export const ToastContextProvider: React.FC = ({ children }) => {

  const [idToast, setIdToast] = useState(0)
  const [messageToast, setMessageToast] = useState('')

  return (
    <ToastContext.Provider value={{idToast, messageToast}}>
      { children }
    </ToastContext.Provider>
  )
}