import css from './Scss/Main.scss';
import Component from '../Component';
import Input from '../Input';
import TimePickerPanel from './Panel/TimePickerPanel.jsx';
import ClickOutside from 'react-click-outside';
import {parseTime,format} from './parseTime';
class TimePicker extends Component {
	constructor(props){
		super(props)   
		this.state = {
			value:props.value || format("hh:mm:ss",new Date()),
			time:parseTime(props.value || new Date()),
			visible:false,
		}
	}
	getChildContext(){
        return {
          component: this
        };
    }
    changeHour(v){
    	let {time} = this.state;
    	time.hours = v.value;
    	this.setState({time:time,value:`${time.hours}:${time.minutes}:${time.seconds}`})
    }
    changeMinute(v){
    	let {time} = this.state;
    	time.minutes = v.value;
    	this.setState({time:time,value:`${time.hours}:${time.minutes}:${time.seconds}`})
    }
    changeSecond(v){
    	let {time} = this.state;
    	time.seconds = v.value;
    	this.setState({time:time,value:`${time.hours}:${time.minutes}:${time.seconds}`})
    }
    handleClickOutside() {
        if (this.state.visible) {
          this.setState({ visible: false });
        }
    }
    onFocus(){
    	this.setState({ visible: true })
    }
    handleClear(){
    	this.setState({value:''})
    }
    hide(){
    	this.setState({ visible: false });
    }
	render(){
		let {placeholder,selectableRange} = this.props;
		let {visible} = this.state;
		return(
			<div className="time-picker" onFocus={this.onFocus.bind(this)}>
				<Input readonly='true' value={this.state.value} placeholder={placeholder} icon='clock-o' onIconClick={this.handleClear.bind(this)}/>

				{visible && (<TimePickerPanel selectableRange={selectableRange}/>)}
			</div>
		)
	}
}

TimePicker.childContextTypes = {
    component: React.PropTypes.any
};

TimePicker.PropTypes = {
	value:React.PropTypes.string,
	placeholder:React.PropTypes.string,
	selectableRange:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.array]),
}

TimePicker.defaultProps = {
	value:'',
	placeholder:'请选择时间',
}

export default ClickOutside(TimePicker);