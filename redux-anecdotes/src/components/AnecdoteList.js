import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { newNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  const voteAnecdote = (id) => {
    const votedAnecdote = props.anecdotesToShow.find(anecdote => anecdote.id === id).content
    props.vote(id)
    props.newNotification(`Voted '${votedAnecdote}'`)
    setTimeout(() => {
      props.clearNotification()
    }, 5000)
  }

  return (
    <div>
      <h3>Available anecdotes</h3>
      <ul>
      {props.anecdotesToShow.map(anecdote =>
        <li key={anecdote.id}><div>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes} votes &nbsp;
            <button onClick={() => voteAnecdote(anecdote.id)}>Vote!</button>
          </div>
        </div></li>
      )}
      </ul>
    </div>

  )
}

const anecdotesToShow = ({ anecdotes, filter }) => {
  return (
    anecdotes.filter(anecdote => anecdote.content.includes(filter))
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotesToShow: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  vote,
  newNotification,
  clearNotification
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
  )(AnecdoteList)

export default ConnectedAnecdoteList