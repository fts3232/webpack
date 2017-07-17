import Svg from '../../Components/Svg';
import avatar from '../../../Assets/images/account.png';
import css from './Scss/UserMenu.scss';
import Link from 'react-router-dom/Link.js';
import {hasClass,addClass,removeClass} from '../../Common/functions.js';
import PubSub from 'pubsub-js';
class UserMenu extends React.Component {
	constructor(prop){
		super(prop);
	}
	clickHandle(){
        if(hasClass(this.refs['usermenu'],'on')){
            removeClass(this.refs['usermenu'],'on');
        }else{
            addClass(this.refs['usermenu'],'on');
        }
        PubSub.publish('header-right-menu','usermenu');
	}
    componentDidMount(){
        let _this = this;
        PubSub.subscribe('header-right-menu', function(channel, msg){
            if(msg!='usermenu')
                removeClass(_this.refs['usermenu'],'on');
        });
    }
	render(){
		return(
			<div className="usermenu" ref="usermenu">
                <a href="javascript:void(0)" onClick={this.clickHandle.bind(this)}>
                    <img className="avatar" src={avatar}/>
                    <span className="user-name">John Doe</span>
                    <span className="caret"></span>
                </a>
                <ul className="sub-menu" ref="subMenu">
                    <a href="javascript:void(0)">
                        <li>
                            <Svg name="Profile" />
                            <span>Profile</span>
                        </li>
                    </a>
                    <Link to={global.Config.Root+"Setting"}>
                        <li>
                            <Svg name="Setting" />
                            <span>Settings</span>
                        </li>
                    </Link>
                    <a href="javascript:void(0)">
                        <li>
                            <Svg name="LogOut" />
                            <span>Log Out</span>
                        </li>
                    </a>
                </ul>
            </div>
		)
	}
}

UserMenu.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    
}
UserMenu.defaultProps={
    
};//设置默认属性

//导出组件
export default UserMenu;