import React from 'react';
import './App.css';
import Validate from './components/Validate';

function Button(props: any) {
    return (
        <button onClick={() => console.log('button')}>
            Click {props.children}
        </button>
    );
}

function App() {
    return (
        <Validate>
            <Button>
                Click
                <Validate />
            </Button>
        </Validate>
    );
}

export default App;
