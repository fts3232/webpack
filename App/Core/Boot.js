//
import request from 'superagent';
//加载模拟数据
import mock from '../Data/mock.js';
//加载functions
import * as functions from '../Common/Functions.js';
global.functions = functions;
//加载配置
import Config from '../Config/Config.js';
global.frameConfig = Config;
//加载框架组件
import Frame from './Frame';
//加载框架头部
import Header from './Header';
//加载框架导航
import Nav from './Nav';
//加载框架页面加载插件
import Loader from './Loader';
//react-router
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Redirect = ReactRouter.Redirect;
const Switch = ReactRouter.Switch;
const history = History.createBrowserHistory();
//菜单
let menu = [];
let route = [];
function getMenu(){
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
getMenu().then((data)=>{
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
	menu = menu;
	route = route;
	//_this.setState({route:route,menu:menu})
	//渲染
	ReactDOM.render((
		<Router history={history}>
			<Frame>
				<Header />
				<Nav menu={menu}/>
				<div className="body">
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
				</div>
			</Frame>
		</Router>
	), document.getElementsByTagName('section')[0]);
})

