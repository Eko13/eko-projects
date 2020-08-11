import React from 'react';

const News = (props) => {


  const callAlert=()=>{
    props.dispatch({type:'SHOW_ALERT'})
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