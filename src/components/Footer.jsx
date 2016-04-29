var React = require('react');

var style = {
	footer: {
		background: 'grey',
		color: 'white',
		height: '40px',
		position: 'relative'
	},
	div: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)'
	},
	span: {
		paddingRight: '8px'
	}
}

function Footer(props) {
	return <footer className="col-sm-12 text-center" style={style.footer}>
		<div style={style.div}>
			<span style={style.span}>Copyright 2016 Gordon Doskas</span>
			<a href="https://github.com/gordon2012/markdown" target="_blank" className="btn btn-sm btn-default">GitHub</a>
		</div>
	</footer>
}

module.exports = Footer;
