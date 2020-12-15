import React, {useState, useEffect} from 'react';
import {ButtonMain} from "../../../components/buttons/ButtonMain";

const HookUseEffect = props => {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [position, setPosition] = useState({x:0, y:0});


  const mouseMoveHandler = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    })
  };

  // Вызовется только 1 раз
  // useEffect(()=> {
  //   console.log("ComponentDidMount")
  // });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json));
    // При любом изменении state, useEffect ререндерит компоненту
    return(()=>{
      console.log("Clean type")
    })
  }, [type]);

  useEffect(() => {
    console.log("ComponentDidMount");
    window.addEventListener('mousemove', mouseMoveHandler);
    return (() => {window.removeEventListener('mousemove', mouseMoveHandler)});
  }, []);

  return (
    <div className="hooks_item__wrapper">
      <div className="hooks_item__inner-wrapper">
        <h3>HookUseEffect</h3>

        <div>
          <h4>Ресурс: {type}</h4>
          <div>
            <pre>{JSON.stringify(position, null,2)}</pre>
          </div>
        </div>

        <div className="btn-actions__wrapper">
          <ButtonMain onClick={()=> setType("users")} text="Пользователи"/>
          <ButtonMain onClick={()=> setType("todos")} text="ToDo"/>
          <ButtonMain onClick={()=> setType("posts")} text="Посты"/>
        </div>

        <div>
          <pre>
            {JSON.stringify(data, null,2)}
          </pre>
        </div>
      </div>
    </div>
  )
};

export default HookUseEffect;
