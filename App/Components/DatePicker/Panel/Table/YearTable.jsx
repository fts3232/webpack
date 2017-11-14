import Component from '../../../Component';
class YearTable extends Component {
	constructor(props){
		super(props)   
	}
	getRows() {
		let {date,value} = this.props;
		let startYear = Math.floor(date.getFullYear() / 10) * 10
		let rows = [ [],[],[],[],[],[] ];
		let j = 0;
		let valueYear = value.getFullYear()
		let valueMonth = value.getMonth()
		let valueDate = value.getDate();
		for(let i = 0;i<9;i++){
			let year = startYear+i+1;
			rows[j].push({type:year<valueYear?'prev':null,'label':year,value:year,isCurrent:value.toDateString()==new Date(year,valueMonth,valueDate).toDateString()});
			if( (i+1)%4==0){
				j++;
			}
		}
	    return rows;
  	}
  	onClick(value){
  		this.parent().changeYear(value);
  	}
  	parent(){
  		return this.context.component;
  	}
	render(){
		let rows = this.getRows()
		return(
			<table cellSpacing="0" cellPadding="0" className="year-table">
				{rows.map((row,index)=>{
					return (
						<tr>
							{row.map((v,key)=>{
								return (
									<td className={this.classNames(v.type,v.isCurrent && 'is-current')} onClick={this.onClick.bind(this,v.value)}>{v.label}</td>
								)
							})}
						</tr>
					)
				})}
				
			</table>
		)
	}
}

YearTable.contextTypes = {
  component: React.PropTypes.any
};

YearTable.PropTypes = {
	
}

YearTable.defaultProps = {
}

export default YearTable;