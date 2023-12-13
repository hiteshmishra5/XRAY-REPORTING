import React from "react";
import Modal from "react-bootstrap4-modal";
// import "bootstrap/dist/css/bootstrap.min.css";
import Form3 from "../Forms/form3";

export default class PopUpCtHead extends React.Component {
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

    // if (data.cerebralParenchyma) {
    //   document.querySelectorAll('label[id^="#/properties/cerebralParenchyma"]').forEach((el) => {
    //     el.classList.add("err");
    //   });
    //   return;
    // }
    // if (!data.allNormal) {
    //   document.querySelectorAll('label[id^="#/properties/allNormal"]').forEach((el) => {
    //     el.classList.add("err");
    //   });
    //   return;
    // }

    if (data.Atrophy) {
      if (!data.Atrophytype) {
        document.querySelectorAll('label[id^="#/properties/Atrophy"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }
    //Infarct
    if (data.Infarct) {
      if (!(data.TypeofInfarct && data.Location)) {
        document.querySelectorAll('label[id^="#/properties/Infarct"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
      if (!(data.InfarctTypes && (data.InfractRight || data.InfractLeft))) {
        document.querySelectorAll('label[id^="#/properties/Infarct"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
      //if (!(data.Frontal || data.Parietal || data.Temporal || data.Occipital
      //  || data.BasalGanglia || data.Thalamus || data.CoronaRadiate || data.CentrumSemiovale
      //  || data.Cerebellum || data.Pons || data.Medulla || data.Midbrain)) {
      //  document.querySelectorAll('label[id^="#/properties/Infarct"]').forEach((el) => {
      //    el.classList.add("err");
      //  });
      //  return;
      //}
    }
    if(data.Hemorrhage){
      if (data.IntraRight) {
        if(!(data.RightIntraLocation && data.Chronicity && data.Size && data.MassEffect)){
          document.querySelectorAll('label[id^="#/properties/IntraRight"]').forEach((el) => {
                el.classList.add("err");
              });
          return;
        }
      }
      if (data.IntraLeft) {
        if(!(data.LeftIntraLocation && data.Chronicity1 && data.Size1 && data.MassEffect1)){
          document.querySelectorAll('label[id^="#/properties/IntraLeft"]').forEach((el) => {
                el.classList.add("err");
              });
          return;
        }
      }
      if (data.ExtraAxial) {
        if (data.SDH) {
          if (data.RightSDH) {
            if(!(data.RightLocation && data.RightLocaitonChronicity && data.RightMaximumThickness && data.RightMassEffect)){
              document.querySelectorAll('label[id^="#/properties/SDH"]').forEach((el) => {
                    el.classList.add("err");
                  });
              return;
            }
          }
          if (data.LeftSDH) {
            if(!(data.LeftLocation && data.LeftLocaitonChronicity && data.LeftMaximumThickness && data.LeftMassEffect)){
              document.querySelectorAll('label[id^="#/properties/SDH"]').forEach((el) => {
                    el.classList.add("err");
                  });
              return;
            }
          }
        }
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
          <Form3 data={data} handleChange={this.handleChange} />
        </div>
        <div className="modal-footer">
        </div>
      </Modal>
    );
  }
}
