import React, {useState, useEffect, useRef} from "react";
import MultiSelect from "react-multi-select-component";
import {ButtonTransparent} from "./buttons/ButtonTransparent";
import ButtonDelete from "./buttons/ButtonDelete";
import {useTranslation} from "react-i18next";
import iconPlus from "../assets/images/svg/plus.svg";

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

const MultiSelectCustom = ({list, onChange, title}) => {
  const {t} = useTranslation();
  const [selectedValue, setSelectedValue] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const addToFiltersRef = useRef();
  const multiSelectClassName = "multiselect-custom_select";

  const handlerRemove = (value) => {
    setSelectedValue(selectedValue.filter((x) => x.value !== value));
  };

  const openSelect = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsOpen(!isOpen);
  };

  const backdropListener = (e) => {
    if (addToFiltersRef.current) {
      const select = addToFiltersRef.current.parentNode.querySelector(
        `.${multiSelectClassName}`
      );
      if (!select.contains(e.target) && isOpen) {
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", backdropListener);
    return () => {
      document.body.removeEventListener("click", backdropListener);
    };
  });

  return (
    <div className="multiselect-custom_wrapper">
      {title && (
        <div className="multiselect-custom_title __wrapper">
          <p>{t(title)}</p>
        </div>
      )}
      <div className="multiselect-custom_btn __wrapper">
        <ButtonTransparent
          ref={addToFiltersRef}
          name={t("FIRST_SETUP_SELECT_ADD")}
          onClick={openSelect}
          img={iconPlus}
        />
        <MultiSelect
          options={list}
          value={selectedValue}
          onChange={onChange}
          labelledBy={"Select"}
          className={multiSelectClassName}
          disableSearch={true}
          hasSelectAll={false}
          ClearSelectedIcon={false}
          isOpen={isOpen}
        />
      </div>
      <div className="multiselect-custom_list __wrapper">
        <div className="multiselect-custom_list __inner-wrapper">
          {selectedValue.map((item) => (
            <div key={item.value} className="multiselect-custom_item">
              <span>{item.label}</span>
              <ButtonDelete isWhite onClick={() => handlerRemove(item.value)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiSelectCustom;
