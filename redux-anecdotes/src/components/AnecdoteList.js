import React from 'react';
import { vote } from '../reducers/anecdoteReducer'

const AnecdoteList = ({ store }) => {
  return (
    <div>
      <h3>Available anecdotes</h3>
      <ul>
      {store.getState().anecdotes.map(anecdote =>
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