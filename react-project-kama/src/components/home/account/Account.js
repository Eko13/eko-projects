import React from "react";
import '../../../styles/account.sass';

const Account = () =>{
  return(
      <div className="account-wrapper">
          <div className="img-wrapper">
              <img
                  src="https://img.etimg.com/thumb/width-640,height-480,imgsize-144736,resizemode-1,msid-69037337/fraud-is-only-possible-if-user-grants-access-oldrich-mller-coo-anydesk.jpg"
                  alt=""/>
          </div>

          <div className="info-wrapper">
              <h3 className="name_account">Jon Moscow</h3>

              <ul className="info_account">
                  <li><b>Date:</b></li>
                  <li><b>City:</b></li>
                  <li><b>Educations:</b></li>
                  <li><b>Web Site:</b></li>
              </ul>
          </div>
      </div>
  )

};

export default Account;