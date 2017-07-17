import css from './Scss/Main.scss';
class Slider extends React.Component {
	constructor(props){
		super(props);
	}
    componentDidMount(){ 
        let width = this.refs['grid'].clientWidth;
        let min = parseFloat(this.props.min);
        let max = parseFloat(this.props.max);
        let step = parseFloat(this.props.step);
        let size = width / 20;
        let sizeStep = 0;
        for(let i = 1;i<=21;i++){
            let ref="grid-"+i;
            this.refs[ref].style.left = sizeStep+'px'
            sizeStep += size ;
        }
    }
    render() {
        let grid = [];
        let gridText = [];
        for(let i = 1;i<=21;i++){
            let className = i%5==1?"big":'';
            let ref = 'grid-'+i;
            grid.push(<span className={className} ref={ref}></span>)
            gridText.push(<span className={className}></span>)
        }
        return (
            <div className="slider">
                <div className="irs">
                    <div className="line">
                        <span className="min">{this.props.min}</span>
                        <span className="max">{this.props.max}</span>
                    </div>
                </div>
                <div className="grid" ref="grid">
                    {grid}
                </div>
            </div>
        )
    }
}

Slider.propTypes={//属性校验器，表示改属性必须是bool，否则报错
	step:React.PropTypes.number,
    min:React.PropTypes.number,
    max:React.PropTypes.number
}
Slider.defaultProps={
	step:0,
    min:0,
    max:0
};//设置默认属性

//导出组件
export default Slider;