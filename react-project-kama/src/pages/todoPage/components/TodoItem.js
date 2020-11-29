import React, {useState} from 'react';
import ButtonDelete from "../../../components/buttons/ButtonDelete";

const TodoItem = props => {

  const [checked, setChecked] = useState(props.completed);

  const cls = ['todo'];

  if (checked) {
    cls.push(' ', 'checked')
  }

  const deleteItem = () => {
    props.deleteItem();
  };

  return (
    <div className="todo-page_item __wrapper">
      <label className={cls.join('')}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span className="todo-page_item __title">{props.title}</span>
        <span className="todo-page_item __id">{props.id}</span>
      </label>
      <div className="todo-page_item __actions">
        <ButtonDelete
          onClick={deleteItem}
        />
      </div>
    </div>
  )

};

export default TodoItem;
