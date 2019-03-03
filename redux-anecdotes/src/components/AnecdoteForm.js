import React from 'react';
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { newNotification, clearNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdoteService'

const AnecdoteForm = (props) => {

  const submitAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    props.newNotification(`Added '${newAnecdote.content}'`)
    setTimeout(() => {
      props.clearNotification()
    }, 5000)
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
  newNotification,
  clearNotification
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

