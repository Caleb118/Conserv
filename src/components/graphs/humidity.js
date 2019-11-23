import React from 'react';
import { ComposedChart, Line, Area, CartesianGrid, Tooltip, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import * as moment from 'moment';
import axios from 'axios';

class HumidGraph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {size: 5,
                    data: [] };
    }

    componentDidMount() {
        axios.get(`https://app.conserv.io/data/api/health/db`)
          .then(res => {
            const newdata = res.data;
            this.setState({ data: newdata });
          })
          .then(() => {
            let dataArr = this.state.data;
    
            dataArr.map((currentValue) => {
                currentValue.range_rh = [currentValue.min_rh, currentValue.max_rh];
                return null;
            });
            this.setState({ data: dataArr})
          })
        }


    formatXAxis = (tickItem) => { 
        let x = moment(tickItem).format('MMMM Do YYYY, h:mm:ss a');
        return x;
    };

    render() {
        const ydata = ['0', '100']
        let chartName = 'Humidity'
        const smalldata = this.state.data.splice(0,15);
        let renderLineChart;
        let measureData = "Percent";   

        const sizeUp = () => {
            let newdata = this.state.size + 5
            this.setState({ size: newdata })
        }

        const sizeDown = () => {
            if (this.state.size > 5) {
                let newdata = this.state.size - 5
                this.setState({ size: newdata })
            }
        }

        function CustomTooltip({ payload, label, active }) {
        if (active) {
            return (

            <div className="card border-primary mb-3">
                <div className="card-header">{ moment(label).format('MMMM Do YYYY, h:mm:ss a') }</div>
                <div className="card-body">
                    <p className="card-text"><b>Average Humidity:</b> { !payload[0].value ? 0 : payload[0].value }</p>
                    <p className="card-text"><b>Minimum Humidity:</b> { !payload[1].value ? 0 : payload[1].value }</p>
                    <p className="card-text"><b>Maximum Humidity:</b> { !payload[2].value ? 0 : payload[2].value }</p>
                </div>
            </div>
            );
        }
        return null;
        }   



        renderLineChart = (
            <ResponsiveContainer width={'90%'} aspect={2}>
                <ComposedChart data={smalldata}>
                    <Legend verticalAlign="bottom" />
                    <Line type="monotone" connectNulls dataKey="avg_rh" stroke="#ff0000" name="Average Room Humidity" />
                    <Line type="monotone" connectNulls dataKey="min_rh" stroke="#ff4a4a" name="Minimum Room Humidity"/>
                    <Line type="monotone" connectNulls dataKey="max_rh" stroke="#ff4a4a" name="Maximum Room Humidity"/>
                    <Area type="monotone" connectNulls dataKey="range_rh"  fill="#ffb0b0" stroke="#ffb0b0" name="Humidity Range" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey='bucket' tickFormatter={this.formatXAxis} />
                    <YAxis dataKey={() => ydata }  label={{ value: measureData, angle: -90, position: 'insideLeft' }} />
                    
                    <Tooltip content={<CustomTooltip />}/>
                </ComposedChart>
            </ResponsiveContainer>)
    
        return (
            <div>
                <div className="graph-holder">
                    <div className="row">
                        <div className="col text-right topholder1">
                        <h4>{chartName}</h4> &nbsp;
                        </div>
                        <div className="col text-right topholder2">
                            <button className="btn btn-outline-primary" onClick={() => window.print()}>print</button> &nbsp;
                            <button className="btn btn-outline-primary" onClick={sizeUp}>+</button> &nbsp;
                            <button className="btn btn-outline-primary" onClick={sizeDown}>-</button>
                        </div>   
                    </div>

                    <div className="row">
                        <div className="col text-center chart-container">
                            {renderLineChart}
                        </div>  
                    </div>
                </div>
            </div>
        )

    }

}

export default HumidGraph;
