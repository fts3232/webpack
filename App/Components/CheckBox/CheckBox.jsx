import css from './Scss/Main.scss';
import Component from '../Component';
import Icon from '../Icon';
class CheckBox extends Component {
	constructor(props){
		super(props);
        this.state = {
            checked: props.checked,
        }
	}
    onChange(e){
        const checked = e.target.checked;
        this.setState({checked: checked},() => {
            if (this.props.onChange) {
              this.props.onChange(checked);
            }
        })
    }
    onClick(e){
        e.stopPropagation();
    }
    componentWillReceiveProps(props){
        this.state = {
            checked: props.checked,
        }
    }
    render() {
        let {name,value,disabled,children,indeterminate,className} = this.props
        let checked = this.state.checked;
        return(
            <label className={this.classNames('checkbox',className)} onClick={this.onClick.bind(this)}>
                <span className={this.classNames(
                    'checkbox-input',
                    {'is-checked': checked},
                    {'is-disabled':disabled},
                    {'is-indeterminate': indeterminate})
                } >
                    <input type="checkbox" checked={checked} name={name} value={value}  onChange={this.onChange.bind(this)}  disabled={disabled}/>
                    <Icon iconName={checked?'check':indeterminate?'minus':null} />
                </span>
                <span className="checkbox-label">
                    {children || value}
                </span>
            </label>
        )
    }
}

CheckBox.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    name:React.PropTypes.string,
    className:React.PropTypes.string,
    checked:React.PropTypes.bool,
    disabled:React.PropTypes.bool,
    indeterminate:React.PropTypes.bool,
    value:React.PropTypes.string,
    onChange: React.PropTypes.func,
}
CheckBox.defaultProps={
    name:'',
    className:'',
    checked:false,
    indeterminate:false,
    disabled:false,
    value:'',
    onChange:()=>{},
};//设置默认属性

//导出组件
export default CheckBox;