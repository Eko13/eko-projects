import React, {useState} from 'react';


const TodoItem = props =>{

    const [checked, setChecked] = useState(props.completed);

    const cls = ['todo'];

    if(checked){
        cls.push(' ','checked')
    }

    return(
        <li className="todo-item">
            <label className={cls.join('')}>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={()=>setChecked(!checked)}
                />
                <span className="title_todo-item">{props.title}</span>
            </label>
            <i className="del_todo-item color-danger">delete</i>
        </li>
    )

};

export default TodoItem;