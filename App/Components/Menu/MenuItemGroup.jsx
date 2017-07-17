import Component from '../Component';
class MenuItemGroup extends Component {
	constructor(props){
		super(props);
	}
    
    render() {
        return (
            <li className="menu-item-group">
                <div className="menu-item-group-title">{this.props.title}</div>
                <ul>
                    {this.props.children}
                </ul>
            </li>
        )
    }
}

MenuItemGroup.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    title:React.PropTypes.string.isRequired
}
MenuItemGroup.defaultProps={
    
};//设置默认属性

//导出组件
export default MenuItemGroup;