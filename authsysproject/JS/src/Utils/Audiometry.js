import React, { Component } from "react";
import "../style.css";
import PopUp from "../PopUps/PopupAudiometry";

import text from "../Forms/text_hrct_chest.json";
import { data } from "jquery";
import { AlternateEmailSharp } from "@material-ui/icons";

var current_user = JSON.parse(document.getElementById("current-user").textContent);
class Audiometry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			frmData: {
				AudiometryNormal: false,
				AudiometryNormalL: false,
				AudiometryNormalR: false,
				AudiometryAbnormalL: false,
				AudiometryAbnormalR: false


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

		// if (frmData.AudiometryType) {
		// 	if (frmData.AudiometryNormal) {
		// 		let arr = []
		// 		if ((frmData.AudiometryNormalL || frmData.AudiometryAbnormalL) && !frmData.AudiometryNormalR) {
		// 			arr.push('LEFT')
		// 		}
		// 		if ((frmData.AudiometryNormalR || frmData.AudiometryAbnormalR) && !frmData.AudiometryNormalL) {
		// 			arr.push("RIGHT")
		// 		}
		// 		if ((frmData.AudiometryNormalL && frmData.AudiometryNormalR)
		// 			|| (frmData.AudiometryAbnormalL && frmData.AudiometryAbnormalR)) {
		// 			arr.push("BILATERAL")
		// 		}
		// 		report += "<h5>" + "<strong>" + "<u>" + text.AudiometryTypeText.replace("{1}", frmData.AudiometryType).replace("{2}", arr.join('')) + "</u>" + "</strong>" + "</h5>";
		// 		report += "<h5>" + "<strong>" + "<u>" + "OBSERVATIONS:" + "</u>" + "</strong>" + "</h5>";
		// 	}
		// }

		if (frmData.NameTextFR19 && frmData.IDTextFR19 && frmData.AgeTextFR19 && frmData.GenderTextFR19)
        {
          report += "<pre>" + "<b>" +"<header>" + "<table>" + "<tr>" + "<td>" + "Name: " + frmData.NameTextFR19 + "</td>" + "<td>" + "Patient ID: " + frmData.IDTextFR19 + "</td>" + "<td>" + "Age: " + frmData.AgeTextFR19 + "</td>" + "</tr>"  + "<tr>" + "<td>" + "Gender: " + frmData.GenderTextFR19 + "</td>" + "<td>" + "Test date: " + frmData.TestDateTextFR19 + "</td>" + "<td>" + "Report date: " + frmData.ReportDateTextFR19 + "</td>" + "</tr>" + "</table>" + "</b>" + "</pre>" + "</header>";
        }

		if (frmData.AudiometryNormal) {
			if (frmData.AudiometryNormalL && !frmData.AudiometryNormalR) {
				report += "<h5>" + "<strong>" + "<u>" + "AUDIOMETRY LEFT NORMAL" + "</u>" + "</strong>" + "</h5>";
				report += "<p>" + "Normal hearing of left ear at volume between 16-20 dB and frequency between 250-8000hz." + "<br>" + "Hearing loss in right ear at volume of between 250-8000hz." + "</p>";
				impression.push("<p>" + "<b>" + "No evidence of hearing loss in left ear and Hearing loss detected in right ear." + "</b>" + "<p>");
			}
			if (frmData.AudiometryNormalR && !frmData.AudiometryNormalL) {
				report += "<h5>" + "<strong>" + "<u>" + "AUDIOMETRY RIGHT NORMAL" + "</u>" + "</strong>" + "</h5>";
				report += "<p>" + "Normal hearing of right ear at volume between 16-20 dB and frequency between 250-8000hz." + "<br>" + "Hearing loss in left ear at volume of between 250-8000hz." + "</p>";
				impression.push("<p>" + "<b>" + "No evidence of hearing loss in right ear and Hearing loss detected in left ear." + "</b>" + "<p>");
			}
			if (frmData.AudiometryNormalR && frmData.AudiometryNormalL) {
				report += "<h5>" + "<strong>" + "<u>" + "AUDIOMETRY BOTH NORMAL" + "</u>" + "</strong>" + "</h5>";
				report += "<p>" + "Normal hearing at volume between 16-20 dB and frequency between 250-8000hz." + "</p>";
				impression.push("<p>" + "<b>" + "No evidence of hearing loss in both ears." + "</b>" + "</p>");
			}
		}

