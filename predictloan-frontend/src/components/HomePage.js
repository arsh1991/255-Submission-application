import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import * as API from '../api/API';


class HomePage extends React.Component {

    submitinfo = (loaninfo) => {

        API.predictLoanApproval(loaninfo)
            .then((res) => {
            console.log(res);

            if(res.status===201) {
                this.setState({
                    message: 'Loan approved!'
                });
            }

            else if(res.status===401){
                this.setState({
                    message: 'Loan not approved!'
                });
            }

            });

    };

    state={
        message:'',
        dti:'',
        fico:'',
        loanamt:'',
        emplength:'',
        policycode:''
    }

    SSS
    render() {
        console.log(this.state.input);
         const {displayValue}=this.state;

        return (
            <div className="container">

                    <div className="form-group">
                        <label htmlFor="DTI Ratio">DTI Ratio</label>
                        <input type="DTI Ratio" className="form-control" id="DTI Ratio" placeholder="DTI Ratio" onChange={(event) => {
                           this.setState({
                               dti: event.target.value
                           });
                       }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Fico Score">Fico Score</label>
                        <input type="Fico Score" className="form-control" id="Fico Score" placeholder="Fico Score"
                        onChange={(event) => {
                           this.setState({
                               fico: event.target.value
                           });
                       }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Loan Amount">Loan Amount</label>
                        <input type="Loan Amount" className="form-control" id="Loan Amount" placeholder="Loan Amount"
                        onChange={(event) => {
                           this.setState({
                               loanamt: event.target.value
                           });
                       }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Employment Length">Employment Length</label>
                        <input type="Employment Length" className="form-control" id="Employment Length" placeholder="Employment Length"
                        onChange={(event) => {
                           this.setState({
                               emplength: event.target.value
                           });
                       }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Policy Code">Policy Code</label>
                        <input type="Policy Code" className="form-control" id="Policy Code" placeholder="Policy Code"
                        onChange={(event) => {
                           this.setState({
                               policycode: event.target.value
                           });
                       }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor=" Email1msg">Message:</label>


                    </div>


                    <button type="submit" className="btn btn-info" onClick={() => this.submitinfo(this.state)}>
                        Submit Information</button>

            </div>
        )
    }
}

export default HomePage;