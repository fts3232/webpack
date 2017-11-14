import Component from '../../Component';
import draggable from '../../../Lib/draggable';
class HueSlider extends Component {
	constructor(props){
		super(props)   ;
		this.state = {
			thumbLeft: 0,
      		thumbTop: 0
		}
	}
	componentDidMount() {
		const { bar, thumb } = this.refs;
	    const dragConfig = {
	      drag:(event) => {
	        this.handleDrag(event);
	      },
	      end:(event) => {
	        this.handleDrag(event);
	      }
	    };
	    draggable(bar, dragConfig);
    	draggable(thumb, dragConfig);
	    this.update();
  	}
  	handleClick(event) {
	    const thumb = this.refs.thumb;
	    const target = event.target;
	    if (target !== thumb) {
	      this.handleDrag(event);
	    }
 	}
  	handleDrag(event) {
    	const rect = this.$el.getBoundingClientRect();
	    const { thumb } = this.refs;
	    const { vertical, color } = this.props;
	    const { onChange } = this.context;
	    let hue;
	    if (!vertical) {
	      let left = event.clientX - rect.left;
	      left = Math.min(left, rect.width - thumb.offsetWidth / 2);
	      left = Math.max(thumb.offsetWidth / 2, left);
	      hue = Math.round(
	        (left - thumb.offsetWidth / 2) / (rect.width - thumb.offsetWidth) * 360
	      );
	    } else {
	      let top = event.clientY - rect.top;
	      top = Math.min(top, rect.height - thumb.offsetHeight / 2);
	      top = Math.max(thumb.offsetHeight / 2, top);
	      hue = Math.round(
	        (top - thumb.offsetHeight / 2) /
	          (rect.height - thumb.offsetHeight) *
	          360
	      );
	    }
	    color.set('hue', hue);
	    this.update();
	    onChange(color);
 	}
  	getThumbLeft(){
	    const { vertical, color } = this.props;
	    if (vertical) return 0;
	    const el = this.$el;
	    const hue = color.get('hue');
	    if (!el) return 0;
	    const thumb = this.refs.thumb;
	    return Math.round(hue * (el.offsetWidth - thumb.offsetWidth / 2) / 360);
  	}

	getThumbTop(){
	 	  const { vertical, color } = this.props;
	    if (!vertical) return 0;
	    const el = this.$el;
	    const hue = color.get('hue');
	    if (!el) return 0;
	    const thumb = this.refs.thumb;
	    return Math.round(hue * (el.offsetHeight - thumb.offsetHeight / 2) / 360);
  	}
  	update(){
	     this.setState({
	      	thumbLeft: this.getThumbLeft(),
	      	thumbTop: this.getThumbTop()
	    });
  	}
	render(){
		let {thumbLeft,thumbTop} = this.state
		return(
			<div className="color-hue-slider" ref={el => this.$el = el}>
	        	<div className="color-hue-slider-bar" ref='bar' onClick={this.handleClick.bind(this)}></div>
	        	<div className="color-hue-slider-thumb"  ref="thumb" style={{left: `${thumbLeft}px`,top: `${thumbTop}px`}}></div>
	        </div>
		)
	}
}

HueSlider.contextTypes = {
  	onChange: React.PropTypes.func
};

HueSlider.PropTypes = {
	color:React.PropTypes.string,
	vertical:React.PropTypes.bool,
}

HueSlider.defaultProps = {
	color:null	,
	vertical:true
}

export default HueSlider;