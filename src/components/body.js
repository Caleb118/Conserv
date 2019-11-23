import React from 'react';
import '../style.css';
import GraphData from './graphdata';

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [],
                 chart: 'temperature' };
    }

    render() {
        return (
            <div className="row">
                <div className="col-2 test">
                    <div className="list-group list-group-flush test">
                        <p className="list-group-item list-group-item-action active text-center">
                            Navigation
                        </p>
                     <p onClick={() => { this.setState({ chart: 'temperature'}) }} className="list-group-item list-group-item-action link text-center">Temperature
                        </p>
                        <p onClick={() => { this.setState({ chart: 'humidity'}) }}  className="list-group-item list-group-item-action link text-center">Humidity
                        </p>
                        <p onClick={() => { this.setState({ chart: 'infrared'}) }} className="list-group-item list-group-item-action link text-center">Infrared
                        </p>
                        <p onClick={() => { this.setState({ chart: 'visibility'}) }} className="list-group-item list-group-item-action link text-center">Visibility
                        </p>
                        <p onClick={() => { this.setState({ chart: 'ultraviolet'}) }} className="list-group-item list-group-item-action link text-center">UltraViolet
                        </p>
                        <p onClick={() => { this.setState({ chart: 'dewpoint'}) }} className="list-group-item list-group-item-action link text-center">Dew Point
                        </p>
                    </div>
                    <br /> <br /> <br />
    
                    
                </div>
                
    
                <div className="col-10 graph-col">
                <GraphData chart={this.state.chart} graphData={this.props.graphData}/>
                </div>
    
                <div className="col-2">
                </div>
    
            </div>
        )


    }
};

export default Body;

