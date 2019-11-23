import React from 'react';
import Navbar from './components/navbar';
import Body from './components/body';
import Footer from './components/footer';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Body  />
        <Footer />
      </div>
    )
  }
}

export default App;
