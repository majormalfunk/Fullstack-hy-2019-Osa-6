import React from 'react';
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = ({ store }) => {

  const submitAnecdote = (event) => {
    event.preventDefault()
    store.dispatch(
      createAnecdote(event.target.anecdote.value)
    )
    event.target.anecdote.value = ''
  }

  return (
    <div>
      <h3>Enlighten us with your intellect:</h3>
      <form onSubmit={submitAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">Blow our minds</button>
      </form>
    </div>
  )
}

export default AnecdoteForm