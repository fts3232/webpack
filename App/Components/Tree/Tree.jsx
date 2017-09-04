import css from './Scss/Main.scss';
import Component from '../Component';
class Tree extends Component {
	constructor(props){
		super(props);
	}
    createItem(data){
        let ref = 'item-'+data.id;
        let iconRef = ref+'-icon';
        let item = (
            <div className="treeFolder plus" ref={ref} >
                <div className="treeFolderHeader">
                    <div className="treeFolderName" onClick={this.clickHandler.bind(this,ref)}>
                        <Svg name="Plus2" ref={iconRef} />
                        <span>{data.name}</span>
                    </div>
                    <div className="treeFolderAction">
                        <Svg name="Plus"/>
                        <Svg name="Edit"/>
                        <Svg name="Delete"/>
                    </div>
                </div>
                <div className="treeFolderItems">
                    {data.item.map((items)=>{
                        if(items.item !=''){
                            let item = this.createItem(items);
                            return item;
                        }else{
                            return (
                                <div className="treeFolderItem">
                                    <div className="treeFolderHeader">
                                        <div className="treeFolderName">{items.name}</div>
                                        <div className="treeFolderAction">
                                            <Svg name="Plus"/>
                                            <Svg name="Edit"/>
                                            <Svg name="Delete"/>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
        return item;
    }
    clickHandler(ref){
        let iconRef = ref+'-icon';
        if(this.hasClass(this.refs[ref], 'plus')){
            this.removeClass(this.refs[ref],'plus');
            this.addClass(this.refs[ref],'minus');
            this.refs[iconRef].changeSvg('Minus2');
        }else{
            this.removeClass(this.refs[ref],'minus');
            this.addClass(this.refs[ref],'plus');
            this.refs[iconRef].changeSvg('Plus2');
        }
        
        
    }
    render() {
        return(
            <div className="tree">
                {this.props.data.map((data,i)=>{
                    if(data.item !=''){
                        let item = this.createItem(data);
                        return item;
                    }else{
                        return (
                            <div className="treeFolder">
                                <div className="treeFolderHeader">
                                    <div className="treeFolderName">{data.name}</div>
                                    <div className="treeFolderAction">
                                        <Svg name="Plus"/>
                                        <Svg name="Edit"/>
                                        <Svg name="Delete"/>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

Tree.propTypes={//属性校验器，表示改属性必须是bool，否则报错

}
Tree.defaultProps={

};//设置默认属性

//导出组件
export default Tree;