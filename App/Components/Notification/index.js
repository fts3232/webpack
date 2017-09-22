import Notification from './Notification.jsx';

export default function notification(title,message,props){
	if (typeof title === 'object') {
	    props = title;
  	}

	props = Object.assign({ title, message,
		
	}, props);

	const div = document.createElement('div');
  document.body.appendChild(div);

  const instances = document.querySelectorAll('.notification');

  props.top = props.offset || 0;

  for (let i = 0, len = instances.length; i < len; i++) {
    props.top += instances[i].offsetHeight + 16;
  }

  props.top += 16;

  const component = React.createElement(Notification, Object.assign({}, props, {
    willUnmount: () => {
      let offsetHeight = div.querySelector('.notification').offsetHeight
      let offsetTop = div.querySelector('.notification').offsetTop
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
      
      setTimeout(() => {
        const instances = document.querySelectorAll('.notification');

        for (let i = 0, len = instances.length; i < len; i++) {
          const element = instances[i];

          if (element.offsetTop > offsetTop) {
            element.style.top = `${element.offsetTop - offsetHeight - 16}px`;
          }
        }
      })

      if (props.onClose instanceof Function) {
        props.onClose();
      }
    }
  }));

  ReactDOM.render(component, div);
}