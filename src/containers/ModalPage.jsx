var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Header = require('../components/Header.jsx');
var Footer = require('../components/Footer.jsx');
var Modal = require('../components/Modal.jsx');


var ModalPage = React.createClass({
	getInitialState: function() {
		return {
			showModal: false
		}
	},

	handleClick: function() {
		this.setState({showModal: true});
	},

	handleClose: function() {
		this.setState({showModal: false});
	},

	render: function() {
		return <div>
			<div style={{minHeight: "calc(100vh - 40px)"}}>
				<Header header="Modal" subtext="A React component"/>
				<div className="text-center">
					<div className="btn btn-lg btn-success" onClick={this.handleClick}>Open Modal
					{ this.state.showModal && <Modal onClose={this.handleClose}>
							<h1>The Modal</h1>
							<p>This is a modal</p>
						</Modal>}
					</div>
				</div>

			</div>
			<Footer>
				<span style={{paddingRight: '8px'}}>Copyright 2016 Gordon Doskas</span>
				<a href="https://github.com/gordon2012/react-boilerplate" target="_blank" className="btn btn-sm btn-default">GitHub</a>
				<Link to="/"><button type="button" className="btn btn-sm btn-success">Home</button></Link>
			</Footer>
		</div>;
	}
});


module.exports = ModalPage;
