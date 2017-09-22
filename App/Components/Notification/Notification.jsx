import Component from '../Component';
import Css from './Scss/Main.scss';
import Icon from '../Icon';
class Notification extends Component {
  constructor(props){
    super(props)   
    this.state = {
      visible:false,
    }
    this.timer = null;
  }
  componentDidMount(){
    let {duration,willUnmount} = this.props
    setTimeout(()=>{
      this.setState({visible:true})
    },100)
    if(duration!=0){
      this.timer = setTimeout(()=>{
        willUnmount();
      },duration)
    }
  }
  closeHandle(){
    let {willUnmount} = this.props
    this.setState({visible:false},()=>{
      setTimeout(()=>{
        clearTimeout(this.timer);
        willUnmount();
      },300)
    })
  }
  render(){
    let {message,title,type,top} = this.props;
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
      <div className={this.className('notification',{'enter-active':!visible})} style={this.style({'top':top})}>
        {type?(<Icon className={this.classNames('notification-status',`is-${type}`)} iconName={icon}/>):null}
        <div className={this.classNames('notification-group',type && 'is-with-icon')}>
          <div className="notification-title">{title}</div>
          <div className="notification-content">{message}</div>
        </div>
        <Icon className="close" iconName="close" onClick={this.closeHandle.bind(this)} />
      </div>
    )
  }
}

Notification.PropTypes = {
  title:React.PropTypes.string,
  message: React.PropTypes.string,
  type: React.PropTypes.oneOf(['success','warning','info','error']),
  willUnmount: React.PropTypes.func,
  duration:React.PropTypes.number,
  offset:React.PropTypes.number,
}

Notification.defaultProps = {
  titel:'',
  message:'',
  type:null,
  duration:3000,
  offset:0,
  willUnmount:()=>{},
}

export default Notification;