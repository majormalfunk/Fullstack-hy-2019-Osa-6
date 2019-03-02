const notificationAtStart = 'Notification at start'

export const newNotification = (content) => {
  return {
    type: 'NEW_NOTIFICATION',
    data: { content : content }
  }
}

const reducerNotifs = (state = notificationAtStart, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'NEW_NOTIFICATION':
      return action.data.content
    default:
      return state
  }
}


export default reducerNotifs