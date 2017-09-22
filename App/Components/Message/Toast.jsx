import Component from '../Component';
import Css from './Scss/Main.scss';
import Icon from '../Icon';
class Toast extends Component {
  constructor(props){
    super(props)   
    this.state = {
      visible:false,
    }
  }
  componentDidMount(){
    let {duration,willUnmount} = this.props
    setTimeout(()=>{
      this.setState({visible:true})
    },300)
    if(duration!=0){
      setTimeout(()=>{
        willUnmount();
      },duration)
    }
  }
  closeHandle(){
    let {willUnmount,onClose} = this.props
    this.setState({visible:false},()=>{
      setTimeout(()=>{
        willUnmount();
        onClose();
      },300)
    })
  }
  render(){
    let {message,type,showClose} = this.props;
    let visible = this.state.visible;
    let icon;
    switch(type){
      case 'info':
        icon = 'info'
        break;
      case 'success':
        icon = 'check'
        break;
      case 'error':
        icon = 'times'
        break;
      case 'warning':
        icon = 'exclamation'
        break;
    }
    return(
      <div className={this.className('toast',`toast-${type}`,{'enter-active':!visible})}>
        <Icon className="img" iconName={icon}/>
        <span className="text">{message}</span>
        {showClose?(<Icon className="close" iconName="close" onClick={this.closeHandle.bind(this)}/>):null}
      </div>
    )
  }
}

Toast.PropTypes = {
  message: React.PropTypes.string,
  type: React.PropTypes.oneOf(['success','warning','info','error']),
  duration:React.PropTypes.number,
  showClose:React.PropTypes.bool,
  willUnmount:React.PropTypes.func,
  onClose:React.PropTypes.func,
}

Toast.defaultProps = {
  message:'',
  type:'info',
  duration:3000,
  showClose:false,
  onClose:()=>{},
  willUnmount:()=>{},
}

export default Toast;