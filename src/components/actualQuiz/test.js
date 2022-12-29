// testovaci class komponent, lebo to neviem a treba sa mi to asi rychlo naucit

import React from "react";

class ClassComponent extends React.Component {
    render() {
        return(
            <p>Toto je class component</p>
        );
    }
}
//export { ClassComponent };

const FunctionalComponent = (props) => {
    return(
        <p>Toto je functional class komponent { props.name }</p>
    );
};
export { FunctionalComponent, ClassComponent};