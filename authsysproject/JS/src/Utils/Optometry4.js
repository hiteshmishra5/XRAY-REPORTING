import React, { Component } from "react";
import "../style.css";
import PopUp from "../PopUps/PopupOptometry4";

import text from "../Forms/text_hrct_chest.json";
import { data } from "jquery";
import { AlternateEmailSharp } from "@material-ui/icons";

var current_user = JSON.parse(document.getElementById("current-user").textContent);
class Optometry4 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			frmData: {
                OptometryOtherText: false,
				

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


		if (frmData.NameTextFR26 && frmData.IDTextFR26 && frmData.AgeTextFR26 && frmData.GenderTextFR26)
        {
          report += "<pre>" + "<b>" +"<header>" + "<table>" + "<tr>" + "<td>" + "Name: " + frmData.NameTextFR26 + "</td>" + "<td>" + "Patient ID: " + frmData.IDTextFR26 + "</td>" + "<td>" + "Age: " + frmData.AgeTextFR26 + "</td>" + "</tr>"  + "<tr>" + "<td>" + "Gender: " + frmData.GenderTextFR26 + "</td>" + "<td>" + "Test date: " + frmData.TestDateTextFR26 + "</td>" + "<td>" + "Report date: " + frmData.ReportDateTextFR26 + "</td>" + "</tr>" + "</table>" + "</b>" + "</pre>" + "</header>";
		  
        }
        
        //test/////////////
        ////all normal//////////
        if (frmData.OptometryNormal) {
			report += "<h5>" +
			"<strong>" +
			"<u>" +
			"OPTOMETRY" +
			"</u>" +
			"</strong>" +
			"</h5>" +
			"<strong>" +
			"<u>" +
			"Corrective Vision" +
			"</u>" +
			"</strong>";
            report += "<table>" + "<tr>" + "<td colspan='7'>" + "<b>" + "Visual Acuity" + "</b>" + "</td>" + "</tr>" 
            + "<tr>" + "<td colspan='3'>" + "</td>" + "<td colspan='2'>" + "<b>" + "Distance(Vision)" + "</b>" + "</td>" + "<td colspan='2'>" + "<b>" + "Reading(Vision)" + "</b>" + "</td>" + "</tr>" 
            + "<tr>" + "<td colspan='3'>" + "<b>" + "Right Eye" + "</b>" + "</td>" + "<td colspan='2'>" + "6/6" + "</td>" + "<td colspan='2'>" + "N/6" + "</td>" + "</tr>"
            + "<tr>" + "<td colspan='3'>" + "<b>" + "Left Eye" + "</b>" + "</td>" + "<td colspan='2'>" + "6/6" + "</td>" + "<td colspan='2'>" + "N/6" + "</td>" + "</tr>"  + "</table>";
            
              impression.push("<p>" + "Normal vision in both eye." + "</p>");  
        }

