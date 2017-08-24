import css from './Scss/Main.scss';
import Component from '../Component';
class Radio extends Component {
	constructor(props){
		super(props);
        this.state={
            checked:this.props.checked
        }
	}
    onChange(e){
        const checked = e.target.checked;
        if(checked){
            this.props.onChange(this.props.value)
        }
        this.setState({ checked });
    }
    componentWillReceiveProps(props) {
        const checked = props.checked
        if (this.state.checked != checked) {
          this.setState({ checked });
        }
    }
    render() {
        let checked = this.state.checked;
        let disabled = this.props.disabled;
        let children = this.props.children;
        let value = this.props.value;
        let name = this.props.name;
        return(
            <label className={this.classNames('radio')}>
                <span className={this.classNames('radio-input',{'is-checked':checked},{'is-disabled':disabled})}>
                    <input
                        type="radio"
                        className="radio-original"
                        name={name}
                        checked={checked}
                        disabled={disabled}
                        onChange={this.onChange.bind(this)}
                    />
                </span>
                <span className="radio-label">
                  {children || value}
                </span>
            </label>
        )
    }
}

Radio.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    name:React.PropTypes.string,
    checked:React.PropTypes.bool,
    disabled:React.PropTypes.bool,
    value:React.PropTypes.string,
    onChange:React.PropTypes.func
}
Radio.defaultProps={
    name:'',
    checked:false,
    disabled:false,
    value:'',
    onChange:()=>{}
};//设置默认属性

//导出组件
export default Radio;