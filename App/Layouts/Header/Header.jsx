import css from './Scss/Main.scss';
import Switch from './Switch.jsx';
import Search from './Search.jsx';
import EmailInfo from './EmailInfo.jsx';
import NoticeInfo from './NoticeInfo.jsx';
import UserMenu from './UserMenu.jsx';
import PubSub from 'pubsub-js';
import {hasClass,addClass,removeClass} from '../../Common/functions.js';
class Header extends React.Component {
	constructor(props){
		super(props);
	}
    clickHandle(){
        if(hasClass(this.refs['header'],'pack')){
            removeClass(this.refs['header'],'pack');
        }else{
            addClass(this.refs['header'],'pack');
        }
        PubSub.publish('changeNavStatus',true);
    }
    render() {
        return (
            <div className="header" ref="header">
                <Switch clickHandle = {this.clickHandle.bind(this)}/>
                <Search />
                <div className="menu-right">
                    <EmailInfo />
                    <NoticeInfo />
                    <UserMenu />
                </div>
            </div>
        )
    }
}

Header.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    
}
Header.defaultProps={
    
};//设置默认属性

//导出组件
export default Header;