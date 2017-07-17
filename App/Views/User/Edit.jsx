import Form from '../../Components/Form';
class Edit extends React.Component {
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
                    <div className="form-item">
                        <label>Email address</label>
                        <div className="form-content">
                            <input type="text" className="form-input" />
                        </div>
                    </div>
                </Form>
            </div>
        )
    }
}

Edit.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    url: React.PropTypes.string,
    columns:React.PropTypes.array,
    action:React.PropTypes.array,
    tools:React.PropTypes.array
}
Edit.defaultProps={
    url:'/api/getUser'
};//设置默认属性

//导出组件
export default Edit;