		if (frmData.AudiometryAbnormalL || frmData.AudiometryAbnormalR) {
			report += "<h5>" + "<strong>" + "<u>" + "AUDIOMETRY SCREENING RESULTS" + "</u>" + "</strong>" + "</h5>";
			// Left or Right*******************************************************
			if (frmData.AudiometryAbnormalL && !frmData.AudiometryAbnormalR) {
				if (frmData.AudiometryAbnormalLType && !frmData.AudiometryAbnormalRType) {
					report += "<p>" + "<b>" + "Evidence of hearing loss in left ear." + "</b>" + "</p>";
					impression.push("<p>" + "<b>" + text.AudiometryLeftAbnormal.replace("{1}", frmData.AudiometryAbnormalLType) + "</b>" + "</p>")
				}
			}
			if (frmData.AudiometryAbnormalR && !frmData.AudiometryAbnormalL) {
				if (frmData.AudiometryAbnormalRType && !frmData.AudiometryAbnormalLType) {
					report += "<p>" + "<b>" + "Evidence of hearing loss in right ear." + "</b>" + "</p>";
					impression.push("<p>" + "<b>" + text.AudiometryRightAbnormal.replace("{1}", frmData.AudiometryAbnormalRType) + "</b>" + "</p>")
				}
			}
			// Both Side****************************************************************

			if(frmData.AudiometryAbnormalL && frmData.AudiometryAbnormalR){
				if(frmData.AudiometryAbnormalLType && frmData.AudiometryAbnormalRType){
					report += "<p>" + "<b>" + "Hearing loss in left side at volume of " + frmData.AudiometryAbnormalLType +  " and right eat at volume of " + frmData.AudiometryAbnormalRType + " and between frequency 250-8000Hz."  + "</b>" + "</p>";
				}
				let arr = [];
				if(frmData.AudiometryAbnormalLType === '21-40 dB'){
					arr.push('Mild')
				}
				if(frmData.AudiometryAbnormalLType === '41-55 dB'){
					arr.push('Moderate')
				}
				if(frmData.AudiometryAbnormalLType === '56-70 dB'){
					arr.push('Moderate-Severe')
				}
				if(frmData.AudiometryAbnormalLType === '71-90 dB'){
					arr.push('Severe')
				}
				if(frmData.AudiometryAbnormalLType === '91-Above dB'){
					arr.push('Profound')
				}

				if(frmData.AudiometryAbnormalRType === '21-40 dB'){
					arr.push('Mild')
				}
				if(frmData.AudiometryAbnormalRType === '41-55 dB'){
					arr.push('Moderate')
				}
				if(frmData.AudiometryAbnormalRType === '56-70 dB'){
					arr.push('Moderate-Severe')
				}
				if(frmData.AudiometryAbnormalRType === '71-90 dB'){
					arr.push('Severe')
				}
				if(frmData.AudiometryAbnormalRType === '91-Above dB'){
					arr.push('Profound')
				}
				impression.push("<p>" + "<b>" +  text.AudiometryAbnormalImpression.replace("{1}", frmData.AudiometryAbnormalLType) + text.AudiometryAbnormalImpression.replace("{2}", frmData.AudiometryAbnormalRType)   + "</b>" + "</p>");


			}


 


			// if (frmData.AudiometryAbnormalL && frmData.AudiometryAbnormalR) {
			// 	if (frmData.AudiometryAbnormalLType === '21-40 dB' && frmData.AudiometryAbnormalRType === '21-40 dB') {
			// 		report += "<p>" + "<b>" + "Hearing loss in both ears at volume of 21-40 dB and between frequency 250-8000 Hz." + "</b>" + "</p>";
			// 	}
			// 	if (frmData.AudiometryAbnormalLType === '21-40 dB' && (frmData.AudiometryAbnormalRType === '41-55 dB' ||
			// 		frmData.AudiometryAbnormalRType === '56-70 dB' ||
			// 		frmData.AudiometryAbnormalRType === '71-90 dB' ||
			// 		frmData.AudiometryAbnormalRType === '91-Above dB')) {
			// 		report += "<p>" + "<b>" + text.AudiometryLeft2040Abnormal.replace("{1}", frmData.AudiometryAbnormalRType) + "</b>" + "</p>";
			// 	}

			// 	if (frmData.AudiometryAbnormalLType === '41-55 dB' && frmData.AudiometryAbnormalRType === '41-55 dB') {
			// 		report += "<p>" + "<b>" + "Hearing loss in both ears at volume of 41-55 dB and between frequency 250-8000 Hz." + "</b>" + "</p>";
			// 	}
			// 	if (frmData.AudiometryAbnormalLType === '56-70 dB' && frmData.AudiometryAbnormalRType === '56-70 dB') {
			// 		report += "<p>" + "<b>" + "Hearing loss in both ears at volume of 56-70 dB and between frequency 250-8000 Hz." + "</b>" + "</p>";
			// 	}
			// 	if (frmData.AudiometryAbnormalLType === '71-90 dB' && frmData.AudiometryAbnormalRType === '71-90 dB') {
			// 		report += "<p>" + "<b>" + "Hearing loss in both ears at volume of 71-90 dB and between frequency 250-8000 Hz." + "</b>" + "</p>";
			// 	}
			// 	if (frmData.AudiometryAbnormalLType === '91-Above dB' && frmData.AudiometryAbnormalRType === '91-Above dB') {
			// 		report += "<p>" + "<b>" + "Hearing loss in both ears at volume of 91-Above dB and between frequency 250-8000 Hz." + "</b>" + "</p>";
			// 	}


			// 	impression.push("<p>" + "<b>" + "Evidence of hearing loss in both ears." + "</b>" + "</p>");


			// }
		}
		




		report +=
			this.pageBreak() +
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
			"<p><br><img src='" + user.signature + "' height='50' /><p>" + user.full_name + "<br>" + "<br>" + user.designation + "</p></p>"

		);
	}

	getImpression(impression, totalCovidPoints) {
		let text = "</br><p><strong><u>IMPRESSION:</u></strong></p><p>";
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
						name="Audiometry"
					/>
				}
			</div>
		);
	}
}


export default Audiometry;
