import css from './Scss/Main.scss';
import Form from '../../Components/Form';
class LoginPage extends React.Component {
	constructor(props){
		super(props);
	}
    loginHandler(){
        $.ajax({
            url:''
        })
    }
    render() {
        $('.header').remove()
        $('.leftNav').remove()
        return (
        	<div className="login">
		        <div className="container">
                    <div className="title">SIGN IN</div>
                    <Form action="" type="post">
                        <div className="logo"></div>
                        <input className="form-control" type="text" placeholder="UserName"/>
                        <input className="form-control" type="password" placeholder="Password"/>
                        <button className="submitBtn">Login</button>
                        <label className="remember-me"> <input type="checkbox" value="remember-me" /> <span>Remember me</span></label>
                    </Form>
                </div>
		    </div>
        )
    }
}

LoginPage.propTypes={//属性校验器，表示改属性必须是bool，否则报错
}
LoginPage.defaultProps={
};//设置默认属性

//导出组件
export default LoginPage;


