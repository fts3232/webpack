import img from '../../../Assets/images/404-error.png';
import css from './Scss/Main.scss';
class NotFound extends React.Component {
	constructor(props){
		super(props);
	}
  render() {
    return (
        <div className="not-found">
          <img src={img}/>
          <h2>PAGE NOT FOUND</h2>
          <h3>WE COULDN’T FIND THIS PAGE</h3>
          <a className="back" href={global.frameConfig.Root}>Back To Home</a>
        </div>
    )
  }
}

NotFound.propTypes={//属性校验器，表示改属性必须是bool，否则报错
}
NotFound.defaultProps={
};//设置默认属性

//导出组件
export default NotFound;