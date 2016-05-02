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
		<Footer />
	</div>
}

module.exports = Home;
