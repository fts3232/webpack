import css from './Scss/Main.scss';
import Component from '../Component';
import TransferPanel from './TransferPanel.jsx';
import Icon from '../Icon';
import Button from '../Button';
class Transfer extends Component {
	constructor(props){
		super(props)   
		this.state = {
			value:props.value,
			leftChecked:[],
			rightChecked:[]
		}
	}
	componentWillMount() {
	    const { leftDefaultChecked, rightDefaultChecked } = this.props;
	    if (leftDefaultChecked.length) {
	      this.setState({ leftChecked: leftDefaultChecked })
	    }
	    if (rightDefaultChecked.length) {
	      this.setState({ rightChecked: rightDefaultChecked })
	    }
	}
	get sourceData(){
		let {data} = this.props
		return data.filter((item)=>{
			return !this.state.value.includes(item.key)
		})
	}
	get targetData(){
		let {data} = this.props
		return data.filter((item)=>{
			return this.state.value.includes(item.key)
		})
	}
	onSourceCheckedChange(checked){
		this.setState({leftChecked:checked})
	}
	onTargetCheckedChange(checked){
		this.setState({rightChecked:checked})
	}
	addToRight(){
		let {leftChecked,value} = this.state
		leftChecked.forEach(item => {
			if (!value.includes(item)) {
				value = value.concat(item);
			}
	    });
		this.setState({value:value,leftChecked:[]});
	}
	addToLeft(){
	    const { rightChecked,value } = this.state;
	    rightChecked.forEach(item => {
	      const index = value.indexOf(item);
	      if (index > -1) {
	        value.splice(index, 1);
	      }
	    });
		this.setState({value:value,rightChecked:[]});
	}
	render(){
		let {leftChecked,rightChecked} = this.state;
		return(
			<div className="transfer">
				<TransferPanel title="列表1" data={this.sourceData} checked={leftChecked} onChange={this.onSourceCheckedChange.bind(this)}/>
				<div className="transfer-button-box">
					<Button size="small" disabled={rightChecked.length<=0} onClick={this.addToLeft.bind(this)}><Icon iconName="angle-left"/></Button>
					<Button size="small" disabled={leftChecked.length<=0} onClick={this.addToRight.bind(this)}><Icon iconName="angle-right"/></Button>
				</div>
				<TransferPanel title="列表2" data={this.targetData} checked={rightChecked} onChange={this.onTargetCheckedChange.bind(this)}/>
			</div>
		)
	}
}

Transfer.PropTypes = {
	leftDefaultChecked:React.PropTypes.array,
	rightDefaultChecked:React.PropTypes.array,
	value:React.PropTypes.array,
	data:React.PropTypes.array,
}

Transfer.defaultProps = {
	leftDefaultChecked:[2],
	rightDefaultChecked:[1],
	value:[1,4],
	data:[
		{'label':'选项1','disabled':false,'key':1},
		{'label':'选项2','disabled':false,'key':2},
		{'label':'选项3','disabled':false,'key':3},
		{'label':'选项4','disabled':false,'key':4},
		{'label':'选项5','disabled':false,'key':5},
		{'label':'选项6','disabled':false,'key':6},
		{'label':'选项7','disabled':false,'key':7},
		{'label':'选项8','disabled':false,'key':8},
		{'label':'选项9','disabled':false,'key':9},
	],

}

export default Transfer;