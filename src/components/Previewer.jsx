var React = require('react');
var marked = require('marked');

function Previewer(props) {
	var markdown = {
		__html: marked.parse(props.text)
	};
	
	return <div>
		<div className="col-sm-6">
			<textarea className="form-control" rows="20" onChange={props.onUpdateText}>{props.text}</textarea>
		</div>
		<div className="col-sm-6">
			<div dangerouslySetInnerHTML={markdown}></div>
		</div>
	</div>
}

module.exports = Previewer;
