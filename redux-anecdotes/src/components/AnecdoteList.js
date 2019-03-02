import React from 'react';
import { vote } from '../reducers/anecdoteReducer'

const AnecdoteList = ({ store }) => {
  const { anecdotes, filter } = store.getState()
  const anecdotesToShow = () => {
    return (
      anecdotes.filter(anecdote => anecdote.content.includes(filter))
    )
  }
  return (
    <div>
      <h3>Available anecdotes</h3>
      <ul>
      {anecdotesToShow().map(anecdote =>
        <li key={anecdote.id}><div>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes} votes &nbsp;
            <button onClick={() => store.dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div></li>
      )}
      </ul>
    </div>

  )
}

export default AnecdoteList