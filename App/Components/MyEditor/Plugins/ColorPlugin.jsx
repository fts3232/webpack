const colors = [
	{label: 'Red', style: 'red'},
	{label: 'Orange', style: 'orange'},
	{label: 'Yellow', style: 'yellow'},
	{label: 'Green', style: 'green'},
	{label: 'Blue', style: 'blue'},
	{label: 'Indigo', style: 'indigo'},
	{label: 'Violet', style: 'violet'},
];

const colorStyleMap = {
	red: {
	  color: 'rgba(255, 0, 0, 1.0)',
	},
	orange: {
	  color: 'rgba(255, 127, 0, 1.0)',
	},
	yellow: {
	  color: 'rgba(180, 180, 0, 1.0)',
	},
	green: {
	  color: 'rgba(0, 180, 0, 1.0)',
	},
	blue: {
	  color: 'rgba(0, 0, 255, 1.0)',
	},
	indigo: {
	  color: 'rgba(75, 0, 130, 1.0)',
	},
	violet: {
	  color: 'rgba(127, 0, 255, 1.0)',
	},
};


class ColorPlugin extends React.Component {
	constructor(props){
		super(props);
	}
	onToggle(style,e){
		e.preventDefault();
		this.props.onToggle(style);
	}
	render(){
		return (
			<div className="btn-group">
				{colors.map((val)=>{
					return (
						<button type="button" className="button" onMouseDown={this.onToggle.bind(this,val.style)}>{val.label}</button>
					)
				})}
			</div>
		)
	}
}

export {ColorPlugin,colorStyleMap};