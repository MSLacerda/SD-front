import React, { Component } from 'react';
import { Grid, Container, Segment, Header } from 'semantic-ui-react';
import "../App.css";

class Tv extends Component {
  constructor() {
    super();

  }


  render() {
    return (
      <div className="full-height">
        <Grid verticalAlign='middle' columns={1} centered>
          <Grid.Row>
            <Grid.Column>
              <Segment>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Tv;