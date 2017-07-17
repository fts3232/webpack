//加载模拟数据
import mock from '../Data/mock.js';
//加载functions
import * as functions from '../Common/Functions.js';
global.functions = functions;
//加载配置
import Config from '../Config/Config.js';
global.frameConfig = Config;
//加载框架组件
import Frame from './Frame';
//加载路由
import Routers from '../Core/Router';
ReactDOM.render((
	<Frame>
		<Routers/>
	</Frame>
), document.getElementsByTagName('section')[0]);