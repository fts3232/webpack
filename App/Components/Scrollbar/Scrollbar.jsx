import css from './Scss/Main.scss';
import Component from '../Component';
class Scrollbar extends Component {
	constructor(props){
		super(props);
        this.scroll = null;
        this.state = {height:0,innerHeight:0,bar:true}
	}
    handleScroll(e) {
        this.getHeight();
        if(this.state.bar){
            this.refs['scroll-bar'].style.opacity = 1;
            let height = this.getHeight();
            let offset = height.innerHeight - height.height;
            if(offset>0){
                this.refs['bar'].style.opacity = 1;
                let child= this.refs['scroll'].childNodes;
                //document.querySelector(this.props.selector).style.transition = "top 0.5s";
                let step = 100;
                if(offset<100){
                    step = offset;
                }
                let top = document.querySelector(this.props.selector).style.top==''?0:parseInt(document.querySelector(this.props.selector).style.top);
                let barTop = this.refs['bar'].style.top==''?0:parseInt(this.refs['bar'].style.top);
                if(e.deltaY<0){
                    if(step+top>0){
                        document.querySelector(this.props.selector).style.top = '0px'
                        this.refs['bar'].style.top = '0px' 
                    }else{
                        document.querySelector(this.props.selector).style.top = step+top>0?0+'px':top+step+'px'
                        this.refs['bar'].style.top = barTop- step / height.innerHeight * height.height +'px' 
                    }
                }else{
                    if(step - top + height.height>=height.innerHeight){
                        document.querySelector(this.props.selector).style.top =  height.height - height.innerHeight +'px';
                        this.refs['bar'].style.top = height.height - parseInt(this.refs['bar'].style.height)  +'px'
                    }else{
                        document.querySelector(this.props.selector).style.top = top-step+'px';
                        this.refs['bar'].style.top = barTop+ step / height.innerHeight * height.height +'px'
                    }
                }
            }
        }
    }
    getHeight(){
        let innerHeight = 0;
        let nodes = document.querySelector(this.props.selector).childNodes;
        let nodesLen = nodes.length;
        let height = document.querySelector(this.props.selector).offsetHeight;
        if(window.getComputedStyle(document.querySelector(this.props.selector))['margin-top']!=''){
            height = height - parseInt(window.getComputedStyle(document.querySelector(this.props.selector))['margin-top'])
        }
        for(let j=0;j< nodesLen;j++){
            if(nodes[j].className!='scroll' && nodes[j].nodeType==1){
                let marginTop = window.getComputedStyle(nodes[j])['margin-top']!=''?parseInt(window.getComputedStyle(nodes[j])['margin-top']):0
                let marginBottom = window.getComputedStyle(nodes[j])['margin-bottom']!=''?parseInt(window.getComputedStyle(nodes[j])['margin-bottom']):0
                 innerHeight += nodes[j].offsetHeight +marginBottom + marginTop
            }
               
        }
        let offset = innerHeight - height;
        if(offset<=0){
            this.setState({bar:false})
        }else{
            this.setState({bar:true})
            this.refs['bar'].style.height = height / innerHeight * height +'px';
            if(window.getComputedStyle($('.main-content')[0])['margin-top']!=''){
                this.refs['scroll-bar'].style.height = height +'px';
            }
        }
        return {height:height,innerHeight:innerHeight}
    }
    update(){
        let wrapper = this.wrapper;
        let heightPercentage, widthPercentage;
        console.log(wrapper.clientHeight)
        console.log(wrapper.scrollHeight)
    }
    componentDidMount(){
        /*console.log(React.Children.map(this.props.children,(children)=>{
            console.log(ReactDOM.findDOMNode(children))
        }))*/
        //let wrapper = ReactDOM.findDOMNode(this);
        let wrapper = this.wrapper;
        let heightPercentage, widthPercentage;
        let handler = this.update.bind(this)
        requestAnimationFrame(handler)
        window.addEventListener('resize',handler)
       /* heightPercentage = (wrapper.clientHeight * 100 / wrapper.scrollHeight);
        widthPercentage = (wrapper.clientWidth * 100 / wrapper.scrollWidth);

        let sizeHeight = (heightPercentage < 100) ? (heightPercentage + '%') : '';
        let sizeWidth = (widthPercentage < 100) ? (widthPercentage + '%') : '';

        console.log(sizeHeight,sizeWidth)*/
        /*const wrap = this.wrap;
        if (!wrap) return;

        heightPercentage = (wrap.clientHeight * 100 / wrap.scrollHeight);
        widthPercentage = (wrap.clientWidth * 100 / wrap.scrollWidth);

        let sizeHeight = (heightPercentage < 100) ? (heightPercentage + '%') : '';
        let sizeWidth = (widthPercentage < 100) ? (widthPercentage + '%') : '';


        console.log(wrapper.offsetHeight)
        console.log(scroll)
        console.log(document.querySelector('.scroll').offsetHeight)*/
        //let height = this.getHeight();
       /* document.querySelector(this.props.selector).style.transition = "top 0.5s";
        document.querySelector(this.props.selector).style.top='0px'
        document.querySelector(this.props.selector).style.position='relative';
        let height = this.getHeight();
        window.addEventListener('resize',this.getHeight.bind(this))
        document.querySelector(this.props.selector).onwheel =this.handleScroll.bind(this)*/
    }
    render() {
        return (
            <div className="scroll-wrapper" ref={(wrapper)=>{this.wrapper = wrapper}}>
                <div className="scroll">
                    {this.props.children}
                </div>
            </div>
        )
        return(
            <div className='scroll' ref='scroll' onWheel={this.handleScroll.bind(this)}>
                {this.state.bar?(
                    <div className="scroll-bar" ref='scroll-bar'>
                        <div className="bar" ref='bar'></div>
                    </div>
                ):null}
                
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