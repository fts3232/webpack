import Component from '../Component';

const BAR_MAP = {
  vertical: {
    offset: 'offsetHeight',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    size: 'height',
    key: 'vertical',
    axis: 'Y',
    client: 'clientY',
    direction: 'top'
  },
  horizontal: {
    offset: 'offsetWidth',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    size: 'width',
    key: 'horizontal',
    axis: 'X',
    client: 'clientX',
    direction: 'left'
  }
}

class Bar extends Component {
	constructor(props){
		super(props);
		this.cursorDown = false;
		this.mouseUpDocumentHandler = this.mouseUpDocumentHandler.bind(this)
		this.mouseMoveDocumentHandler = this.mouseMoveDocumentHandler.bind(this);
	}
	get bar(){
		return  BAR_MAP[this.props.vertical ? 'vertical' : 'horizontal'];
	}
	get wrap() {
	    return this.props.getParentWrap();
	  }
	clickThumbHandler(e) {
	    this.startDrag(e);
	    this[this.bar.axis] = (e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]));
	}
	clickTrackHandler(e) {
	    const offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
    	const thumbHalf = (this.thumb[this.bar.offset] / 2);
    	const thumbPositionPercentage = ((offset - thumbHalf) * 100 / this.root[this.bar.offset]);

    	this.wrap[this.bar.scroll] = (thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100);
	}
	startDrag(e) {
	    event.stopImmediatePropagation();
	    this.cursorDown = true;
	   	document.addEventListener('mousemove', this.mouseMoveDocumentHandler,false);
		document.addEventListener('mouseup', this.mouseUpDocumentHandler,false);
	}
	mouseMoveDocumentHandler(e) {
		 if (this.cursorDown === false) return;
    	const prevPage = this[this.bar.axis];

	    if (!prevPage) return;

	    const offset = (e[this.bar.client] - this.root.getBoundingClientRect()[this.bar.direction]);
	    const thumbClickPosition = (this.thumb[this.bar.offset] - prevPage);
	    const thumbPositionPercentage = ((offset - thumbClickPosition) * 100 / this.root[this.bar.offset]);

	    this.wrap[this.bar.scroll] = (thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100);
	}

	mouseUpDocumentHandler() {
	    this.cursorDown = false;
    	this[this.bar.axis] = 0;
    	document.removeEventListener('mousemove', this.mouseMoveDocumentHandler);
    	document.onselectstart = null;
  	}
	render() {
		let style = {}
		if(this.props.vertical){
			style = {height:this.props.size,transform:'translateY('+this.props.move+'%)'}
		}else{
			style = {width:this.props.size,transform:'translateX('+this.props.move+'%)'}
		}
        return (
            <div ref={(root)=>{this.root = root}} className={this.classNames('scrollbar-bar',{'is-vertical':this.props.vertical},{'is-horizontal':!this.props.vertical})}  onMouseDown={ this.clickTrackHandler.bind(this) }>
               <div ref={(thumb)=>{this.thumb = thumb}} className="scrollbar-thumb" style={style} onMouseDown={this.clickThumbHandler.bind(this)}></div>
            </div>
        )
    }
}
Bar.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    move:React.PropTypes.string,
    size:React.PropTypes.string,
    vertical:React.PropTypes.bool,
    getParentWrap:React.PropTypes.func.isRequired
}
Bar.defaultProps={
	vertical:false
};//设置默认属性

//导出组件
export default Bar;