        if (!frmData.OptometryNormal) {
            let arr1 = [];
            if (frmData.OptometryAbnormalLType) {
                arr1.push(frmData.OptometryAbnormalLType);
            }
            else {
				arr1.push("-");
			}

            let arr2 = [];
            if (frmData.OptometryAbnormalRType) {
                arr2.push(frmData.OptometryAbnormalRType);
            }
            else {
				arr2.push("-");
			}

            let arr3 = [];
            if (frmData.OptometryAbnormalLTypeN) {
                arr3.push(frmData.OptometryAbnormalLTypeN);
            }
            else {
				arr3.push("-");
			}

            let arr4 = [];
            if (frmData.OptometryAbnormalRTypeN) {
                arr4.push(frmData.OptometryAbnormalRTypeN);
            }
            else {
				arr4.push("-");
			}
            //abnormal vision
            //far///////////
            let arr13 = [];
            if (frmData.OptometryAbnormalLType && !frmData.OptometryAbnormalRType) {
                arr13.push("<b>" + "Distance(Far): " + "</b>" + frmData.OptometryAbnormalLType + " vision in left eye. ");
            }
            if (frmData.OptometryAbnormalRType && !frmData.OptometryAbnormalLType) {
                arr13.push("<b>" + "Distance(Far): " + "</b>" + frmData.OptometryAbnormalRType + " vision in right eye. ");
            }
            if (frmData.OptometryAbnormalRType && frmData.OptometryAbnormalLType) {
                arr13.push("<b>" + "Distance(Far): " + "</b>" + frmData.OptometryAbnormalRType + " vision in right eye- " + frmData.OptometryAbnormalLType + " vision in left eye." + "<br>");
            }
            if (frmData.OptometryAbnormalLTypeN && !frmData.OptometryAbnormalRTypeN) {
                arr13.push("<b>" + "Reading(Near): " + "</b>" + frmData.OptometryAbnormalLTypeN + " vision in left eye. ");
            }
            if (frmData.OptometryAbnormalRTypeN && !frmData.OptometryAbnormalLTypeN) {
                arr13.push("<b>" + "Reading(Near): " + "</b>" + frmData.OptometryAbnormalRTypeN + " vision in right eye. ");
            }
            if (frmData.OptometryAbnormalRTypeN && frmData.OptometryAbnormalLTypeN) {
                arr13.push("<b>" + "Reading(Near): " + "</b>" + frmData.OptometryAbnormalRTypeN + " vision in right eye- " + frmData.OptometryAbnormalLTypeN + " vision in left eye.");
            }
			
			
			
		    report += "<h5>" +
			"<strong>" +
			"<u>" +
			"OPTOMETRY" +
			"</u>" +
			"</strong>" +
			"</h5>" +
			"<strong>" +
			"<u>" +
			"Corrective Vision" +
			"</u>" +
			"</strong>";
			report += "<table>" + "<tr>" + "<td colspan='7'>" + "<b>" + "Visual Acuity" + "</b>" + "</td>" + "</tr>" 
            + "<tr>" + "<td colspan='3'>" + "</td>" + "<td colspan='2'>" + "<b>" + "Distance(Vision)" + "</b>" + "</td>" + "<td colspan='2'>" + "<b>" + "Reading(Vision)" + "</b>" + "</td>" + "</tr>" 
            + "<tr>" + "<td colspan='3'>" + "<b>" + "Right Eye" + "</b>" + "</td>" + "<td colspan='2'>" + arr2 + "</td>" + "<td colspan='2'>" + arr4 + "</td>" + "</tr>"
            + "<tr>" + "<td colspan='3'>" + "<b>" + "Left Eye" + "</b>" + "</td>" + "<td colspan='2'>" +arr1 + "</td>" + "<td colspan='2'>" + arr3 + "</td>" + "</tr>"  + "</table>";
		
              impression.push("<p>" + arr13.join("") + "</p>");
        } 

        
		//others
		if (frmData.OptometryOtherTextField) {
			impression.push("<br>" + "<b>" + "Finding: " + "</b>" + frmData.OptometryOtherTextField);
		}
		
