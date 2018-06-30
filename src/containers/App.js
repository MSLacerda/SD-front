import React, { Component } from 'react';
import { Grid, Container, Header, Message } from 'semantic-ui-react'
import '../App.css';
import Navbar from '../components/Navbar';
import { Button, Icon } from 'semantic-ui-react'
import { downloadLog, deleteLog } from '../api/services'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hideMessages: true,
      success: false,
      failed: false
    }

    this.download = this.download.bind(this)
    this.clearLog = this.clearLog.bind(this)
    
  }


  download() {
    console.log('downloading...')
    downloadLog()
      .then((res) => {
        this.setState({
          hideMessages: false,
          success: true,
          message: 'Download do log feito com sucesso'
        })
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  clearLog() {
    console.log('teste')
    deleteLog()
      .then((res) => {
       console.log('teste 2')
        this.setState({
          hideMessages: false,
          success: true,
          message: 'Log limpado com sucesso'
        })
        console.log(res)
      })
      .catch((err) => {
        console.log('teste 2')
        this.setState({
          hideMessages: false,
          failed: true,
          message: 'Error ao limpar log, verifique o console'
        })
        console.log(err)
      })
  }


  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <Header as='h3'>Log Manager</Header>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Button onClick={this.download} animated color='blue'>
                  <Button.Content visible>Log</Button.Content>
                  <Button.Content hidden>
                    <Icon name='download' />
                  </Button.Content>
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button onClick={this.clearLog} animated color='red'>
                  <Button.Content visible>Log</Button.Content>
                  <Button.Content hidden>
                    <Icon name='delete' />
                  </Button.Content>
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Message hidden={this.state.hideMessages} positive={this.state.success} warning={this.state.failed} attached='bottom'>
                  <Icon name={this.state.icon} />
                  {this.state.message}
                </Message>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
