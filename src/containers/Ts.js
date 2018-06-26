import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Segment, Icon, Message, Header, Container } from 'semantic-ui-react';
import { createNormal, createPriority } from '../api/services';
import  { sendToNext } from '../api/sockets';
import "../App.css";


const NORMAL = 'NORMAL';
const PRIORITY = 'PRIORITY';


class Ts extends Component {
    constructor() {
        super();

        this.state = {
            hideMessages: true
        };
    }

    generateTicket(type) {
        switch (type) {
            case PRIORITY:
                createPriority()
                    .then((response) => {
                        this.setState({
                            ticket: response.data.ticket,
                            hideMessages: false,
                            success: true,
                            message: 'Senha eletronica prioritaria  criada com sucesso'
                        })

                        sendToNext();
                    }).catch((error) => {
                        console.log(error);
                    })
                break
            case NORMAL:
                createNormal()
                    .then((response) => {
                        this.setState({
                            ticket: response.data.ticket,
                            hideMessages: false,
                            success: true,
                            message: 'Senha normal criada com sucesso'
                        })

                        sendToNext();
                    }).catch((error) => {
                        console.log(error);
                    })
                break
            default:
                console.log('default');
        }


    }


    render() {
        return (
            <Container>
                <Grid padded>
                    <Grid.Row centered columns={1}>
                        <Grid.Column>
                            <Header size='huge' className="center-text">
                                {this.state.ticket}
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered columns={1}>
                        <Grid.Column>
                            <Segment.Group horizontal>
                                <Segment color='yellow' onClick={() => this.generateTicket(PRIORITY)} className="center-text pointer">Prioritaria</Segment>
                                <Segment color='green' onClick={() => this.generateTicket(NORMAL)} className="center-text pointer">Normal</Segment>
                            </Segment.Group>
                            <Message hidden={this.state.hideMessages} positive={this.state.success} warning={this.state.failed} attached='bottom'>
                                <Icon name='check' />
                                {this.state.message}
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default Ts;
