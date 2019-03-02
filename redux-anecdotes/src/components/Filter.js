import React from 'react'
import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
    // input-kentän arvo muuttujassa event.target.value
    props.store.dispatch(filterChange(event.target.value))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      <h3>Filter anecdotes:</h3>
      <input onChange={handleChange} />
    </div>
  )
}

export default Filter