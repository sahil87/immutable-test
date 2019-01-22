import { Cell, Column, Table } from "@blueprintjs/table";
import React, { Component } from 'react';


export class MyTable extends React.Component {
  render() {
    const cellRenderer = (rowIndex) => {
      return <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
    };

    return (
      <Table numRows={10}>
        <Column name="Dollars" cellRenderer={cellRenderer}/>
      </Table>
    );
  }
}
