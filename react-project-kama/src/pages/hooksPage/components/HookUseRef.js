import React, {useEffect, useRef, useState} from "react";
import {InputField} from "../../../components/fields/InputField";
import {ButtonMain} from "../../../components/buttons/ButtonMain";

const HooksUseRef = () => {
  const [fieldValue, setFieldValue] = useState("initial");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("");

  useEffect(()=>{
    renderCount.current++;
    console.log(inputRef.current.value);
  });

  useEffect(()=>{
    prevValue.current = fieldValue
  }, [fieldValue]);

  const focus = () => {
    inputRef.current.focus()
  };

  return(
    <div className="hooks_item__wrapper">
      <div className="hooks_item__inner-wrapper">
        <h3>HooksUseRef</h3>
        <h4>Счётчик рендера: {renderCount.current}</h4>
        <h4>Прошлое значение в поле: {prevValue.current}</h4>
        <div>
          <div>
            <input ref={inputRef} onChange={e => setFieldValue(e.target.value)} value={fieldValue}/>
          </div>
          <div className="btn-actions__wrapper">
            <ButtonMain text="Фокус на input" onClick={focus} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default HooksUseRef;