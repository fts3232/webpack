//Component1.jsx
import css from './Scss/Main.scss';
import Svg from '../Svg';
import Form from '../../Components/Form';
import avatar from '../../../Assets/images/user1.png';
import avatar2 from '../../../Assets/images/user2.png';
class Chat extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            'msgList':[
                {name:'job',avatar:avatar,'time':'2017-06-04 12:00:00','msg':'hi'},
                {name:'job',avatar:avatar,'time':'2017-06-04 12:00:00','msg':'hi'},
                {name:'job',avatar:avatar,'time':'2017-06-04 12:00:00','msg':'hi'},
                {name:'jack',avatar:avatar2,'time':'2017-06-04 12:00:00','msg':'hi'},
                {name:'jack',avatar:avatar2,'time':'2017-06-04 12:00:00','msg':'hi'},
                {name:'jack',avatar:avatar2,'time':'2017-06-04 12:00:00','msg':'hi'}
            ],
            socket:null
        }
	}
    sendHandler(){
        let socket = this.state.socket;
        let msg = this.refs['text'].value;
        socket.emit('msg',msg);
        this.refs['text'].value = '';
    }
    init(){
        let socket = io("ws://localhost:3000");
        socket.on('msg',function(data){
            data = {name:'jack',avatar:avatar2,'time':'2017-06-04 12:00:00','msg':data}
            this.state.msgList.push(data)
            this.setState({msgList:this.state.msgList})
        });
        this.setState({socket:socket})
    }
    componentDidMount(){
        if(document.querySelector('socket')==null){
            let script = document.createElement('script');
            script.type="text/javascript";
            script.id="socket";
            script.src="http://localhost:3000/socket.io/socket.io.js"
            document.body.appendChild(script);
            let _this = this;
            script.onload = function(){
                _this.init();
            }
        }else{
            _this.init();
        }
        let length = $('.msg-list .msg').length;
        let height = 0;
        for(let i = 0;i<length;i++){
            height+=$('.msg-list .msg').eq(i).innerHeight()
        }
        $('.msg-list').animate({scrollTop: height}, 300); 
    }
    componentDidUpdate(){
        let length = $('.msg-list .msg').length;
        let height = 0;
        for(let i = 0;i<length;i++){
            height+=$('.msg-list .msg').eq(i).innerHeight()
        }
        $('.msg-list').animate({scrollTop: height}, 300); 
    }
    render() {
        let msgList = this.state.msgList;
        return (
            <div className="chat">
                <ul className="msg-list">
                    {msgList.map((val,key)=>{
                        let className = val.name=='job'?'out':'in'
                        className += ' msg';
                        return (
                            <li className={className}>
                                <img src={val.avatar} className="avatar"/>
                                <div className="content">
                                    <a className='name'>{val.name}</a><span className='time'>{val.time}</span>
                                    <div className="body">{val.msg}</div>
                                </div>
                            </li>
                        )
                        
                    })}
                </ul>
                <div className="chat-form">
                    <Form style="inline">
                        <div className="form-group">
                            <textarea className="form-control text" ref='text'></textarea>
                        </div>
                        <button type='button' className="send-btn" onClick={this.sendHandler.bind(this)}>发送</button>
                    </Form>
                </div>
            </div>
        )
    }
}

Chat.propTypes={//属性校验器，表示改属性必须是bool，否则报错

}
Chat.defaultProps={

};//设置默认属性

//导出组件
export default Chat;