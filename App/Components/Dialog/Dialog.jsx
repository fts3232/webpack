//Component1.jsx
import css from './Scss/Main.scss';
import Icon from '../Icon';
import Component from '../Component';
import Button from '../Button';
class Dialog extends Component {
	constructor(props){
		super(props);
        this.state = {
            'visible':props.visible || false,
            'enterActive':false,
        }
	}
    onCancel(){
        this.onClose();
    }
    onConfirm(){
        this.onClose();
        this.props.onConfirm();
    }
    onClose(){
        let _this = this;
        this.setState({enterActive:true},()=>{
            setTimeout(()=>{
                _this.setState({visible:false})
            },300)
        })
    }
    componentWillReceiveProps(props){
        let _this = this;
        this.setState({visible:props.visible || false,enterActive:props.visible },()=>{
            setTimeout(()=>{
                _this.setState({enterActive:false })
            },100)
        })
    }
    render() {
        let {visible,enterActive} = this.state;
        let {title,children,cancelBtnText,confirmBtnText} = this.props
        let style = visible?null:{'display':'none'}
        return (
            <div className={this.className('dialog-wrapper')} style={this.style(style)} ref='root'>
                <div className={this.classNames('dialog-mask',{'enter-active':enterActive})}></div>
                <div className={this.classNames('dialog',{'enter-active':enterActive})}>
                    <div className="dialog-header">
                        <span className="dialog-header-title">{title}</span>
                        <Icon className="close" iconName="close" onClick={this.onClose.bind(this)}/>
                    </div>
                    <div className="dialog-body">
                        {children}
                    </div>
                    <div className="dialog-footer">
                        <Button onClick={this.onCancel.bind(this)}>{cancelBtnText}</Button>
                        <Button onClick={this.onConfirm.bind(this)} type="primary">{confirmBtnText}</Button>
                    </div>
                </div>

            </div>
        )
    }
}

Dialog.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    title:React.PropTypes.string,
    beforeClose:React.PropTypes.func,
    showClose:React.PropTypes.bool,
    cancelBtnText:React.PropTypes.string,
    confirmBtnText:React.PropTypes.string,
    closeOnClickModal:React.PropTypes.bool,
    closeOnPressEscape:React.PropTypes.bool,
    onConfirm:React.PropTypes.func,
}
Dialog.defaultProps={
    title:'提示',
    onConfirm:()=>{},
    showClose:true,
    cancelBtnText:'取消',
    confirmBtnText:'确定',
};//设置默认属性

//导出组件
export default Dialog;