import css from './Scss/Main.scss';
class Grid extends React.Component {
	constructor(props){
		super(props)   
	}
	render(){
		let col = this.props.col
		return(
			<div className='row'>
				{col.map((val)=>{
					let className = 'col-'+val.span;
					return (
						<div className={className}>
							{val.content}
						</div>
					)
				})}
			</div>
		)
	}
}

Grid.PropTypes = {
	col:React.PropTypes.Array
}

Grid.defaultProps = {
	col:[]
}

export default Grid;