//Component1.jsx
import css from './Scss/Main.scss';
import Svg from '../Svg';
import Form from '../../Components/Form';
class Todo extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            'list':[
                {'tag':'this is test','isDone':false},
                {'tag':'this is done','isDone':true}
            ]
        }
	}
    deleteHandler(index){
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({list:list});
    }
    doneHandler(index){
        let list = this.state.list;
        if(list[index].isDone){
            list[index].isDone = false;
        }else{
            list[index].isDone = true;
        }
        this.setState({list:list});
    }
    addHandler(){
        let text = this.refs['text'].value;
        let list = this.state.list;
        list.push({'tag':text,'isDone':false});
        this.refs['text'].value='';
        this.setState({list:list});
    }
    render() {
        return (
            <div className="todo">
                <div className="title">备忘录</div>
                <ul className="list">
                    {this.state.list.map((val,index)=>{
                        let ref = 'tag-'+index;
                        let isDone = val.isDone==true?'done':'';
                        let className = "tag "+isDone;
                        return (
                            <li className={className} ref={this.ref}>
                                <div className="tick" onClick={this.doneHandler.bind(this,index)}>
                                    <Svg name="Tick"/>
                                </div>
                                <span className="content">{val.tag}</span>
                                <div className="close" onClick={this.deleteHandler.bind(this,index)}>
                                    <Svg name="Close"/>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <Form style="inline">
                    <div className="form-group">
                        <input type="text" className="form-control text" ref='text'/>
                    </div>
                    <button type='button' className="add-btn" onClick={this.addHandler.bind(this)} >添加</button>
                </Form>
            </div>
        )
    }
}

Todo.propTypes={//属性校验器，表示改属性必须是bool，否则报错

}
Todo.defaultProps={

};//设置默认属性

//导出组件
export default Todo;