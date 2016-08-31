var React = require('react');
var Clock = require('Clock');
var Controlls = require('Controlls');

var Timer = React.createClass({
  getInitialState : function() {
    return {
      count : 0,
      countdownStatus : 'stopped'
    };
  },
  startTimer : function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count : newCount
      });
    }, 1000);
  },
  componentDidUpdate : function (prevProps, prevStates) {
    if(this.state.countdownStatus !== prevStates.countdownStatus){
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped' :
          this.setState({
            count : 0
          });
        case 'paused' :
          clearInterval(this.timer);
          this.timer = undefined;
          break;
        default:
      }
    }
  },
  handleStatusChange : function (newState) {
      this.setState({
        countdownStatus : newState
      });
  },
  render: function() {
    var {count, countdownStatus} = this.state;
    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count}/>
        <Controlls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
      </div>
    );
  }
});

module.exports = Timer;
