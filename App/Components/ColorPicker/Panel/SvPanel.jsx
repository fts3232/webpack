import Component from '../../Component';
import draggable from '../draggable';
class SvPanel extends Component {
	constructor(props){
		super(props)   ;
		this.state = {
			cursorTop:0,
			cursorLeft:0,
			background: 'hsl(0, 100%, 50%)'
		}
	}
	componentDidMount() {
	    const dragConfig = {
	      drag:(event) => {
	        this.handleDrag(event);
	      },
	      end:(event) => {
	        this.handleDrag(event);
	      }
	    };
	    draggable(this.$el, dragConfig);
	    this.update();
  	}
  	componentWillReceiveProps(nextProps) {
	    const { background } = this.state;
	    const newBackground = 'hsl(' + nextProps.color.get('hue') + ', 100%, 50%)';
	    if (newBackground !== background) {
	      this.update(nextProps);
	    }
  	}
  	handleDrag(event){
  		const { color } = this.props;
    	const { onChange } = this.context;
	    const el = this.$el;
	    const rect = el.getBoundingClientRect();
	    let left = event.clientX - rect.left;
	    let top = event.clientY - rect.top;
	    left = Math.max(0, left);
	    left = Math.min(left, rect.width);
	    top = Math.max(0, top);
	    top = Math.min(top, rect.height);
	    this.setState(
	      {
	        cursorLeft: left,
	        cursorTop: top,
	        background: 'hsl(' + color.get('hue') + ', 100%, 50%)'
	      },
	      () => {
	        color.set({
	          saturation: left / rect.width * 100,
	          value: 100 - top / rect.height * 100
	        });
	        onChange(color);
	      }
	    );
  	}
  	update(props){
	    const { color } = props || this.props;
	    const saturation = color.get('saturation');
	    const value = color.get('value');
	    const el = this.$el;
	    let { width, height } = el.getBoundingClientRect();
	    if (!height) height = width * 3 / 4;
	    this.setState({
	      cursorLeft: saturation * width / 100,
	      cursorTop: (100 - value) * height / 100,
	      background: 'hsl(' + color.get('hue') + ', 100%, 50%)'
	    })
	    /*const value = color.get('value');
	    const el = this.$el;
	    let { width, height } = el.getBoundingClientRect();
	    if (!height) height = width * 3 / 4;
	    this.setState({
	      cursorLeft: saturation * width / 100,
	      cursorTop: (100 - value) * height / 100,
	      background: 'hsl(' + color.get('hue') + ', 100%, 50%)'
	    });*/
  	}
	render(){
		let {cursorLeft,cursorTop,background} = this.state
		return(
			<div className="color-svpanel" style={{ backgroundColor: background }} ref={el => this.$el = el}>
		        <div className="color-svpanel-white" />
		        <div className="color-svpanel-black" />
		        <div className="color-svpanel-cursor" style={{ top: `${cursorTop}px`, left: `${cursorLeft}px`}}></div>
	        </div>
		)
	}
}

SvPanel.contextTypes = {
  onChange: React.PropTypes.func
};

SvPanel.PropTypes = {
	color:React.PropTypes.string,
}

SvPanel.defaultProps = {
	color:null	
}

export default SvPanel;