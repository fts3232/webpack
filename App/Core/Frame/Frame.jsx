import restCss from './Scss/Reset.scss';
import css from './Scss/Main.scss';
import Menu from '../../Components/Menu';
import request from 'superagent';
import Scrollbar from '../../Components/Scrollbar';
class Frame extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			route:[],
			menu:[],
			login:true
		}
	}
	getChildContext(){
        return {
          component: this
        };
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
			_this.setState({route:route,menu:menu})
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
		return (
			<div className="frame">
				<div className="header">
					<div className="logo">LOGO</div>
					<Menu theme='dark'>
						<Menu.Item index='1'>处理中心</Menu.Item>
						<Menu.Item index='2'>订单管理</Menu.Item>
						<Menu.SubMenu index='3' title="我的工作台">
							<Menu.Item index='3-1'>选项1</Menu.Item>
							<Menu.Item index='3-2'>选项2</Menu.Item>
						</Menu.SubMenu>
						<Menu.Item index='4'>会员管理</Menu.Item>
					</Menu>
				</div>
				<div className="nav">
					<Scrollbar>
						<Menu mode="vertical">
							{this.state.menu.map((val,key)=>{
								if(typeof val.subMenu !='undefined'){
									let index = key+1;
									return (
										<Menu.SubMenu index={index} title={val.cnName}>
											{val.subMenu.map((v,k)=>{
												let childIndex = index+'-'+(k+1);
												return (<Menu.Item index={childIndex}>{v.cnName}</Menu.Item>)
											})}
										</Menu.SubMenu>
									)
								}else{
									return (<Menu.Item index={key+1}>{val.cnName}</Menu.Item>)
								}
							})}
							{/*<Menu.Item index='1'>导航一</Menu.Item>
							<Menu.Item index='2'>导航二</Menu.Item>
							<Menu.SubMenu index='3' title="导航三">
								<Menu.ItemGroup title='分组1'>
									<Menu.Item index='3-1'>选项1</Menu.Item>
									<Menu.Item index='3-2'>选项2</Menu.Item>
								</Menu.ItemGroup>
								<Menu.ItemGroup title='分组2'>
									<Menu.Item index='3-3'>选项3</Menu.Item>
									<Menu.Item index='3-4'>选项4</Menu.Item>
								</Menu.ItemGroup>
							</Menu.SubMenu>
							<Menu.Item index='4'>导航四</Menu.Item>*/}
						</Menu>
					</Scrollbar>
				</div>
				<div className="body">
					{/*<Scrollbar>
						{this.props.children}
					</Scrollbar>*/}
				</div>
			</div>
		);
	}
}

Frame.childContextTypes = {
    component: React.PropTypes.any
};

Frame.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    
}
Frame.defaultProps={
    
};//设置默认属性

export default Frame;