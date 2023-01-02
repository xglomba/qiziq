/*import React, { Componenfrom 'react-native-proximity'
import { Accelerometer } from "react-native-sensors";

const Value = ({name, value}) => (
    <View >
        <Text></Text>
        <Text >{new String(value).substr(0, 8)}</Text>
    </View>
)

export default class Sensor extends Component {
    constructor(props) {
        super(props);

        new Accelerometer({
            updateInterval: 400
        })
            .then(observable => {
                observable.subscribe(({x,y,z}) => this.setState({x,y,z}));
            })
            .catch(error => {
                console.log("The sensor is not available");
            });

        this.state = {x: 0, y: 0, z: 0};
    }

    render() {
        return (
            <View >
                <Text>
                    Accelerometer values
                </Text>
                <Value name="x" value={this.state.x} />
                <Value name="y" value={this.state.y} />
                <Value name="z" value={this.state.z} />
            </View>
        );
    }
};

 */
let accelerometer = null;

class Accelerometer {
    constructor(param) {
        
    }

}

try {
    accelerometer = new Accelerometer({ frequency: 10 });
    accelerometer.onerror = (event) => {
        // Handle runtime errors.
        if (event.error.name === 'NotAllowedError') {
            console.log('Permission to access sensor was denied.');
        } else if (event.error.name === 'NotReadableError') {
            console.log('Cannot connect to the sensor.');
        }
    };
    accelerometer.onreading = (e) => {
        console.log(e);
    };
    accelerometer.start();
} catch (error) {
    // Handle construction errors.
    if (error.name === 'SecurityError') {
        console.log('Sensor construction was blocked by the Permissions Policy.');
    } else if (error.name === 'ReferenceError') {
        console.log('Sensor is not supported by the User Agent.');
    } else {
        throw error;
    }
}