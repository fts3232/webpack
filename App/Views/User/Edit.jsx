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
                    <Form.Item>
                        <Form.Input/>
                    </Form.Item>
                    {/*<div className="form-item">
                        <label>Email address</label>
                        <div className="form-content">
                            <input type="text" className="form-input" />
                        </div>
                    </div>*/}
                </Form>
            </div>
        )
    }
}

Edit.propTypes={//属性校验器，表示改属性必须是bool，否则报错

}
Edit.defaultProps={
    url:'/api/getUser'
};//设置默认属性

//导出组件
export default Edit;