import React, {useState} from 'react';
import Account from "./components/account/Account";
import MyPostsContainer from "./components/posts/MyPostsContainer";
import {accountConst} from "../../constants/accountConsts";
import MultiSelect from "react-multi-select-component";
import {Select} from 'antd';
import {ButtonMain} from "../../components/buttons/ButtonMain";

const {Option} = Select;

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
  const [selected, setSelected] = useState([]);
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const onSelectChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="home-page__wrapper page__wrapper">

      <div className="home-page__select-wrapper">
        <Select defaultValue="lucy" style={{width: 120}} onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>

        <Select mode="tags" style={{width: '100%'}} onChange={handleChange} tokenSeparators={[',']}>
          {children}
        </Select>
      </div>

      <div className="home-page__select-wrapper">
        <ButtonMain text="add select" onChange={onSelectChange}/>
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy={"Select"}
        />
      </div>

      <h2 className="page__title">Home</h2>
      <div className="flex-wrapper">
        <Account name={accountConst.name} avatar={accountConst.avatar} lastName={accountConst.lastName}/>

        <MyPostsContainer
          statePosts={props.appData.profilePage}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  )
};

export default HomePage;
