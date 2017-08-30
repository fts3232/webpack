import css from './Scss/Main.scss';
import Component from '../Component';
import Input from '../Input';
import TimePanel from './Panel/TimePanel.jsx';
import ClickOutside from 'react-click-outside';
class TimePicker extends Component {
	constructor(props){
		super(props)   
		this.state = {
			value:props.value,
			visible:false,
		}
	}
	getChildContext(){
        return {
          component: this
        };
    }
    handleItemClick(item){
    	if(!item.disabled){
    		this.setState({value:item.value,visible:false})
    	}
    }
    handleClickOutside() {
        if (this.state.visible) {
          this.setState({ visible: false });
        }
    }
    onFocus(){
    	this.setState({ visible: true })
    }
	render(){
		let {placeholder,start,end,step,minTime,maxTime} = this.props;
		return(
			<div className="time-picker" onFocus={this.onFocus.bind(this)}>
				<Input readonly='true' value={this.state.value} placeholder={placeholder} icon='clock-o'/>
				{this.state.visible && (<TimePanel start={start} end={end} step={step} value={this.state.value} minTime={minTime} maxTime={maxTime}/>)}
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
	start:React.PropTypes.string,
	end:React.PropTypes.string,
	step:React.PropTypes.string,
	minTime:React.PropTypes.string,
	maxTime:React.PropTypes.string,
}

TimePicker.defaultProps = {
	value:'',
	placeholder:'请选择时间',
	start:'00:00',
	end:'23:30',
	step:'00:30',
	maxTime:'23:60',
	minTime:'-1:-1',
}

export default ClickOutside(TimePicker);