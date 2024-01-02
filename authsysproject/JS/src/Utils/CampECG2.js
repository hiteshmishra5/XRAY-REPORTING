import React, { Component } from "react";
import "../style.css";
import PopUp from "../PopUps/popupCampECG2";

import text from "../Forms/text_hrct_chest.json";
import { data } from "jquery";
import popupCampECG2 from "../PopUps/popupCampECG2";

var current_user = JSON.parse(document.getElementById("current-user").textContent);
class CampECG2 extends Component {
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
        TInversion: false,
        Others: false,
            
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

    if (frmData.NameTextFR21 && frmData.IDTextFR21 && frmData.AgeTextFR21 && frmData.GenderTextFR21 )
    {
      report += "<pre>" + "<b>" +"<header>" + "<table>" + "<tr>" + "<td>" + "Name: " + frmData.NameTextFR21 + "</td>" + "<td>" + "Patient ID: " + frmData.IDTextFR21 + "</td>" + "<td>" + "Age: " + frmData.AgeTextFR21 + "</td>" + "</tr>"  + "<tr>" + "<td>" + "Gender: " + frmData.GenderTextFR21 + "</td>" + "<td>" + "Test date: " + frmData.TestDateTextFR21 + "</td>" + "<td>" + "Report date: " + frmData.ReportDateTextFR21 + "</td>" + "</tr>" + "</table>" + "</b>" + "</pre>" + "</header>";
    }

    if (
        frmData.ECGcampNormal ||
        frmData.RhythmRBBB ||
        frmData.TachycardiaRBBB ||
        frmData.BradycardiaRBBB ||
        frmData.Bradycardia ||
        frmData.Tachycardia ||
        frmData.PRIntervalFR21 ||
        frmData.TInversion
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
      if(frmData.HeartTextFR21){
        report += "<p>" + "<b>" + "1. Heart rate is " + frmData.HeartTextFR21 +" BPM." + "</b>" + "</p>";
      }
      //Normal ECG
      if(frmData.ECGcampNormal){
        report += "<p>" + "<b>" + "2. Normal Sinus Rhythm." + "</b>" + "</p>" + "<p>" + "<b>" + "3. No significant ST-T changes seen." + "</b>" + "</p>";
      }
      // Sinus rhythm with incomplete RBBB
      if(frmData.RhythmRBBB){
        report += "<p>" + "<b>" + "2. Sinus Rhythm with incomplete RBBB." + "</b>" + "</p>" + "<p>" + "<b>" + "3. No significant ST-T changes seen." + "<p>" + "<b>" + "</b>" + "</p>";
      }
      // Sinus Tachycardia with incomplete RBBB
      if(frmData.TachycardiaRBBB){
        report += "<p>" + "<b>" + "2. Sinus Tachycardia with incomplete RBBB." + "</b>" + "</p>" + "<p>" + "<b>" + "3. No significant ST-T changes seen." + "<p>" + "<b>" + "</b>" + "</p>";
      }
      // Sinus Bradycardia with incomplete RBBB
      if(frmData.BradycardiaRBBB){
        report += "<p>" + "<b>" + "2. Sinus Bradycardia with incomplete RBBB." + "</b>" + "</p>" + "<p>" + "<b>" + "3. No significant ST-T changes seen." + "<p>" + "<b>" + "</b>" + "</p>";
      }
      if(frmData.Bradycardia){
        report += "<p>" + "<b>" + "2. Sinus Bradycardia." + "</b>" + "</p>" + "<p>" + "<b>" + "3. No significant ST-T changes seen." + "<p>" + "<b>" + "</b>" + "</p>";
      }
      //Sinus Tachycardia
      if(frmData.Tachycardia){
        report += "<p>" + "<b>" + "2. Sinus Tachycardia." + "</b>" + "</p>" + "<p>" + "<b>" + "3. No significant ST-T changes seen." + "<p>" + "<b>" + "</b>" + "</p>";
      }

      if(frmData.TInversion){
        report += "<p>" + "<b>" + "2. Normal sinus rhythm with t wave inversion in lead III." + "</b>" + "</p>" + "<p>" + "<b>" + "3. No significant ST-T changes seen." + "</b>" + "</p>";
      }
      //Others
      if(frmData.OthersText2 && !(frmData.ECGcampNormal || frmData.RhythmRBBB || frmData.TachycardiaRBBB || frmData.BradycardiaRBBB || frmData.Bradycardia || frmData.Tachycardia || frmData.TInversion)) {
        report += "<p>" + "<b>" + "2. " + frmData.OthersText2 + "." + "</b>" + "</p>";
      }


      //Automation
      if(frmData.HeartTextFR21 < 60 && !(frmData.ECGcampNormal || frmData.RhythmRBBB || frmData.TachycardiaRBBB ||
        frmData.BradycardiaRBBB || frmData.Bradycardia || frmData.Tachycardia || frmData.TInversion || frmData.OthersText2)){
        report += "<p>" + "<b>" + "2. Sinus Bradycardia." + "</b>" + "</p>" + "<p>" + "<b>" + "3. No significant ST-T changes seen." + "<p>" + "<b>" + "</b>" + "</p>";
      }
      if(frmData.HeartTextFR21 > 100 && !(frmData.ECGcampNormal || frmData.RhythmRBBB || frmData.TachycardiaRBBB ||
        frmData.BradycardiaRBBB || frmData.Bradycardia || frmData.Tachycardia || frmData.TInversion || frmData.OthersText2)){
        report += "<p>" + "<b>" + "2. Sinus Tachycardia." + "</b>" + "</p>" + "<p>" + "<b>" + "3. No significant ST-T changes seen." + "<p>" + "<b>" + "</b>" + "</p>";
      }
      if(frmData.PRIntervalFR21 > 200 && !(frmData.ECGcampNormal || frmData.RhythmRBBB || frmData.TachycardiaRBBB ||
        frmData.BradycardiaRBBB || frmData.Bradycardia || frmData.Tachycardia || frmData.TInversion || frmData.OthersText2)){
        report += "<p>" + "<b>" + "2. first degree AV block." + "</b>" + "</p>" + "<p>" + "<b>" + "3. No significant ST-T changes seen." + "<p>" + "<b>" + "</b>" + "</p>";
      }
      if(frmData.HeartTextFR21 >= 60 && frmData.HeartTextFR21 < 100 && !(frmData.ECGcampNormal || frmData.RhythmRBBB || frmData.TachycardiaRBBB ||
        frmData.BradycardiaRBBB || frmData.Bradycardia || frmData.Tachycardia || frmData.TInversion || frmData.OthersText2)){
        report += "<p>" + "<b>" + "2. Normal Sinus Rhythm." + "</b>" + "</p>" + "<p>" + "<b>" + "3. No significant ST-T changes seen." + "<p>" + "<b>" + "</b>" + "</p>";
      }



    report +=
      this.getImpression(impression, totalCovidPoints) +
      this.getCorads(current_user);

      if (frmData.reportimage) {
        report += "<div class='image-container'>" +
          "<img src='" + frmData.reportimage + "' alt='Report' class='report-image' />" +
          "</div>";
      }
    
      this.setState({ reportFrmData: report }, () => {
        this.props.generateReport(report);
      });
  }

  pageBreak() {
    return '<div class="page-break ck-widget ck-widget_selected" contenteditable="false" draggable="true"></div>';
  }

  getCorads(user) {
    return (
      "<p><img src='" +
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
            name="Camp (ECG)"
          />
          

        }
      </div>
    );
  }
}

export default CampECG2;