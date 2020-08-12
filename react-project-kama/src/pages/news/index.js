import React from 'react';
import {showAlertActionType} from '../../dataRedux/store';

const News = (props) => {


  const callAlert=()=>{
    props.dispatch(showAlertActionType)
  };

  return (
    <div className="news-wrapper">
      News

      <div>
        <button
          onClick={callAlert}
        >
          Click me to see alert
        </button>
      </div>

      <p>{props.appData.seeText}</p>

    </div>
  )
};

export default News;