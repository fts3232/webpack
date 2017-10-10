import css from './Scss/Main.scss';
import Component from '../Component';
import Icon from '../Icon';
import {throttle} from '../../Lib/throttle-debounce.js';
class Carousel extends Component {
	constructor(props){
		super(props)   
		this.state = {
			activeIndex:props.activeIndex||0,
			items:[],
		}
		this.throttleClick  = throttle(300,(index)=>{this.setActiveIndex(index)})
	}
	getChildContext(){
		return {component:this}
	}
	addItem(item){
		let {items} = this.state;
		items.push(item);
		this.setState({items:items})
	}
	componentDidUpdate(props, state) {
	    this.resetItemPoistion();
	}
	resetItemPoistion(){
		let {items} = this.state;
		let {type,loop} = this.props;
		items.map((v,index)=>{
			v.translateItem(index, this.state.activeIndex,type,loop);
		})
	}
	setActiveIndex(index){
		let {children,loop} = this.props;
		let count = children.length;
		if(loop){
			if(index>=count){
				index = 0;
			}
			if(index<0){
				index = count - 1;
			}
		}
		this.setState({'activeIndex':index});
	}
	next(){
		let {activeIndex} = this.state;
		let {children,loop} = this.props;
		let count = children.length;
		let next = activeIndex + 1;
		if(next >= count && loop){
			next = 0;
		}
		this.setActiveIndex();
		this.setState({'activeIndex':next});
	}
	prev(){
		let {activeIndex} = this.state;
		let {children,loop} = this.props;
		let count = children.length;
		let prev = activeIndex - 1;
		if(prev<0 && loop){
			prev = count - 1;
		}
		this.setState({'activeIndex':prev});
	}
	slideTo(index){
		this.setState({'activeIndex':index});
	}
	render(){
		let {activeIndex} = this.state;
		let {children,loop,type,height} = this.props;
		let count = children.length;
		return(
			<div className={this.className('carousel',type=='card' && 'is-card')} style={this.style()}>
				<div className={this.classNames('carousel-wrapper')} style={{height:height}}>
					<button className={this.classNames('carousel-prev-btn',{'is-disabled':activeIndex-1<0 && !loop})} onClick={activeIndex-1<0 && !loop?null:this.throttleClick.bind(this,activeIndex-1)}>
						<Icon iconName="angle-left"/>
					</button>
					<button className={this.classNames('carousel-next-btn',{'is-disabled':activeIndex+1>=count && !loop})} onClick={activeIndex+1>=count && !loop?null:this.throttleClick.bind(this,activeIndex+1)}>
						<Icon iconName="angle-right"/>
					</button>
					{children}
				</div>
				<ul className="carousel-pagination">
					{React.Children.map(children,(v,index)=>{
						return (<li className={this.classNames('carousel-pagination-item',{'is-active':activeIndex==index})} onClick={this.slideTo.bind(this,index)}></li>)
					})}
				</ul>
			</div>
		)
	}
}

Carousel.childContextTypes = {
	component:React.PropTypes.any
}

Carousel.PropTypes = {
	height:React.PropTypes.string,
	type:React.PropTypes.oneOf(['card']),
	activeIndex:React.PropTypes.number,
	autoplay:React.PropTypes.bool,
	interval:React.PropTypes.number,
	loop:React.PropTypes.bool,
	onChange:React.PropTypes.func,
}

Carousel.defaultProps = {
	height:150,
	type:null,
	activeIndex:0,
	autoplay:false,
	interval:1000,
	loop:false,
	onChange:()=>{},
}

export default Carousel;