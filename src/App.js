import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      adviceText: '',
    };
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice').then((response) => {
      const { advice } = response.data.slip;
      this.setState({
        adviceText: advice,
      });
    });
  };

  render() {
    const { adviceText } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{adviceText}</h1>
          <button className="button" type="button" onClick={this.fetchAdvice}>
            <span>Give me advice!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
