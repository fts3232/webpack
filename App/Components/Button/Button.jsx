import css from './Scss/Main.scss';
import Component from '../Component';
import Icon from '../Icon';
class Button extends Component {
	constructor(props){
		super(props)   
	}
	render(){
		return(
			<button onClick={this.props.onClick} className={
				this.classNames(
					'button',
					this.props.type && `button-${this.props.type}`,
					this.props.size && `button-${this.props.size}`,
					{'is-disabled':this.props.disabled},
					{'is-loading':this.props.loading},
					{'is-plain':this.props.plain}
				)}>
				{this.props.loading?(<Icon iconName="spinner" isPulse="true" />):null}
				<span>{this.props.children}</span>
			</button>
		)
	}
}

Button.PropTypes = {
	onClick: React.PropTypes.func,
	type: React.PropTypes.string,
	size: React.PropTypes.string,
	nativeType: React.PropTypes.string,
	loading: React.PropTypes.bool,
	disabled: React.PropTypes.bool,
	plain: React.PropTypes.bool
}

Button.defaultProps = {
	onClick: ()=>{},
	type: 'primary',
	size: '',
	nativeType: 'text',
	loading: false,
	disabled: false,
	plain: false
}

export default Button;