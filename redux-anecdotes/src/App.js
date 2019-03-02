import React from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = (props) => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteForm store={props.store} />
      <AnecdoteList store={props.store} />
    </div>
  )

/*
  const anecdotes = props.store.getState()
  
  const vote = (id) => {
    console.log('vote', id)
  }
  
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form>
        <div><input /></div>
        <button>create</button>
      </form>
    </div>
  )
*/
}


export default App
