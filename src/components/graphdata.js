import React from 'react';
import HumidGraph from './graphs/humidity';
import TempGraph from './graphs/temp';
import InfraGraph from './graphs/infrared';
import VisGraph from './graphs/visibility';
import UVGraph from './graphs/UVGraph';
import DewPointGraph from './graphs/dewpoint';


class GraphData extends React.Component {

    constructor(props) {
        super(props);
        this.state = { chart: 'temperature' };
    }


    render() {
    if (this.props.chart === 'temperature') {
        return (
            <TempGraph />
        )
    } else if (this.props.chart === 'humidity') {
        return (
            <HumidGraph />
        )
    } else if (this.props.chart === 'infrared') {
        return (
            <InfraGraph  />
        )
    } else if (this.props.chart === 'visibility') {
        return (
            <VisGraph  />
        )
    } else if (this.props.chart === 'ultraviolet') {
        return (
            <UVGraph />
        )
    } else if (this.props.chart === 'dewpoint') {
        return (
            <DewPointGraph  />
        )
    } else {
        return (
            <h1>You shouldn't be here. ?</h1>
        )
    }

    }

}

export default GraphData;
