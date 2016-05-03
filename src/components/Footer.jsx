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
}

function Footer(props) {
	return <footer className="col-sm-12 text-center" style={style.footer}>
		<div style={style.div}>
			{props.children}
		</div>
	</footer>
}

module.exports = Footer;
