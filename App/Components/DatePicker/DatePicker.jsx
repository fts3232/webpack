import css from './Scss/Main.scss';
import Component from '../Component';
import Input from '../Input';
class DatePicker extends Component {
	constructor(props){
		super(props)   
		this.state = {
			
		}
	}
	render(){
		return(
			<div>
				<Input className="el-date-editor--date"/>
			</div>
		)
	}
}

DatePicker.PropTypes = {
	value:React.PropTypes.string,
	placeholder:React.PropTypes.string
}

DatePicker.defaultProps = {
	value:'',
	placeholder:'请选择日期'
}

export default DatePicker;