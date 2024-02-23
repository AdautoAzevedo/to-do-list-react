import React from 'react'
import { FaTrashAlt} from 'react-icons/fa'

const Content = ({tasks, handleCheck, handleDelete}) => {
  return (
    <main>
      <ul>
        {tasks.map((task) =>(
          <li className="task" key={task.id}>
            <input 
              type="checkbox"
              onChange={() => handleCheck(task.id)}
              checked = {task.completed}
            />
            <label
              style={(task.completed) ? { textDecoration: 'line-through' } : null}
              onDoubleClick={() => handleCheck(task)}      /* Allow the item to be checked by double-clicking on it */
            >{task.taskName}</label>
            <FaTrashAlt
              onClick={() => handleDelete(task.id)}
              role='button'
              tabIndex="0"
              aria-label={`Delete ${task.taskName}`}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Content