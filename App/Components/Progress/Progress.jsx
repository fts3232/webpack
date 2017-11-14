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
    perimeter(){
        const radius = 50 - parseFloat(this.relativeStrokeWidth()) / 2;
        return 2 * Math.PI * radius;
    }
    relativeStrokeWidth(): string {
        const { strokeWidth, width } = this.props;
        return (strokeWidth / width * 100).toFixed(1);
    }
    circlePathStyle(){
        const perimeter = this.perimeter();
        return {
            strokeDasharray: `${perimeter}px,${perimeter}px`,
            strokeDashoffset: (1 - this.props.percentage / 100) * perimeter + 'px',
            transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
        };
    }
    render() {
        let {percentage,textInside,strokeWidth,type} = this.props;
        let {status} = this.state;
        strokeWidth = textInside?14:type=='circle'?4.8:6;
        let icon;
        if(status){
            if(type=='circle'){
                icon = status=='success'?'check':'times'
            }else{
                icon = status=='success'?'check-circle':'times-circle'
            }
        }
        return(
            <div className={this.className('progress',type=='circle' && 'progress-circle',status && `is-${status}`,textInside && 'text-inside')}>
            	{type=='line'?(
                    <div className="progress-bar">
                        <div className="progress-bar-outer" style={{height:`${strokeWidth}px`}}>
                            <div className="progress-bar-inner" style={{width:`${percentage}%`}}>
                                {textInside?(
                                    <div className={this.classNames('progress-bar-inner-txt')}>
                                        {`${percentage}%`}
                                    </div>
                                ):null}
                            </div>
                        </div>
                    </div>
                ):(
                    <div className="progress-circle">
                        <svg viewBox="0 0 100 100">
                            <path className="progress-circle-track" d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94"  strokeWidth={strokeWidth}></path>
                            <path className="progress-circle-path" d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94" strokeWidth={strokeWidth} style={this.circlePathStyle()}></path>
                        </svg>
                    </div>
                )}
            	{textInside?null:(
            		<div className={this.classNames('progress-txt')}>
	            		{status?(<Icon iconName={icon}/>):`${percentage}%`}
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
    strokeWidth:React.PropTypes.number,
    type:React.PropTypes.oneOf(['line','circle']),
    width:React.PropTypes.number,
}
Progress.defaultProps={
	percentage:0,
    strokeWidth:6,
	status:null,
	textInside:false,
    type:'line',
    width:126,
};//设置默认属性

//导出组件
export default Progress;