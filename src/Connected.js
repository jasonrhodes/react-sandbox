import React from 'react';
import { connect } from 'react-redux';

export function Connected(props) {
  return (
    <div>
      <h1>A Connected Component</h1>
      <p>The value is: {props.example}</p>
    </div>
  )
}

const mapStateToProps = ({ example }) => ({ example });

export default connect(mapStateToProps)(Connected);