import Component from '../Component';
class Item extends Component {
	constructor(props){
		super(props)   
		this.state = {
			translate:0,
			scale:0,
			active:false
		}
	}
	componentDidMount(){
		this.parent().addItem(this);
	}
	parent(){
		return this.context.component
	}
	translateItem(index,activeIndex,type,loop){
		const parent = ReactDOM.findDOMNode(this.parent());
    	const parentWidth = parent.offsetWidth;
	    const length = this.parent().state.items.length;
	    let offset;
	    let scale;
	    if(type=='card'){
	    	let width = parentWidth/2;
	    	scale = index==activeIndex?1:0.83;
	    	if(index==activeIndex){
	    		offset = width/2;
	    	}else if(index==activeIndex-1 || (activeIndex == 0 && index == length-1 && loop)){
	    		offset = -((width - width * 0.83)/2)
	    	}else if(activeIndex==length-1 && index==0  && loop){
	    		offset = (width + (width -  width*0.83 )/2)
	    	}else{
	    		offset = (index - activeIndex) * width + ((width - width * 0.83)/2)
	    	}
	    }else if(type=='flatcard'){

	    }else{
	    	offset = parentWidth * (index - activeIndex);
	    	scale = 1;
	    }
	    this.setState({translate:offset,scale:scale,active:activeIndex==index})
	}
	render(){
		let {translate,scale,active} = this.state;
		let {children} = this.props;
		const parent = ReactDOM.findDOMNode(this.parent());
    	const parentWidth = parent.offsetWidth;
		return(
			<div className={this.classNames('carousel-item',{'is-active':active})} style={{transform:`translateX(${translate}px) scale(${scale})`}}>
				{children}
			</div>
		)
	}
}

Item.contextTypes = {
  component: React.PropTypes.any
};

Item.PropTypes = {
	
}

Item.defaultProps = {
	
}

export default Item;