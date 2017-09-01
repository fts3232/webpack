import css from './Scss/Main.scss';
import Component from '../Component';
class Icon extends Component {
	constructor(props){
		super(props);
		this.state = {
			icon:props.iconName
		}
	}
	componentWillReceiveProps(props){
		this.setState({'icon':props.iconName})
	}
	render() {
		return (
			<i className={this.classNames('icon','fa','fa-'+this.state.icon,{'fa-pulse':this.props.isPulse})} aria-hidden="true" onMouseOver={this.props.onMouseOver} onMouseOut={this.props.onMouseOut} onClick={this.props.onClick}></i>
		);
	}
}


Icon.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    iconName:React.PropTypes.string.isRequired,
    isPulse:React.PropTypes.bool,
    onMouseOver:React.PropTypes.func,
    onClick:React.PropTypes.func,
    onMouseOut:React.PropTypes.func,
}
Icon.defaultProps={
	isPulse:false,
	onMouseOver:()=>{},
	onClick:()=>{},
	onMouseOut:()=>{},
};//设置默认属性

export default Icon;