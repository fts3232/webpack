import Svg from '../../Components/Svg';
import css from './Scss/Switch.scss';

class Switch extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="toggle-btn" onClick={this.props.clickHandle} >
                <Svg name="List"/>
            </div>
		)
	}
}

Switch.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    clickHandle:React.PropTypes.func
}
Switch.defaultProps={
    
};//设置默认属性

//导出组件
export default Switch;