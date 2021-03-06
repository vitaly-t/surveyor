import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
    this.testdb();
  }

  testdb() {
    console.log('testdb run');
    $.ajax({
      url: '/testdb',
      type: 'GET',
      success: (data) => {
        console.log(data)
      },
      error: () => {
        console.log('error in getting data');
      }
    });
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/',
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render () {
    return (<div>
      <h1>Item List</h1>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));