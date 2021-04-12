import React from 'react';

const { Provider, Consumer } = React.createContext({
    validate: () => console.log('default'),
});

class ValidateProvider extends React.Component<any, any> {
    validate = () => {
        console.log('validate');
    };

    render() {
        return (
            <Provider value={{ validate: this.validate }}>
                {this.props.children}
            </Provider>
        );
    }
}

export { ValidateProvider, Consumer as ValidateConsumer };
