import Frame from './Frame';
import Header from './Header';
import Loader from './Loader';
import Nav from './Nav';
import MainContent from './MainContent';
import mock from '../Data/mock.js';
import Config from '../Config';
import request from 'superagent';
global.Config = Config;
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Redirect = ReactRouter.Redirect;
const Switch = ReactRouter.Switch;
const history = History.createBrowserHistory();
import {getCookie} from '../Common/functions.js';
class Core extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			route:[],
			menu:[],
			login:true
		}
	}
	componentDidMount(){
		let route = [];
		let _this = this;
		let menu;
		this.getMenu().then((data)=>{
			menu = data.menu
			data.menu.map((val)=>{
				if(typeof val.path !='undefined'){
					route.push(val)
				}
				if(typeof val.subMenu !='undefined'){
					val.subMenu.map((submenu)=>{
						route.push(submenu)
					})
				}
			})
			if(getCookie('userKey')==null){
				_this.setState({login:true,route:route,menu:menu})
			}
		})
	}
	getMenu(){
		return new Promise((resolve,reject)=>{
			request.post('/api/getMenu')
				   .end(function(err, res){
					 	if(res.ok){
					 		resolve(JSON.parse(res.text))
					 	}else{
					 		reject(err)
					 	}
				   })
		})
	}
	render() {
		let loginPath = global.Config.Root + "Login";
		if(this.state.menu==''){
			return false;
		}else{
			return (
				<Router history={history}>
					<Frame>
						<Header />
						<Nav menu={this.state.menu}/>
						<MainContent menu={this.state.menu} location={location}>
							<Switch>
								<Route path={loginPath} render={(props) =>(
									this.state.login ? (<Redirect to={global.Config.Root}/>):(<Loader name='LoginPage'/>)	
									)
								} />
								{this.state.route.map((val)=>{
									return (
										<Route exact path={global.Config.Root + val.path} render={(props) =>(
												this.state.login ? (<Loader path={val.path} name={val.component} menu={this.state.menu} match={props.match} location={location} />):(<Redirect to={loginPath}/>)
											)			
										} />
									)
								})}
								<Route render={(props) =>
									<Loader name='NotFound'/>		
								} />
							</Switch>
						</MainContent>
					</Frame>
				</Router>
			);
		}
		
	}
}

Core.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    
}
Core.defaultProps={
    
};//设置默认属性

export default Core;