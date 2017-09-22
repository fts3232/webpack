import Toast from './Toast.jsx';
export default function Message(props,type){
    if(typeof props=='string'){
        props = {message:props}
    }
    if(type){
        props.type = type
    }
    const div = document.createElement('div');
    div.className="message"
    document.body.appendChild(div);
    const component = React.createElement(Toast, Object.assign(props, {
        willUnmount: () => {
          ReactDOM.unmountComponentAtNode(div);
          document.body.removeChild(div);

          if (props.onClose instanceof Function) {
            props.onClose();
          }
        }
    }));

    ReactDOM.render(component, div);
}