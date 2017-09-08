import Component from '../Component';
import Icon from '../Icon';
import CheckBox  from '../CheckBox';
class Node extends Component {
	constructor(props){
		super(props);
        this.state = {
            expand:false,
        }
	}
    onExpand(e){
        e.stopPropagation();
        let {expand} = this.state;
        let _this = this;
        this.setState({expand:!expand},()=>{
            clearTimeout(_this.timer);
            if(!expand){
                _this.refs['children'].style.height = 0;
                _this.refs['children'].style.display = 'block';
                _this.refs['children'].style.height = _this.refs['children'].scrollHeight + 'px';
                _this.timer = setTimeout(() => {
                    _this.refs['children'].style.height = '';
                }, 300);
            }else{
                _this.refs['children'].style.height = _this.refs['children'].scrollHeight + 'px';
                _this.timer = setTimeout(() => {
                   _this.refs['children'].style.height = '0';
                   _this.timer = setTimeout(() => {
                       _this.refs['children'].style.display = 'none';
                    }, 300);
                }, 100);
            }
        })
    }
    getRoot(){
        return this.context.root;
    }
    onAllChecked(checked){
        let data = this.props.context;
        let ids = this.getID(data);
        this.getRoot().onChecked(checked,ids);
    }
    getID(context){
        let ids = [];
        let childrenID = [];
        if(!Array.isArray(context)){
            ids.push(context.id)
            if( typeof context.children !='undefined'){
                childrenID = this.getID(context.children)
                ids = ids.concat(childrenID);
            }
        }else{
            context.map((v,k)=>{
                ids.push(v.id);
                if( typeof v.children !='undefined'){
                    childrenID = this.getID(v.children)
                    ids = ids.concat(childrenID);
                }
            })
        }
        return ids;
        
    }
    render() {
        let {context,showCheckBox,checkedKey,nodeKey} = this.props;
        let {expand} = this.state;
        return(
            <div className={this.classNames('node',{'is-expand':expand})}>
                <div className="node-content" onClick={this.onExpand.bind(this)}>
                    <span className={this.classNames('icon','icon-expand',{'no-children':typeof context.children =='undefined' || context.children==''})}></span>
                    {showCheckBox?(
                        <CheckBox checked={checkedKey.includes(context[nodeKey])} onChange={this.onAllChecked.bind(this)}/>
                    ):null}
                    <span>{context.label}</span>
                </div>

                <div className="node-children" ref='children'>
                    {typeof context.children !='undefined' && context.children.map((v,k)=>{
                        return (<Node nodeKey={nodeKey} checkedKey={checkedKey} showCheckBox={showCheckBox} context={v}/>);
                    })}
                </div>
            </div>
        )
    }
}

Node.contextTypes = {
    root: React.PropTypes.string.isRequired
}

Node.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    context:React.PropTypes.object,
    showCheckBox:React.PropTypes.bool,
    nodeKey:React.PropTypes.string,
    checkedKey:React.PropTypes.array,
}
Node.defaultProps={
    context:{},
    showCheckBox:false,
    nodeKey:'id',
    checkedKey:[],
};//设置默认属性

//导出组件
export default Node;