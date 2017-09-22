import MessageBox from './MessageBox.jsx';

function alert(title, message, props) {
	if (typeof title === 'object') {
	    props = title;
  	}

	props = Object.assign({ title, message,
		modal: 'alert',
		closeOnPressEscape: false,
		closeOnClickModal: false
	}, props);

	return next(props);
}


function confirm(title, message, props){
	if (typeof title === 'object') {
	    props = title;
  	}

	props = Object.assign({ title, message,
		modal: 'confirm',
		showCancelButton: true
	}, props);

	return next(props);
}

function prompt(title, message, props){
	if (typeof title === 'object') {
	    props = title;
  	}

	props = Object.assign({ title, message,
		modal: 'prompt',
	    showCancelButton: true,
	    showInput: true
	}, props);

	return next(props);
}

function next(props){
	return new Promise((resolve, reject) => {
	    const div = document.createElement('div');

	    document.body.appendChild(div);

	    const component = React.createElement(MessageBox, Object.assign({}, props, {
	      promise: { resolve, reject },
	      onClose: () => {
	        ReactDOM.unmountComponentAtNode(div);
	        document.body.removeChild(div);

	        if (props.onClose instanceof Function) {
	          props.onClose();
	        }
	      }
	    }));

	    ReactDOM.render(component, div);
	});
}

export default {alert,confirm,prompt};