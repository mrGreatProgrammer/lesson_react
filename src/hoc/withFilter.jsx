import React from 'react'

const withFilter = (Component) => {
  return function (props) {
    return <Component />
  }
}

export default withFilter