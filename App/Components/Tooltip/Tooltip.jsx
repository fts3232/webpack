import css from './Scss/Main.scss';
import Component from '../Component';
class Tooltip extends Component {
	constructor(props){
		super(props);
	}
	onMouseOver(){
		this.refs['poper'].style.display="block"
	}
	onMouseOut(){
		this.refs['poper'].style.display="none"
	}
	componentDidMount(){
		 let {placement,arrow,space} = this.props;
		 let relWidth = this.refs['rel'].offsetWidth;
		 let relHeight = this.refs['rel'].offsetHeight;
		 let poperWidth = this.refs['poper'].offsetWidth;
		 let poperHeight = this.refs['poper'].offsetHeight;
		 let top;
		 let left;
		 switch(placement){
			case 'top':
				top = 0 - poperHeight - arrow - space;
				left = 0 - (poperWidth/2) + (relWidth/2);
				break;
			case 'top-left':
				top = 0 - poperHeight - arrow - space;
				left = 0;
				break;
			case 'top-right':
				top = 0 - poperHeight - arrow - space;
				left = 0 - poperWidth + relWidth
				break;
			case 'bottom':
				top = 0 + relHeight + arrow + space;
				left = 0 - (poperWidth/2) + (relWidth/2);
				break;
			case 'bottom-left':
				top = 0 + relHeight + arrow + space;
				break;
			case 'bottom-right':
				top = 0 + relHeight + arrow + space;
				left = 0 - poperWidth + relWidth
				break;
			case 'left':
				left = 0 - poperWidth - arrow - space;
				top = 0 - (poperHeight/2)+(relHeight/2);
				break;
			case 'left-top':
				left = 0 - poperWidth - arrow - space;
				top = 0;
				break;
			case 'left-bottom':
				left = 0 - poperWidth - arrow - space;
				top = 0 - poperHeight + relHeight;
				break;
			case 'right':
				left = 0 + relWidth + arrow + space;
				top = 0 - (poperHeight/2)+(relHeight/2);
				break;
			case 'right-top':
				left = 0 + relWidth + arrow + space;
				top = 0;
				break;
			case 'right-bottom':
				left = 0 + relWidth + arrow + space;
				top = 0 - poperHeight + relHeight;
				break;
		}
		this.refs['poper'].style.top = `${top}px`;
		this.refs['poper'].style.left = `${left}px`;
		this.refs['poper'].style.display="none"
	}
    render() {
        let {content,placement,children} = this.props;
        return(
            <div className={this.className('tooltip')} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}>
            	<div className="tooltip-rel" ref='rel'>
            		{children}
            	</div>
            	<div className={this.classNames('tooltip-poper',placement)} ref='poper'>
            		<span>{content}</span>
            		<div className="arrow" ref='arrow' ></div>
            	</div>
            </div>
        )
    }
}

Tooltip.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    content:React.PropTypes.string,
    arrow:React.PropTypes.number,
    space:React.PropTypes.number,
    placement:React.PropTypes.oneOf(['top','top-left','top-right','left','left-top','left-bottom','right','right-top','right-bottom','bottom','bottom-left','bottom-right']),
}
Tooltip.defaultProps={
	content:'',
	placement:'top',
	arrow:6,
	space:3,
};//设置默认属性

//导出组件
export default Tooltip;