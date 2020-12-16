import React from "react";
import "./App.css";
import List from "./components/List";
import { getUsersList } from "./redux/actions";
import { connect } from "react-redux";
import Pagination from "./components/Pagination";
import loader from './loader.gif';
import Overlay from "./components/Overlay";
import GroupForm from "./components/GroupForm";
import Sort from "./components/Sort";

class App extends React.Component {
  state = {
    perPage: 20,
    activeIndex: 1,
  };

  componentDidMount() {
    this.props.setUserListData();
  }

  setActiveIndex = (index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { perPage, activeIndex, loading } = this.state;
    return (
      
      <div className="App">
        {loading && <Overlay />}
        {loading && <img className='loader' src={loader} />}
        {/* <Sort />  */}
        <GroupForm />
        <List activeIndex={activeIndex} perPage={perPage} />
        {/* <Pagination
          setActiveIndex={this.setActiveIndex}
          numPages={this.props.userList.length / perPage}
        /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.userReducer.userList,
    loading: state.userReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setUserListData: () => {
    dispatch(getUsersList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
