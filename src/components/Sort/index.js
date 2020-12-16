import React, { useEffect, useState } from "react";
import { USERS_SUCCESS } from "../../redux/actionTypes";

// const sortObject = {
//   asc: {trueValue: 1, falseValue: -1},
//   desc: {trueValue: -1, falseValue: 1}
// }

const Sort = ({ userList }) => {
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(()=>{
    const sortedUserList = userList.sort((a,b)=> a.name > b.name ? 1 : -1);
    // updateUserListData(sortedUserList);
  }, [sortOrder]);
  return (
    <div>
      <div><input type="radio" value="asc" checked={sortOrder === "asc"} onClick={()=>{setSortOrder("asc")}}/> Increasing order </div>
      <div><input type="radio" value="desc" checked={sortOrder === "desc"} onClick={()=>{setSortOrder("desc")}} /> Decreasing order </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userList: state.userReducer.userList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateUserListData: (data) => {
    dispatch({
      type: USERS_SUCCESS,
      payload: data
    })
  }
});

export default (mapStateToProps, mapDispatchToProps)(Sort);
