const notificationAtStart = ''

export const setNotification = (content, timeout) => {

  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: { content: content }
    })
    await setTimeout(() => {
      dispatch({
        type: 'CLEAR_NOTIFICATION'
      })
    }, (timeout * 1000))
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION'
  }
}

const reducerNotifs = (state = notificationAtStart, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data.content
    case 'CLEAR_NOTIFICATION':
      return ''
    default:
      return state
  }
}


export default reducerNotifs