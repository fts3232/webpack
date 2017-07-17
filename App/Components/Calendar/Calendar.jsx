import css from './Scss/Main.scss';
import classnames from 'classnames';
class Calendar extends React.Component {
	constructor(props){
		super(props)   
		this.state = {
			date:null,
			type:props.typeMap.indexOf(props.type)!=-1?props.type:'month'
		}
		
	}
	init(){
		this.setState({date:moment(this.props.date).isValid()?moment(this.props.date):moment()})
	}
	componentDidMount(){
		if(document.querySelector('script#moment')==null){
			let script = document.createElement('script');
	        script.type="text/javascript";
	        script.id = 'moment';
	        script.src="https://cdn.bootcss.com/moment.js/2.18.1/moment.min.js"
	        document.body.appendChild(script);
	        let _this = this;
	        script.onload = function(){
				_this.init();
	        }
		}else{
			this.init();
		}
	}
	dayClickHandler(ref){
		let currDate = this.state.date;
		for(let ref in this.refs){
			if(ref.indexOf('day-')!=-1){
				removeClass(this.refs[ref],'active')
			}
		}
		addClass(this.refs[ref],'active')
		ref = ref.split('-');
		currDate.set({'year':ref[1],'month':ref[2]-1,'date':ref[3]});
		this.setState({date:currDate});
	}
	todayClickHandler(){
		this.setState({date:moment()})
	}
	typeClickHandler(ref){
		switch(ref){
			case 'month':
				addClass(this.refs['month'],'active')
				removeClass(this.refs['week'],'active')
				removeClass(this.refs['day'],'active')
				break;
			case 'day':
				removeClass(this.refs['month'],'active')
				removeClass(this.refs['week'],'active')
				addClass(this.refs['day'],'active')
				break;
			case 'week':
				removeClass(this.refs['month'],'active')
				addClass(this.refs['week'],'active')
				removeClass(this.refs['day'],'active')
				break;
		}
		this.setState({type:ref})
	}
	prevHandler(){
		let currDate = this.state.date;
		switch(this.state.type){
			case 'month':
				currDate.subtract(1,'months');
				currDate.set({'date':1});
				break;
			case 'week':
				currDate.subtract(7,'days');
				break;
			case 'day':
				currDate.subtract(1,'days');
				break;
		}
		
		this.setState({date:currDate})
	}
	nextHandler(){
		let currDate = this.state.date;
		switch(this.state.type){
			case 'month':
				currDate.add(1,'months');
				currDate.set({'date':1});
				break;
			case 'week':
				currDate.add(7,'days');
				break;
			case 'day':
				currDate.add(1,'days');
				break;
		}
		this.setState({date:currDate})
	}
	createCalendar(){
		let currDate = this.state.date;
		let daysInMonth = currDate.daysInMonth();
		let currMonth = currDate.month();
		let currYear = currDate.year();
		let today = currDate.format('YYYY-MM-DD');
		let date = currDate.format('DD');
		currDate.set({'date':1})
		let todayOfWeek = currDate.format('d');
		let days = [];
		let weeks = [];
		currDate.subtract(todayOfWeek, 'days');
		for(let i=1;i<=35;i++){
			let ref = 'day-'+currDate.format('YYYY-MM-DD')
			let date = currDate.format('YYYY-MM-DD');
			let day = currDate.format('DD');
			days.push(<td className={classnames('day',{'active':date==today},{'current-month':currDate.month()==currMonth})} ref={ref} onClick={this.dayClickHandler.bind(this,ref)}><div className="day-text">{day}</div></td>)
			if(i%7==0){
				weeks.push(<tr>{days}</tr>)
				days = [];
			}
			 currDate.add(1,'days');
		}
		currDate.set({'year': currYear, 'month': currMonth,'date':date});
		return weeks;
	}
	render(){
		if(this.state.date==null){
			return (<div></div>)
		}
		let currDate = this.state.date;
		let body;
		let className = 'calendar type-'+this.state.type;
		let header;
		switch(this.state.type){
			case 'month':
				header = (
					<tr>
						<th className="table-header">Sun</th>
						<th className="table-header">Mon</th>
						<th className="table-header">Tue</th>
						<th className="table-header">Wed</th>
						<th className="table-header">Thu</th>
						<th className="table-header">Fri</th>
						<th className="table-header">Sat</th>
					</tr>
				)
				body = this.createCalendar();
				break;
			case 'week':
				let todayOfWeek = currDate.format('d');
				let currMonth = currDate.month();
				let currYear = currDate.year();
				let date = currDate.format('DD');
				header = [];
				body = [];
				currDate.subtract(todayOfWeek, 'days');
				for(let i=1;i<=7;i++){
					let ref = 'day-'+currDate.format('YYYY-MM-DD')
					header.push(<th className="table-header">{currDate.format('ddd  MM/DD')} </th>)
					if(todayOfWeek==i-1){
						body.push(<td className="day active"></td>)
					}else{
						body.push(<td className="day" ref={ref} onClick={this.dayClickHandler.bind(this,ref)}></td>)
					}
					currDate.add(1,'days')
				}
				currDate.set({'year': currYear, 'month': currMonth,'date':date});
				header = (
					<tr>
						{header}
					</tr>
				)
				body = (
					<tr>
						{body}
					</tr>
				)
				break;
			case 'day':
				header = (
					<tr>
						<th className="table-header">{currDate.format('ddd MM/DD')}</th>
					</tr>
				)
				body = (
					<tr>
						<td className="day active"></td>
					</tr>
				)
				break;
		}
		return(
			<div className={className}>
				<div className="tools">
					<div className="next-prev">
						<button className="button" onClick={this.prevHandler.bind(this)}></button>
						<button className="button" onClick={this.nextHandler.bind(this)}></button>
					</div>
					<div className="today-info">
						<button className="button" onClick={this.todayClickHandler.bind(this)}>today</button>
						<span className="text">{currDate.format('YYYY年MM月DD日')}</span>
					</div>
					<div className="switch-btn">
						<button className="button active" ref='month' onClick={this.typeClickHandler.bind(this,'month')}>month</button>
						<button className="button" ref='week' onClick={this.typeClickHandler.bind(this,'week')}>week</button>
						<button className="button" ref='day' onClick={this.typeClickHandler.bind(this,'day')}>day</button>
					</div>
				</div>
				<table className="table">
					<thead>
						{header}
					</thead>
					<tbody>
						{body}
					</tbody>
				</table>
			</div>
		)
	}
}

Calendar.PropTypes = {
	date:React.PropTypes.string,
	type:React.PropTypes.string,
	typeMap:React.PropTypes.array
}

Calendar.defaultProps = {
	date:new Date(),
	type:'month',
	typeMap:['month','week','day']
}

export default Calendar;