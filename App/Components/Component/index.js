import classnames from 'classnames';
class Component extends React.Component {
	classNames(...args){
		return classnames(args);
	}
	style(args) {
	    return Object.assign({}, args, this.props.style)
	}
}

export default Component;