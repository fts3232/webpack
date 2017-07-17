import Panel from '../../Components/Panel';
class PanelPage extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            data:''
        };
	}
    render() {
        return (
            <div className="content-block">
            	<Panel>
                    11111
                </Panel>
            </div>
        )
    }
}

PanelPage.propTypes={//属性校验器，表示改属性必须是bool，否则报错
}
PanelPage.defaultProps={
};//设置默认属性

//导出组件
export default PanelPage;


