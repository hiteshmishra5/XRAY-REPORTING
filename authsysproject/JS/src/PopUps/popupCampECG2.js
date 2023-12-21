import React from "react";
import Modal from "react-bootstrap4-modal";
// import "bootstrap/dist/css/bootstrap.min.css";
import Form21 from "../Forms/forms21";

export default class PopupCampECG extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
      },
      err: false,
    };
     this.handleChange = this.handleChange.bind(this);
     this.handleDone = this.handleDone.bind(this);
  }

  handleChange = (data, err) => {
      if (!err) {
        this.setState({ data }, () => this.props.handleData(data));
      }
  

  
    this.setState({ err });
      // Rest of your code
  }

  handleSendWhatsAppMessage = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const patientId = urlSearchParams.get("data-patientid");
    const patientName = urlSearchParams.get("data-patientname");
    
    // Construct the WhatsApp message URL
    const phoneNumber = '+919122878369'; // Replace with the recipient's phone number
    const message = `Please repeat ECG again of Patient Name: ${patientName}\nID: ${patientId}`;
    const whatsappMessageURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Try to open the WhatsApp chat window
    const newWindow = window.open(whatsappMessageURL, '_blank');
    
    // Check if the new window was successfully opened
    if (newWindow) {
      newWindow.focus(); // Bring the window to the front
    } else {
      // Handle the case where the browser blocks pop-up windows
      // You can display a message or provide an alternative way to contact the recipient.
      alert('Please enable pop-ups to open WhatsApp chat.');
    }
  };


  handleDone = () => {
    const { data, err } = this.state;
    console.log("======data", data);

    


    if (data.ECGcampNormal && (data.RhythmRBBB || data.TachycardiaRBBB || data.BradycardiaRBBB || data.Bradycardia || data.Tachycardia || data.TInversion)) {
      document.querySelectorAll('label[id^="#/properties/ECGcampNormal"]').forEach((el) => {
        el.classList.add("err");
      });
      return;
    }

    if (data.RhythmRBBB && (data.ECGcampNormal || data.TachycardiaRBBB || data.BradycardiaRBBB || data.Bradycardia || data.Tachycardia || data.TInversion)) {
      document.querySelectorAll('label[id^="#/properties/RhythmRBBB"]').forEach((el) => {
        el.classList.add("err");
      });
      return;
    }

    if (data.TachycardiaRBBB && (data.ECGcampNormal || data.RhythmRBBB || data.BradycardiaRBBB || data.Bradycardia || data.Tachycardia || data.TInversion)) {
      document.querySelectorAll('label[id^="#/properties/TachycardiaRBBB"]').forEach((el) => {
        el.classList.add("err");
      });
      return;
    }

    if (data.BradycardiaRBBB && (data.ECGcampNormal || data.RhythmRBBB || data.TachycardiaRBBB || data.Bradycardia || data.Tachycardia || data.TInversion)) {
      document.querySelectorAll('label[id^="#/properties/BradycardiaRBBB"]').forEach((el) => {
        el.classList.add("err");
      });
      return;
    }

    if (data.Bradycardia && (data.ECGcampNormal || data.RhythmRBBB || data.TachycardiaRBBB || data.BradycardiaRBBB || data.Tachycardia || data.TInversion)) {
      document.querySelectorAll('label[id^="#/properties/Bradycardia"]').forEach((el) => {
        el.classList.add("err");
      });
      return;
    }

    if (data.Tachycardia && (data.ECGcampNormal || data.RhythmRBBB || data.TachycardiaRBBB || data.BradycardiaRBBB || data.Bradycardia || data.TInversion)) {
      document.querySelectorAll('label[id^="#/properties/Tachycardia"]').forEach((el) => {
        el.classList.add("err");
      });
      return;
    }

    if (data.TInversion && (data.ECGcampNormal || data.RhythmRBBB || data.TachycardiaRBBB || data.BradycardiaRBBB || data.Bradycardia || data.Tachycardia )) {
      document.querySelectorAll('label[id^="#/properties/Tachycardia"]').forEach((el) => {
        el.classList.add("err");
      });
      return;
    }




    if (!err) {
      // Make an API call to update the isDone field
      const urlSearchParams = new URLSearchParams(window.location.search);
      const patientId = urlSearchParams.get("data-patientid");

      // Get the CSRF token from cookies
      const csrftoken = document.cookie.match(/csrftoken=([\w-]+)/)[1];

      // Make a POST request to your Django backend to update the isDone field
      fetch(`/api/update_patient_done_status/${patientId}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken,  // Include CSRF token in headers
          // Add any additional headers as needed
        },
        body: JSON.stringify({ isDone: true }),
      })
      .then(response => {
        if (response.ok) {
          // Close the popup after the API call
          this.setState({ isDone: true }, () => {
            this.props.handleClick();
          });
        } else {
          // Handle errors
          console.error('Failed to update isDone status');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }


    this.setState({ isDone: true }, () => {
      this.props.handleClick();
    });
  }

  // event handling methods go here
  render() {
    const { data, handleClick, name } = this.props;
    const urlSearchParams = new URLSearchParams(window.location.search);
    const patientId = urlSearchParams.get("data-patientid");
    const patientName = urlSearchParams.get("data-patientname");
    const age = urlSearchParams.get("data-age");
    const gender = urlSearchParams.get("data-gender");
    const HeartRate = urlSearchParams.get("data-heartrate");
    const PRInterval = urlSearchParams.get("data-printerval");
    const testDate = urlSearchParams.get("data-testdate");
    const reportDate = urlSearchParams.get("data-reportdate");
    const reportimage = urlSearchParams.get("data-reportimage");

    const formData = {
      NameTextFR21: patientName,
      IDTextFR21: patientId,
      AgeTextFR21: age,
      GenderTextFR21: gender,
      HeartTextFR21: HeartRate,
      PRIntervalFR21: PRInterval,
      TestDateTextFR21: testDate,
      ReportDateTextFR21: reportDate,
      reportimage: reportimage,
    };
    
    return (
      <Modal visible={true} onClickBackdrop={this.modalBackdropClicked}>
        <div className="modal-header">
          <h5 className="modal-title">{name}</h5>
          <div>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => window.location.reload()}
            >
              Back
            </button>
            <button
              type="button"
              className="btn btn-primary"
              style={{ margin: "9px" }}
              onClick={this.handleDone}
            >
              Done
            </button>
            {/* Add a WhatsApp button */}
            <button
              type="button"
              className="btn btn-danger"
              style={{ margin: "9px" }}
              onClick={this.handleSendWhatsAppMessage}
            >
              Reject
            </button>
          </div>
        </div>
        <div className="modal-body">
          <Form21 data={formData} handleChange={this.handleChange} />
          {reportimage && (
            <div className="image-container">
              <img src={reportimage} alt="Report" className="report-image" />
            </div>
          )}
        </div>
      </Modal>
    );
  }
}