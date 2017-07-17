import MixinComponent from './MixinComponent';
import Icon from '../Icon';
class SubMenu extends MixinComponent {
	constructor(props){
		super(props);
        this.instanceType = 'SubMenu';
        this.state = {
            active: false
        };
	}
    getChildContext(){
        return {
          component: this
        };
    }
    active() {
        return this.state.active;
    }
    opened(){
        return this.rootMenu().state.openMenus.indexOf(this.props.index)!=-1;
    }
    onItemSelect(indexPath){
        this.setState({'active':indexPath.indexOf(this.props.index) !== -1});
    }
    handleMouseenter(){
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.rootMenu().openMenu(this.props.index);
        }, 300);
    }
    handleMouseleave(){
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {

            this.rootMenu().closeMenu(this.props.index);
        }, 300);
    }
    handleClick(){
        this.rootMenu().handleSubmenuClick(this.props.index, this.indexPath());
      }
    initEvent(){
        if(this.rootMenu().props.mode=='horizontal'){
            const triggerElm = ReactDOM.findDOMNode(this);
            triggerElm.addEventListener('mouseenter', this.handleMouseenter.bind(this));
            triggerElm.addEventListener('mouseleave', this.handleMouseleave.bind(this));
        }else{
            const triggerElm = this.refs['submenu-title'];

            triggerElm.addEventListener('click', this.handleClick.bind(this));
        }
    }
    componentDidMount(){
        this.rootMenu().state.submenus[this.props.index] = this;
        this.initEvent();
    }
    render() {
        let style = {};
        let icon = 'arrow-down'
        if(!this.opened()){
            style = {display:'none'}
        }
        if(this.rootMenu().props.mode=='horizontal'){
            icon = 'caret-bottom';
        }
        return (
            <li className={this.classNames('menu-submenu',{'is-active':this.active(),'is-opened':this.opened()})} index={this.props.index} >
                <div ref="submenu-title" className="menu-title">{this.props.title}<Icon type={icon}/></div>
                <ul className="menu" style={style}>
                    {this.props.children}
                </ul>
            </li>
            
        )
    }
}
SubMenu.childContextTypes = {
  component: React.PropTypes.any
};

SubMenu.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    index: React.PropTypes.string.isRequired
}
SubMenu.defaultProps={
    
};//设置默认属性

//导出组件
export default SubMenu;