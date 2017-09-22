import classnames from 'classnames';
class Component extends React.Component {
	className(...args) {
	    return this.classNames.apply(this, args.concat([this.props.className]));
	  }
	classNames(...args){
		return classnames(...args);
	}
	style(args) {
	    return Object.assign({}, args, this.props.style)
	}
}

Component.PropTypes = {
    className:React.PropTypes.string,
    style:React.PropTypes.object,
}

export default Component;