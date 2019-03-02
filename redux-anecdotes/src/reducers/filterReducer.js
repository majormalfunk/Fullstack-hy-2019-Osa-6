export const newNotification = (content) => {
  return {
    type: 'NEW_NOTIFICATION',
    data: { content : content }
  }
}

const reducerFilter = (state = '', action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}


export const filterChange = filter => {
  return {
    type: 'SET_FILTER',
    filter
  }
}

export default reducerFilter