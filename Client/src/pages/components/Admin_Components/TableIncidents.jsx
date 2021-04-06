import React from 'react';
import {TableRow} from './TableRow'
import { Table } from 'semantic-ui-react';

const TableIncidens = ({incidents, setIncidents,filters,countIncidents,setCountIncidents}) => {

 return (
  <Table sortable celled selectable >
      <Table.Header>
        <Table.Row className="center">
          <Table.HeaderCell id='email'>Usuario</Table.HeaderCell>
          <Table.HeaderCell id='element' >Elemento</Table.HeaderCell>
          <Table.HeaderCell id='incidentType' >Tipo</Table.HeaderCell>
          <Table.HeaderCell id='address' >Direccion</Table.HeaderCell>
          <Table.HeaderCell id='date' >Fecha</Table.HeaderCell>
          <Table.HeaderCell id='state' >Estado</Table.HeaderCell>
          <Table.HeaderCell>Accion</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
        <TableRow incidents={incidents} setIncidents={setIncidents} filters={filters} countIncidents={countIncidents} setCountIncidents={setCountIncidents} />
      </Table.Body>
    </Table>

)
}

export default TableIncidens