		//Normal both/////////////////////
        if (frmData.OptometryLColorType=="Normal" && frmData.OptometryRColorType=="Normal") {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test): " + "</u>" + "</strong>" + "Normal in both eyes." + "</h5>";
        }
        //Total color blindness both//////////////////////
        if (frmData.OptometryLColorType=="Total color blindness" && frmData.OptometryRColorType=="Total color blindness") {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Total color blindness in both eyes." + "</h5>";
        }
        //Partial both
        //Red
        if (frmData.OptometryLColorType=="Partial color blindness" && frmData.OptometryRColorType=="Partial color blindness" && frmData.OptometryLColorType1=="Red" && frmData.OptometryRColorType1=="Red"
        && !(frmData.OptometryLColorType1=="Green" && frmData.OptometryRColorType1=="Green") && !(frmData.OptometryLColorType1=="Red-Green" && frmData.OptometryRColorType1=="Red-Green")) {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Partial color blindness(both eye): Red." + "</h5>";
        }
        //Green
        if (frmData.OptometryLColorType=="Partial color blindness" && frmData.OptometryRColorType=="Partial color blindness" 
        && frmData.OptometryLColorType1=="Green" && frmData.OptometryRColorType1=="Green" && !(frmData.OptometryLColorType1=="Red-Green" && frmData.OptometryRColorType1=="Red-Green") 
        && !(frmData.OptometryLColorType1=="Red" && frmData.OptometryRColorType1=="Red")) {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Partial color blindness(both eye): Green." + "</h5>";
        }
        //Red-Green
        if (frmData.OptometryLColorType=="Partial color blindness" && frmData.OptometryRColorType=="Partial color blindness" 
        && frmData.OptometryLColorType1=="Red-Green" && frmData.OptometryRColorType1=="Red-Green" && !(frmData.OptometryLColorType1=="Red" && frmData.OptometryRColorType1=="Red") && !(frmData.OptometryLColorType1=="Green" && frmData.OptometryRColorType1=="Green")) {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Partial color blindness(both eye): Red-Green." + "</h5>";
            
        }
        //Left Normal-Right Partial//////////////
        if (frmData.OptometryLColorType=="Normal" && frmData.OptometryRColorType=="Partial color blindness") {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Normal in left eye." + "<br>" + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Partial color blindness in right eye: " + frmData.OptometryRColorType1 + "." + "</h5>";
        }
        //Left Normal-Right Total//////////////
        if (frmData.OptometryLColorType=="Normal" && frmData.OptometryRColorType=="Total color blindness") {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Normal in left eye." + "<br>" + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Total color blindness in right eye." + "</h5>";
        }
        //Left Partial-Right Normal//////////////
        if (frmData.OptometryLColorType=="Partial color blindness" && frmData.OptometryRColorType=="Normal") {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Partial color blindness in left eye: " + frmData.OptometryLColorType1 + "<br>" + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Normal in right eye." + "</h5>";
        }
        //Left Partial-Right Total//////////////
        if (frmData.OptometryLColorType=="Partial color blindness" && frmData.OptometryRColorType=="Total color blindness") {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Partial color blindness in left eye: " + frmData.OptometryLColorType1 + "<br>" + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Total color blindness in right eye." + "</h5>";
        }
        //Left Total-Right Normal//////////////
        if (frmData.OptometryLColorType=="Total color blindness" && frmData.OptometryRColorType=="Normal") {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Total color blindness in left eye. " + "<br>" + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Normal in right eye." + "</h5>";
        }
        //Left Total-Right Partial//////////////
        if (frmData.OptometryLColorType=="Total color blindness" && frmData.OptometryRColorType=="Partial color blindness") {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Total color blindness in left eye." + "<br>" + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Partial color blindness in right eye: " + frmData.OptometryRColorType1 + "." + "</h5>";
        }

		//Left partial-Right Partial//////////////
        if (frmData.OptometryLColorType=="Partial color blindness" && frmData.OptometryRColorType=="Partial color blindness" && !(frmData.OptometryLColorType1=="Red" && frmData.OptometryRColorType1=="Red") && !(frmData.OptometryLColorType1=="Green" && frmData.OptometryRColorType1=="Green") && !(frmData.OptometryLColorType1=="Red-Green" && frmData.OptometryRColorType1=="Red-Green")) {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + "Partial color blindness in left eye: " + frmData.OptometryLColorType1 + "<br>" +  "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Partial color blindness in right eye: " + frmData.OptometryRColorType1 + "." + "</h5>";
        }

        //for auto fill
        if (frmData.OptometryColor) {
            report += "<h5>" + "<strong>" + "<u>" + "Color vision check(Ishihara test)" + "</u>" + ": " + "</strong>" + frmData.OptometryColor + " color blindness in both eye." + "</h5>";
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
		let text = "<strong><u>Visual Acuity</u>:</strong>";
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
						name="Optometry"
					/>
				}
			</div>
		);
	}
}


export default Optometry4;
