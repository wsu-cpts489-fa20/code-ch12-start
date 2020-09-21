//A React Component for displaying the date in a 
//human-readable textual format.
class FormattedDate extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return this.props.date.toLocaleDateString();
    }
  }


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
        this.state = {date: new Date(),
                      displayDate: false};
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

    buttonClick = () => {
        this.setState({displayDate: !this.state.displayDate});
      }
      
    render() {
        return (
          <div>
            <h1>Hello CptS 489 Students!</h1>
            {this.state.displayDate ?
              <h2>The date is <FormattedDate date={this.state.date} />.</h2>
              : null}
            <h2>The time is <FormattedTime date={this.state.date} />.</h2>
            <button className="btn btn-primary" onClick={this.buttonClick}>
                {this.state.displayDate ? "Hide Date" : "Show Date"}
            </button>
          </div>
        );
    }

  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );