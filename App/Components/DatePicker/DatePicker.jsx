import css from './Scss/Main.scss';
import Component from '../Component';
import Input from '../Input';
import ClickOutside from 'react-click-outside';
import Panel from './Panel/DatePickerPanel';
class DatePicker extends Component {
	constructor(props){
		super(props)   
		this.state = {
			value:props.value || '2017-10-02',
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
    handleClear(){
    	this.setState({value:''})
    }
	render(){
		let {placeholder} = this.props;
		let {value,visible} = this.state;
		return(
			<div className="date-picker" onFocus={this.onFocus.bind(this)}>
				<Input readonly='true' value={this.state.value} placeholder={placeholder} icon='calendar' onIconClick={this.handleClear.bind(this)}/>
				{visible && (<Panel value={value}/>)}
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