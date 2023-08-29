// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, onDelete} = props
  const {id, title} = todoDetails
  const onDltClick = () => {
    onDelete(id)
  }
  return (
    <li className="todo-container">
      <p className="todo-para">{title}</p>
      <div className="btn-div">
        <button type="button" className="todo-btn" onClick={onDltClick}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
