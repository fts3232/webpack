import Component from '../../Component';
import draggable from '../draggable';
class AlphaSlider extends Component {
	constructor(props){
		super(props)   ;
		this.state = {
			thumbLeft: 0,
      		thumbTop: 0,
      		background: null
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
  	componentWillReceiveProps(nextProps) {
	    const { background } = this.state;
	    const newBackground = 'hsl(' + nextProps.color.get('hue') + ', 100%, 50%)';
	    if (newBackground !== background) {
	      this.update();
	    }
  	}
  	handleClick(event) {
	    const thumb = this.refs.thumb;
	    const target = event.target;
	    if (target !== thumb) {
	      this.handleDrag(event);
	    }
 	}
  	handleDrag(event) {
    	const { vertical, color } = this.props;
	    const { onChange } = this.context;
	    const rect = this.$el.getBoundingClientRect();
	    const { thumb } = this.refs;
	    if (!vertical) {
	      let left = event.clientX - rect.left;
	      left = Math.max(thumb.offsetWidth / 2, left);
	      left = Math.min(left, rect.width - thumb.offsetWidth / 2);
	      color.set(
	        'alpha',
	        Math.round(
	          (left - thumb.offsetWidth / 2) /
	            (rect.width - thumb.offsetWidth) *
	            100
	        )
	      );
	    } else {
	      let top = event.clientY - rect.top;
	      top = Math.max(thumb.offsetHeight / 2, top);
	      top = Math.min(top, rect.height - thumb.offsetHeight / 2);
	      color.set(
	        'alpha',
	        Math.round(
	          (top - thumb.offsetHeight / 2) /
	            (rect.height - thumb.offsetHeight) *
	            100
	        )
	      );
	    }
	    this.update();
	    onChange(color);
 	}
  	getThumbLeft(){
	    const { vertical, color } = this.props;
	    if (vertical) return 0;
	    const el = this.$el;
	    const alpha = color._alpha;
	    if (!el) return 0;
	    const thumb = this.refs.thumb;
	    return Math.round(alpha * (el.offsetWidth - thumb.offsetWidth / 2) / 100);
  	}

	getThumbTop(){
	 	const { vertical, color } = this.props;
	    if (!vertical) return 0;
	    const el = this.$el;
	    const alpha = color._alpha;
	    if (!el) return 0;
	    const thumb = this.refs.thumb;
	    return Math.round(alpha * (el.offsetHeight - thumb.offsetHeight / 2) / 100);
  	}
  	getBackground() {
    	const { color } = this.props;
	    if (color && color.value) {
	      const { r, g, b } = color.toRgb();
	      return `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 0) 0%, rgba(${r}, ${g}, ${b}, 1) 100%)`;
	    }
	    return null;
  	}
  	update(){
	     this.setState({
	      	thumbLeft: this.getThumbLeft(),
	      	thumbTop: this.getThumbTop(),
	      	background: this.getBackground()
	    });
  	}
	render(){
		const {vertical} = this.props;
		let {thumbLeft,thumbTop, background} = this.state
		return(
			<div className="color-alpha-slider" ref={el => this.$el = el}>
	        	<div className="color-alpha-slider-bar" ref='bar' onClick={this.handleClick.bind(this)} style={{ background: background }}></div>
	        	<div className="color-alpha-slider-thumb"  ref="thumb" style={{left: `${thumbLeft}px`,top: `${thumbTop}px`}}></div>
	        </div>
		)
	}
}

AlphaSlider.contextTypes = {
  onChange: React.PropTypes.func
};

AlphaSlider.PropTypes = {
	color:React.PropTypes.string,
	vertical:React.PropTypes.bool,
}

AlphaSlider.defaultProps = {
	color:null	,
	vertical:false
}

export default AlphaSlider;