const blockStyleMap=[
	{label: 'H1', style: 'header-one'},
    {label: 'H2', style: 'header-two'},
    {label: 'H3', style: 'header-three'},
    {label: 'H4', style: 'header-four'},
    {label: 'H5', style: 'header-five'},
    {label: 'H6', style: 'header-six'},
    {label: 'Blockquote', style: 'blockquote'},
    {label: 'UL', style: 'unordered-list-item'},
    {label: 'OL', style: 'ordered-list-item'},
    {label: 'Code Block', style: 'code-block'},
]
class BlockStylePlugin extends React.Component {
	constructor(props){
		super(props);
		
	}
	onToggle(style,e){
		e.preventDefault();
		this.props.onToggle(style)
	}
	render(){
		let selection = this.props.editorState.getSelection();
		let blockType = this.props.editorState
		    .getCurrentContent()
		    .getBlockForKey(selection.getStartKey())
		    .getType();
		return (
			<div className="btn-group">
				{blockStyleMap.map((val)=>{
					let className = 'button';
					if(val.style==blockType){
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

export default BlockStylePlugin;