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
    getChildContext(){
        return {
          root: this
        };
    }
    onChecked(checked,ids){
        let {checkedKey} = this.state;

        ids.map((v)=>{
            if(checked && !checkedKey.includes(v)){
                checkedKey.push(v)
            }else if(!checked && checkedKey.includes(v)){
                let index = checkedKey.indexOf(v);
                checkedKey.splice(index,1)
            }
        })
        this.setState({checkedKey:checkedKey});
    }
    render() {
        let {data,showCheckBox,nodeKey} = this.props
        let {checkedKey} = this.state;
        return(
            <div className="tree">
                {data.map((v,k)=>{
                    return (<Node nodeKey={nodeKey} checkedKey={checkedKey}  showCheckBox={showCheckBox} context={v}/>)
                })}
            </div>
        )
    }
}

Tree.childContextTypes={
    root:React.PropTypes.any
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
    checkedKey:[3,5],
    data:[
        {
            'id':1,
            'label':'节点1',
            'children':[
                {
                    'id':2,
                    'label':'节点1-1',
                    'children':[
                        {'id':3,'label':'节点1-2'},
                        {'id':4,'label':'节点1-3'}
                    ]
                },
                {'id':5,'label':'节点1-4'},
                {'id':6,'label':'节点1-5'},
            ]
        },
        {
            'id':7,
            'label':'节点2',
            'children':[
                {'id':8,'label':'节点2-1'},
                {'id':9,'label':'节点2-2'},
                {'id':10,'label':'节点2-3'},
            ]
        },
        {
            'id':11,
            'label':'节点3',
            'children':[
                {'id':12,'label':'节点3-1'},
                {'id':13,'label':'节点3-2'},
                {'id':14,'label':'节点3-3'},
            ]
        },
        {
            'id':15,
            'label':'节点4',
            'children':[
                {'id':16,'label':'节点4-1'},
                {'id':17,'label':'节点4-2'},
                {'id':18,'label':'节点4-3'},
            ]
        },
        {
            'id':19,
            'label':'节点5',
            'children':[
                {'id':20,'label':'节点5-1'},
                {'id':21,'label':'节点5-2'},
                {'id':22,'label':'节点5-3'},
            ]
        },
        {
            'id':23,
            'label':'节点6',
            'children':[
                {'id':24,'label':'节点6-1'},
                {'id':25,'label':'节点6-2'},
                {'id':26,'label':'节点6-3'},
            ]
        },
    ],
};//设置默认属性

//导出组件
export default Tree;