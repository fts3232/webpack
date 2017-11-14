import Component from '../../Component';
import Icon from '../../Icon';
import {DateTable,MonthTable,YearTable} from './Table';
import {parseDate,formatDate} from '../parseTime';
class DatePickerPanel extends Component {
	constructor(props){
		super(props)   
		this.state = {
			value: parseDate(props.value) || new Date(),
			date:parseDate(props.value) || new Date(),
			currentView:'date',
		}
	}
	getChildContext(){
        return {
          component: this
        };
    }
  	nextMonth(){
  		let {date} = this.state
  		if(date.getMonth()==11){
  			date.setMonth(0)
  			date.setFullYear(date.getFullYear()+1)
  		}else{
  			date.setMonth(date.getMonth()+1)
  		}
  		this.setState({date:date})
  	}
  	prevMonth(){
  		let {date} = this.state
  		date.setMonth(date.getMonth()-1)
  		this.setState({date:date})
  	}
  	nextYear(){
  		let {date,currentView} = this.state
  		switch(currentView){
  			case 'year':
  				let startYear = Math.floor(date.getFullYear() / 10) * 10;
  				date.setFullYear(startYear+10)
  				this.setState({date:date})
  			default:
  				date.setFullYear(date.getFullYear()+1)
  				this.setState({date:date})
  				break;
  		}
  	}
  	prevYear(){
  		let {date,currentView} = this.state
  		switch(currentView){
  			case 'year':
  				let startYear = Math.floor(date.getFullYear() / 10) * 10;
  				date.setFullYear(startYear-10)
  				this.setState({date:date})
  			default:
  				date.setFullYear(date.getFullYear()-1)
  				this.setState({date:date})
  				break;
  		}
  	}
  	parent(){
  		return this.context.component;
  	}
  	changeView(view){
  		this.setState({currentView:view})
  	}
  	changeYear(year){
  		let {date} = this.state
  		date.setFullYear(year)
  		this.setState({currentView:'month',date:date})
  	}
  	changeMonth(month){
  		let {date} = this.state
  		date.setMonth(month)
  		this.setState({currentView:'date',date:date})
  	}
  	changeDate(date){
  		this.parent().handleItemClick(date);
  	}
  	getYearLabel(){
  		let {date,currentView} = this.state
  		let year = date.getFullYear();
  		switch(currentView){
  			case 'year':
  				let startYear = Math.floor(year / 10) * 10;
  				let endYear = startYear+9;
  				return `${startYear}年-${endYear}年`;
  			default:
  				return `${year}年`;
  				break;
  		}
  	}
	render(){
		let {date,currentView,value} = this.state
		let month = parseInt(date.getMonth()+1,10);
		return(
			<div className="picker-panel date-picker" ref='root'>
				<div className="date-picker-header">
					<Icon iconName="angle-double-left" className="prev-btn" onClick={this.prevYear.bind(this)}/>
					{currentView=='date' && (
						<Icon iconName="angle-left" className="prev-btn" onClick={this.prevMonth.bind(this)}/>
					)}
					<span className="date-picker-header-label" onClick={this.changeView.bind(this,'year')}>{this.getYearLabel()}</span>
					{currentView=='date' && (
						<span className="date-picker-header-label" onClick={this.changeView.bind(this,'month')}>{month}月</span>
					)}
					<Icon iconName="angle-double-right" className="next-btn" onClick={this.nextYear.bind(this)}/>
					{currentView=='date' && (
						<Icon iconName="angle-right" className="next-btn" onClick={this.nextMonth.bind(this)}/>
					)}
				</div>
				<div className="date-picker-body">
					{currentView=='date' && (
						<DateTable value={value} date={date}/>
					)}
					{currentView=='month' && (
						<MonthTable value={value} date={date}/>
					)}
					{currentView=='year' && (
						<YearTable value={value} date={date}/>
					)}
				</div>
			</div>
		)
	}
}

DatePickerPanel.childContextTypes = {
    component: React.PropTypes.any
};

DatePickerPanel.contextTypes = {
  	component: React.PropTypes.any
};

DatePickerPanel.PropTypes = {
	
}

DatePickerPanel.defaultProps = {
	value:new Date()
}

export default DatePickerPanel;