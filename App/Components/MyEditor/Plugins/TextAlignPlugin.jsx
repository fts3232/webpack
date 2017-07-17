const textAlignStyleMap = {
	'text-align-center':{
		'display':'inline-block',
		'width':'100%',
		'text-align':'center',
	},
	'text-align-left':{
		'display':'inline-block',
		'width':'100%',
		'text-align':'left',
	},
	'text-align-right':{
		'display':'inline-block',
		'width':'100%',
		'text-align':'right',
	},
	'float-left':{
		'float':'left',
	},
	'float-right':{
		'float':'right',
	}
}
const textAlignMap = [
	{'label':'text-left','style':'text-align-left'},
	{'label':'text-center','style':'text-align-center'},
	{'label':'text-right','style':'text-align-right'},
	{'label':'float-left','style':'float-left'},
	{'label':'float-right','style':'float-right'},
]
class TextAlignPlugin extends React.Component {
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
				{textAlignMap.map((val)=>{
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

export {TextAlignPlugin,textAlignStyleMap};