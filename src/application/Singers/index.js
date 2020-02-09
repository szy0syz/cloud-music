import React, {useState} from 'react';
import Horizen from "../../baseUI/horizen-item";
import { alphaTypes, categoryTypes } from "../../api/config";
import { NavContainer } from "./style";

function Singers() {
  const [category, setCategory] = useState("");
  const [alpha, setAlpha] = useState("");

  const handleUpdateAlpha = val => {
    setAlpha(val);
  };

  const handleUpdateCatetory = val => {
    setCategory(val);
  };

  return (
    <NavContainer>
      <Horizen
        list={categoryTypes}
        title={"分类 (默认热门):"}
        handleClick={val => handleUpdateCatetory(val)}
        oldVal={category}
      ></Horizen>
      <Horizen
        list={alphaTypes}
        title={"首字母:"}
        handleClick={val => handleUpdateAlpha(val)}
        oldVal={alpha}
      ></Horizen>
    </NavContainer>
  );
}

export default React.memo(Singers);
