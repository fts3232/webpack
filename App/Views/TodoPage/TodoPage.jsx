//Component1.jsx
/*import React from 'react';*/
import Todo from '../../Components/Todo';
class TodoPage extends React.Component {
	constructor(props){
		super(props);
	}
    render() {
        return (
        	<div className="content-block">
            	<Todo />
            </div>
        )
    }
}

TodoPage.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    
}
TodoPage.defaultProps={
    
};//设置默认属性

//导出组件
export default TodoPage;