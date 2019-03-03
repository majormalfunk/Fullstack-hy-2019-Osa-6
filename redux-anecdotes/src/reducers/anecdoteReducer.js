import anecdoteService from "../services/anecdoteService";

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const vote = content => {
  return async dispatch => {
    const votedAnecdote = content
    votedAnecdote.votes = votedAnecdote.votes + 1
    await anecdoteService.update(content)
    dispatch({
      type: 'VOTE',
      data: votedAnecdote
    })
  }
}

const reducerAnecs = (state = [], action) => {
  switch (action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data.sort((a, b) => b.votes - a.votes)
    case 'VOTE':
      const changedAnecdote = action.data
      const id = changedAnecdote.id
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote).sort((a, b) => b.votes - a.votes)
    default:
      return state
  }
}


export default reducerAnecs