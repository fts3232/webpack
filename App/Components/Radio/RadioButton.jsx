import css from './Scss/Main.scss';
import Component from '../Component';
class RadioButton extends Component {
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
            <label className={this.classNames('radio-button',{'is-checked':checked},{'is-disabled':disabled})}>
                <span className={this.classNames('radio-button-input')}>
                    <input
                        type="radio"
                        className="radio-button-original"
                        name={name}
                        checked={checked}
                        disabled={disabled}
                        onChange={this.onChange.bind(this)}
                    />
                </span>
                <span className="radio-button-inner">
                  {children || value}
                </span>
            </label>
        )
    }
}

RadioButton.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    value:React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
}
RadioButton.defaultProps={
    value:''
};//设置默认属性

//导出组件
export default RadioButton;