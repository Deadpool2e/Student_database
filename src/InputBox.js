import React from 'react';

class InputBox extends React.Component {
    state = {
        RollNo: "",
        DOB: "",
        Name: "",
    };

    handleAddbtn = (e) => {
        if (this.state.RollNo === "" || this.state.DOB === "" || this.state.Name === "") {
            alert("Enter all the fields...");
        }
        else {
            this.props.inputRef.current.style.display = "none";
            this.props.adddetail(this.state);
            this.setState({
                RollNo: "",
                DOB: "",
                Name: "",
            });
        }
    };
    render() {
        return (
            <div className="input-container" ref={this.props.inputRef}>
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
                    <button type="button" className="btn btn-primary" onClick={this.handleAddbtn}>Add</button>
                </div>
            </div>
        );
    }
}

export default InputBox;