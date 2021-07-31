import React from "react";
import { connect } from "react-redux";

const Display = (props) => {
  return (
    <div className='items'>
      <p> 구독자 수!!!!: {props.count} </p>
    </div>
  );
};

const mapStateProps = ({ subscribers }) => {
  return {
    count: subscribers.count,
  };
};

export default connect(mapStateProps)(Display);
