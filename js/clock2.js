//A React Component for displaying the time in a 
//human-readable textual format.
class FormattedTime extends React.Component {
    constructor(props) {
      super(props);
    }
  
  
    render() {
      return this.props.date.toLocaleTimeString();
    }
  }
  
  //A React component for displaying a ticking clock.
  class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    //Update Clock's state to the current time
    updateTime() {
        this.setState({date: new Date()});
      }
    //Set class variable 'timer' to a function that calls updateTime() every second
    componentDidMount() {
        this.timer = setInterval(() => this.updateTime(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
      return (
        <div><h1>Hello CptS 489 Students!</h1>
          <h2>It is <FormattedTime date={this.state.date} />.</h2>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );