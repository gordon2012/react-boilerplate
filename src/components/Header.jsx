var React = require('react');

function Header(props) {
	return <div className="jumbotron col-sm-12 text-center" style={{backgroundColor: 'rgba(0,0,0,0)'}}>
		<h1>Markdown Previewer</h1>
		<p>A React project for FreeCodeCamp</p>
	</div>

}

module.exports = Header;
