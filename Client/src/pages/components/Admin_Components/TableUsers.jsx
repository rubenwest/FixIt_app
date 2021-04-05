import React from 'react'
import { Table } from 'semantic-ui-react';
import {TableRowUser} from './TableRowUser';
import SvgSort from './Svg/SvgSort';

const TableUsers = ({users, setUsers}) => {
    return (

        <Table celled selectable >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre <SvgSort /></Table.HeaderCell>
            <Table.HeaderCell>Apellidos <SvgSort /></Table.HeaderCell>
            <Table.HeaderCell>Email <SvgSort /></Table.HeaderCell>
            <Table.HeaderCell>Direccion <SvgSort /></Table.HeaderCell>
            <Table.HeaderCell>Rol <SvgSort /></Table.HeaderCell>
            <Table.HeaderCell>State <SvgSort /></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
          <TableRowUser users={users} setUsers={setUsers} />
        </Table.Body>
      </Table>
  
    )
}

export default TableUsers
