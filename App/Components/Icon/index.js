import css from './Scss/Main.scss';
import Component from '../Component';
class Icon extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<i className={this.classNames('icon','fa','fa-'+this.props.iconName,{'fa-pulse':this.props.isPulse})} aria-hidden="true"></i>
		);
	}
}


Icon.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    iconName:React.PropTypes.string.isRequired,
    isPulse:React.PropTypes.bool
}
Icon.defaultProps={
	isPulse:false
};//设置默认属性

export default Icon;