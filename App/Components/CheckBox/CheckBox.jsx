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
        const value = e.target.value;
        this.setState({checked: checked},() => {
            if (this.props.onChange) {
              this.props.onChange(value,checked);
            }
        })
    }
    componentWillReceiveProps(props){
        this.state = {
            checked: props.checked,
        }
    }
    render() {
        let {name,value,disabled,children} = this.props
        let checked = this.state.checked;
        return(
            <label className="checkbox">
                <span className={this.classNames('checkbox-input',{'is-checked': checked},{'is-disabled':disabled})}>
                    <input type="checkbox" checked={checked} name={name} value={value} onChange={this.onChange.bind(this)} disabled={disabled}/>
                    <Icon iconName={checked?'check':null} />
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
    checked:React.PropTypes.bool,
    disabled:React.PropTypes.bool,
    value:React.PropTypes.string,
    onChange: React.PropTypes.func
}
CheckBox.defaultProps={
    name:'',
    checked:false,
    disabled:false,
    value:'',
    onChange:()=>{}
};//设置默认属性

//导出组件
export default CheckBox;