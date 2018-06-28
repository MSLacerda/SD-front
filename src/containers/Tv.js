import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Container, Segment, Header, Statistic } from 'semantic-ui-react';
import { subscribeChannel } from '../api/sockets'
import Sound from 'react-sound';
import "../App.css";

// const alert = require('alert');
class Tv extends Component {

  constructor() {
    super();
    this.state = {};
  }

  not() {
    return (
      <Sound
        url="to-the-point.mp3"
        playStatus={Sound.status.PLAYING}
        playFromPosition={300 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    )
  }

  componentDidMount() {
    subscribeChannel((err, data) => {
      ReactDOM.render(this.not(), document.getElementById('sound-render'))
      if (data != undefined){
        this.setState({
          ticket: data.ticket
        })
      }
    }, 'show_actual_ticket');
  }

  render() {
    return (
      <Grid verticalAlign='middle' className="full-height" columns={1} centered>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Segment>
              <Statistic color='green'>
                <Statistic.Value>{this.state.ticket}</Statistic.Value>
                <Statistic.Label>Chamado</Statistic.Label>
                <div id="sound-render"> </div>
              </Statistic>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Tv;