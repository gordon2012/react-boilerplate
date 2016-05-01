var React = require('react');

function Header(props) {
	return <div className="jumbotron col-sm-12 text-center" style={{backgroundColor: 'rgba(0,0,0,0)'}}>
		<h1>React Boilerplate</h1>
		<p>A React boilerplate for FreeCodeCamp React projects</p>
	</div>

}

module.exports = Header;
