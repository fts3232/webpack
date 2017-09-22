import css from './Scss/Main.scss';
import Component from '../Component';
import Icon from '../Icon';
class Alert extends Component {
	constructor(props){
		super(props)
	}
	closeHandle(){
		let _this = this;
		this.refs['alert'].style.opacity = '0';
		setTimeout(function(){
			_this.refs['alert'].remove();
		},500)
	}
	render(){
		let {title,type,closeText,closable,description,showIcon} = this.props;
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
			<div className={this.className('alert',this.props.type &&`alert-${type}`)} ref="alert">
				{showIcon?(<Icon className="alert-icon" iconName={icon}/>):null}
				<div className="alert-content">
					<span className={this.classNames('alert-title',{'is-bold':description})}>{title}</span>
					{description?(<p className="alert-description">{description}</p>):null}
				</div>
				{closable?closeText?(
					<span className="close" onClick={this.closeHandle.bind(this)}>{closeText}</span>
				):(
					<Icon className="close" iconName="close" onClick={this.closeHandle.bind(this)}/>
				):null}
			</div>
		)
	}
}

Alert.PropTypes = {
	title:React.PropTypes.string,
	description:React.PropTypes.string,
	type:React.PropTypes.oneOf(['success','warning','info','error']),
	closable:React.PropTypes.bool,
	closeText:React.PropTypes.string,
	showIcon:React.PropTypes.bool,
}

Alert.defaultProps = {
	title:'',
	description:'',
	closable:true,
	closeText:null,
	type:'info',
	showIcon:false,
}

export default Alert;