import React, { ReactPropTypes } from 'react';
import { ValidateConsumer } from './ValidateProvider';

function Validate({ children }: any, props: ReactPropTypes) {
    return (
        <ValidateConsumer>
            {(context) => (
                <button onClick={context.validate} className="button">
                    Click me
                </button>
            )}
        </ValidateConsumer>
    );
}

export default Validate;
