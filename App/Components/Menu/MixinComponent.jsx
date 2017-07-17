import Component from '../Component';
class MixinComponent extends Component {

	parent() {
    return this.context.component;
  }
  indexPath() {
    let path = [this.props.index];
    let parent = this.parent();

    while (parent.instanceType !== 'Menu') {
      if (parent.props.index) {
        path.unshift(parent.props.index);
      }

      parent = parent.parent();
    }

    return path;
  }
  rootMenu() {
      let parent = this.parent();

      while (parent.instanceType !== 'Menu') {
        parent = parent.parent();
      }

      return parent;
  }
}

MixinComponent.contextTypes = {
  component: React.PropTypes.any
};

MixinComponent.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    
}
MixinComponent.defaultProps={
    
};//设置默认属性

//导出组件
export default MixinComponent;