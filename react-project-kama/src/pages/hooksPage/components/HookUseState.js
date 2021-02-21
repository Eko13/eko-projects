import React, {useState} from 'react';
import {ButtonMain} from "../../../components/buttons/ButtonMain";


const computeInitialCounter = () => {
  console.log("computeInitialCounter...");
  return Math.trunc(Math.random() * 20);
};

const HookUseState = props => {
  // const [counter, setCounter] = useState(0);

  const [dateTitle, setDateTitle] = useState({
    title: "Счётчик",
    date: Date.now()
  });

  // Не правильно, т.к. ререндерит ф-цию
  // const [counter, setCounter] = useState(computeInitialCounter());
  // Лучше, т.к. вызывает ф-цию один раз
  const [counter, setCounter] = useState(() => computeInitialCounter());

  const increment = () => {
    // Простой вызов
    // setCounter(counter + 1);

    setCounter( (prevCounter)=> {
      return prevCounter + 1
    });

    // Вызов 2 раза
    // setCounter( prev => prev +1);
    // setCounter( prev => prev +1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const updateTitle = () => {
    setDateTitle( prev => {
      return {
        ...prev,
        title: "New Title 2"
      }
    })
  };

  return (
    <div className="hooks_item__wrapper">
      <div className="hooks_item__inner-wrapper">
        <h3>HookUseState</h3>
        <h4>Счётчик: {counter}</h4>
        <div className="btn-actions__wrapper">
          <ButtonMain onClick={increment} text="Добавить"/>
          <ButtonMain onClick={decrement} text="Убрать"/>
        </div>
      </div>

      <div className="hooks_item__inner-wrapper">
        <div className="btn-actions__wrapper">
          <ButtonMain onClick={updateTitle} text="Изменить Title"/>
        </div>
          <pre>{JSON.stringify(dateTitle, null, 2)}</pre>
      </div>
    </div>
  )
};

export default HookUseState;
