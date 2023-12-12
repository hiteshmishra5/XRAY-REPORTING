import React, { Component } from "react";
import "../style.css";
import PopUp from "../PopUps/PopupOptometry2";

import text from "../Forms/text_hrct_chest.json";
import { data } from "jquery";
import { AlternateEmailSharp } from "@material-ui/icons";

var current_user = JSON.parse(document.getElementById("current-user").textContent);
class Optometry2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			frmData: {
				// Optometry: false,
				// OptometryNormal: false,
				// OptometryNormalL: false,
				// OptometryNormalR: false,
				// OptometryNormalN: false,
				// OptometryNormalLN: false,
				// OptometryNormalRN: false,
				// OptometryAbnormal: false,
				// OptometryAbnormalL: false,
				// OptometryAbnormalR: false,
				// OptometryAbnormalN: false,
				// OptometryAbnormalLN: false,
				// OptometryAbnormalRN: false,
				// OptometryPrescription: false,
				// //////near/////////
				// OptometryPrescriptionNear: false,
				// OptometryPrescriptionL: false,
				// OptometryPrescriptionLminus: false,
				// OptometryPrescriptionLminusPower: false,
                // OptometryPrescriptionLplus: false,
				// OptometryPrescriptionLplusPower: false,
				// OptometryPrescriptionR: false,
				// OptometryPrescriptionRminus: false,
				// OptometryPrescriptionRminusPower: false,
                // OptometryPrescriptionRplus: false,
				// OptometryPrescriptionRplusPower: false,
			    OptometryPrescriptionRPTypeCylindrical: false,
				OptometryPrescriptionRPTypeSpherical: false,
				OptometryPrescriptionRMTypeCylindrical: false,
				OptometryPrescriptionRMTypeSpherical: false,
				OptometryPrescriptionLPTypeCylindrical: false,
				OptometryPrescriptionLPTypeSpherical: false,
				OptometryPrescriptionLMTypeCylindrical: false,
				OptometryPrescriptionLMTypeSpherical: false,
				// ////////////////far////////////
				// OptometryPrescriptionFar: false,
				// OptometryPrescriptionLFar: false,
				// OptometryPrescriptionLminusFar: false,
				// OptometryPrescriptionLminusPowerFar: false,
                // OptometryPrescriptionLplusFar: false,
				// OptometryPrescriptionLplusPowerFar: false,
				// OptometryPrescriptionRFar: false,
				// OptometryPrescriptionRminusFar: false,
				// OptometryPrescriptionRminusPowerFar: false,
                // OptometryPrescriptionRplusFar: false,
				// OptometryPrescriptionRplusPowerFar: false,
				OptometryPrescriptionRPTypeCylindricalFar: false,
				OptometryPrescriptionRPTypeSphericalFar: false,
				OptometryPrescriptionRMTypeCylindricalFar: false,
				OptometryPrescriptionRMTypeSphericalFar: false,
				OptometryPrescriptionLPTypeCylindricalFar: false,
				OptometryPrescriptionLPTypeSphericalFar: false,
				OptometryPrescriptionLMTypeCylindricalFar: false,
				OptometryPrescriptionLMTypeSphericalFar: false,
				// OptometryOtherText: false,
				// OptometryColor: false,
				// OptometryLColor: false,
				
				// OptometryRColor: false,
				

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


