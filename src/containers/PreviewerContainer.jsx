var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var PreviewerConnector = require('../connectors/PreviewerConnector.jsx');
var Header = require('../components/Header.jsx');
var Footer = require('../components/Footer.jsx');

function PreviewerContainer(props) {
	return <div>
		<div style={{minHeight: "calc(100vh - 40px)"}}>
			<Header header="Previewer" />
			<PreviewerConnector />
		</div>
		<Footer>
			<span style={{paddingRight: '8px'}}>Copyright 2016 Gordon Doskas</span>
			<a href="https://github.com/gordon2012/react-boilerplate" target="_blank" className="btn btn-sm btn-default">GitHub</a>
			<Link to="/"><button type="button" className="btn btn-sm btn-success">Home</button></Link>
		</Footer>
	</div>
}

module.exports = PreviewerContainer;
