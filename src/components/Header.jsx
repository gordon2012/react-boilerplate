var React = require('react');
var PropTypes = React.PropTypes;

function Header(props) {

	var subtext = props.subtext ? <p>{props.subtext}</p> : '';
	return <div className="jumbotron col-sm-12 text-center" style={{backgroundColor: 'rgba(0,0,0,0)'}}>
		<h1>{props.header}</h1>
		{subtext}
	</div>

}

Header.propTypes = {
	header: PropTypes.string.isRequired,
	subtext: PropTypes.string
}

module.exports = Header;
