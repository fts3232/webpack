import css from './Scss/Main.scss';
import Component from '../Component';
class ButtonGroup extends Component {
	constructor(props){
		super(props)   
	}
	render(){
		return(
			<div className={this.classNames('button-group')}>
		        {this.props.children}
			</div>
		)
	}
}

ButtonGroup.PropTypes = {
	
}

ButtonGroup.defaultProps = {
	
}

export default ButtonGroup;