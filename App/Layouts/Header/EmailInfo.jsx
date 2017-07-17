import Svg from '../../Components/Svg';
import css from './Scss/EmailInfo.scss';
import {hasClass,addClass,removeClass} from '../../Common/functions.js';
import PubSub from 'pubsub-js';
class EmailInfo extends React.Component {
	constructor(prop){
		super(prop);
	}
	clickHandle(){
        if(hasClass(this.refs['email'],'on')){
            removeClass(this.refs['email'],'on');
        }else{
            addClass(this.refs['email'],'on');
        }
        PubSub.publish('header-right-menu','email');
    }
    componentDidMount(){
        let _this = this;
        PubSub.subscribe('header-right-menu', function(channel, msg){
            if(msg!='email')
                removeClass(_this.refs['email'],'on');
        });
    }
	render(){
		return(
			<div className="email" ref="email">
                <a href="javascript:void(0)" onClick={this.clickHandle.bind(this)}>
                    <Svg name="Email"/>
                    <span className="badge">5</span>
                </a>
                <ul className="subMenu">
                    <h5>YOU HAVE 5 MAILS</h5>
                    <li>
                        <a href="javascript:void(0)">
                            <span>Email1</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <span>Email2</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <span>Email3</span>
                        </a>
                    </li>
                </ul>
            </div>
		)
	}
}

EmailInfo.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    
}
EmailInfo.defaultProps={
    
};//设置默认属性

//导出组件
export default EmailInfo;