import Component from '../Component';
class Bar extends Component {
	clickThumbHandler() {
		console.log(event)
	    this.startDrag(event);
	    //this[this.bar.axis] = (e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]));
	}
	startDrag(e) {
	    e.stopImmediatePropagation();
	    
	}
	render() {
		let style = {}
		if(this.props.vertical){
			style = {height:this.props.size,transform:'translateY('+this.props.move+'%)'}
		}else{
			style = {width:this.props.size,transform:'translateX('+this.props.move+'%)'}
		}
        return (
            <div className={this.classNames('scrollbar-bar',{'is-vertical':this.props.vertical},{'is-horizontal':!this.props.vertical})}>
               <div className="scrollbar-thumb" style={style} onClick={this.clickThumbHandler.bind(this)}></div>
            </div>
        )
    }
}
Bar.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    move:React.PropTypes.string,
    size:React.PropTypes.string,
    vertical:React.PropTypes.bool
}
Bar.defaultProps={
	vertical:false
};//设置默认属性

//导出组件
export default Bar;