var React = require('react');
var PropTypes = React.PropTypes;

function Modal(props) {
	var bgStyle = {
		position: 'fixed',
		width: '100%',
		height: '100%',
		top: '0',
		bottom: '0',
		left: '0',
		right: '0',
		background: 'rgba(0, 0, 0, 0.7)',
		transition: 'all 0.5s',
		visibility: 'visible',
		opacity: '1'
	};

	// if(props.show) {
	// 	bgStyle.visibility = 'visible';
	// 	bgStyle.opacity = '1';
	// }

	var modalStyle = {
		width: '80%',
		minHeight: '100px',
		position: 'relative',
		background: '#fff',
		color: 'black',
		margin: '120px auto'
	}

	return <div style={bgStyle}>
		<div style={modalStyle}>
			{props.children}
			<button className="btn btn-lg btn-danger" onClick={props.onClose}>Close</button>
		</div>
	</div>

}

Modal.propTypes = {
	onClose: PropTypes.func
}

module.exports = Modal;
