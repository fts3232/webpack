import css from './Scss/Main.scss';
import Component from '../Component';
class Menu extends Component {
	constructor(props){
		super(props);
        this.state = {
            activeIndex: props.defaultActive,
            openMenus:[props.defaultOpen],
            menuItems: [],
            submenus: []
        }
        this.instanceType = 'Menu';
	}
    getChildContext(){
        return {
          component: this
        };
    }
    handleSelect(index,indexPath){
        let _this = this;
        let {submenus,openMenus} = this.state;
        for (const key in submenus) {
            submenus[key].onItemSelect(indexPath);
        }
        if(this.props.mode=='horizontal'){
            openMenus = [];
        }
        this.setState({activeIndex:index,openMenus:openMenus})
    }
    handleSubmenuClick(index, indexPath) {
        let isOpened = this.state.openMenus.indexOf(index) !== -1;

        if (isOpened) {
          this.closeMenu(index);

          
        } else {
          this.openMenu(index);

          
        }
      }
    openMenu(index){
         let { openMenus } = this.state;
        openMenus.push(index);

        this.setState({openMenus});
    }
    closeMenu(index){
        let { openMenus } = this.state;

        openMenus.splice(openMenus.indexOf(index), 1);

        this.setState({ openMenus });
    }
    render() {
        let theme;
        if(this.props.theme!='')
            theme = 'menu-theme-'+this.props.theme;
        return (
            <ul className={this.classNames('menu','menu-'+this.props.mode,theme)} defaultActive={this.props.defaultActive} mode={this.props.mode}>
                {this.props.children}
            </ul>
        )
    }
}

Menu.childContextTypes = {
    component: React.PropTypes.any
};

Menu.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    mode:React.PropTypes.oneOf(['horizontal','vertical']),
    defaultActive:React.PropTypes.number,
    defaultOpen:React.PropTypes.array,
    theme:React.PropTypes.string
}
Menu.defaultProps={
    mode:'horizontal',
    defaultActive:0,
    defaultOpen:[],
    theme:''
};//设置默认属性

//导出组件
export default Menu;