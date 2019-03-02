import React from 'react'
import { connect } from 'react-redux'


const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const hidden = {
    padding: 11
  }

  if (props.notification === undefined || props.notification === null || props.notification === '') {
    return (
      <div style={hidden}>
        &nbsp;
      </div>
    )
  } else {
    return (
      <div style={style}>
        {props.notification}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(
  mapStateToProps,
  null
)(Notification)
