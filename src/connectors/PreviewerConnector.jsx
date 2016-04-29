var React = require('react');
var Previewer = require('../components/Previewer.jsx');


var PreviewerConnector = React.createClass({
	getInitialState: function() {
		return {
			text: ''
		}
	},

	handleUpdateText: function(e) {
		console.log('handleUpdateText');
		this.setState({
			text: e.target.value
		})
	},

	render: function() {
		return <Previewer
			onUpdateText={this.handleUpdateText}
			text={this.state.text}
		/>
	}
});


module.exports = PreviewerConnector;
