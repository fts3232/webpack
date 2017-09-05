import Menu from '../Components/Menu';
import Scrollbar from '../Components/Scrollbar';
const Link = ReactRouterDOM.Link;
import Icon from '../Components/Icon';
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
					if(location.pathname==  SITE_ROOT+v.path){
						defaultActive = childIndex;
						defaultOpen = index;
					}
				})
			}else{
				if(location.pathname==   SITE_ROOT+val.path){
					defaultActive = index
				}
			}
		})
		let height = document.body.clientHeight - 60;
		return (
			<div className="nav">
				{this.getMenu()!=''?(
					<Scrollbar height={height}>
						<Menu mode="vertical" defaultActive={defaultActive} defaultOpen={defaultOpen}>
							{this.getMenu().map((val,key)=>{
								let index = key+1;
								if(!val.isShow){
									return false;
								}
								if(typeof val.subMenu !='undefined'){
									return (
										<Menu.SubMenu index={index} title={<div><Icon iconName={val.icon}/><span>{val.cnName}</span></div>}>
											{val.subMenu.map((v,k)=>{
												if(!v.isShow){
													return false;
												}
												let childIndex = index+'-'+(k+1);
												return (<Link to={ SITE_ROOT + v.path}><Menu.Item index={childIndex}>{v.cnName}</Menu.Item></Link>)
											})}
										</Menu.SubMenu>
									)
								}else{
									return (<Link to={ SITE_ROOT + val.path}><Menu.Item index={index}><Icon iconName={val.icon}/><span>{val.cnName}</span></Menu.Item></Link>)
								}
							})}
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