//Component1.jsx
/*import React from 'react';*/
import Alert from '../../Components/Alert';
class AlertPage extends React.Component {
	constructor(props){
		super(props);
	}
    render() {
        return (
            <div className="content-block">
            	<Alert style="">
                    This alert needs your attention, but it's not super important.
                </Alert>
                <Alert style="success">
                    This alert needs your attention, but it's not super important.
                </Alert>
                <Alert style="warning">
                    This alert needs your attention, but it's not super important.
                </Alert>
                <Alert style="danger">
                    This alert needs your attention, but it's not super important.
                </Alert>
            </div>
        )
    }
}

AlertPage.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    
}
AlertPage.defaultProps={
    
};//设置默认属性

//导出组件
export default AlertPage;