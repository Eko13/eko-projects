import React from 'react';

const News = (props) => {

  return (
    <div className="news-wrapper">
      News

      <div>
        <button
          onClick={() => props.dispatch({type:'SHOW_ALERT'})}
        >
          Click me to see alert
        </button>
      </div>

      <p>{props.appData.seeText}</p>

    </div>
  )
};

export default News;