import css from './Scss/Search.scss';
import Form from '../../Components/Form';
class Search extends React.Component {
	render(){
		return(
			<div className="search">
				<Form type="post" style="inline">
					<input type="text" className="form-control" placeholder="Search here..."/>
				</Form>
            </div>
		)
	}
}

Search.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    
}
Search.defaultProps={
    
};//设置默认属性

//导出组件
export default Search;