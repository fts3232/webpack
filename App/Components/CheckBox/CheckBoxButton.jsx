import css from './Scss/Main.scss';
import Component from '../Component';
class CheckBoxButton extends Component {
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
    componentWillReceiveProps(props){
        this.state = {
            checked: props.checked,
        }
    }
    render() {
        let {name,value,disabled,children,className} = this.props
        let checked = this.state.checked;
        return(
            <label className={this.classNames('checkbox-button',className,{'is-checked': checked},{'is-disabled':disabled})}>
                <input type="checkbox" checked={checked} name={name} value={value} onChange={this.onChange.bind(this)} disabled={disabled}/>
                <span className="checkbox-button-label">
                    {children || value}
                </span>
            </label>
        )
    }
}

CheckBoxButton.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    name:React.PropTypes.string,
    className:React.PropTypes.string,
    checked:React.PropTypes.bool,
    disabled:React.PropTypes.bool,
    value:React.PropTypes.string,
    onChange: React.PropTypes.func
}
CheckBoxButton.defaultProps={
    name:'',
    className:'',
    checked:false,
    disabled:false,
    value:'',
    onChange:()=>{}
};//设置默认属性

//导出组件
export default CheckBoxButton;