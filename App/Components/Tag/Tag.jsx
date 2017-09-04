import Component from '../Component';
import Css from './Scss/Main.scss';
import Icon from '../Icon';
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
class Tag extends Component {
	constructor(props){
		super(props);
        this.state = {
            visible:true,
        }
	}
    closeHandle(){
        helper.addClass(this.refs['root'],'fade-out');
        setTimeout(()=>{
            this.setState({visible:false});
        },1000)
        
    }
    render() {
        let {children,type,close} = this.props
        let {visible} = this.state;

        return visible?(
            <span ref='root' className={this.classNames(
                'tag',
                type && `tag-${type}`)}>
           
                <span>{children}</span>
                {close?(<Icon className="close" onClick={this.closeHandle.bind(this)} iconName="close"/>):null}

            </span>
        ):null;
    }
}


Tag.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    type:React.PropTypes.oneOf(['primary', 'gray', 'success', 'warning', 'danger']),
    closable:React.PropTypes.bool,
}
Tag.defaultProps={
    type:false,
    close:true,
};//设置默认属性

//导出组件
export default Tag;