import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a data-toggle="collapse" className="nav-link active" href="#collapse1">
                                        <span data-feather="home"></span>
                                        Buttons <span className="sr-only">(current)</span>
                                    </a>
                                    <div id="collapse1" className="panel-collapse collapse">
                                        <ul className="list-group">
                                            <li className="">One</li>
                                            <li className="">Two</li>
                                            <li className="">Three</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file"></span>
                                        Inputs
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>);
    }
}

export default Sidebar;