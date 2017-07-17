const inlineStyleMap = [
    {'label':'Bold','style':'BOLD'},
    {'label':'Italic','style':'ITALIC'},
    {'label':'Underline','style':'UNDERLINE'}
]
class InlineStylePlugin extends React.Component {
	constructor(props){
		super(props);
	}
	onToggle(style,e){
		e.preventDefault();
		this.props.onToggle(style)
	}
	render(){
		let currentStyle = this.props.editorState.getCurrentInlineStyle();
		return (
			<div className="btn-group">
				{inlineStyleMap.map((val)=>{
					let className = 'button';
					if(currentStyle.has(val.style)){
						className += ' active';
					}
					return (
						<button type="button" className={className} onMouseDown={this.onToggle.bind(this,val.style)}>{val.label}</button>
					)
				})}
			</div>
		)
	}
}

export default InlineStylePlugin;