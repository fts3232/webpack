import css from './Scss/Main.scss';
import Component from '../Component';
import Node from './Node.jsx';
class Tree extends Component {
	constructor(props){
		super(props);
        this.state = {
            'checkedKey':props.checkedKey || []
        };
	}
    checkHandle(data,checked,id){
        if(checked && !data.includes(id)){
            data.push(id)
        }else if(!checked && data.includes(id)){
            let index = data.indexOf(id);
            data.splice(index,1)
        }
        return data;
    }
    onCheckChange(checked,id){
        let checkedKey = this.state.checkedKey;
        if(typeof id =='object'){
            id.map((v)=>{
                checkedKey = this.checkHandle(checkedKey,checked,v);
            })
        }else{
            checkedKey = this.checkHandle(checkedKey,checked,id);
        }
        this.setState({checkedKey:checkedKey});
    }
    render() {
        let {data,showCheckBox,nodeKey} = this.props
        let {checkedKey} = this.state;
        return(
            <div className="tree">
                {data.map((v,k)=>{
                    return (
                        <Node 
                            nodeKey={nodeKey} 
                            treeNode={this} 
                            checkedKey={checkedKey}  
                            showCheckBox={showCheckBox} 
                            nodeModel={v}
                            />
                    )
                })}
            </div>
        )
    }
}

Tree.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    data:React.PropTypes.array,
    showCheckBox:React.PropTypes.bool,
    nodeKey:React.PropTypes.string,
    checkedKey:React.PropTypes.array,
}
Tree.defaultProps={
    showCheckBox:true,
    nodeKey:'id',
    checkedKey:[3,4,5,6],
    data:[
        {
            'label':'节点1',
            'children':[
                {
                    'label':'节点1-1',
                    'children':[
                        {'id':1,'label':'节点1-2'},
                        {'id':2,'label':'节点1-3'}
                    ]
                },
                {'id':3,'label':'节点1-4'},
                {'id':4,'label':'节点1-5'},
            ]
        },
        {
            'label':'节点2',
            'children':[
                {'id':5,'label':'节点2-1'},
                {'id':6,'label':'节点2-2'},
                {'id':7,'label':'节点2-3'},
            ]
        },
        {
            'label':'节点3',
            'children':[
                {'id':8,'label':'节点3-1'},
                {'id':9,'label':'节点3-2'},
                {'id':10,'label':'节点3-3'},
            ]
        },
        {
            'label':'节点4',
            'children':[
                {'id':11,'label':'节点4-1'},
                {'id':12,'label':'节点4-2'},
                {'id':13,'label':'节点4-3'},
            ]
        },
        {
            'label':'节点5',
            'children':[
                {'id':14,'label':'节点5-1'},
                {'id':15,'label':'节点5-2'},
                {'id':16,'label':'节点5-3'},
            ]
        },
        {
            'id':17,
            'label':'节点6',
            
        },
    ],
};//设置默认属性

//导出组件
export default Tree;