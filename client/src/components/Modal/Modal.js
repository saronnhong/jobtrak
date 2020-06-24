import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css";

class Modal extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        jobApp: {
            company: "",
            jobTitle: "",
            status: "",
            location: "",
            source: "",
            jobUrl: ""
        }
    }

    componentDidMount() {
        const options = {
            onOpenStart: () => {
                console.log("Open Start");
            },
            onOpenEnd: () => {
                console.log("Open End");
            },
            onCloseStart: () => {
                console.log("Close Start");
            },
            onCloseEnd: () => {
                console.log("Close End");
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: true,
            startingTop: "4%",
            endingTop: "5%"
        };
        M.Modal.init(this.Modal, options);
    }

    onSave = () => {
        this.props.onPress(this.state.jobApp);
        this.setState({
            jobApp: {
                company: "",
                jobTitle: "",
                status: "",
                location: "",
                source: "",
                jobUrl: "",
                dateApplied: ""
            }
        })
    }

    render() {
        const { jobApp } = this.state;
        return (
            <div>
                <a className="waves-effect waves-light btn modal-trigger btn #ffab40 orange accent-2 addButton" data-target="modal1">+ ADD JOB</a>
                <div ref={Modal => { this.Modal = Modal }} id="modal1" className="modal modal-fixed-footer" >
                    <div className="modal-content modalContainer">
                        <div className="row">
                            <div className="modalTitle">Add New Job</div>
                        </div>
                        <div class="row">
                            <form class="col s12">
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input id="company" type="text" class="validate" value={jobApp.company} onChange={e => this.setState({ jobApp: { ...jobApp, company: e.target.value } })} />
                                        <label for="company">Company</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input id="job_title" type="text" class="validate" value={jobApp.jobTitle} onChange={e => this.setState({ jobApp: { ...jobApp, jobTitle: e.target.value } })} />
                                        <label for="job_title">Job Title</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input id="status" type="text" class="validate" value={jobApp.status} onChange={e => this.setState({ jobApp: { ...jobApp, status: e.target.value } })} />
                                        <label for="status">Status</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input id="location" type="text" class="validate" value={jobApp.location} onChange={e => this.setState({ jobApp: { ...jobApp, location: e.target.value } })} />
                                        <label for="location">Location</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input id="source" type="text" class="validate" value={jobApp.source} onChange={e => this.setState({ jobApp: { ...jobApp, source: e.target.value } })} />
                                        <label for="source">Source</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input id="job_url" type="text" class="validate" value={jobApp.jobUrl} onChange={e => this.setState({ jobApp: { ...jobApp, company: e.target.value } })} />
                                        <label for="job_url">Job Posting URL</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a className="modal-close waves-effect #ff8a80 red accent-1 btn modalBtn">Cancel</a>
                        <a onClick={() => this.onSave()} className="modal-close waves-effect #80cbc4 teal lighten-3 btn modalBtn">Save</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
