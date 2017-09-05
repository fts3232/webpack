import css from './Scss/Main.scss';
import Component from '../Component';
import Node from './Node.jsx';
class Tree extends Component {
	constructor(props){
		super(props);
        this.state = {
            'selected':[]
        };
	}
    render() {
        let {data} = this.props
        return(
            <div className="tree">
                {data.map((v,k)=>{
                    return (<Node context={v}/>)
                })}
            </div>
        )
    }
}

Tree.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    data:React.PropTypes.array,
}
Tree.defaultProps={
    data:[
        {
            'label':'节点1',
            'children':[
                {
                    'label':'节点1-1',
                    'children':[
                        {'label':'节点1-2'},
                        {'label':'节点1-3'}
                    ]
                },
                {'label':'节点1-2'},
                {'label':'节点1-3'},
            ]
        },
        {
            'label':'节点2',
            'children':[
                {'label':'节点2-1'},
                {'label':'节点2-2'},
                {'label':'节点2-3'},
            ]
        },
        {
            'label':'节点3',
            'children':[
                {'label':'节点3-1'},
                {'label':'节点3-2'},
                {'label':'节点3-3'},
            ]
        },
        {
            'label':'节点4',
            'children':[
                {'label':'节点4-1'},
                {'label':'节点4-2'},
                {'label':'节点4-3'},
            ]
        },
        {
            'label':'节点5',
            'children':[
                {'label':'节点5-1'},
                {'label':'节点5-2'},
                {'label':'节点5-3'},
            ]
        },
        {
            'label':'节点6',
            'children':[
                {'label':'节点6-1'},
                {'label':'节点6-2'},
                {'label':'节点6-3'},
            ]
        },
    ],
};//设置默认属性

//导出组件
export default Tree;