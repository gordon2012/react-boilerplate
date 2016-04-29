var React = require('react');
var PreviewerConnector = require('../connectors/PreviewerConnector.jsx');

function Home(props) {
	return <div>
		<div className="jumbotron col-sm-12 text-center">
			<h1>Markdown Previewer</h1>
			<p>A React project for FreeCodeCamp</p>
		</div>
		<PreviewerConnector />

		<div className="col-sm-12 text-center" style={{background: 'grey', color: 'white', height: '40px', position: 'relative'}}>
			<div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
				<span style={{paddingRight: '8px'}}>Copyright 2016 Gordon Doskas</span>
				<a href="https://github.com/gordon2012/markdown" target="_blank" className="btn btn-sm btn-default">GitHub</a>
			</div>
		</div>
	</div>
}

module.exports = Home;
