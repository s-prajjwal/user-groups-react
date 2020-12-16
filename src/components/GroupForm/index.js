import React, { useState } from "react";
import { DEFAULT_USER_IMG } from "../../utils";
import "./GroupForm.css";

const initialState = {
  groupName: "",
  gropDescription: "",
  imgSrc: DEFAULT_USER_IMG
};

const GroupForm = () => {
  const [state, setState] = useState(initialState);

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const uploadImage = event => {
    setState({
      ...state,
      imgSrc: URL.createObjectURL(event.target.files[0])
    })
  }
  return (
    <div className="form-wrapper">
      <div className="group-image-wrapper">
        <img src={state.imgSrc} className="group-logo"/>
        <input type="file" onChange={uploadImage} multiple accept='image/*'/>
      </div>
      <div className="form-content-wrapper">
        <div className="form-control">
          <label>Name</label>
          <input
            name="groupName"
            className="form-input"
            onChange={handleChange}
            placeholder="group-name"
          />
        </div>
        <div className="form-control">
          <label>Description</label>
          <input
            className="form-input"
            name="gropDescription"
            onChange={handleChange}
            placeholder="group-description"
          />
        </div>
      </div>
    </div>
  );
};

export default GroupForm;