		if (frmData.NameTextFR1 && frmData.IDTextFR1 && frmData.AgeTextFR1 && frmData.GenderTextFR1)
        {
          report += "<pre>" + "<b>" +"<header>" + "<table>" + "<tr>" + "<td>" + "Name: " + frmData.NameTextFR1 + "</td>" + "<td>" + "Patient ID: " + frmData.IDTextFR1 + "</td>" + "<td>" + "Age: " + frmData.AgeTextFR1 + "</td>" + "</tr>"  + "<tr>" + "<td>" + "Gender: " + frmData.GenderTextFR1 + "</td>" + "<td>" + "Test date: " + frmData.TestDateTextFR1 + "</td>" + "<td>" + "Report date: " + frmData.ReportDateTextFR1 + "</td>" + "</tr>" + "</table>" + "</b>" + "</pre>" + "</header>";
		  
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
            report += "<table>" + "<tr>" + "<td colspan='9'>" + "<b>" + "Visual Acuity" + "</b>" + "</td>" + "</tr>" + "<tr>" + "<td colspan='5'>" 
			  + "<b>" + "Distance(Far)" + "</b>" + "</td>" + "<td colspan='4'>" + "<b>" + "Reading(Near)" + "</b>" + "</td>" + "</tr>" + "<tr>" + "<td>" + "<b>" + "EYE" + "</b>" + "</td>" + "<td>" + "<b>" + "SPH" 
			  + "</b>" + "</td>" + "<td>" + "<b>" + "CYL" + "</b>" + "</td>" + "<td>" + "<b>" + "AXIS" + "</b>" + "</td>" + "<td>" + "<b>" + "VISION" + "</b>" + "</td>" + "<td>" + "<b>" + "SPH" + "</b>" + "</td>" + "<td>" + "<b>" + "CYL" + "</b>" + "</td>" 
			  + "<td>" + "<b>" + "AXIS" + "</b>" + "</td>"+ "<td>" + "<b>" + "VISION" + "</b>" + "</td>"+ "</tr>" + "<tr>" + "<td>" + "<b>" + "R/E" + "</b>" + "</td>" + "</b>" + "<td>" + "N/A" + "</td>" + "<td>" + "N/A" + "</td>" 
			  + "<td>" + "N/A" + "</td>" + "<td>" + "6/6" + "</td>" + "<td>" + "N/A" + "</td>" + "<td>" + "N/A" + "</td>" + "<td>" + "N/A" + "</td>" + "<td>" + "N/6" + "</td>" 
			   + "</tr>" + "<tr>" + "<td>" + "<b>" + "L/E" + "</b>" + "</td>" + "<td>" + "N/A" + "</td>" + "<td>" + "N/A" + "</td>" + "<td>" + "N/A" + "</td>" + "<td>" + "6/6" + "</td>" 
			  + "<td>" + "N/A" + "</td>" + "<td>" + "N/A" + "</td>" + "<td>" + "N/A" + "</td>" + "<td>" + "N/6" + "</td>" + "</tr>"  + "</table>";
            
              impression.push("<p>" + "Normal vision in both eye." + "</p>");  
        }

