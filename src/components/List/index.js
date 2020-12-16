import { connect } from "react-redux";
import Item from "../Item";
import "./List.css";
import { ALERT_MESSAGES } from "../../utils";

const List = ({ userList, activeIndex, perPage }) => {
  const usersArray = userList.slice(
    (activeIndex - 1) * perPage,
    activeIndex * perPage - 1
  );

  const handleAction = event => {
    const key = event.target.name.toUpperCase();
    window.alert(ALERT_MESSAGES[key]);
  }

  return (
    <>
      <div className="list-wrapper">
        {usersArray.map(user => {
          return <Item user={user} />;
        })}
      </div>
      <div className="button-wrapper">
        <button className="actn-btn update" name="update" onClick={handleAction}>Update</button>
        <button className="actn-btn remove" name="remove" onClick={handleAction}>Remove</button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userList: state.userReducer.userList,
    userImages: state.userReducer.userImages,
    loading: state.userReducer.loading,
  };
};

export default connect(mapStateToProps, null)(List);
