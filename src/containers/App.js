import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import '../App.css';
import Navbar from '../components/Navbar';
import { Button } from 'semantic-ui-react'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Navbar />
        <Grid>
          <Grid.Row>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
