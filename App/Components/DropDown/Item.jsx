//Component1.jsx
import Component from '../Component';
class Item extends Component {
	constructor(props){
		super(props);
	}
    render() {
        let {children,disabled,command,onClick} = this.props
        return (
            <div className={this.className('dropdown-menu-item',{'is-disabled':disabled})} onClick={onClick.bind(this,command)}>
               {children}
            </div>
        )
    }
}

Item.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    disabled:React.PropTypes.bool,
    command:React.PropTypes.string,
    onClick:React.PropTypes.func,
}
Item.defaultProps={
    disabled:false,
    command:'',
    onClick:()=>{}
};//设置默认属性

//导出组件
export default Item;