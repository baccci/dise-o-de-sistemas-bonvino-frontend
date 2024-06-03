import React from 'react'

export const useAlert = (show?: boolean, hideFunction?: () => void) => {
  const [showAlert, setShowAlert] = React.useState(true)

  const controlledShow = show !== undefined ? show : showAlert

  const handleHideAlert = () => {
    hideFunction ? hideFunction() : setShowAlert(false)
  }

  return {
    controlledShow,
    handleHideAlert
  }
}

type AlertContextType = ReturnType<typeof useAlert>

export const AlertContext = React.createContext<AlertContextType | null>(null)

export const useAlertContext = () => {
  const context = React.useContext(AlertContext)
  if (!context) {
    throw new Error('useAlertContext must be used within a AlertProvider')
  }
  return context
}