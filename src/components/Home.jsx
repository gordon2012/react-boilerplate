var React = require('react');
var PreviewerConnector = require('../connectors/PreviewerConnector.jsx');
var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');

function Home(props) {
	return <div>
		<div style={{minHeight: "calc(100vh - 40px)"}}>
			<Header header="React Boilerplate" subtext="A React boilerplate for FreeCodeCamp React projects"/>
			<PreviewerConnector />
		</div>
		<Footer>
			<span style={{paddingRight: '8px'}}>Copyright 2016 Gordon Doskas</span>
			<a href="https://github.com/gordon2012/react-boilerplate" target="_blank" className="btn btn-sm btn-default">GitHub</a>
		</Footer>
	</div>
}

module.exports = Home;
