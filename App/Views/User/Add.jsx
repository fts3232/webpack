import Form from '../../Components/Form';
class Add extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            data:''
        };
	}
    render() {
        return (
            <div className="content-block">
                <Form>
                </Form>
            </div>
        )
    }
}

Add.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    url: React.PropTypes.string,
    columns:React.PropTypes.array,
    action:React.PropTypes.array,
    tools:React.PropTypes.array
}
Add.defaultProps={
    url:'/api/getUser'
};//设置默认属性

//导出组件
export default Add;