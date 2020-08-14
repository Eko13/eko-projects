import React, {useState} from 'react';
import { deleteTodoItemActionCreator } from './../../dataRedux/reducers/todoReducer';

const TodoItem = props =>{

    const [checked, setChecked] = useState(props.completed);

    const cls = ['todo'];

    if(checked){
        cls.push(' ','checked')
    }

    const onDeleteItem = () =>{
      props.dispatch(deleteTodoItemActionCreator());
    };

    return(
        <li className="todo-item">
            <label className={cls.join('')}>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={()=>setChecked(!checked)}
                />
                <span className="title_todo-item">{props.title}</span>
                <span className="title_todo-item">{props.id}</span>
            </label>
            <button
              className="del_todo-item color-danger"
              onClick={onDeleteItem}
            >
              delete
            </button>
        </li>
    )

};

export default TodoItem;