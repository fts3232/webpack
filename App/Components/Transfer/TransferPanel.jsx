import Component from '../Component';
import CheckBox from '../CheckBox';
class TransferPanel extends Component {
	constructor(props){
		super(props)   
	}
	checkAll(isChecked){
		let checked = isChecked?this.props.data.map((item)=>{return item.key}):[]
		this.props.onChange(checked);
	}
	onChange(v){
		this.props.onChange(v)
	}
	render(){
		let {name,title,data,checked} = this.props
		return(
			<div className="transfer-panel">
				<div className="transfer-panel-header">{title}</div>
				<div className="transfer-panel-body">
					<div className="transfer-panel-list">
						<CheckBox.Group value={checked} onChange={this.onChange.bind(this)}>
							{data.map((v)=>{
								return (<CheckBox className="transfer-panel-item"  name={name} checked={checked.indexOf(v.key)!=-1} value={v.key} disabled={v.disabled}>{v.label}</CheckBox>);
							})}
						</CheckBox.Group>
					</div>
				</div>
				<div className="transfer-panel-footer">
					<CheckBox indeterminate={checked.length>0} checked={data.length!=0 && checked.length==data.length} onChange={this.checkAll.bind(this)} name={name}>共{data.length}项</CheckBox>
				</div>
			</div>
		)
	}
}

TransferPanel.PropTypes = {
	title:React.PropTypes.string,
	checked:React.PropTypes.array,
	data:React.PropTypes.array,
	name:React.PropTypes.string,
	onChange:React.PropTypes.func,
}

TransferPanel.defaultProps = {
	title:'',
	checked:[],
	data:[],
	name:'',
	onChange:()=>{}
}

export default TransferPanel;