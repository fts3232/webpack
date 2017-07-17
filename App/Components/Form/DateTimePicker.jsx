import css from './Scss/DateTimePicker.scss';
import classnames from 'classnames';
class DateTimePicker extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            date:null,
            totalView:props.startView,
            today:'',//moment(props.date).isValid()?moment(props.date).format('YYYY-MM-DD'):moment().format('YYYY-MM-DD')
            scriptLoading:false,
        }
	}
    clickHandler(){
        this.refs['picker'].style.display = 'block'
    }
    timeClickHandler(time){
        time = time.split(':');
        let currDate = this.state.date;
        currDate.set({hour:time[0],'minute':time[1]});
        this.refs['input'].value = currDate.format(this.props.format);
        this.refs['picker'].style.display = 'none';
    }
    dayClickHandler(ref){
        let state = {};
        ref = ref.split('-');
        let currDate = this.state.date;
        currDate.set({'year':ref[0],'month':ref[1],'date':ref[2]})
        let date = currDate.format(this.props.format);
        if(this.props.timeView){
            state = {date:currDate,today:date,'totalView':'time'}
        }else{
            this.refs['input'].value = date;
            this.refs['picker'].style.display = 'none'
            state = {date:currDate,today:date}
        }
        this.setState(state);
    }
    monthClickHandler(month){
        let currDate = this.state.date;
        currDate.set({month:month});
        this.setState({date:currDate,totalView:'day'});
    }
    yearClickHandler(year){
        let currDate = this.state.date;
        currDate.set({year:year});
        this.setState({date:currDate,totalView:'month'});
    }
    todayHandler(){
        let date = moment().format(this.props.format);
        this.refs['input'].value = date;
        this.refs['picker'].style.display = 'none'
        this.setState({date:moment(),today:date,'totalView':'day'});
    }
    typeHandler(){
        switch(this.state.totalView){
            case 'time':
                this.setState({totalView:'day'})
                break;
            case 'day':
                this.setState({totalView:'month'})
                break;
            case 'month':
                this.setState({totalView:'year'})
                break;
        }
    }
    prevHandler(){
        let currDate = this.state.date;
        switch(this.state.totalView){
            case 'time':
                currDate.subtract(1,'hours');
                break;
            case 'day':
                currDate.subtract(1,'months');
                break;
            case 'month':
                currDate.subtract(1,'years');
                break;
            case 'year':
                currDate.subtract(12,'years');
                break;
        }
        this.setState({date:currDate})
    }
    nextHandler(){
        let currDate = this.state.date;
        switch(this.state.totalView){
            case 'time':
                currDate.add(1,'hours');
                break;
            case 'day':
                currDate.add(1,'months');
                break;
            case 'month':
                currDate.add(1,'years');
                break;
            case 'year':
                currDate.add(12,'years');
                break;
        }
        this.setState({date:currDate});
    }
    createCalendar(){
        let currDate = this.state.date;
        let daysInMonth = currDate.daysInMonth();
        let currMonth = currDate.month();
        let currYear = currDate.year();
        let today = this.state.today;
        let date = currDate.format('DD');
        currDate.set({'date':1})
        let todayOfWeek = currDate.format('d');
        let days = [];
        let weeks = [];
        currDate.subtract(todayOfWeek, 'days');
        for(let i=1;i<=35;i++){
            let ref = currDate.format('YYYY-MM-DD')
            let day = currDate.format('DD');
            days.push(<td className={classnames('day',{'active':ref==today},{'current-month':currDate.month()==currMonth})} ref={ref} onClick={this.dayClickHandler.bind(this,ref)}><div className="day-text">{day}</div></td>)
            if(i%7==0){
                weeks.push(<tr>{days}</tr>)
                days = [];
            }
             currDate.add(1,'days');
        }
        currDate.set({'year': currYear, 'month': currMonth,'date':date});
        return weeks;
    }
    hideHandler(){
        let _this = this;
        document.addEventListener("click", function(e){
            let target = e.target;
            let isInPicker = false;
            if(target.parentNode==null){
                return false;
            }
            while( typeof target.parentNode.tagName != 'undefined' ){
                target = target.parentNode;
                if(typeof target.className.indexOf != 'undefined' && target.className.indexOf('datetime-picker')!=-1){
                    isInPicker = true;
                    break;
                }
            }
            if(!isInPicker){
                if(typeof _this.refs['picker']!='undefined'){
                     _this.refs['picker'].style.display = 'none';
                }
            }
        });
    }
    componentDidMount(){
        let script = document.createElement('script');
        script.type="text/javascript";
        script.src="https://cdn.bootcss.com/moment.js/2.18.1/moment.min.js"
        document.body.appendChild(script)
        let _this = this;
        script.onload = function(){
            _this.setState({scriptLoading:true,date:moment(_this.props.date).isValid()?moment(_this.props.date):moment()});
            _this.hideHandler();
        }
    }
    componentWillUnmount(){
        window.removeEventListener("resize", this.locationItem);
    }
    render() {
        if(this.state.scriptLoading==false){
            return (<div></div>)
        }
        let currDate = this.state.date;
        let body;
        let header;
        switch(this.state.totalView){
            case 'time':
                let hour = currDate.hours() < 10?'0'+currDate.hours():currDate.hours();
                    body = [];
                    header = (
                        <thead>
                            <tr>
                                <th className="prev" onClick={this.prevHandler.bind(this)}>«</th>
                                <th colSpan='2' onClick={this.typeHandler.bind(this)}>{currDate.format('MMM YYYY')}</th>
                                <th className="next" onClick={this.nextHandler.bind(this)}>»</th>
                            </tr>
                        </thead>
                    )
                let j = 1;
                let container = [];
                for(let i=0;i<60;i+=this.props.minuteStep){
                    let ref = hour+':'+ (i < 10 ? '0'+i:i);
                    container.push(<td onClick={this.timeClickHandler.bind(this,ref)} ref={ref}>{ref}</td>)
                    if(j%4==0 || i+this.props.minuteStep>=60){
                        body.push(<tr>{container}</tr>)
                        container = [];
                    }
                    j++;
                }
                break;
            case 'day':
                let week = moment.weekdaysMin();
                    body = this.createCalendar();
                    header = (
                        <thead>
                            <tr>
                                <th className="prev" onClick={this.prevHandler.bind(this)}>«</th>
                                <th colSpan='5' onClick={this.typeHandler.bind(this)}>{currDate.format('MMM YYYY')}</th>
                                <th className="next" onClick={this.nextHandler.bind(this)}>»</th>
                            </tr>
                            <tr>
                                {week.map((val)=>{
                                    return(<th>{val}</th>)
                                })}
                            </tr>
                        </thead>
                    )
                break;
            case 'month':
                let month = moment.monthsShort();
                    header = (
                        <thead>
                            <tr>
                                <th className="prev" onClick={this.prevHandler.bind(this)}>«</th>
                                <th colSpan='2' onClick={this.typeHandler.bind(this)}>{currDate.format('YYYY')}</th>
                                <th className="next" onClick={this.nextHandler.bind(this)}>»</th>
                            </tr>
                        </thead>
                    )
                    body = [];
                    for(let i = 0;i<=11;i+=2){
                        body.push(
                            <tr>
                                <td colSpan='2' onClick={this.monthClickHandler.bind(this,i)}>{month[i]}</td>
                                <td colSpan='2' onClick={this.monthClickHandler.bind(this,i+1)}>{month[i+1]}</td>
                            </tr>
                        )
                    }
                break;
            case 'year':
                let year = currDate.format('YYYY');
                let startYear = currDate.subtract(6,'years');
                    startYear = parseInt(currDate.format('YYYY'));
                let endYear =  currDate.add(11,'years');
                    endYear = parseInt(currDate.format('YYYY'));
                    header = (
                        <thead>
                            <tr>
                                <th className="prev" onClick={this.prevHandler.bind(this)}>«</th>
                                <th colSpan='2' onClick={this.typeHandler.bind(this)}>{startYear} - {endYear}</th>
                                <th className="next" onClick={this.nextHandler.bind(this)}>»</th>
                            </tr>
                        </thead>
                    )
                    body = [];
                    for(let i=startYear;i<=endYear;i+=2){
                        body.push(
                            <tr>
                                <td colSpan='2' onClick={this.yearClickHandler.bind(this,i)}>{i}</td>
                                <td colSpan='2' onClick={this.yearClickHandler.bind(this,i)}>{i+1}</td>
                            </tr>
                        )
                    }
                    currDate.subtract(5,'years')
                break;
        }
        return(
            <div className="datetime-picker">
                <input type="text" className="form-control" ref='input' readOnly onClick={this.clickHandler.bind(this)}/>
                <div className="picker" ref='picker'>
                    <table>
                        {header}
                        <tbody>
                            {body}
                            {this.props.todayBtn==true?(
                                <tr>
                                    <td colSpan='7' onClick={this.todayHandler.bind(this)}>Today</td>
                                </tr>
                            ):''}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

DateTimePicker.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    startView:React.PropTypes.string,
    todayBtn:React.PropTypes.bool,
    format:React.PropTypes.string,
    minuteStep:React.PropTypes.number,
    timeView:React.PropTypes.bool,
}
DateTimePicker.defaultProps={
    startView:'day',
    todayBtn:true,
    format:'YYYY/MM/DD HH:mm',
    minuteStep:5,
    timeView:true
};//设置默认属性

//导出组件
export default DateTimePicker;