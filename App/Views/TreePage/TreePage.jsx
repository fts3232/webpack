import Tree from '../../Components/Tree';
class TreePage extends React.Component {
	constructor(props){
		super(props);
	}
    render() {
        let data = [];
        this.props.menu.map(function(val,i){
            let temp = {
                id:i,
                name:val.cnName,
                item:[]
            }
            if(typeof val.subMenu!='undefined'){
                val.subMenu.map(function(subMenu,j){
                    temp.item.push({id:i+'-'+j,name:subMenu.cnName,item:[{id:i+'-'+j+'subMenu1',name:'a',item:[]},{id:i+'-'+j+'subMenu2',name:'b',item:[]}]})
                })
            }
            data.push(temp)
        })
        return (
            <div className="content-block">
        	   <Tree data={data} />
            </div>
        )
    }
}

TreePage.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    data:React.PropTypes.array
}
TreePage.defaultProps={
    data:[]
};//设置默认属性

//导出组件
export default TreePage;