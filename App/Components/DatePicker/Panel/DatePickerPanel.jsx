import Component from '../../Component';
import Icon from '../../Icon';
import {parseDate} from '../parseTime';
class DatePickerPanel extends Component {
	constructor(props){
		super(props)   
		this.state = {
			date:parseDate(props.value) || new Date(),
			update:false,
		}
	}
	componentWillReceiveProps(props){
		this.setState({date:parseDate(props.value)})
	}
	getRows() {
		let {date} = this.state;
		let today = date.getDate();
		let prevMonth = new Date();
		prevMonth.setMonth(date.getMonth());
		let nextMonth = new Date();
		nextMonth.setMonth(date.getMonth()+1);
		let rows = [ [],[],[],[],[],[] ];
		
		
		date.setDate(1)
		let firstDay = date.getDay();
		nextMonth.setDate(0);
		let lastDay = nextMonth.getDate();

		prevMonth.setDate(0)
		let prevMonthDays = prevMonth.getDate();
		let prevDayCount = firstDay==0?6:firstDay-1;

		let days = 1;
		let type = 'current';
		let currentDate = parseDate(this.props.value)
		let month = parseInt(date.getMonth()+1)
		let year = parseInt(date.getFullYear())
		date.setDate(today);
		for(let i = 0;i<6;i++){
			for(let j = 0;j<7;j++){
				if(i==0 && prevMonthDays - prevDayCount + j<=prevMonthDays){

					rows[i].push({type:'prev',month:parseInt(prevMonth.getMonth()+1),day:prevMonthDays - prevDayCount + j,year:parseInt(date.getFullYear())});
				}
				else{

					rows[i].push({type:type,month:month,day:parseInt(days,10),year:year,isToday:month==currentDate.getMonth()+1 && year==currentDate.getFullYear() && days==currentDate.getDate()});
					days++;
					if(days>lastDay){
						days = 1;
						type = 'next';
						month = parseInt(nextMonth.getMonth()+2,10);
					}
				}
			}
		}

	    return rows;
  	}

  	nextMonth(){
  		let {date} = this.state
  		if(date.getMonth()==11){
  			date.setMonth(0)
  			date.setFullYear(date.getFullYear()+1)
  		}else{
  			date.setMonth(date.getMonth()+1)
  		}
  		this.setState({date:date,update:true})
  	}
  	prevMonth(){
  		let {date} = this.state
  		date.setMonth(date.getMonth()-1)
  		this.setState({date:date,update:true})
  	}
  	nextYear(){
  		let {date} = this.state
  		date.setFullYear(date.getFullYear()+1)
  		this.setState({date:date,update:true})
  	}
  	prevYear(){
  		let {date} = this.state
  		date.setFullYear(date.getFullYear()-1)
  		this.setState({date:date,update:true})
  	}
  	onClick(year,month,day){
  		this.parent().handleItemClick(`${year}-${month}-${day}`);
  	}
  	parent(){
  		return this.context.component;
  	}
	render(){
		let {date} = this.state
		let year = date.getFullYear();
		let month = parseInt(date.getMonth()+1,10);
		let rows = this.getRows()
		return(
			<div className="picker-panel date-picker" ref='root'>
				<div className="date-picker-header">
					<Icon iconName="angle-double-left" className="prev-btn" onClick={this.prevYear.bind(this)}/>
					<Icon iconName="angle-left" className="prev-btn" onClick={this.prevMonth.bind(this)}/>
					<span className="date-picker-header-label">{year}年</span>
					<span className="date-picker-header-label">{month}月</span>
					<Icon iconName="angle-double-right" className="next-btn" onClick={this.nextYear.bind(this)}/>
					<Icon iconName="angle-right" className="next-btn" onClick={this.nextMonth.bind(this)}/>
				</div>
				<div className="date-picker-body">
					<table cellSpacing="0" cellPadding="0" className="date-table">
						<tr>
							<th>日</th>
							<th>一</th>
							<th>二</th>
							<th>三</th>
							<th>四</th>
							<th>五</th>
							<th>六</th>
						</tr>
						{rows.map((row,index)=>{
							return (
								<tr>
									{row.map((v,key)=>{
										return (
											<td className={this.classNames(v.type,v.isToday && 'is-today')} onClick={this.onClick.bind(this,v.year,v.month,v.day)}>{v.isToday?'今天':v.day}</td>
										)
									})}
								</tr>
							)
						})}
					</table>
				</div>
			</div>
		)
	}
}

DatePickerPanel.contextTypes = {
  component: React.PropTypes.any
};

DatePickerPanel.PropTypes = {
	
}

DatePickerPanel.defaultProps = {
	date:new Date()
}

export default DatePickerPanel;