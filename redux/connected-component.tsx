// boilerplate for connected redux components

import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface Props {}

class ConnectedClass extends React.Component<Props> {
  render() {}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

const ComponentName = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedClass);

export { ComponentName, ConnectedClass };
