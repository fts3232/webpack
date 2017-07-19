//react-router
import Loader from './Loader';

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Redirect = ReactRouter.Redirect;
const Switch = ReactRouter.Switch;
const history = History.createBrowserHistory();
class Routers extends React.Component{
	constructor(props){
		super(props);
	}
	getParent(){
		return this.context.component;
	}
	render() {
		let route = this.getParent().state.route
		//let loginPath = global.frameConfig.Root + "Login";
		return (
				<Router history={history}>
					<Switch>
						{/*<Route path={loginPath} render={(props) =>(
							this.state.login ? (<Redirect to={global.frameConfig.Root}/>):(<Loader name='LoginPage'/>)	
							)
						} />*/}
						{route.map((val)=>{
							return (
								<Route exact path={global.frameConfig.Root + val.path} render={(props) =>(
										<Loader path={val.path} name={val.component} location={props.location} />
										//this.state.login ? (<Loader path={val.path} name={val.component} menu={this.state.menu} location={props.location} />):(<Redirect to={loginPath}/>)
									)			
								} />
							)
						})}
						{/*<Route render={(props) =>
							<Loader name='NotFound'/>		
						} />*/}
					</Switch>
				</Router>
		);
	}
}

Routers.contextTypes = {
  component: React.PropTypes.any
};

Routers.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    
}
Routers.defaultProps={
    
};//设置默认属性

export default Routers;