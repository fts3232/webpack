import css from './Scss/Main.scss';
import Svg from '../Svg';
class Button extends React.Component {
	constructor(props){
		super(props)   
	}
	render(){
		let className = 'button';
		if(this.props.type)
			className += ' button-'+this.props.type;
		if(this.props.size) 
			className += ' button-'+this.props.size;
		if(this.props.disabled) 
			className += ' is-disabled';
		if(this.props.loading) 
			className += ' is-loading';
		return(
			<button className={className}>{this.props.loading?(<Svg name="Loading" />):null}<span>{this.props.children}</span></button>
		)
	}
}

Button.PropTypes = {
	type:React.PropTypes.string,
	size:React.PropTypes.string,
	loading:React.PropTypes.bool,
	plain:React.PropTypes.bool,
	disabled:React.PropTypes.bool,
}

Button.defaultProps = {
	type:null,
	size:null,
	loading:false,
	disabled:false
}

export default Button;