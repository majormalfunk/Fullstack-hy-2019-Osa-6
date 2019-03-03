import React from 'react';
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const submitAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(content)
    props.setNotification(`Added '${content}'`, 5)
  }

  return (
    <div>
      <h3>Enlighten us with your intellect:</h3>
      <form onSubmit={submitAnecdote}>
        <div><input name="anecdote" size="50" /></div>
        <button type="submit">Blow our minds</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  createAnecdote,
  setNotification,
  clearNotification
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

