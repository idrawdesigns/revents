import React, { Component } from 'react';
import EventDashboard from '../../app/features/event/EventDashboard/EventDashboard';
import Navbar from '../../app/features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
