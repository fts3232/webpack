//Component1.jsx
import css from './Scss/Main.scss';
import Icon from '../Icon';
import Component from '../Component';
import ClickOutside from 'react-click-outside';
class DropDown extends Component {
	constructor(props){
		super(props);
        this.state = {
            'visible':false
        }
	}
    onClick(){
        let {visible} = this.state;
        this.setState({visible:!visible})
    }
    handleClickOutside() {
        if (this.state.visible) {
          this.setState({ visible: false });
        }
    }
    hanleClickItem(command){
        let {onCommand} = this.props;
        onCommand(command);
        this.setState({ visible: false });
    }
    render() {
        let {visible} = this.state;
        let {label,children,onCommand} = this.props
        return (
            <div className={this.className('dropdown')}>
                <div className="dropdown-link" onClick={this.onClick.bind(this)}>
                    <span>{label}</span>
                    <Icon iconName="caret-down"/>
                </div>
                <ul className={this.classNames('dropdown-menu',{'is-visible':visible})}>
                    {React.Children.map(children,(v,index)=>{
                        let props = Object.assign(v.props,{onClick:this.hanleClickItem.bind(this)},);
                        return React.createElement(v.type,props, v.props.children);
                    })}
                </ul>
            </div>
        )
    }
}

DropDown.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    label:React.PropTypes.string,
    onCommand:React.PropTypes.func,
}
DropDown.defaultProps={
    label:'',
    onCommand:()=>{},
};//设置默认属性

//导出组件
export default ClickOutside(DropDown);