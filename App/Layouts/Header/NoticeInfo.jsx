import Svg from '../../Components/Svg';
import css from './Scss/NoticeInfo.scss';
import {hasClass,addClass,removeClass} from '../../Common/functions.js';
import PubSub from 'pubsub-js';
class NoticeInfo extends React.Component {
	constructor(prop){
		super(prop);
	}
	clickHandle(){
	    if(hasClass(this.refs['notice'],'on')){
            removeClass(this.refs['notice'],'on');
        }else{
            addClass(this.refs['notice'],'on');
        }
        PubSub.publish('header-right-menu','notice');
    }
    componentDidMount(){
        let _this = this;
        PubSub.subscribe('header-right-menu', function(channel, msg){
            if(msg!='notice')
                removeClass(_this.refs['notice'],'on');
        });
    }
	render(){
		return(
			 <div className="notice" ref="notice">
                <a href="javascript:void(0)" onClick={this.clickHandle.bind(this)}>
                    <Svg name="Notice"/>
                    <span className="badge">4</span>
                </a>
                <ul className="subMenu">
                    <h5>NOTIFICATIONS</h5>
                    <li>
                        <a href="javascript:void(0)">
                            <span>Notice1</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <span>Notice2</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <span>Notice3</span>
                        </a>
                    </li>
                </ul>   
            </div>
		)
	}
}

NoticeInfo.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    
}
NoticeInfo.defaultProps={
    
};//设置默认属性

//导出组件
export default NoticeInfo;