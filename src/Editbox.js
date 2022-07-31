import React from 'react';

class Editbox extends React.Component {
    state = {
        RollNo: "",
        DOB: "",
        Name: "",
    };
    handleUpdatebtn = (e) => {
        if (this.state.RollNo === "" || this.state.DOB === "" || this.state.Name === ""){
            alert("Enter all the fields...");
        }
        else {
            this.props.editRef.current.style.display = "none";
            this.props.updatedetail(this.state);
            this.setState({
                RollNo: "",
                DOB: "",
                Name: "",
            });
        }
    };
    render() {
        return (
            <div className="input-container" ref={this.props.editRef}>
                <div className="input-box">
                    <label htmlFor="RollNo" className="label">RollNo:</label>

                    <input type="text" name="RollNo" placeholder="RollNo"
                        value={this.state.RollNo}
                        onChange={(e) => {
                            this.setState({ RollNo: e.target.value });
                        }}

                        className="RollNo"

                    />
                    <br />

                    <label htmlFor="DOB" className="label">DOB of detail :</label>
                    <input type="date" name="DOB" onChange={(e) => {
                        this.setState({ DOB: e.target.value });
                    }}
                        className="DOB"
                    />
                    <br />
                    <label htmlFor="Name" className="label">Name:</label>

                    <input type="text" name="Name"
                        value={this.state.Name}
                        onChange={(e) => {
                            this.setState({ Name: e.target.value });
                        }}

                        placeholder="Name"
                        className="Name"
                    />
                    <br />
                    <button type="button" className="btn btn-primary" onClick={this.handleUpdatebtn}>Update</button>
                </div>
            </div>
        );
    }
}

export default Editbox;