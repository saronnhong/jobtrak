import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css";

class AddJobsModal extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {
        jobApp: {
            company: "",
            jobTitle: " ",
            status: "",
            location: "",
            source: " ",
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
            dismissible: false,
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
                <a className="waves-light btn modal-trigger btn #ffab40 orange accent-2 addButton hvr-sweep-to-right" onClick={()=>M.Modal.getInstance(this.Modal).open()}data-target="modal1">+ ADD JOB</a>
                <div ref={Modal => { this.Modal = Modal }} id="modal1" className="modal modal-fixed-footer" >
                    <div className="modal-content modalContainer">
                        <div className="row">
                            <div className="modalTitle">Add New Job</div>
                        </div>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="company" type="text" className="validate modalInput" placeholder="Search Companies..." value={jobApp.company} onChange={e => this.setState({ jobApp: { ...jobApp, company: e.target.value } })} />
                                        <label className="modalLabelText" for="company"><i class="far fa-building fontAwesomeModal"></i> Company</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="job_title" type="text" className="modalInput" value={jobApp.jobTitle} onChange={e => this.setState({ jobApp: { ...jobApp, jobTitle: e.target.value } })} />
                                        <label className="modalLabelText" for="job_title"><i class="fas fa-user-md fontAwesomeModal"></i> Job Title</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="status" type="text" className="modalInput" value={jobApp.status} placeholder="Interested" onChange={e => this.setState({ jobApp: { ...jobApp, status: e.target.value } })} />
                                        <label className="modalLabelText" for="status"><i class="far fa-file-alt fontAwesomeModal"></i> Status</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="location" type="text" className="modalInput" value={jobApp.location} placeholder="San Diego, CA" onChange={e => this.setState({ jobApp: { ...jobApp, location: e.target.value } })} />
                                        <label className="modalLabelText" for="location"><i class="fas fa-map-marker-alt fontAwesomeModal"></i> Location</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="source" type="text" className="modalInput" value={jobApp.source} onChange={e => this.setState({ jobApp: { ...jobApp, source: e.target.value } })} />
                                        <label className="modalLabelText" for="source"><i class="fab fa-sourcetree fontAwesomeModal"></i> Source</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="job_url" type="text" className="modalInput" placeholder="Where did you find this job?" value={jobApp.jobUrl} onChange={e => this.setState({ jobApp: { ...jobApp, jobUrl: e.target.value } })} />
                                        <label className="modalLabelText" for="job_url"><i class="fas fa-laptop-code fontAwesomeModal"></i> Job Posting URL</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer ">
                        <div className="row center modalFooter">
                            <button className="modal-close waves-effect #ff8a80 red accent-1 btn modalBtn">Cancel</button>
                            <button onClick={() => this.onSave()} className="modal-close waves-effect #80cbc4 teal lighten-3 btn modalBtn">Save</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default AddJobsModal;
