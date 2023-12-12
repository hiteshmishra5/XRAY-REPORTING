import React from "react";
import Modal from "react-bootstrap4-modal";
// import "bootstrap/dist/css/bootstrap.min.css";
import Form25 from "../Forms/forms25";

export default class PopupOptometry3 extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        name: "John Doe",
        description: "Confirm if you have passed the subject\nHereby ...",
        done: true,
        recurrence: "Daily",
        rating: 3,
      },
      err: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  handleChange(data, err) {
    if (!err) {
      this.setState({ data }, () => this.props.handleData(data));
    }
    

    this.setState({ err });
  }


  handleDone() {
    const { data, err } = this.state;
    console.log("======data", data);

    

    if (data.OptometryNormal) {
      if ((data.OptometryAbnormalLType || data.OptometryAbnormalRType || data.OptometryAbnormalLTypeN || data.OptometryAbnormalRTypeN || data.OptometryPrescriptionLminusPowerType || data.OptometryPrescriptionLplusPowerType || data.OptometryPrescriptionLAxis 
        || data.OptometryPrescriptionRminusPowerType || data.OptometryPrescriptionRplusPowerType || data.OptometryPrescriptionRAxis || data.OptometryPrescriptionLminusPowerTypeFar || data.OptometryPrescriptionLplusPowerTypeFar || data.OptometryPrescriptionLAxisFar || data.OptometryPrescriptionRminusPowerTypeFar
        || data.OptometryPrescriptionRplusPowerTypeFar || data.OptometryPrescriptionRAxisFar) && data.OptometryNormal){
        document.querySelectorAll('label[id^="#/properties/OptometryNormal"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }



    if (!err) {
      this.props.handleClick();
    }
  }

  // event handling methods go here
  render() {
    const { data, handleClick, name } = this.props;
    return (
      <Modal visible={true} onClickBackdrop={this.modalBackdropClicked}>
        <div className="modal-header">
          <h5 className="modal-title">{name}</h5>
          <div>
            <button type="button" className="btn btn-secondary" onClick={() => window.location.reload()}>Back</button>
            <button type="button" className="btn btn-primary" style={{ margin: '9px' }} onClick={this.handleDone}>Done</button>
          </div>
        </div>
        <div className="modal-body">
          <Form25 data={data} handleChange={this.handleChange} />
        </div>
        <div className="modal-footer">
        </div>
      </Modal>
    );
  }
}
