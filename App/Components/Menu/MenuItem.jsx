import Link from 'react-router-dom/Link';
import MixinComponent from './MixinComponent';
class MenuItem extends MixinComponent {
	constructor(props){
		super(props);
	}
    componentDidMount(){
        this.rootMenu().state.menuItems[this.props.index] = this;
    }
    handleClick(){
        this.rootMenu().handleSelect(this.props.index,this.indexPath())
    }
    active() {
        return this.props.index == this.rootMenu().state.activeIndex;
    }
    render() {
        return (
            <li className={this.classNames('menu-item',{'is-active':this.active()})} onClick={this.handleClick.bind(this)}>
                {this.props.to!=null?(<Link to={this.props.to}>{this.props.children}</Link>):this.props.children}
            </li>
        )
    }
}

MenuItem.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    index:React.PropTypes.string.isRequired,
    to:React.PropTypes.string
}
MenuItem.defaultProps={
    
};//设置默认属性

//导出组件
export default MenuItem;