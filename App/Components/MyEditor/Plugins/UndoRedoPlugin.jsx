class UndoRedoPlugin extends React.Component {
	constructor(props){
		super(props);
	}
	undo(e){
		e.preventDefault();
		let newState = this.props.EditorState.undo(this.props.editorState)
		this.props.onChange(newState)
	}
	redo(e){
		e.preventDefault();
		let newState = this.props.EditorState.redo(this.props.editorState)
		this.props.onChange(newState)
	}
	render(){
		return (
			<div className="btn-group">
				<button type="button" onMouseDown={this.undo.bind(this)} className='button'>Undo</button>
                <button type="button" onMouseDown={this.redo.bind(this)} className='button'>Redo</button>
			</div>
		)
	}
}

export default UndoRedoPlugin;