import css from './Scss/Switch.scss';
class Switch extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            checked:this.props.checked
        }
	}
    changeHandle(){
        this.setState({checked:!this.state.checked})
    }
    render() {
        return(
            <div className="switch">
                <input type="checkbox" checked={this.state.checked} onChange={this.changeHandle.bind(this)} id="checked_1"/>
                <label htmlFor="checked_1"></label>
            </div>
        )
    }
}

Switch.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    checked:React.PropTypes.bool
}
Switch.defaultProps={
    checked:false
};//设置默认属性

//导出组件
export default Switch;