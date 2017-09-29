import css from './Scss/Main.scss';
import Component from '../Component';
import Icon from '../Icon';
class Progress extends Component {
	constructor(props){
		super(props);
		this.state = {
			status:props.status,
		}
	}
    render() {
        let {percentage,textInside} = this.props;
        let {status} = this.state;
        return(
            <div className={this.className('progress',status && `is-${status}`,textInside && 'text-inside')}>
            	<div className="progress-bar">
            		<div className="progress-bar-outer">
            			<div className="progress-bar-inner" style={{width:`${percentage}%`}}>
            				{textInside?(
			            		<div className={this.classNames('progress-bar-inner-txt')}>
				            		{`${percentage}%`}
				            	</div>
			            	):null}
            			</div>
            		</div>
            	</div>
            	{textInside?null:(
            		<div className={this.classNames('progress-txt')}>
	            		{status?(<Icon iconName={status=='success'?'check-circle':'times-circle'}/>):`${percentage}%`}
	            	</div>
            	)}
            	
            </div>
        )
    }
}

Progress.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    percentage:React.PropTypes.number,
    status:React.PropTypes.oneOf(['success','error']),
    textInside:React.PropTypes.bool,
}
Progress.defaultProps={
	percentage:0,
	status:null,
	textInside:false,
};//设置默认属性

//导出组件
export default Progress;