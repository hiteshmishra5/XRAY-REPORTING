import React, { Component } from "react";
import "../style.css";
import PopUp from "../PopUps/PopUpCtAbdomen";

import text from "../Forms/text_hrct_chest.json";
import { data } from "jquery";

var current_user = JSON.parse(document.getElementById("current-user").textContent);
class CtAbdomen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			frmData: {
				Appendix: false,
				AppendixDialated: false,
				AppendixDialatedPeriappendicealFluidCollection: false,
				AppendixDialatedPeriappendicealPeriphereally: true,
				AppendixDialatedMesentericNodes: false,
				AppendixDialatedAppendicularMass: false,



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
        
		if (frmData.NameTextFR21 && frmData.IDTextFR21 && frmData.AgeTextFR21 && frmData.GenderTextFR21)
        {
           report += "<pre>" + "<b>" +"<header>" + "<table>" + "<tr>" + "<td>" + "Name: " + frmData.NameTextFR21 + "</td>" + "<td>" + "Patient ID: " + frmData.IDTextFR21 + "</td>" + "<td>" + "Age: " + frmData.AgeTextFR21 + "</td>" + "</tr>"  + "<tr>" + "<td>" + "Gender: " + frmData.GenderTextFR21 + "</td>" + "<td>" + "Test date: " + frmData.TestDateTextFR21 + "</td>" + "<td>" + "Report date: " + frmData.ReportDateTextFR21 + "</td>" + "</tr>" + "</table>" + "</b>" + "</pre>" + "</header>";
        }

        if(frmData.Appendix) {
			report +=
			"<h5>" +
			"<strong>" +
			"<u>" +
			"CT ABDOMEN" +
			"</u>" +
			"</strong>" +
			"</h5>" +
			"<strong>" +
			"<u>" +
			"Observation:" +
			"</u>" +
			"</strong>";	
		}

		if (frmData.Appendix) {
			if (frmData.AppendixDialated || frmData.AppendixDialatedPeriappendicealFatStranding) {
				if (frmData.AppendixDialatedText && !frmData.AppendixDialatedPeriappendicealFatStranding) {
					report += "<p>" + "<b>" + "Appendix is dilated, measures " + frmData.AppendixDialatedText + " mm in diameter without peri-appendiceal fat stranding." + "</b>" + "</p>";
				}
				else {
					if (frmData.AppendixDialatedText && frmData.AppendixDialatedPeriappendicealFatStranding) {
						report += "<p>" + "<b>" + "Appendix is dilated, measures " + frmData.AppendixDialatedText + " mm in diameter with peri-appendiceal fat stranding." + "</b>" + "</p>";
					}
				}
			}

			if (frmData.AppendixDialatedPeriappendicealFluidCollection && !frmData.AppendixDialatedPeriappendicealFluidType) {
				report += "<p>" + "<b>" + "Peri-appendiceal fluid collection is present." + "</b>" + "</p>";
			}
			if (frmData.AppendixDialatedPeriappendicealFluidType) {
				report += "<p>" + "<b>" + "Mild peri-ppendiceal free fluid present." + "</b>" + "</p>";
			}
			if (frmData.AppendixDialatedPeriappendicealPeriphereally && frmData.AppendixDialatedPeriappendicealPeriphereallyText
				&& frmData.AppendixDialatedPeriappendicealPeriphereallyText1) {
				report += "<p>" + "<b>" + "A peripherally enhancing localized peri-appendiceal fluid collection measuring of " + frmData.AppendixDialatedPeriappendicealPeriphereallyText + "x" + frmData.AppendixDialatedPeriappendicealPeriphereallyText1 + " cm suggestive of abscess." + "</b>" + "</p>";
			}

			if (frmData.AppendixDialatedPeriappendiceal) {
				report += "<p>" + "<b>" + "Peri-appendiceal extra luminal air pockets suggestive of perforation." + "</b>" + "</p>";
			}

			if (frmData.AppendixDialatedMesentericNodes) {
				if (frmData.AppendixDialatedMesentericNodesType) {
					report += "<p>" + "<b>" + text.AppendixDialatedMesentericNodesTypeText.replace("{1}", frmData.AppendixDialatedMesentericNodesType) + "</b>"
				}
				if (frmData.AppendixDialatedMesentericNodesType === 'Enlarged' && frmData.AppendixDialatedMesentericNodesEnlarged) {
					report += "<b>" + "Size of the largest node " + frmData.AppendixDialatedMesentericNodesEnlarged + " mm." + "</b>" + "</p>";
				}
			}

			if(frmData.AppendixDialatedAppendicularMass){
				if(frmData.AppendixDialatedAppendicularMassWithAdhesion){
					report += "<p>" + "<b>" + "There is a appendicular mass formation with adhesion to distal ileal loops and ceacum," + "</b>"
				}
				if(frmData.AppendixDialatedAppendicularMassWithAdhesionText && frmData.AppendixDialatedAppendicularMassWithAdhesionText1){
					report += "<b>" + "size measuring " + frmData.AppendixDialatedAppendicularMassWithAdhesionText + "x" + frmData.AppendixDialatedAppendicularMassWithAdhesionText1 + " cm." + "</b>" + "</p>";
				}
			}
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
			"<p><br><img src='" + user.signature + "' height='50' /><p>" + user.full_name + "<br>" + "<br>" + user.designation + ", MBBS</p></p>"

		);
	}

	getImpression(impression, totalCovidPoints) {
		let text = "</br><p><strong> </strong></p><p>";
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
						name="CT Abdomen"
					/>
				}
			</div>
		);
	}
}


export default CtAbdomen;
