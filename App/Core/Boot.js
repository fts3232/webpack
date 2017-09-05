//
window.request = superagent;
//加载模拟数据
import mock from '../Data/mock.js';
//加载functions
import * as functions from '../Common/Functions.js';
global.helper = functions;
//加载框架组件
import Frame from './Frame';
//加载框架头部
import Header from './Header';
//加载框架导航
import Nav from './Nav';
//加载框架页面加载插件
import Loader from './Loader';
//react-router
const Router = ReactRouterDOM.Router;
const Route = ReactRouterDOM.Route;
const Redirect = ReactRouterDOM.Redirect;
const Switch = ReactRouterDOM.Switch;
const history = History.createBrowserHistory();
//菜单
let menus = [];
let routes = [];
const getRoute = ()=>{
	return new Promise((resolve,reject)=>{
		request.post('/api/getMenu')
			   .end(function(err, res){
				 	if(res.ok){
				 		resolve(JSON.parse(res.text))
				 	}else{
				 		reject('数据获取失败')
				 	}
			   })
	})
}
getRoute().then((data)=>{
	menus = data.menu;
	data.menu.map((menu)=>{
		routes.push(menu)
		if(typeof menu.subMenu!='undefined'){
			menu.subMenu.map((subMenu)=>{
				routes.push(subMenu)
			})
		}
	})
	//_this.setState({route:route,menu:menu})
	//渲染
	ReactDOM.render((
		<Router history={history}>
			<Frame>
				<Header />
				<Nav menu={menus}/>
				<div className="body">
					<Switch>
						{/*<Route path={loginPath} render={(props) =>(
							this.state.login ? (<Redirect to={global.frameConfig.Root}/>):(<Loader name='LoginPage'/>)	
							)
						} />*/}
						{routes.map((val)=>{
							return (
								<Route exact path={SITE_ROOT + val.path} render={(props) =>(
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
}).catch((err)=>{
	console.log(err)
})

