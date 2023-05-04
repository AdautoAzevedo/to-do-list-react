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
              checked = {task.checked}
            />
            <label
              style={(task.checked) ? { textDecoration: 'line-through' } : null}
              onDoubleClick={() => handleCheck(task.id)}      /* Allow the item to be checked by double-clicking on it */
            >{task.task}</label>
            <FaTrashAlt
              onClick={() => handleDelete(task.id)}
              role='button'
              tabIndex="0"
              aria-label={`Delete ${task.task}`}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Content