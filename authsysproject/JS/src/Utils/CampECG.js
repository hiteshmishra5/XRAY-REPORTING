import React, { Component } from "react";
import "../style.css";
import PopUp from "../PopUps/PopupCampECG";

import text from "../Forms/text_hrct_chest.json";
import { data } from "jquery";
import PopupCampECG from "../PopUps/PopupCampECG";

var current_user = JSON.parse(document.getElementById("current-user").textContent);
class CampECG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frmData: {
        ECGcampNormal: false,
        RhythmRBBB: false,
        TachycardiaRBBB: false,
        BradycardiaRBBB: false,
        Tachycardia: false,
        Bradycardia: false,
            
      },
    };
    this.handleData = this.handleData.bind(this);
    this.formatData = this.formatData.bind(this);
  }

  async handleData(data) {
    console.log("====data index", data);
    this.setState({ frmData: data }, async () => {
      await this.formatData();
    });
  }

  async formatData() {
    const { frmData } = this.state;
    let report = this.props.generatePatientTable;
    const impression = [];
    let pageBreak = 0;
    let totalCovidPoints = 0;

    if (frmData.NameTextFR27 && frmData.IDTextFR27 && frmData.AgeTextFR27 && frmData.GenderTextFR27)
    {
      report += "<pre>" + "<b>" +"<header>" + "<table>" + "<tr>" + "<td>" + "Name: " + frmData.NameTextFR27 + "</td>" + "<td>" + "Patient ID: " + frmData.IDTextFR27 + "</td>" + "<td>" + "Age: " + frmData.AgeTextFR27 + "</td>" + "</tr>"  + "<tr>" + "<td>" + "Gender: " + frmData.GenderTextFR27 + "</td>" + "<td>" + "Test date: " + frmData.TestDateTextFR27 + "</td>" + "<td>" + "Report date: " + frmData.ReportDateTextFR27 + "</td>" + "</tr>" + "</table>" + "</b>" + "</pre>" + "</header>";
    }
    if (
        frmData.ECGcampNormal ||
        frmData.RhythmRBBB ||
        frmData.TachycardiaRBBB ||
        frmData.BradycardiaRBBB ||
        frmData.Bradycardia ||
        frmData.Tachycardia
      ) {
          
        report +=
        "<h5>" +
        "<strong>" +
        "<u>" +
        "ECG" +
        "</u>" +
        "</strong>" +
        "</h5>" +
        "<strong>" +
        "<u>" +
        "Observation:" +
        "</u>" +
        "</strong>";
      }
      //Normal ECG
      if(frmData.ECGcampNormal){
        report += "<p>" + "<b>" + "1. Heart rate is " + frmData.HeartTextFR27 +" BPM."+ "</b>" + "</p>" + "<p>" + "<b>" + "2. Normal Sinus Rhythm" + "</b>" + "</p>" + "<p>" + "<b>" + "3. No significant ST-T changes seen" + "</b>" + "</p>" + "<p>" + "<b>" + "4. No evidence of chamber enlargement or block" + "</b>" + "</p>";
      }
      // Sinus rhythm with incomplete RBBB
      if(frmData.RhythmRBBB){
        report += "<p>" + "<b>" + "1. Heart rate is " + frmData.HeartTextFR27 +" BPM."+ "</b>" + "</p>" + "<p>" + "<b>" + "2. Sinus Rhythm with incomplete RBBB" + "</b>" + "</p>" + "<p>" + "<b>" + "3. No significant ST-T changes seen" + "</b>" + "</p>" + "<p>" + "<b>" + "4. No evidence of chamber enlargement or block" + "</b>" + "</p>";
      }
      // Sinus Tachycardia with incomplete RBBB
      if(frmData.TachycardiaRBBB){
        report += "<p>" + "<b>" + "1. Heart rate is " + frmData.HeartTextFR27 +" BPM."+ "</b>" + "</p>" + "<p>" + "<b>" + "2. Sinus Tachycardia with incomplete RBBB" + "</b>" + "</p>" + "<p>" + "<b>" + "3. No significant ST-T changes seen" + "</b>" + "</p>" + "<p>" + "<b>" + "4. No evidence of chamber enlargement or block" + "</b>" + "</p>";
      }
      // Sinus Bradycardia with incomplete RBBB
      if(frmData.BradycardiaRBBB){
        report += "<p>" + "<b>" + "1. Heart rate is " + frmData.HeartTextFR27 +" BPM."+ "</b>" + "</p>" + "<p>" + "<b>" + "2. Sinus Bradycardia with incomplete RBBB" + "</b>" + "</p>" + "<p>" + "<b>" + "3. No significant ST-T changes seen" + "</b>" + "</p>" + "<p>" + "<b>" + "4. No evidence of chamber enlargement or block" + "</b>" + "</p>";
      }
      if(frmData.Bradycardia){
        report += "<p>" + "<b>" + "1. Heart rate is " + frmData.HeartTextFR27 +" BPM."+ "</b>" + "</p>" + "<p>" + "<b>" + "2. Sinus Bradycardia" + "</b>" + "</p>" + "<p>" + "<b>" + "3. No significant ST-T changes seen" + "</b>" + "</p>" + "<p>" + "<b>" + "4. No evidence of chamber enlargement or block" + "</b>" + "</p>";
      }
      //Sinus Tachycardia
      if(frmData.Tachycardia){
        report += "<p>" + "<b>" + "1. Heart rate is " + frmData.HeartTextFR27 +" BPM."+ "</b>" + "</p>" + "<p>" + "<b>" + "2. Sinus Tachycardia" + "</b>" + "</p>" + "<p>" + "<b>" + "3. No significant ST-T changes seen" + "</b>" + "</p>" + "<p>" + "<b>" + "4. No evidence of chamber enlargement or block" + "</b>" + "</p>";
      }


    



    report +=
      this.getImpression(impression, totalCovidPoints) +
      this.getCorads(current_user);

    this.setState({ reportFrmData: report }, () => {
      this.props.generateReport(report);
    });
  }

  pageBreak() {
    return '<div class="page-break ck-widget ck-widget_selected" contenteditable="false" draggable="true"></div>';
  }

  getCorads(user) {
    return (
      "<p><br><img src='" +
      user.signature +
      "' height='50' /><p>" +
      user.full_name +
      "<br>" + "<br>" + 
      user.designation +
      "</p></p>"
    );
  }

  getImpression(impression, totalCovidPoints) {
    let text = "</br><p><strong><u></u></strong></p><p>";
    return text + (impression.join(" ") + "<b>" + " ") + "</b>" + "</p> ";
  }

  render() {
    const { frmData } = this.state;
    return (
      <div>
        {
          <PopUp
            handleClick={this.props.handleClick}
            data={frmData}
            handleData={this.handleData}
            name="Camp ECG"
          />
          

        }
      </div>
    );
  }
}

export default CampECG;
