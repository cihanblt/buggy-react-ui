
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />
                        <Content />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;