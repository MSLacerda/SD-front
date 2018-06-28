import React, { Component } from 'react';
import { Grid, Segment, Icon, Message, Header, Statistic, Container } from 'semantic-ui-react';
import { subscribeChannel } from '../api/sockets';
import { fetchNext, callNext } from '../api/services';
import "../App.css";



class Ta extends Component {
  constructor() {
    super();
    this.state = {
      hideMessages: true
    };
  }

  componentDidMount() {
    this.fetchNext();
    subscribeChannel((err, data) => {
      this.fetchNext();
    }, 'receivenext');
  }

  fetchNext() {
    fetchNext().then((response) => {
      this.setState({
        hideMessages: true,
        next: response.data.ticket
      })
    }).catch((error) => {
      this.setState({
        hideMessages: false,
        failed: true,
        message: 'Não há senhas eletronicas',
        next: ''
      })
    })
  }

  callNext() {
    callNext().then((response) => {
      this.setState({
        hideMessages: true,
        actual: response.data.ticket
      })
      this.fetchNext();
    }).catch((error) => {
      this.setState({
        hideMessages: false,
        failed: true,
        message: 'Não há senhas eletronicas'
      })
    })
  }

  render() {

    return (
      <Container>
        <Grid textAlign='center' verticalAlign='middle' className="full-height" padded>
          <Grid.Row centered columns={2}>
            <Grid.Column textAlign='center'>
              <Statistic color="yellow">
                <Statistic.Value>{this.state.actual}</Statistic.Value>
                <Statistic.Label>Atual</Statistic.Label>
              </Statistic>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Statistic color="green">
                <Statistic.Value>{this.state.next}</Statistic.Value>
                <Statistic.Label>Próxima</Statistic.Label>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns={1}>
            <Segment color='green' onClick={() => this.callNext()} className="center-text pointer">Chamar Próxima</Segment>
            <Message hidden={this.state.hideMessages} positive={this.state.success} warning={this.state.failed} attached='bottom'>
              <Icon name={this.state.icon} />
              {this.state.message}
            </Message>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Ta;