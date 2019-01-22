import React from 'react';
import {MyTable} from "./MyTable";
import {Map} from "immutable";
import { Button } from "@blueprintjs/core";

export class MyRoot extends React.Component {
  rootMap;

  constructor() {
    super();
    this.rootMap = Map({name: 'rootMap', a: 1, b: [2, 3], c: 'Test', d: {'innerKey': 'innerValue'}});
    this.state = {
      stateMap: Map({name: 'state\'s Map', a: 1})
    };
  }

  //Has no impact on the child table as the reference never changes
  onTest1Click = () => {
    console.log('Am here');
    console.log(this.rootMap);
    this.rootMap = Map({a: 1});
    console.log(this.rootMap);
  };

  onTest2Click = () => {
    const stateMap = this.state.stateMap;
    console.log(stateMap);
    const newStateMap = stateMap.set('a', stateMap.get('a') + 1);
    this.setState({stateMap: newStateMap});
  };

  render() {
    return (
      <div>
        <Button onClick={this.onTest1Click}>Test1</Button>
        <Button onClick={this.onTest2Click}>Test2</Button>
        <MyTable imMap={this.rootMap}/>
        <MyTable imMap={this.state.stateMap}/>
      </div>
    );
  }
}
