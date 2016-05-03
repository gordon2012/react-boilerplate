var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Header = require('../components/Header.jsx');
var Footer = require('../components/Footer.jsx');

function HomeContainer(props) {
	return <div>
		<div style={{minHeight: "calc(100vh - 40px)"}}>
			<Header header="React Boilerplate" subtext="A React boilerplate for FreeCodeCamp React projects"/>
			<Link to="/previewer">
				<button type="button" className="btn btn-lg btn-success">Previewer</button>
			</Link>
		</div>
		<Footer>
			<span style={{paddingRight: '8px'}}>Copyright 2016 Gordon Doskas</span>
			<a href="https://github.com/gordon2012/react-boilerplate" target="_blank" className="btn btn-sm btn-default">GitHub</a>
		</Footer>
	</div>
}

module.exports = HomeContainer;
