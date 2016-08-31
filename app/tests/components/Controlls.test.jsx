var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controlls = require('Controlls');


describe('Controlls', () => {
  it('should exists', () => {
    expect(Controlls).toExist();
  });

  describe('render', () => {
    it('should render pause when started', () => {
      var controlls = TestUtils.renderIntoDocument(<Controlls countdownStatus={'started'} />);
      var $el = $(ReactDOM.findDOMNode(controlls));
      var $pauseButton = $el.find('button:contains(Pause)')

      expect($pauseButton.length).toBe(1);
    });

    it('should render start when paused', () => {
      var controlls = TestUtils.renderIntoDocument(<Controlls countdownStatus={'paused'} />);
      var $el = $(ReactDOM.findDOMNode(controlls));
      var $startButton = $el.find('button:contains(Start)')

      expect($startButton.length).toBe(1);
    });
  });
});
