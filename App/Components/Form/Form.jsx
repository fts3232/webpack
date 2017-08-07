import css from './Scss/Main.scss';
class Form extends React.Component {
	constructor(props){
		super(props);
	}
    render() {
        let className = this.props.style==''?'form':'form form-'+this.props.style;
        return(
            <form className={className} action={this.props.action} type={this.props.type}>
                {this.props.children}
            </form>
        )
    }
}

Form.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    action:React.PropTypes.string,
    type:React.PropTypes.string,
}
Form.defaultProps={
    action:'',
    type:'get'
};//设置默认属性

//导出组件
export default Form;