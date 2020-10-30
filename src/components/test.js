import React, { Component } from 'react';
import Button from 'antd/lib/button';

class Test extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      value: 1,
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.value) {
      return ({
        value: props.value
      })
    }
    return null;
  }

  getSnapshotBeforeUpdate(preState) {
    console.log(preState);
    return ({
      value: 1,
    })
  }
  componentDidUpdate(_, _1, snapshot) {
    console.log(snapshot)
  }
  plus = () => {
    this.setState((state) => ({
      value: state.value + 1
    }));
    this.setState((state) => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <Button onClick={this.plus}>
          加1
        </Button>
       {this.state.value}
      </div>
    )
  }

}
export default Test;