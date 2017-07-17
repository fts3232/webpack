import css from './Scss/Main.scss';
import Link from 'react-router-dom/Link.js';
class Breadcrumb extends React.Component {
	constructor(props){
		super(props)   
	}
	render(){
		let length = this.props.item.length
		return (
			<div className="breadcrumb">
				{this.props.item.map((val,key)=>{
					return(
						<span className='breadcrumb-item'>
							<span className='breadcrumb-item-inner'>
								{key+1==length?(val.name):(<Link to={global.Config.Root +val.path}>{val.name}</Link>)}
							</span>
							{key+1==length?null:(<span className='breadcrumb-separator'>{this.props.separator}</span>)}
						</span>
						
					)
				})}
			</div>
		)
	}
}

Breadcrumb.PropTypes = {
	item:React.PropTypes.array,
	separator:React.PropTypes.string,
}

Breadcrumb.defaultProps = {
	item:[],
	separator:'/'
}

export default Breadcrumb;