var React = require('react');

var Controlls = React.createClass({
  propTypes : {
    countdownStatus : React.PropTypes.string.isRequired,
    onStatusChange : React.PropTypes.func.isRequired
  },
  onStatusChange : function (newState) {
    return () => {
      this.props.onStatusChange(newState);
    }
  },
  render: function() {
    var {countdownStatus} = this.props;

    var renderStartStopButton = () => {
      if(countdownStatus === 'started'){
        return (<button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>)
      }else if (countdownStatus === 'paused') {
        return (<button className="button primary" onClick={this.onStatusChange('started')}>Start</button>)
      }
    }
    return (
      <div className="controlls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = Controlls;
