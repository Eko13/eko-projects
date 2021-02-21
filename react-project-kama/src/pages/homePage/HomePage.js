import React, {useState} from 'react';
import Account from "./components/account/Account";
import MyPostsContainer from "./components/posts/MyPostsContainer";
import {accountConst} from "../../constants/accountConsts";
import MultiSelect from "react-multi-select-component";
import {ButtonMain} from "../../components/buttons/ButtonMain";

const options = [
  {label: "Grapes", value: "grapes"},
  {label: "Mango", value: "mango"},
  {label: "Strawberry", value: "strawberry", disabled: true},
  {label: "Watermelon", value: "watermelon"},
  {label: "Pear", value: "pear"},
  {label: "Apple", value: "apple"},
  {label: "Tangerine", value: "tangerine"},
  {label: "Pineapple", value: "pineapple"},
  {label: "Peach", value: "peach"},
];

const HomePage = (props) => {
  const [selectedValue, setSelectedValue] = useState([]);
  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
  };

  return (
    <div className="home-page__wrapper page__wrapper">

      <div className="box-styles multi-select__wrapper">
        <div className="multi-select_btn__wrapper">
          <ButtonMain text="Add to filters"/>
          <MultiSelect
            options={options}
            value={selectedValue}
            onChange={handleChange}
            labelledBy={"Select"}
            className="multi-select__custom-select"
            // isOpen={true}
            disableSearch={true}
            hasSelectAll={false}
          />
        </div>
        <div className="multi-select_values__wrapper">
          Select options: <pre>{JSON.stringify(selectedValue, null, 2)}</pre>
        </div>
      </div>



      {/*<h2 className="page__title">Home</h2>*/}
      {/*<div className="flex-wrapper">*/}
      {/*  <Account name={accountConst.name} avatar={accountConst.avatar} lastName={accountConst.lastName}/>*/}

      {/*  <MyPostsContainer*/}
      {/*    statePosts={props.appData.profilePage}*/}
      {/*    dispatch={props.dispatch}*/}
      {/*  />*/}
      {/*</div>*/}
    </div>
  )
};

export default HomePage;
