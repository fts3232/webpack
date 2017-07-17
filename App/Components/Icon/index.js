import css from './Scss/Main.scss';
import Component from '../Component';
class Icon extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<i className={this.classNames('icon','icon-'+this.props.type)}></i>
		);
	}
}


Icon.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    type:React.PropTypes.string.isRequired
}
Icon.defaultProps={
    
};//设置默认属性

export default Icon;