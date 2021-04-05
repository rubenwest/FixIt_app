import React from 'react'
import { Table } from 'semantic-ui-react'
import SvgAdmin from './Svg/SvgAdmin';
import SvgUser from './Svg/SvgUser';
import SvgInactiveUser from './Svg/SvgInactiveUser';
import SvgActiveUser from './Svg/SvgActiveUser';

export const TableRowUser = ({users, setUsers}) => (

    users.map(({name,surname, email, address, role, state}) => {
        return (
            <Table.Row style={{verticalAlign:"middle"}}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{surname}</Table.Cell>
                <Table.Cell>{email}</Table.Cell>
                <Table.Cell>{address}</Table.Cell>
                {
                  role=='USER' && (<Table.Cell style={{textAlign: 'center'}}><SvgUser /></Table.Cell>)
                }
                {
                  role=='ADMIN' && (<Table.Cell style={{textAlign: 'center'}}><SvgAdmin /></Table.Cell>)
                }
                {
                  state && (<Table.Cell style={{textAlign: 'center'}}><SvgActiveUser /></Table.Cell>)
                }
                {
                  !state && (<Table.Cell style={{textAlign: 'center'}}><SvgInactiveUser /></Table.Cell>)
                }

            </Table.Row>
        )
    }

    
    )
)
    

