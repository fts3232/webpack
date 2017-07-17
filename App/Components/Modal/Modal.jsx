import css from './Scss/Main.scss';
import Svg from '../Svg';
class Modal extends React.Component {
	constructor(props){
		super(props);
	}
    render() {
        return(
            <div className="modal" ref="modal" >
                <div className="wrapper">
                    <div className="box" style={{width:this.props.width}}>
                        <div className="modal-header">
                            <h3>{this.props.title}</h3>
                            <a onClick={this.props.clickHandler}><Svg name="Close" className="close"  /></a>
                        </div>
                        <div className="modal-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Modal.propTypes={//属性校验器，表示改属性必须是bool，否则报错

}
Modal.defaultProps={

};//设置默认属性

//导出组件
export default Modal;