import css from './Scss/Main.scss';
class MainContent extends React.Component {
	constructor(props){
		super(props);
	}
    render() {
        let totalPath = this.props.location.pathname;
        let menus = this.props.menu;
        let breadcrumb = [];
        menus.map((val)=>{
            if(typeof val.path !='undefined'){
                if(global.Config.Root + val.path==totalPath){
                    breadcrumb.push(val)
                }
            }else{
                val.subMenu.map((subMenu)=>{
                    if(global.Config.Root + subMenu.path==totalPath){
                        breadcrumb.push(subMenu)
                        breadcrumb.push(val)
                    }
                })
            }
        })
        breadcrumb.reverse()
        return (
            <div className="main-content">
                {breadcrumb.length>0?(
                    <div className="page-header">
                        <h3>
                            {breadcrumb[breadcrumb.length-1].cnName}
                        </h3>
                        
                        <ul className="breadcrumb">
                            {breadcrumb.map((val,i)=>{
                                let className = 'active';
                                if(i == breadcrumb.length-1){
                                    return (
                                        <li className="active">{val.cnName}</li>
                                    )
                                }else{
                                    return (
                                        <li>{val.cnName}</li>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                ):''}
                <div className="page-content">
                    {this.props.children}
                </div>
                {breadcrumb.length>0?(
                <div className="page-footer"></div>
                ):''}
	        </div>
        )
    }
}

MainContent.propTypes={//属性校验器，表示改属性必须是bool，否则报错
  location: React.PropTypes.object,
  menu:React.PropTypes.array
}
MainContent.defaultProps={
    location:{},
    menu:[]
};//设置默认属性

//导出组件
export default MainContent;