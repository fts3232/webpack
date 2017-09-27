import css from './Scss/Main.scss';
import Component from '../Component';
class Card extends Component {
	constructor(props){
		super(props)   
	}
	render(){
		let {children,header,bodyStyle} = this.props;
		return(
			<div className={this.className('card')}>
				{header && <div className="card-header">{header}</div>}
				<div className="card-body" style={bodyStyle}>
					{children}
				</div>
			</div>
		)
	}
}

Card.PropTypes = {
	header:React.PropTypes.node,
	bodyStyle:React.PropTypes.object,
}

Card.defaultProps = {
	bodyStyle:{}
}

export default Card;