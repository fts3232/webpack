import css from './Scss/Main.scss';
import Component from '../Component';
class Icon extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<i className={this.classNames('icon','fa','fa-'+this.props.iconName)} aria-hidden="true" onClick={this.props.onClick}></i>
		);
	}
}


Icon.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    iconName:React.PropTypes.string.isRequired,
    onClick:React.PropTypes.func
}
Icon.defaultProps={
    
};//设置默认属性

export default Icon;