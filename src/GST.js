import React from "react";

export default class GST extends React.Component {
  
  render() {
    return (
      <React.Fragment>
        <div>
          <label>Bill amount:</label>
          <input
            type="text"
            name={this.props.name}
            value={this.props.bill}
            onChange={this.props.updateField}
          />
          <button onClick={this.props.calculate}>Calculate GST</button>
        </div>
      </React.Fragment>
    );
  }
}
