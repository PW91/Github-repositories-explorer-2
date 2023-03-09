import { useToasts } from 'react-toast-notifications'

interface NotificationType {
  msg: string
  type: 'success' | 'error'
}

const useNotification = () => {
  const { addToast } = useToasts()

  return ({ msg, type }: NotificationType) => {
    addToast(msg, {
      appearance: type,
      autoDismiss: true
    })
  }
}

export default useNotification
