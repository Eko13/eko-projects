import React from 'react';
import {ButtonMain} from "../../../components/buttons/ButtonMain";

const HookUseEffect = props => {

  return (
    <div className="hooks_item__wrapper">
      <div className="hooks_item__inner-wrapper">
        <h3>HookUseEffect</h3>
        <div className="btn-actions__wrapper">
          <ButtonMain  text="Добавить"/>
          <ButtonMain  text="Убрать"/>
        </div>
      </div>
    </div>
  )
};

export default HookUseEffect;
