import React, { useState } from "react";
import get from "lodash/get";
import "./Item.css";
import "font-awesome/css/font-awesome.min.css";
import { TICK_IMAGE_URL } from "../../utils";

const Item = ({ user }) => {
  const [selected, setSelected] = useState(false);
  const imageUrl = get(user, "Image", "");
  const name = get(user, "name", "");
  const id = get(user, "id", "");
  return (
    <div className="item-wrapper" onClick={()=>{setSelected(!selected)}}>
        <img className="user-image" src={imageUrl} alt="user-image" />
        {selected && <img className="tick" src={TICK_IMAGE_URL}/>}
      <div className="content-wrapper">
        <div id={id} className="content-row">
          {name}
        </div>
      </div>
    </div>
  );
};

export default Item;
