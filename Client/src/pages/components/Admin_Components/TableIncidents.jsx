import React from 'react';
import {TableRow} from './TableRow'
import { Table } from 'semantic-ui-react';
import SvgSort from './Svg/SvgSort';

const TableIncidens = ({incidents, setIncidents,filters,countIncidents,setCountIncidents}) => (


  <Table celled selectable >
      <Table.Header>
        <Table.Row className="center">
          <Table.HeaderCell>Usuario <SvgSort /></Table.HeaderCell>
          <Table.HeaderCell>Elemento <SvgSort /></Table.HeaderCell>
          <Table.HeaderCell>Tipo <SvgSort /></Table.HeaderCell>
          <Table.HeaderCell>Direccion <SvgSort /></Table.HeaderCell>
          <Table.HeaderCell>Fecha <SvgSort /></Table.HeaderCell>
          <Table.HeaderCell>Estado <SvgSort /></Table.HeaderCell>
          <Table.HeaderCell>Accion <SvgSort /></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
        <TableRow incidents={incidents} setIncidents={setIncidents} filters={filters} countIncidents={countIncidents} setCountIncidents={setCountIncidents} />
      </Table.Body>
    </Table>

    
)

export default TableIncidens

