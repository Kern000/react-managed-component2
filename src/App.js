import React from "react";
import GST from "./GST";
import Summary from "./Summary";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component{
 
    state = {
        gst: 0,
        bill: 0,
        serviceCharge: 0,
        total: 0
    };
 
    render(){
        return(
        <React.Fragment>
        <GST 
            name="bill"
            bill={this.state.bill}
            updateField={this.updateField}
            calculate={this.calculate}
            />
        <Summary 
            bill={this.state.bill}
            gst={this.state.gst}
            serviceCharge={this.state.serviceCharge}
            total={this.state.total}            
            />
        </React.Fragment>
        )
    };


    
    updateField = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

      calculate = (e) => {
        this.setState({
          gst: 0.07 * this.state.bill,
          serviceCharge: 0.1 * this.state.bill,
          total: 1.17 * this.state.bill
        });
      };

}