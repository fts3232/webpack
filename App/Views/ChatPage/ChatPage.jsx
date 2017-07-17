//Component1.jsx
/*import React from 'react';*/
import Chat from '../../Components/Chat';
class ChatPage extends React.Component {
	constructor(props){
		super(props);
	}
    render() {
        return (
        	<div className="content-block">
            	<Chat />
            </div>
        )
    }
}

ChatPage.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    
}
ChatPage.defaultProps={
    
};//设置默认属性

//导出组件
export default ChatPage;