import css from './Scss/Main.scss';
import Component from '../Component';
import Input from '../Input';
import ClickOutside from 'react-click-outside';
import Panel from './Panel/DatePickerPanel';
import {parseDate,formatDate} from './parseTime';
class DatePicker extends Component {
	constructor(props){
		super(props)   
		this.state = {
			value:parseDate(props.value),
			visible:false
		}
	}
	getChildContext(){
        return {
          component: this
        };
    }
	onFocus(){
    	this.setState({ visible: true })
    }
    handleItemClick(value){
    	this.setState({ value:value,visible:false })
    }
    handleClickOutside() {
        if (this.state.visible) {
          this.setState({ visible: false });
        }
    }
    handleClear(){
    	this.setState({value:'',visible:false})
    }
	render(){
		let {placeholder} = this.props;
		let {value,visible} = this.state;
		return(
			<div className="date-picker" onFocus={this.onFocus.bind(this)}>
				<Input readonly='true' value={formatDate(value)} placeholder={placeholder}  icon='calendar' onIconClick={this.handleClear.bind(this)}/>
				{visible && (<Panel value={formatDate(value)}/>)}
			</div>
		)
	}
}

DatePicker.childContextTypes = {
    component: React.PropTypes.any
};

DatePicker.PropTypes = {
	value:React.PropTypes.string,
	placeholder:React.PropTypes.string
}

DatePicker.defaultProps = {
	value:'',
	placeholder:'请选择日期'
}

export default ClickOutside(DatePicker);