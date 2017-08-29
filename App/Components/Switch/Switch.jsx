import css from './Scss/Main.scss';
import Component from '../Component';
import Icon from '../Icon';
class Switch extends Component {
	constructor(props){
		super(props);
        this.state = {
            checked: props.checked,
            value:props.checked?props.onValue:props.offValue
        }
        
	}
    getStyle(){
        let style = {};
        if (this.props.width) {
          style.width = `${this.props.width}px`
        }
        return style;
    }
    getButtonStyle(){
        let style = {};
        if(this.state.checked){
            style.transform='translate(2px, 2px)';
        }else{
            style.transform=`translate(${this.props.width - 4 - 16}px, 2px)`;
        }
        return style
    }
    getColorStyle(){
        let style = {};
        if(this.state.checked && this.props.onColor){
            style.background =  this.props.onColor;
            style.borderColor = this.props.onColor;
        }else if(!this.state.checked && this.props.offColor){
            style.background =  this.props.offColor;
            style.borderColor = this.props.offColor;
        }
        return style
    }
    onChange(e){
        const checked = e.target.checked;
        this.setState({checked: checked,value:checked?this.props.onValue:this.props.offValue},() => {
            if (this.props.onChange) {
              this.props.onChange(checked);
            }
        })
    }
    render() {
        let {name,disabled} = this.props;
        return(
            <label className={this.classNames('switch',{'on':this.state.checked})} style={this.style(this.getStyle())}>
                <input type="checkbox" checked={this.state.checked} value={this.state.value} name={name} onChange={this.onChange.bind(this)} disabled={disabled}/>
                <div className="switch-core" style={this.style(this.getColorStyle())}>
                    <span className="switch-button" style={this.style(this.getButtonStyle())}></span>
                </div>
                <div className="switch-label">
                    {this.state.checked?this.props.onText:this.props.offText}
                </div>
            </label>
        )
    }
}

Switch.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    name:React.PropTypes.string,
    checked:React.PropTypes.bool,
    disabled:React.PropTypes.bool,
    onText:React.PropTypes.string,
    onColor:React.PropTypes.string,
    offText:React.PropTypes.string,
    offColor:React.PropTypes.string,
    onValue:React.PropTypes.string,
    offValue:React.PropTypes.string,
    onChange: React.PropTypes.func
}
Switch.defaultProps={
    name:'',
    checked:false,
    disabled:false,
    onText:'ON',
    onColor:false,
    offText:'OFF',
    offColor:false,
    onValue:'on',
    offValue:'off',
    onChange:()=>{}
};//设置默认属性

//导出组件
export default Switch;