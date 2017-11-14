import Component from '../../../Component';
class MonthTable extends Component {
	constructor(props){
		super(props) 
	}
	getRows() {
		let {date,value} = this.props;
		let rows = [[],[],[]];
		let months = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
		let j = 0 ;
		let year = date.getFullYear();
		let day = date.getDate();
		for(let i = 0;i<12;i++){
			let nDate = new Date(year,i,day);
			rows[j].push({type:nDate<value?'prev':null,'label':months[i],value:i,isCurrent:value.toDateString()==nDate.toDateString()});
			if( (i+1)%4==0){
				j++;
			}
		}
	    return rows;
  	}
  	onClick(date){
  		this.parent().changeMonth(date);
  	}
  	parent(){
  		return this.context.component;
  	}
	render(){
		let rows = this.getRows()
		return(
			<table cellSpacing="0" cellPadding="0" className="month-table">
				{rows.map((row,index)=>{
					return (
						<tr>
							{row.map((v,key)=>{
								return (
									<td className={this.classNames(v.isCurrent?'is-current':v.type)} onClick={this.onClick.bind(this,v.value)}>{v.label}</td>
								)
							})}
						</tr>
					)
				})}
				
			</table>
		)
	}
}

MonthTable.contextTypes = {
  component: React.PropTypes.any
};

MonthTable.PropTypes = {
	
}

MonthTable.defaultProps = {
}

export default MonthTable;