import Menu from '../Components/Menu';
const Link = ReactRouterDOM.Link;
class Header extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
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
		);
	}
}

Header.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    
}
Header.defaultProps={
    
};//设置默认属性

export default Header;