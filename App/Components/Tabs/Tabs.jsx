import css from './Scss/Main.scss';
import Component from '../Component';
class Tabs extends Component {
	constructor(props){
		super(props)
		this.state = {
			activeIndex : props.activeIndex || 0
		}
		this.header = [];
	}
	componentDidMount(){
		this.calcBarStyle();
	}
	calcBarStyle(){
		let bar = this.refs.bar;
		let {activeIndex} = this.state;
		let {children} = this.props;
		let width = this.header[activeIndex].offsetWidth;
		let offset = 0;
		this.header.map((v,index)=>{
			if(activeIndex>index){
				offset += this.header[index].offsetWidth;
			}
		})
		
		bar.style.transform = `translateX(${offset}px)`
		bar.style.width = `${width}px`;
	}
	changePanel(index){
		let _this = this;
		this.setState({activeIndex:index},()=>{
			_this.calcBarStyle();
		})
	}
	render(){
		let {children} = this.props;
		let {activeIndex} = this.state;
		return(
			<div className={this.className('tabs')} >
				<div className="tabs-header">
					{React.Children.map(children,(v,index)=>{
						return (<div ref={"header-item-"+index} ref={(node)=>{this.header.push(node)}} onClick={this.changePanel.bind(this,index)} className={this.classNames('tabs-header-item',{'is-active':index==activeIndex})}>{v.props.label}</div>);
					})}
					<div className="tabs-header-bar" ref='bar'></div>
				</div>
				<div className="tabs-body">
					{React.Children.map(children,(v,index)=>{
						return React.createElement(v.type, {className:index==activeIndex?'is-active':null}, v.props.children);
					})}
				</div>
			</div>
		)
	}
}

Tabs.PropTypes = {
	activeIndex :React.PropTypes.number,
}

Tabs.defaultProps = {
	activeIndex :1,
}

export default Tabs;