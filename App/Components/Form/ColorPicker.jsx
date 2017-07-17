import css from './Scss/ColorPicker.scss';
const ColorPanelGlobal = { 
    // HSBtoRGB from RaphaelJS
    // https://github.com/DmitryBaranovskiy/raphael/
    RGBtoHSB: function (r, g, b, a){
        r /= 255;
        g /= 255;
        b /= 255;

        var H, S, V, C;
        V = Math.max(r, g, b);
        C = V - Math.min(r, g, b);
        H = (C === 0 ? null :
            V == r ? (g - b) / C :
            V == g ? (b - r) / C + 2 :
                (r - g) / C + 4
            );
        H = ((H + 360) % 6) * 60 / 360;
        S = C === 0 ? 0 : C / V;
        return {h: H||1, s: S, b: V, a: a||1};
    },
    HueToRGB: function (p, q, h) {
        if (h < 0)
            h += 1;
        else if (h > 1)
            h -= 1;

        if ((h * 6) < 1)
            return p + (q - p) * h * 6;
        else if ((h * 2) < 1)
            return q;
        else if ((h * 3) < 2)
            return p + (q - p) * ((2 / 3) - h) * 6;
        else
            return p;
    },
    HSLtoRGB: function (h, s, l, a)
    {
        if (s < 0) {
            s = 0;
        }
        var q;
        if (l <= 0.5) {
            q = l * (1 + s);
        } else {
            q = l + s - (l * s);
        }
        
        var p = 2 * l - q;

        var tr = h + (1 / 3);
        var tg = h;
        var tb = h - (1 / 3);

        var r = Math.round(CPGlobal.HueToRGB(p, q, tr) * 255);
        var g = Math.round(CPGlobal.HueToRGB(p, q, tg) * 255);
        var b = Math.round(CPGlobal.HueToRGB(p, q, tb) * 255);
        return [r, g, b, a||1];
    },
    // a set of RE's that can match strings and generate color tuples.
    // from John Resig color plugin
    // https://github.com/jquery/jquery-color/
    stringParsers: [
        {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function( execResult ) {
                return [
                    execResult[ 1 ],
                    execResult[ 2 ],
                    execResult[ 3 ],
                    execResult[ 4 ]
                ];
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function( execResult ) {
                return [
                    2.55 * execResult[1],
                    2.55 * execResult[2],
                    2.55 * execResult[3],
                    execResult[ 4 ]
                ];
            }
        }, {
            re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
            parse: function( execResult ) {
                return [
                    parseInt( execResult[ 1 ], 16 ),
                    parseInt( execResult[ 2 ], 16 ),
                    parseInt( execResult[ 3 ], 16 )
                ];
            }
        }, {
            re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
            parse: function( execResult ) {
                return [
                    parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
                    parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
                    parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
                ];
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            space: 'hsla',
            parse: function( execResult ) {
                return [
                    execResult[1]/360,
                    execResult[2] / 100,
                    execResult[3] / 100,
                    execResult[4]
                ];
            }
        }
    ],
};
//h:表示颜色的类型(例如红色,绿色或者黄色).取值范围为0—360.其中每一个值代表一种颜色.
//s:颜色的饱和度.从0到1.有时候也称为纯度.(0表示灰度图,1表示纯的颜色)
//b:亮度
//a:透明度
class ColorPicker extends React.Component {
	constructor(props){
		super(props);
        this.colorAlphaClick = false;
        this.panelClick = false;
        this.hueClick = false;
        let color = this.setColor(this.props.color);
        this.state = {
            h:color.h,
            s:color.s,
            b:color.b,
            a:color.a,
            picker:'hide'
        }
	}
    //parse a string to HSB
    setColor(val){
        val = val.toLowerCase();
        let color = false;
        $.each( ColorPanelGlobal.stringParsers, function( i, parser ) {
            let match = parser.re.exec( val );
            let values = match && parser.parse( match );
            let space = parser.space||'rgba';
            if ( values ) {
                if (space === 'hsla') {
                    color = ColorPanelGlobal.RGBtoHSB.apply(null, ColorPanelGlobal.HSLtoRGB.apply(null, values));
                } else {
                    color = ColorPanelGlobal.RGBtoHSB.apply(null, values);
                }
                return false;
            }
        });
        return color;
    }
    setHue(h) {
        this.setState({h:1- h})
    }
    setSaturatio(s) {
        this.setState({s:s})
    }
    setLightness(b) {
        this.setState({b:1-b})
    }
    setAlpha(a) {
        this.setState({a:parseInt((1 - a)*100, 10)/100})
    }
    toRGB(h, s, b, a) {
        if (!h) {
            h = this.props.h;
            s = this.props.s;
            b = this.props.b;
        }
        h *= 360;
        var R, G, B, X, C;
        h = (h % 360) / 60;
        C = b * s;
        X = C * (1 - Math.abs(h % 2 - 1));
        R = G = B = b - C;

        h = ~~h;
        R += [C, X, 0, 0, X, C][h];
        G += [X, C, C, X, 0, 0][h];
        B += [0, 0, X, C, C, X][h];
        return {
            r: Math.round(R*255),
            g: Math.round(G*255),
            b: Math.round(B*255),
            a: a||this.props.a
        };
    }
    clickHandler(){
        this.setState({'picker':this.state.picker=='show'?'hide':'show'})
    }
    changeAlpha(e){
        e.preventDefault();
        let obj = this.refs['color-alpha'];
        let y = 0;
        while(obj.offsetParent!=null){
            y += obj.offsetTop+obj.clientTop;
            obj = obj.offsetParent;
        }
        let offsetY = e.pageY - y;
        let alpha = offsetY / 100;
        this.setAlpha(alpha);
    }
    changePanel(e){
        e.preventDefault();
        let obj = this.refs['color-panel'];
        let y = 0;
        let x = 0;
        while(obj.offsetParent!=null){
            y += obj.offsetTop+obj.clientTop;
            x += obj.offsetLeft+obj.clientLeft;
            obj = obj.offsetParent;
        }
        let offsetY = e.pageY - y;
        let offsetX = e.pageX - x;
        this.setSaturatio(offsetX/100);
        this.setLightness(offsetY/100);
    }
    changeHue(e){
        e.preventDefault();
        let obj = this.refs['color-hue'];
        let y = 0;
        while(obj.offsetParent!=null){
            y += obj.offsetTop+obj.clientTop;
            obj = obj.offsetParent;
        }
        let offsetY = e.pageY - y;
        let hue = offsetY / 100;
        this.setHue(hue);
    }
    mouseDownHandler(type,e){
        switch(type){
            case 'hue':
                this.hueClick = true;
                this.changeHue(e);
                break;
            case 'alpha':
                this.alphaClick = true;
                this.changeAlpha(e);
                break;
            case 'panel':
                this.panelClick = true;
                this.changePanel(e);
                break;
        }
    }
    mouseUpHandler(type,e){
        switch(type){
            case 'hue':
                this.hueClick = false;
                break;
            case 'alpha':
                this.alphaClick = false;
                break;
            case 'panel':
                this.panelClick = false;
                break;
        }
        
    }
    mouseMoveHandler(type,e){
        switch(type){
            case 'hue':
                if(this.hueClick){
                    this.changeHue(e);
                }
                break;
            case 'alpha':
                if(this.alphaClick){
                    this.changeAlpha(e);
                }
                break;
            case 'panel':
                if(this.panelClick){
                    this.changePanel(e);
                }
                break;
        }
        
    }
    componentDidMount(){
        let _this = this;
        document.addEventListener("click", function(e){
            let target = e.target;
            let isInPicker = false;
            if(target.parentNode==null){
                return false;
            }
            while( typeof target.parentNode.tagName != 'undefined' ){
                target = target.parentNode;
                if(typeof target.className.indexOf != 'undefined' && target.className.indexOf('color-picker')!=-1){
                    isInPicker = true;
                    break;
                }
            }
            if(!isInPicker){
                if(typeof _this.refs['picker']!='undefined'){
                     _this.setState({picker:'hide'})
                }
            }
        });
    }
    render() {
        let rgbaObj = this.toRGB(this.state.h,this.state.s,this.state.b,this.state.a)
        let rgba = 'rgba('+rgbaObj.r+','+rgbaObj.g+','+rgbaObj.b+','+rgbaObj.a+')';
        let rgb = 'rgb('+rgbaObj.r+','+rgbaObj.g+','+rgbaObj.b+')';
        let picker = this.state.picker;
        if(picker=='show'){
            picker = (
                <div className="picker" ref="picker">
                    <div className="color-panel" ref='color-panel' style={{backgroundColor:rgb}} onMouseDown={this.mouseDownHandler.bind(this,'panel')} onMouseMove={this.mouseMoveHandler.bind(this,'panel')} onMouseUp={this.mouseUpHandler.bind(this,'panel')}>
                        <i ref='color-panel-i' style={{left:this.state.s*100,top:(1-this.state.b)*100}}></i>
                    </div>
                    <div className="color-hue" ref='color-hue' onMouseDown={this.mouseDownHandler.bind(this,'hue')} onMouseMove={this.mouseMoveHandler.bind(this,'hue')} onMouseUp={this.mouseUpHandler.bind(this,'hue')}>
                        <i ref='color-hue-i' style={{top:100 * (1 - this.state.h)}}></i>
                    </div>
                    <div className="color-alpha" ref='color-alpha' style={{backgroundColor:rgb}} onMouseMove={this.mouseMoveHandler.bind(this,'alpha')} onMouseUp={this.mouseUpHandler.bind(this,'alpha')} onMouseDown={this.mouseDownHandler.bind(this,'alpha')}>
                        <i ref="color-alpha-i" style={{top:100 * (1 - this.state.a)}}></i>
                    </div>
                    <div className="color-selected" ref='color-selected'>
                        <i ref="color-selected-i" style={{backgroundColor:rgba}}></i>
                    </div>
                </div>
            )
        }else{
            picker=null;
        }
        return(
            <div className="color-picker">
                <div className="input-group">
                    <span className="input-group-btn select-button"  onClick={this.clickHandler.bind(this)}>
                        <i ref='select-button-i' style={{backgroundColor:rgba}}></i>
                    </span>
                    <input type="text" className="form-control" value={rgba} readOnly/>
                </div>
                {picker}
            </div>
        )
    }
}

ColorPicker.propTypes={//属性校验器，表示改属性必须是bool，否则报错
    color:React.PropTypes.string,
}
ColorPicker.defaultProps={
    color:'rgba(255,0,0,1)'
};//设置默认属性

//导出组件
export default ColorPicker;