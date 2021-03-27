import React from 'react';
import img from "../img/Add.png";
import { Card, Columns, Content, Heading, Container } from 'react-bulma-components';
/* 
import Columns from 'react-bulma-components/lib/components/columns'; */



const NewIncident2 = ()  => (
        <Container>
            <Columns>   
            <Columns.Column size={1}>
              <Card>
                  <Card.Image  src={img} />
                  <Card.Content>
                      <Content>
                          <Heading>Nueva Incidencia</Heading>
                          <Heading></Heading>
                          <Heading subtitle size={10}>+</Heading>
                      </Content>
                  </Card.Content>
              </Card>
              </Columns.Column> 
            </Columns>
            </Container>                       
    

)

export default NewIncident2
