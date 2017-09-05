import Component from '../Component';
import Icon from '../Icon';
class Node extends Component {
	constructor(props){
		super(props);
        this.state = {
            expand:false
        }
	}
    beforeLeave(): void {
    const el = this.refs['children'];
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.dataset.oldOverflow = el.style.overflow;

    el.style.display = 'block';
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + 'px';
    }
    el.style.overflow = 'hidden';
  }

  leave(): void {
    const el = this.refs['children'];
    if (el.scrollHeight !== 0) {
      
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    }
    el.style.height = 0;
    this.leaveTimer = setTimeout(() => this.afterLeave(), 300);
  }

  afterLeave(): void {
    const el = this.refs['children'];
    if (!el) return ; 

    el.style.display = 'none';
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow;
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  }
    onExpand(){
        let {expand} = this.state;
        let _this = this;
        this.setState({expand:!expand},()=>{
            if(!expand){
                _this.refs['children'].style.height = 0;
                _this.refs['children'].style.display = 'block';
                _this.refs['children'].style.height = _this.refs['children'].scrollHeight + 'px';
                setTimeout(() => {
                    _this.refs['children'].style.height = '';
                }, 300);
            }else{
                _this.beforeLeave();
                _this.leave();
               /* _this.refs['children'].style.height = _this.refs['children'].scrollHeight + 'px';
                //_this.refs['children'].style.display = 'block';
                _this.refs['children'].style.height = '0px';
                setTimeout(() => {
                    //_this.refs['children'].style.height = '0px';
                }, 300);*/
            }

            /*if(!expand){
                let children = _this.refs['children'].childNodes;
                if(children){
                    for(let x in children){
                        if(children[x].nodeType==1){
                            height +=children[x].offsetHeight
                        }
                    }
                }
            }
            _this.refs['children'].style.height = height+'px';*/
            /*setTimeout(()=>{
                _this.refs['children'].style.height = null;
            },300)*/
        })
    }
    render() {
        let {context} = this.props;
        let {expand} = this.state;
        return(
            <div className={this.classNames('node',{'is-expand':expand})}>
                <div className="node-content" onClick={this.onExpand.bind(this)}>
                    <span className={this.classNames('icon',{'no-children':typeof context.children =='undefined' || context.children==''})}></span>
                    <span>{context.label}</span>
                </div>
                <div className="node-children" ref='children'>
                    {typeof context.children !='undefined' && context.children.map((v,k)=>{
                        return (<Node context={v}/>);
                    })}
                </div>
            </div>
        )
    }
}

Node.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    context:React.PropTypes.object
}
Node.defaultProps={
    context:{},
};//设置默认属性

//导出组件
export default Node;