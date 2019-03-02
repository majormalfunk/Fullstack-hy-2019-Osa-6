import React from 'react';
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { newNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const submitAnecdote = (event) => {
    event.preventDefault()
    const newAnecdote = event.target.anecdote.value
    props.createAnecdote(newAnecdote)
    event.target.anecdote.value = ''
    props.newNotification(`Added '${newAnecdote}'`)
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

const mapDispatchToProps = {
  createAnecdote,
  newNotification
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

