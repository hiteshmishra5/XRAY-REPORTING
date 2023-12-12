import React, { Component } from "react";
import "../style.css";
import PopUp from "../PopUps/PopupVitals";

import text from "../Forms/text_hrct_chest.json";
import { data } from "jquery";
import { AlternateEmailSharp } from "@material-ui/icons";

// var current_user = JSON.parse(document.getElementById("current-user").textContent);
class Vitals extends Component {
	constructor(props) {
		super(props);
		this.state = {
			frmData: {

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


		if (frmData.NameTextFR24 && frmData.IDTextFR24 && frmData.AgeTextFR24 && frmData.GenderTextFR24)
        {
          report += "<pre>" + "<b>" +"<header>" + "<table>" + "<tr>" + "<td>" + "Name: " + frmData.NameTextFR24 + "</td>" + "<td>" + "Patient ID: " + frmData.IDTextFR24 + "</td>" + "<td>" + "Age: " + frmData.AgeTextFR24 + "</td>" + "</tr>"  + "<tr>" + "<td>" + "Gender: " + frmData.GenderTextFR24 + "</td>" + "<td>" + "Test date: " + frmData.TestDateTextFR24 + "</td>" + "<td>" + "Report date: " + frmData.ReportDateTextFR24 + "</td>" + "</tr>" + "</table>" + "</b>" + "</pre>" + "</header>";
		  
        }
        
        //test/////////////
        ////all normal//////////
        
			
		if (frmData.HeightText24 && frmData.WeightText24 && frmData.BloodText24 && frmData.PulseText24) {
            
            var weightKg = parseFloat(frmData.WeightText24);
            var heightCm = parseFloat(frmData.HeightText24);
            var heightM = heightCm / 100; // Convert height to meters

            var bmi = weightKg / (heightM * heightM);
			
		    report += "<h5>" +
			"<strong>" +
			"<u>" + "<br>" + 
			"VITALS" + "<br>" +
			"</u>" +
			"</strong>" +
			"</h5>";
			report += "<pre>" + "<header>" + '<table>'
              + "<tr>" + "<td colspan='3'>" + "<b>" + "Vitals" + "</b>" + "</td>" + "<td colspan='3'>" + "<b>" + "Values" + "</b>" + "</td>" + "</tr>" 
              + "<tr>" + "<td colspan='3'>" + "<b>" + "Height(in cm)" + "</b>" + "</td>" + "<td colspan='3'>" + frmData.HeightText24 + "</td>" + "</tr>"
              + "<tr>" + "<td colspan='3'>" + "<b>" + "Weight(in kg)" + "</b>" + "</td>" + "<td colspan='3'>" + frmData.WeightText24 + "</td>" + "</tr>"
              + "<tr>" + "<td colspan='3'>" + "<b>" + "BMI(kg/m&sup2;)" + "</td>" + "</b>" + "<td colspan='3'>" + bmi.toFixed(2) + "</td>" + "</tr>"
              + "<tr>" + "<td colspan='3'>" + "<b>" + "Blood Pressure(mmHg)" + "</b>" + "</td>" + "<td colspan='3'>" + frmData.BloodText24 + "</td>" + "</tr>"
              + "<tr>" + "<td colspan='3'>" + "<b>" + "Pulse(bpm)" + "</b>" + "</td>" + "<td colspan='3'>" + frmData.PulseText24 + "</td>" + "</tr>" 
              + "</table>" + "</header>" + "</pre>";
        } 

        
		
		   
		
		




		report +=
		   this.getImpression(impression, totalCovidPoints);


		this.setState({ reportFrmData: report }, () => {
			this.props.generateReport(report);
		});
	}

	pageBreak() {
		return '<div class="page-break ck-widget ck-widget_selected" contenteditable="false" draggable="true"></div>';
	}

	getCorads() {
	}

	getImpression(impression, totalCovidPoints) {
		let text = "<strong><u></u></strong>";
		return text + (impression.join(" ") + "<b>" + " ") + "</b>";
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
						name="Vitals"
					/>
				}
			</div>
		);
	}
}


export default Vitals;
