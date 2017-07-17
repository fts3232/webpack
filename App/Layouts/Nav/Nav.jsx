//Component1.jsx
import Link from 'react-router-dom/Link.js';
import css from './Scss/Main.scss';
import Svg from '../../Components/Svg';
import {hasClass,addClass,removeClass} from '../../Common/functions.js';
import PubSub from 'pubsub-js';
class Nav extends React.Component {
	constructor(props){
		super(props);
	}
    menuClickHandle(ref){
        if(this.props.status=='pack')
            return false;
        for(let v in this.refs){
            if(v==ref)
                continue;
            if(v.indexOf('menuList')!=-1 && v.indexOf('-')==-1)
                removeClass(this.refs[v],'active')
            if(v.indexOf('categoryIcon')!=-1)
                this.refs[v].changeSvg('Plus')
        }
        if(typeof this.refs[ref+'-categoryIcon'] !='undefined')
            this.refs[ref+'-categoryIcon'].changeSvg('Minus')
        addClass(this.refs[ref],'active')
    }
    subMenuClickHandle(ref){
        if(this.props.status=='pack')
            return false;
        for(let v in this.refs){
            if(v==ref)
                continue;
             if(v.indexOf('subMenu')!=-1)
                removeClass(this.refs[v],'active')
        }
        if(ref.indexOf('categoryName-List')!=-1){
            addClass(this.refs[ref],'active')
        }
        addClass(this.refs[ref],'active')
    }
    subMenu(menu,ref){
        let parentActive = false;
        let dom = (
            <ul className="sub-menu">
                {menu.subMenu.map((menu,i)=>{
                    let className = "";
                    if(location.pathname== global.Config.Root + menu.path){
                        className = "active";
                        parentActive = true;
                    }
                    let subRef = ref+'-sub-menu-list'+i;
                    return (
                        <li className={className} onClick={this.subMenuClickHandle.bind(this,subRef)} ref={subRef}>
                            <Link to={global.Config.Root + menu.path}>{menu.cnName}</Link>
                        </li>
                    )
                })}
            </ul>
        )
        return {dom:dom,parentActive:parentActive}
    }
    componentDidMount(){
        let _this = this;
        PubSub.subscribe('changeNavStatus', function(channel, msg){
            if(hasClass(_this.refs['nav'],'pack')){
                removeClass(_this.refs['nav'],'pack');
            }else{
                addClass(_this.refs['nav'],'pack');
            }
        });
    }
    render() {
        return (
            <div className="left-nav" ref="nav">
                <a href="/"><div className="logo"></div></a>
                <ul className="nav">
                    {this.props.menu.map((menu,i)=>{
                        let ref = "menuList"+i;
                        if(typeof menu.path == 'undefined'){
                            let subIconRef = ref+'-categoryIcon';
                            let subMenu = this.subMenu(menu,ref);
                            let className = subMenu.parentActive==true?"menu-list active":"menu-list";
                            let iconName = subMenu.parentActive==true?"Minus":"Plus";
                            return (
                                <li className={className} ref={ref} >
                                    <a href="javascript:void(0)" onClick={this.menuClickHandle.bind(this,ref)}>
                                        <Svg name={menu.name} />
                                        <span className="category-name" >{menu.cnName}</span>
                                        <Svg name={iconName} className="switch"  ref={subIconRef}/>
                                    </a>
                                    {subMenu.dom}
                                </li>
                            )
                        }else{
                            let className = location.pathname== global.Config.Root + menu.path?"menu-list active":"menu-list";
                            return (
                                <li className={className} ref={ref} onClick={this.menuClickHandle.bind(this,ref)}>
                                    <Link to={global.Config.Root + menu.path}>
                                        <Svg name={menu.name} />
                                        <span className="category-name">{menu.cnName}</span>
                                    </Link>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
            
        )
    }
}

Nav.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    menu:React.PropTypes.object
}
Nav.defaultProps={
    menu:[]
};//设置默认属性

//导出组件
export default Nav;