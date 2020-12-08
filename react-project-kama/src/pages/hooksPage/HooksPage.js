import React from 'react';
import HookUseState from "./components/HookUseState";
import HookUseEffect from "./components/HookUseEffect";


const HooksPage = props => {
  return (
    <div className="hooks-page__wrapper page__wrapper">
      <h2 className="page__title">React Hooks</h2>

      <HookUseState />
      <HookUseEffect />
    </div>
  )
};

export default HooksPage;
