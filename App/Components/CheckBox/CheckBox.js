import css from './Scss/main.scss';
import Component from '../Component';
class CheckBox extends Component {
	constructor(props){
		super(props);
        this.state = {
            checked: props.checked,
        }
	}
    onChange(e){
        const checked = e.target.checked;
        this.setState({checked: checked,},() => {
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
        return(
            <label className="checkbox">
                <span className={this.classNames('checkbox-input',{'is-checked': this.state.checked})}>
                    <span className="checkbox-input-inner">
                        <input type="checkbox" checked={this.state.checked} name={this.props.name} value={this.props.value} onChange={this.onChange.bind(this)}/>
                    </span>
                </span>
                <span className="checkbox-label">{this.props.children}</span>
            </label>
        )
    }
}

CheckBox.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    name:React.PropTypes.string,
    checked:React.PropTypes.bool,
    indeterminate:React.PropTypes.bool,
    onChange: React.PropTypes.func
}
CheckBox.defaultProps={
    name:'',
    checked:false,
    indeterminate:false,
};//设置默认属性

//导出组件
export default CheckBox;