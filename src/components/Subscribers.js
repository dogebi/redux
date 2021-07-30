import React from "react";
import { addSubscriber } from "../redux/subscribers/actions";
import { connect } from "react-redux";

// const Subscribers = (props) => {
//   return (
//     <div className='Items'>
//       <h2>구독자 수: {props.count}</h2>
//       <button onClick={() => props.addSubscriber()}>구독하기</button>
//     </div>
//   );
// };

const Subscribers = ({ count, addSubscriber }) => {
  return (
    <div className='items'>
      <h2>구독자 수: {count}</h2>
      <button onClick={() => addSubscriber()}>구독하기</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSubscriber: () => dispatch(addSubscriber()),
//   };
// };

const mapDispatchToProps = {
  addSubscriber: addSubscriber, //es6에서 값이 같으면 생략할수있다.
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);
