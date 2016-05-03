var React = require('react');

function MainContainer(props) {
	return <div className="main-container">
		{props.children}
	</div>
}

module.exports = MainContainer;
