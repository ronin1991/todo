import React from 'react'

function TodoTitle(props) {

  const { tasks} = props;

  return (
    <div className="d-flex justify-content-between align-items-center">
      <h1>Tasks</h1>
      <div>
        <span className="mr-2">Total tasks: {tasks.length}</span>
      </div>
    </div>
  )
}

export default TodoTitle
