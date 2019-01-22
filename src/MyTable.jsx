import { Cell, Column, Table } from "@blueprintjs/table";
import React from 'react';
import PropTypes from 'prop-types';
import {Map} from 'immutable';

export class MyTable extends React.Component {
  static propTypes = {
    imTable: PropTypes.instanceOf(Map),
  };

  static defaultProps = {
    imTable: Map({a: 1, b: [2, 3], c: 'Test'})
  };

  render() {
    const imTable = this.props.imTable;

    const cellRendererKey = (rowIndex: number, columnIndex: number) => {
      const keys = Array.from(imTable.keys());
      const key = keys[rowIndex];
      return <Cell>{`${key}`}</Cell>
    };

    const cellRendererValue = (rowIndex: number, columnIndex: number) => {
      const values = Array.from(imTable.values());
      const value = values[rowIndex];
      return <Cell>{`${value}`}</Cell>
    };

    return (
      <Table numRows={imTable.size}>
        <Column name="Key" cellRenderer={cellRendererKey}/>
        <Column name="Value" cellRenderer={cellRendererValue}/>
      </Table>
    );
  }
}