        if (!frmData.OptometryNormal) {
			let arr = [];
			//right far minus-plus spherical
			if (frmData.OptometryPrescriptionRminusSPowerTypeFar) {
				arr.push(frmData.OptometryPrescriptionRminusSPowerTypeFar);
			}
			else {
				if(!frmData.OptometryPrescriptionRplusSPowerTypeFar && !frmData.OptometryPrescriptionRminusSPowerTypeFar) {
					arr.push("-");
				}
			}
			if (frmData.OptometryPrescriptionRplusSPowerTypeFar) {
				arr.push(frmData.OptometryPrescriptionRplusSPowerTypeFar);
			}
			else {
				if(!frmData.OptometryPrescriptionRminusSPowerTypeFar && !frmData.OptometryPrescriptionRplusSPowerTypeFar) {
					arr.push("-");
				}
			}
			//right far minus cylindrical
			let arr1 = [];
			if (frmData.OptometryPrescriptionRminusCPowerTypeFar && frmData.OptometryPrescriptionRMAxisFar) {
			   arr1.push(frmData.OptometryPrescriptionRminusCPowerTypeFar);
			}
			else {
				if(!frmData.OptometryPrescriptionRminusCPowerTypeFar && !frmData.OptometryPrescriptionRplusCPowerTypeFar) {
					arr1.push("-");
				}
			   
			}
			if (frmData.OptometryPrescriptionRplusCPowerTypeFar && frmData.OptometryPrescriptionRPAxisFar) {
			   arr1.push(frmData.OptometryPrescriptionRplusCPowerTypeFar);
			}
			else {
				if(!frmData.OptometryPrescriptionRminusCPowerTypeFar && !frmData.OptometryPrescriptionRplusCPowerTypeFar) {
					arr1.push("-");
				}
			}
			//right far minus-plus cylindrical-axis
			let arr2 =[];
			if (frmData.OptometryPrescriptionRminusCPowerTypeFar && frmData.OptometryPrescriptionRMAxisFar) {
				arr2.push(frmData.OptometryPrescriptionRMAxisFar);
			}
			else {
                if(!frmData.OptometryPrescriptionRPAxisFar && !frmData.OptometryPrescriptionLPAxisFar && !frmData.OptometryPrescriptionRMAxisFar && !frmData.OptometryPrescriptionLMAxisFar) {
					arr2.push("-");
				}
			}
			if (frmData.OptometryPrescriptionRplusCPowerTypeFar && frmData.OptometryPrescriptionRPAxisFar) {
			    arr2.push(frmData.OptometryPrescriptionRPAxisFar);
			}
			else {
				if(!frmData.OptometryPrescriptionRPAxisFar && !frmData.OptometryPrescriptionLPAxisFar && !frmData.OptometryPrescriptionRMAxisFar && !frmData.OptometryPrescriptionLMAxisFar) {
					arr2.push("-");
				}
			}
			//right near minus-plus spherical
			let arr3 = [];
			if (frmData.OptometryPrescriptionRminusSPowerType) {
				arr3.push(frmData.OptometryPrescriptionRminusSPowerType);
			}
			else {
				if(!frmData.OptometryPrescriptionRminusSPowerType && !frmData.OptometryPrescriptionRplusSPowerType) {
					arr3.push("-");
				}
			}
			if (frmData.OptometryPrescriptionRplusSPowerType) {
				arr3.push(frmData.OptometryPrescriptionRplusSPowerType);
			}
			else {
				if(!frmData.OptometryPrescriptionRminusSPowerType && !frmData.OptometryPrescriptionRplusSPowerType) {
					arr3.push("-");
				}
			}
			//right near minus-plus cylindrical
			let arr4 = [];
			if (frmData.OptometryPrescriptionRminusCPowerType && frmData.OptometryPrescriptionRMAxis) {
			   arr4.push(frmData.OptometryPrescriptionRminusCPowerType);
			}
			else {
				if(!frmData.OptometryPrescriptionRminusCPowerType && !frmData.OptometryPrescriptionRplusCPowerType) {
					arr4.push("-");
				}
			}
			if (frmData.OptometryPrescriptionRplusCPowerType && frmData.OptometryPrescriptionRPAxis) {
			   arr4.push(frmData.OptometryPrescriptionRplusCPowerType);
			}
			else {
				if(!frmData.OptometryPrescriptionRminusCPowerType && !frmData.OptometryPrescriptionRplusCPowerType) {
					arr4.push("-");
				}
			}
			//right near minus-plus cylindrical-axis
			let arr5 =[];
			if (frmData.OptometryPrescriptionRminusCPowerType && frmData.OptometryPrescriptionRMAxis) {
				arr5.push(frmData.OptometryPrescriptionRMAxis);
			}
			else {
				if(!frmData.OptometryPrescriptionRMAxis && !frmData.OptometryPrescriptionLMAxis && !frmData.OptometryPrescriptionRPAxis && !frmData.OptometryPrescriptionLPAxis) {
					arr5.push("-");
				}
			}
			if (frmData.OptometryPrescriptionRplusCPowerType && frmData.OptometryPrescriptionRPAxis) {
			    arr5.push(frmData.OptometryPrescriptionRPAxis);
			}
			else {
				if(!frmData.OptometryPrescriptionRMAxis && !frmData.OptometryPrescriptionLMAxis && !frmData.OptometryPrescriptionRPAxis && !frmData.OptometryPrescriptionLPAxis) {
					arr5.push("-");
				}
			}
			//////////////left///////////////////
			let arr6 = [];
			//left far minus-plus spherical
			if (frmData.OptometryPrescriptionLminusSPowerTypeFar) {
				arr6.push(frmData.OptometryPrescriptionLminusSPowerTypeFar);
			}
			else {
				if(!frmData.OptometryPrescriptionLminusSPowerTypeFar && !frmData.OptometryPrescriptionLplusSPowerTypeFar) {
					arr6.push("-");
				}
			}
			if (frmData.OptometryPrescriptionLplusSPowerTypeFar) {
				arr6.push(frmData.OptometryPrescriptionLplusSPowerTypeFar);
			}
			else {
				if(!frmData.OptometryPrescriptionLminusSPowerTypeFar && !frmData.OptometryPrescriptionLplusSPowerTypeFar) {
					arr6.push("-");
				}
			}
			//left far minus-plus cylindrical
			let arr7 = [];
			if (frmData.OptometryPrescriptionLminusCPowerTypeFar && frmData.OptometryPrescriptionLMAxisFar) {
			   arr7.push(frmData.OptometryPrescriptionLminusCPowerTypeFar);
			}
			else {
				if(!frmData.OptometryPrescriptionLminusCPowerTypeFar && !frmData.OptometryPrescriptionLplusCPowerTypeFar) {
					arr7.push("-");
				}
			}
			if (frmData.OptometryPrescriptionLplusCPowerTypeFar && frmData.OptometryPrescriptionLPAxisFar) {
			   arr7.push(frmData.OptometryPrescriptionLplusCPowerTypeFar);
			}
			else {
				if(!frmData.OptometryPrescriptionLminusCPowerTypeFar && !frmData.OptometryPrescriptionLplusCPowerTypeFar) {
					arr7.push("-");
				}
			}
			//left far minus-plus cylindrical-axis
			let arr8 =[];
			if (frmData.OptometryPrescriptionLminusCPowerTypeFar && frmData.OptometryPrescriptionLMAxisFar) {
				arr8.push(frmData.OptometryPrescriptionLMAxisFar);
			}
			else {
				if(!frmData.OptometryPrescriptionRMAxisFar && !frmData.OptometryPrescriptionLMAxisFar && !frmData.OptometryPrescriptionRPAxisFar && !frmData.OptometryPrescriptionLPAxisFar) {
					arr8.push("-");
				}
			}
			if (frmData.OptometryPrescriptionLplusCPowerTypeFar && frmData.OptometryPrescriptionLPAxisFar) {
			    arr8.push(frmData.OptometryPrescriptionLPAxisFar);
			}
			else {
				if(!frmData.OptometryPrescriptionRMAxisFar && !frmData.OptometryPrescriptionLMAxisFar && !frmData.OptometryPrescriptionRPAxisFar && !frmData.OptometryPrescriptionLPAxisFar) {
					arr8.push("-");
				}
			}
			//left near minus-plus spherical
			let arr9 = [];
			if (frmData.OptometryPrescriptionLminusSPowerType) {
				arr9.push(frmData.OptometryPrescriptionLminusSPowerType);
			}
			else {
				if(!frmData.OptometryPrescriptionLminusSPowerType && !frmData.OptometryPrescriptionLplusSPowerType) {
					arr9.push("-");
				}
			}
			if (frmData.OptometryPrescriptionLplusSPowerType) {
				arr9.push(frmData.OptometryPrescriptionLplusSPowerType);
			}
			else {
				if(!frmData.OptometryPrescriptionLminusSPowerType && !frmData.OptometryPrescriptionLplusSPowerType) {
					arr9.push("-");
				}
			}
			//left near minus-plus cylindrical
			let arr10 = [];
			if (frmData.OptometryPrescriptionLminusCPowerType && frmData.OptometryPrescriptionLMAxis) {
			   arr10.push(frmData.OptometryPrescriptionLminusCPowerType);
			}
			else {
				if(!frmData.OptometryPrescriptionLminusCPowerType && !frmData.OptometryPrescriptionLplusCPowerType) {
					arr10.push("-");
				}
			}
			if (frmData.OptometryPrescriptionLplusCPowerType && frmData.OptometryPrescriptionLPAxis) {
			   arr10.push(frmData.OptometryPrescriptionLplusCPowerType);
			}
			else {
				if(!frmData.OptometryPrescriptionLminusCPowerType && !frmData.OptometryPrescriptionLplusCPowerType) {
					arr10.push("-");
				}
			}
			//left near minus-plus cylindrical-axis
			let arr11 =[];
			if (frmData.OptometryPrescriptionLminusCPowerType && frmData.OptometryPrescriptionLMAxis) {
				arr11.push(frmData.OptometryPrescriptionLMAxis);
			}
			else {
				if(!frmData.OptometryPrescriptionRMAxis && !frmData.OptometryPrescriptionLMAxis && !frmData.OptometryPrescriptionRPAxis && !frmData.OptometryPrescriptionLPAxis) {
					arr11.push("-");
				}
			}
			if (frmData.OptometryPrescriptionLplusCPowerType && frmData.OptometryPrescriptionLPAxis) {
			    arr11.push(frmData.OptometryPrescriptionLPAxis);
			}
			else {
				if(!frmData.OptometryPrescriptionRMAxis && !frmData.OptometryPrescriptionLMAxis && !frmData.OptometryPrescriptionRPAxis && !frmData.OptometryPrescriptionLPAxis) {
					arr11.push("-");
				}
			}

			let arr12 = [];
			if (frmData.Addition) {
               arr12.push(frmData.Addition);
			}
			else {
				if (!frmData.Addition) {
					arr12.push("N/A");
				 }
			}

            //abnormal vision
            //far///////////
            let arr13 = [];
            if (frmData.OptometryAbnormalLType && !frmData.OptometryAbnormalRType) {
                arr13.push("<b>" + "Far: " + "</b>" + frmData.OptometryAbnormalLType + " vision in left eye. ");
            }
            if (frmData.OptometryAbnormalRType && !frmData.OptometryAbnormalLType) {
                arr13.push("<b>" + "Far: " + "</b>" + frmData.OptometryAbnormalRType + " vision in right eye. ");
            }
            if (frmData.OptometryAbnormalRType && frmData.OptometryAbnormalLType) {
                arr13.push("<b>" + "Far: " + "</b>" + frmData.OptometryAbnormalRType + " vision in right eye- " + frmData.OptometryAbnormalLType + " vision in left eye." + "<br>");
            }
            if (frmData.OptometryAbnormalLTypeN && !frmData.OptometryAbnormalRTypeN) {
                arr13.push("<b>" + "Near: " + "</b>" + frmData.OptometryAbnormalLTypeN + " vision in left eye. ");
            }
            if (frmData.OptometryAbnormalRTypeN && !frmData.OptometryAbnormalLTypeN) {
                arr13.push("<b>" + "Near: " + "</b>" + frmData.OptometryAbnormalRTypeN + " vision in right eye. ");
            }
            if (frmData.OptometryAbnormalRTypeN && frmData.OptometryAbnormalLTypeN) {
                arr13.push("<b>" + "Near: " + "</b>" + frmData.OptometryAbnormalRTypeN + " vision in right eye- " + frmData.OptometryAbnormalLTypeN + " vision in left eye.");
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
			report += "<pre>" + "<b>" + "<header>" + '<table>' + "<tr>" + "<td colspan='9'>" + "Visual Acuity" + "</td>" + "</tr>" + "<tr>" + "<td colspan='5'>" 
			  + "Distance(Far)" + "</td>" + "<td colspan='4'>" + "Reading(Near)" + "</td>" + "</tr>" + "<tr>" + "<td>" + "EYE" + "</td>" + "<td>" + "SPH" 
			  + "</td>" + "<td>" + "CYL" + "</td>" + "<td>" + "AXIS" + "</td>" + "<td>" + "VISION" + "</td>" + "<td>" + "SPH" + "</td>" + "<td>" + "CYL" + "</td>" 
			  + "<td>" + "AXIS" + "</td>"+ "<td>" + "VISION" + "</td>"+ "</tr>" + "<tr>" + "<td>" + "R/E" + "</td>" + "<td>" + arr + "</td>" + "<td>" + arr1 + "</td>" 
			  + "<td>" + arr2 + "</td>" + "<td>" + "6/6" + "</td>" + "<td>" + arr3 + "</td>" + "<td>" + arr4 + "</td>" + "<td>" + arr5 + "</td>" + "<td>" + "N/6" + "</td>" 
			   + "</tr>" + "<tr>" + "<td>" + "L/E" + "</td>" + "<td>" + arr6 + "</td>" + "<td>" + arr7 + "</td>" + "<td>" + arr8 + "</td>" + "<td>" + "6/6" + "</td>" 
			  + "<td>" + arr9 + "</td>" + "<td>" + arr10 + "</td>" + "<td>" + arr11 + "</td>" + "<td>" + "N/6" + "</td>" + "</tr>"  + "</table>" + "</header>" + "</b>" + "</pre>"
			  + "<p>" + "<b>" + "Addition: " + arr12 + "DS." + "</b>" + "</p>";
		
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
						name="Optometry2"
					/>
				}
			</div>
		);
	}
}


export default Optometry2;
