import Menu from '../Components/Menu';
import Scrollbar from '../Components/Scrollbar';
import Link from 'react-router-dom/Link.js';
class Nav extends React.Component {
	constructor(props){
		super(props);
	}
	getMenu(){
		return this.props.menu;
	}
	render() {
		let defaultActive;
		let defaultOpen;
		this.getMenu().map((val,key)=>{
			let index = key+1;
			if(typeof val.subMenu !='undefined'){
				val.subMenu.map((v,k)=>{
					let childIndex = index+'-'+(k+1);		
					if(location.pathname==  global.frameConfig.Root+v.path){
						defaultActive = childIndex;
						defaultOpen = index;
					}
				})
			}else{
				if(location.pathname==   global.frameConfig.Root+val.path){
					defaultActive = index
				}
			}
		})
		return (
			
			<div className="nav">
				{this.getMenu()!=''?(
					<Scrollbar>
						<Menu mode="vertical" defaultActive={defaultActive} defaultOpen={defaultOpen}>
							{this.getMenu().map((val,key)=>{
								let index = key+1;
								if(typeof val.subMenu !='undefined'){
									return (
										<Menu.SubMenu index={index} title={val.cnName}>
											{val.subMenu.map((v,k)=>{
												let childIndex = index+'-'+(k+1);
												return (<Link to={ global.frameConfig.Root + v.path}><Menu.Item index={childIndex}>{v.cnName}</Menu.Item></Link>)
											})}
										</Menu.SubMenu>
									)
								}else{
									return (<Link to={ global.frameConfig.Root + val.path}><Menu.Item index={index}>{val.cnName}</Menu.Item></Link>)
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
				):null}
			</div>
		);
	}
}

Nav.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    menu:React.PropTypes.array
}
Nav.defaultProps={
    menu:[]
};//设置默认属性

export default Nav;