import React from 'react';

const News = (props) =>{

    return(
        <div className="news-wrapper">
            News

          <button
            onClick={()=> props.appStore.showAlert()}
          >
            Click me to see alert
          </button>

          <p>{props.appStore.storeSomeText}</p>

        </div>
    )
};

export default News;