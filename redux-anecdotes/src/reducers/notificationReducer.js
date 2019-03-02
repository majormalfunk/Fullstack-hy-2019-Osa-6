const notificationAtStart = ''

export const newNotification = (content) => {
  return {
    type: 'NEW_NOTIFICATION',
    data: { content: content }
  }
}
export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION'
  }
}

const reducerNotifs = (state = notificationAtStart, action) => {
  switch (action.type) {
    case 'NEW_NOTIFICATION':
      return action.data.content
    case 'CLEAR_NOTIFICATION':
      return ''
    default:
      return state
  }
}


export default reducerNotifs