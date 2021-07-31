import React, { useState } from "react";

import { addView } from "../redux/index";
import { connect } from "react-redux";

// const Subscribers = (props) => {
//   return (
//     <div className='Items'>
//       <h2>구독자 수: {props.count}</h2>
//       <button onClick={() => props.addSubscriber()}>구독하기</button>
//     </div>
//   );
// };

const Views = ({ count, addView }) => {
  const [number, setNumber] = useState(1);

  return (
    <div className='items'>
      <h2>조회자 수: {count}</h2>
      <input
        type='text'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <button onClick={() => addView(number)}>조회하기</button>
    </div>
  );
};

const mapStateToProps = ({ views }) => {
  //console.log(state);
  return {
    count: views.count,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSubscriber: () => dispatch(addSubscriber()),
//   };
// };

const mapDispatchToProps = {
  //addView: addView, //es6에서 값이 같으면 생략할수있다.
  addView: (number) => addView(number),
};

export default connect(mapStateToProps, mapDispatchToProps)(Views);
