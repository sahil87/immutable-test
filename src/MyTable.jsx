import { Cell, Column, Table } from "@blueprintjs/table";
import React from 'react';
import PropTypes from 'prop-types';
import {Map} from 'immutable';

export class MyTable extends React.Component {
  static propTypes = {
    imMap: PropTypes.instanceOf(Map),
  };

  static defaultProps = {
    imMap: Map({a: 1, b: [2, 3], c: 'Test'})
  };

  render() {
    const imMap = this.props.imMap;

    const cellRendererKey = (rowIndex: number, columnIndex: number) => {
      const keys = Array.from(imMap.keys());
      const key = keys[rowIndex];
      return <Cell>{`${key}`}</Cell>
    };

    const cellRendererValue = (rowIndex: number, columnIndex: number) => {
      const values = Array.from(imMap.values());
      const value = values[rowIndex];
      return <Cell>{`${value}`}</Cell>
    };

    const cellRendererValueTypeOf = (rowIndex: number, columnIndex: number) => {
      const values = Array.from(imMap.values());
      const value = values[rowIndex];
      return <Cell>{`${value.constructor ? value.constructor.name: " "}`}</Cell>
    };

    return (
      <Table numRows={imMap.size}>
        <Column name="Key" cellRenderer={cellRendererKey}/>
        <Column name="Value" cellRenderer={cellRendererValue}/>
        <Column name="TypeOf" cellRenderer={cellRendererValueTypeOf}/>
      </Table>
    );
  }
}
