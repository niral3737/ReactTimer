var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controlls = require('Controlls');

var Countdown = React.createClass({
  getInitialState : function() {
    return {
      count : 0,
      countdownStatus : 'stopped'
    };
  },
  startTimer : function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count : newCount >= 0 ? newCount : 0
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
  handleSetCountdown : function(seconds){
    this.setState({
      count : seconds,
      countdownStatus : 'started'
    })
  },
  handleStatusChange : function (newState) {
    this.setState({
      countdownStatus : newState
    });
  },
  render: function() {
    var {count, countdownStatus} = this.state;
    var renderControllArea = () => {
      if(countdownStatus !== 'stopped'){
        return (<Controlls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />);
      }else {
        return (<CountdownForm onSetCountdown={this.handleSetCountdown} />);
      }
    }

    return (
      <div>
        <Clock totalSeconds={count}/>
        {renderControllArea()}
      </div>
    );
  }
});

module.exports = Countdown;
