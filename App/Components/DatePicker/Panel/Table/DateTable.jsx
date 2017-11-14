import Component from '../../../Component';
class DateTable extends Component {
	constructor(props){
		super(props)   
	}
	getRows() {
		let {date,value} = this.props;
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
		let year = date.getFullYear();
		let month = date.getMonth();
		date.setDate(today);
		for(let i = 0;i<6;i++){
			for(let j = 0;j<7;j++){
				if(i==0 && prevMonthDays - prevDayCount + j<=prevMonthDays){
					rows[i].push({type:'prev',value:new Date(year,month-1,prevMonthDays - prevDayCount + j,0,0,0),month:parseInt(prevMonth.getMonth()+1),day:prevMonthDays - prevDayCount + j,year:parseInt(date.getFullYear())});
				}
				else{
					rows[i].push({type:type,value:new Date(year,month,days),month:month,day:parseInt(days,10),year:year,isToday:value.toDateString()==new Date(year,month,days).toDateString()});
					days++;
					if(days>lastDay){
						days = 1;
						type = 'next';
						month +=1;
					}
				}
			}
		}

	    return rows;
  	}
  	onClick(date){
  		this.parent().changeDate(date);
  	}
  	parent(){
  		return this.context.component;
  	}
  	
	render(){
		let rows = this.getRows()
		return(
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
									<td className={this.classNames(v.type,v.isToday && 'is-today')} onClick={this.onClick.bind(this,v.value)}>{v.isToday?'今天':v.day}</td>
								)
							})}
						</tr>
					)
				})}
				
			</table>
		)
	}
}

DateTable.contextTypes = {
  component: React.PropTypes.any
};

DateTable.PropTypes = {
	
}

DateTable.defaultProps = {
}

export default DateTable;