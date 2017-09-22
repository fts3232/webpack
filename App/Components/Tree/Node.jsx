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
    getNodeKey(nodeModel){
        let {nodeKey} = this.props
        let key = [];
        if(typeof nodeModel.children!='undefined'){
            nodeModel.children.map((v)=>{
                let childKey = this.getNodeKey(v);
                key = key.concat(childKey);
            })
        }else{
            key.push(nodeModel[nodeKey]);
        }
        return key;
    }
    onChecked(checked){
        let {nodeModel} = this.props
        let key = this.getNodeKey(nodeModel);
        this.props.treeNode.onCheckChange(checked,key)
    }
    render() {
        let {nodeModel,showCheckBox,checkedKey,nodeKey,treeNode} = this.props;
        let {expand} = this.state;
        let indeterminate = false;
        let checked = true;
        let key = this.getNodeKey(nodeModel);
        if(Array.isArray(key)){
            key.map((v)=>{
                if(!checkedKey.includes(v)){
                    checked = false
                }else{
                    indeterminate = true;
                }
            })
        }else{
            checked = checkedKey.includes(key);
        }
        return(
            <div className={this.classNames('node',{'is-expand':expand})}>
                <div className="node-content" onClick={this.onExpand.bind(this)}>
                    <span className={this.classNames('icon','icon-expand',{'no-children':typeof nodeModel.children =='undefined' || nodeModel.children==''})}></span>
                    {showCheckBox?(
                        <CheckBox checked={checked} indeterminate={indeterminate} onChange={this.onChecked.bind(this)}/>
                    ):null}
                    <span>{nodeModel.label}</span>
                </div>

                <div className="node-children" ref='children'>
                    {typeof nodeModel.children !='undefined' && nodeModel.children.map((v,k)=>{
                        return (<Node nodeKey={nodeKey} treeNode={treeNode} checkedKey={checkedKey} showCheckBox={showCheckBox} nodeModel={v}/>);
                    })}
                </div>
            </div>
        )
    }
}

Node.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    nodeModel:React.PropTypes.object,
    showCheckBox:React.PropTypes.bool,
    nodeKey:React.PropTypes.string,
    checkedKey:React.PropTypes.array,
    treeNode:React.PropTypes.object,
}
Node.defaultProps={
    nodeModel:{},
    showCheckBox:false,
    nodeKey:'id',
    checkedKey:[],
};//设置默认属性

//导出组件
export default Node;