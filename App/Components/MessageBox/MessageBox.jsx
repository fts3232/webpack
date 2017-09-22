import Component from '../Component';
import Css from './Scss/Main.scss';
import Icon from '../Icon';
import Button from '../Button';
import Input from '../Input';
class MessageBox extends Component {
  constructor(props){
    super(props)   
    this.state = {
      visible:false,
    }
  }
  componentDidMount(){
    let {closeOnPressEscape} =  this.props
    let _this = this;
    if(closeOnPressEscape){
      document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==27){ // 按 Esc 
          _this.cancelHandle();
         }
      }; 
    }
    setTimeout(()=>{
      this.setState({visible:true})
    },100)
  }
  componentWillUnmount(){
    let {closeOnPressEscape} =  this.props
    if(closeOnPressEscape){
      document.onkeydown = null;
    }
  }
  cancelHandle(){
    let {promise,onClose} = this.props
    promise.reject ();
    this.setState({visible:false},()=>{
      setTimeout(()=>{
        onClose();
      },300)
    })
  }
  confirmHandle(){
    let {promise,onClose} = this.props
    promise.resolve( this.inputValue || null );
    this.setState({visible:false},()=>{
      setTimeout(()=>{
        onClose();
      },300)
    })
  }
  onChange(value){
    console.log(value)
    this.inputValue = value;
  }
  render(){
    let { message,
          title,
          type,
          modal,
          showCancelButton,
          showConfirmButton,
          showInput,
          confirmButtonText,
          cancelButtonText,
          inputPlaceholder,
          closeOnClickModal
      } = this.props;
    let visible = this.state.visible;
    let icon;
    switch(type){
          case 'info':
            icon = 'info-circle'
            break;
          case 'success':
            icon = 'check-circle'
            break;
          case 'error':
            icon = 'times-circle'
            break;
          case 'warning':
            icon = 'exclamation-circle'
            break;
        }
    return(
      <div className="message-box-wrapper">
        <div className={this.className('message-box',{'enter-active':!visible})}>
          <div className="message-box-header">
            <div className="message-box-title">{title}</div>
            <Icon className="close" iconName="close" onClick={this.cancelHandle.bind(this)}/>
          </div>
          <div className="message-box-body">
            {type?(
              <div className={this.classNames('message-box-status',`is-${type}`)}>
                <Icon iconName={icon}/>
              </div>
            ):null}
            <div className="message-box-message" style={type?this.style({'marginLeft':'50px'}):null}>{message}</div>
            {showInput?(
              <div className="message-box-input">
                <Input onChange={this.onChange.bind(this)} placeholder={inputPlaceholder}/>
              </div>
            ):null}
          </div>
          <div className="message-box-btns">
            {showCancelButton?(<Button onClick={this.cancelHandle.bind(this)}>{cancelButtonText}</Button>):null}
            {showConfirmButton?(<Button type="primary" onClick={this.confirmHandle.bind(this)}>{confirmButtonText}</Button>):null}
          </div>
        </div>
        <div className="message-box-mask" onClick={closeOnClickModal?this.cancelHandle.bind(this):null}></div>
      </div>
    )
  }
}

MessageBox.PropTypes = {
  title:React.PropTypes.string,
  message: React.PropTypes.string,
  promise:React.PropTypes.object,
  type: React.PropTypes.oneOf(['success','warning','info','error']),
  modal:React.PropTypes.oneOf(['alert','confirm','prompt']),
  onClose: React.PropTypes.func,
  showCancelButton:React.PropTypes.bool,
  showConfirmButton:React.PropTypes.bool,
  showInput:React.PropTypes.bool,
  confirmButtonText:React.PropTypes.string,
  cancelButtonText:React.PropTypes.string,
  inputPlaceholder:React.PropTypes.string,
  closeOnClickModal:React.PropTypes.bool,
  closeOnPressEscape:React.PropTypes.bool,
}

MessageBox.defaultProps = {
  titel:'',
  message:'',
  type:null,
  modal:'alert',
  onClose:()=>{},
  showCancelButton:false,
  showConfirmButton:true,
  showInput:false,
  confirmButtonText:'确定',
  cancelButtonText:'取消',
  inputPlaceholder:'',
  closeOnClickModal:true,
  closeOnPressEscape:true,
}

export default MessageBox;