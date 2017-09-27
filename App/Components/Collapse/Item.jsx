import Component from '../Component';
import Icon from '../Icon';
import {throttle} from '../../Function/throttle-debounce.js';
class Item extends Component {
	constructor(props){
		super(props)   
		this.state = {
			expand:false,
		}
		this.timer =null;
		this.throttleClick  = throttle(300,(e)=>{this.onExpand(e)})
	}
	onExpand(e){
        e.stopPropagation();
        let {expand} = this.state;
        let _this = this;
        this.setState({expand:!expand},()=>{
            clearTimeout(_this.timer);
            if(!expand){
                _this.refs['body'].style.height = 0;
                _this.refs['body'].style.display = 'block';
                _this.refs['body'].style.height = _this.refs['body'].scrollHeight + 'px';
                _this.timer = setTimeout(() => {
                    _this.refs['body'].style.height = '';
                }, 300);
            }else{
                _this.refs['body'].style.height = _this.refs['body'].scrollHeight + 'px';
                _this.timer = setTimeout(() => {
                   _this.refs['body'].style.height = '0';
                   _this.timer = setTimeout(() => {
                       _this.refs['body'].style.display = 'none';
                    }, 300);
                }, 100);
            }
        })
    }
	render(){
		let {expand} = this.state;
		let {children,title} = this.props;
		return(
			<div className={this.classNames('collapse-item',{'is-expand':expand})} onClick={this.throttleClick.bind(this)}>
				<div className={this.classNames('collapse-item-header')}><Icon iconName="angle-down"/><span>{title}</span></div>
				<div className="collapse-item-body" ref='body'>{children}</div>
			</div>
		)
	}
}

Item.PropTypes = {
	title:React.PropTypes.string,
}

Item.defaultProps = {
	title:'',
}

export default Item;