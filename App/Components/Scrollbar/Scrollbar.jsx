import css from './Scss/Main.scss';
import Component from '../Component';
import Bar from './Bar.jsx';
class Scrollbar extends Component {
	constructor(props){
		super(props);
        this.wrapper = null;
        this.state = {
            sizeWidth: '0',
            sizeHeight: '0',
            moveX: 0,
            moveY: 0
        }
        this.cleanResize = null;
	}
    handleScroll(e) {
        const wrap = this.wrapper;
        this.setState({
          moveY: ((wrap.scrollTop * 100) / wrap.clientHeight),
          moveX: ((wrap.scrollLeft * 100) / wrap.clientWidth)
        })
    }
    update(){
        let wrap = this.wrapper;
        let heightPercentage, widthPercentage;
        heightPercentage = (wrap.clientHeight * 100 / wrap.scrollHeight);
        widthPercentage = (wrap.clientWidth * 100 / wrap.scrollWidth);

        let sizeHeight = (heightPercentage < 100) ? (heightPercentage + '%') : '';
        let sizeWidth = (widthPercentage < 100) ? (widthPercentage + '%') : '';
        this.setState({sizeHeight:sizeHeight,sizeWidth:sizeWidth})
    }
    componentDidMount(){
        let wrap = this.wrapper;
        let handler = this.update.bind(this)
        let rafId = requestAnimationFrame(handler)
        this.cleanRAF = ()=>{
          cancelAnimationFrame(rafId)
        }
        wrap.addEventListener('scroll', handler, true);
        window.addEventListener('resize',handler,true);
        this.cleanResize = ()=>{
            window.removeEventListener('resize',handler);
            wrap.removeEventListener('scroll', handler);
        }
    }
    componentWillUnmount(){
        this.cleanRAF();
        this.cleanResize && this.cleanResize();
    }
    render() {
        let {sizeHeight,sizeWidth,moveX,moveY} = this.state;
        let {height} = this.props
        height = parseFloat(height)+17 + 'px'
        return (
            <div className="scrollbar" ref='root'>
                <div className="scrollbar-wrapper" style={this.style({'height':height})} onScroll={this.handleScroll.bind(this)} ref={(wrapper)=>{this.wrapper = wrapper}}>
                    {this.props.children}
                </div>
                <Bar move={moveX} size={sizeWidth} getParentWrap={()=>this.wrapper} />
                <Bar move={moveY} size={sizeHeight} getParentWrap={()=>this.wrapper} vertical={true}/>
            </div>
        )
    }
}

Scrollbar.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    //ref:React.PropTypes.object
}
Scrollbar.defaultProps={
};//设置默认属性

//导出组件
export default Scrollbar;