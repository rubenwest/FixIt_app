import React from 'react';
import { Card, Columns, Content, Heading, Container, Section } from 'react-bulma-components';

const ListProducts = ({ incidents })  => {

    console.log("products: ",incidents);

    return (
        
        
        <Container>

            <Columns>
                {
                    incidents.map(({_id, user, element, date, description, incidentType, state,imgUrl}) => ( 

                        
                            <Columns.Column size={3} key={_id}>
                                <Card>
                                    {/* <Card.Image size="16by9" src={imgUrl} /> */}
                                    <Card.Content>
                                        <Content>
                                            <Heading>{user}</Heading>
                                            <Heading subtitle size={6}>Price: {element}</Heading>
                                            <Heading subtitle size={6}>Size: {incidentType}</Heading>
                                            <p>
                                                {description}
                                            </p>
                                        </Content>
                                    </Card.Content>
                                </Card>                        
                            </Columns.Column>
                                    
                    ))
                }
            </Columns>

        </Container>
        
        
    )

}

export default ListProducts
