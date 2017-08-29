import css from './Scss/Main.scss';
import Component from '../Component';
class Option extends Component {
	constructor(props){
		super(props);
	}
    parent() {
        return this.context.component;
    }
    onClick(){
        if(!this.props.disabled){
            this.parent().handleOptionClick(this.props.value)
        }
    }
    render() {
        let {disabled,value,label,children} = this.props;
        return(
            <li className={this.classNames('select-dropdown-item',{'is-disabled':disabled},{'selected':this.parent().state.value==value})} onClick={this.onClick.bind(this)}>
                {children || label || value}
            </li>
        )
    }
}

Option.contextTypes = {
  component: React.PropTypes.any
};

Option.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    value:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number]),
    label:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number]),
    disabled:React.PropTypes.bool
}
Option.defaultProps={
    value:'',
    label:'',
    disabled:false
};//设置默认属性

//导出组件
export default Option;