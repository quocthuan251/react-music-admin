import { notification } from 'antd'

export const openNotificationWithIcon = (type, message, duration) => {
  notification[type]({
    message: type === 'error' ? 'Failure' : 'Success',
    duration,
  })
}
