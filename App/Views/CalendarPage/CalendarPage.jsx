import Calendar from '../../Components/Calendar';
class CalendarPage extends React.Component {
	constructor(props){
		super(props)   
	}
	render(){
		return(
			<div className="content-block">
				<Calendar />
			</div>
		)
	}
}

CalendarPage.PropTypes = {

}

CalendarPage.defaultProps = {
	
}

export default CalendarPage;