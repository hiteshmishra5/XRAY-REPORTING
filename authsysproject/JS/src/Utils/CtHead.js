import React, { Component } from "react";
import "../style.css";
import PopUp from "../PopUps/PopUpCtHead";

import text from "../Forms/text_hrct_chest.json";
import { data } from "jquery";

var current_user = JSON.parse(document.getElementById("current-user").textContent);
class CtHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frmData: {
        cerebralParenchyma: true,
        extraAxialCollection: true,
        extraduralCollection: true,
        subduralCollection: true,
        subarachnoidhemorrhage: true,
        hematoma: false,
        hematomaR: false,
        hematomaL: false,
        Atrophy: false,

        Infarct: false, 
        TypeofInfarct: false,
        Location: false,
        InfractRight: false,
        InfractLeft: false,
        MassEffectInfract: false,
        EffacedSulciInfract: false,
        EffacedLateralVentriclesInfract: false,
        UncalHerniationInfract: false,
        InfractMidlineShift: false,
        //MidliniftTextInfract: false,

        HemorrhagicTransFormation: false,
        Hemorrhage: false,
        IntraAxial: false,
        IntraRight: false,
        RightIntraLocation: false,
        RightIntraFrontal: false,
        RightIntraTemporal: false,
        RightIntraParietal: false,
        RightIntraOccipital: false,
        RightIntraBasalGanglia: false,
        RightIntraThalamus: false,
        RightIntraCerebellum: false,
        RightIntraMedulla: false,
        RightIntraMidBrain: false,
        RightIntraPons: false,
        Chronicity: false,
        // ChronicityType: false,
        Size: false,
        //SizeCCText: false,
        //SizeAPText: false,
        //SizeTRText: false,
        Perilesional: false,
        //PerilesionalType: false,
        MassEffect: false,
        EffacedSulci: false,
        EffacedLateralVentricles: false,
        UncalHerniation: false,
        MidlineShift: false,
        //MidlineShiftText: false,
        //Towards: false,
        Intraventricular: false,
        //IntraventricularType: false,
        Yes: false,
        LateralVentricle: false,
        ThirdVentricle: false,
        FourthVentricle: false,

        // Intra Left
        IntraLeft: false,
        LeftIntraLocation: false,

        LeftIntraFrontal: false,
        LeftIntraTemporal: false,
        LeftIntraParietal: false,
        LeftIntraOccipital: false,
        LeftIntraBasalGanglia: false,
        LeftIntraThalamus: false,
        LeftIntraCerebellum: false,
        LeftIntraMedulla: false,
        LeftIntraMidBrain: false,
        LeftIntraPons: false,
        Chronicity1: false,

        //ChronicityType1: false,
        Size1: false,

        //SizeCCText1: false,
        //SizeAPText1: false,
        //SizeTRText1: false,
        Perilesional1: false,
        //PerilesionalType1: false,
        MassEffect1: false,
        EffacedSulci1: false,
        EffacedLateralVentricles1: false,
        UncalHerniation1: false,

        MidlineShift1: false,
        //MidlineShiftText1: false,

        //Towards1: false,
        Intraventricular1: false,
        //IntraventricularType1: false,
        Yes1: false,
        LateralVentricle1: false,
        ThirdVentricle1: false,
        FourthVentricle1: false,
        //ExtraAxial
        ExtraAxial: false,
        SDH: false,
        RightSDH: false,

        RightLocation: false,
        RightLocationFrontal: false,
        RightLocationTemporal: false,
        RightLocaitonParietal: false,
        RightLocationOccipital: false,

        RightLocationFalx: false,
        RightLocaitonTantorium: false,
        RightLocaitonChronicity: false,

        //RightLocaitonChronicityType: false,

        RightMaximumThickness: false,
        //RightMaximumText: false,
        RightMassEffect: false,
        RightMassEffectEffecedSulci: false,
        RightMassEffectLateralVentricle: false,
        RightMassEffectUncal: false,
        RightMassMidlineShift: false,
        //RightMassMidLineShiftText: false,
        //RightMassMidLineTowards: false,

        // Left***************************
        LeftSDH: false,

        LeftLocation: false,
        LeftLocationFrontal: false,
        LeftLocationTemporal: false,
        LeftLocaitonParietal: false,
        LeftLocationOccipital: false,

        LeftLocationFalx: false,
        LeftLocaitonTantorium: false,
        LeftLocaitonChronicity: false,

        //LeftLocaitonChronicityType: false,

        LeftMaximumThickness: false,
        //LeftMaximumText: false,
        LeftMassEffect: false,
        LeftMassEffectEffecedSulci: false,
        LeftMassEffectLateralVentricle: false,
        LeftMassEffectUncal: false,
        LeftMassMidlineShift: false,
        //LeftSDHMidLineShiftText: false,
        //LeftMassMidLineTowards: false,

        EDH: false,
        RightEDH: false,

        EDHRightLocation: false,
        EDHRightLocationFrontal: false,
        EDHRightLocationTemporal: false,
        EDHRightLocaitonParietal: false,
        EDHRightLocationOccipital: false,

        EDHRightLocationFalx: false,
        EDHRightLocaitonTantorium: false,
        EDHRightLocaitonChronicity: false,

        //EDHRightLocaitonChronicityType: false,

        EDHRightMaximumThickness: false,
        //EDHRightMaximumText: false,
        EDHRightMassEffect: false,
        EDHRightMassEffectEffecedSulci: false,
        EDHRightMassEffectLateralVentricle: false,
        EDHRightMassEffectUncal: false,
        EDHRightMassMidlineShift: false,
        //EDHRightMassMidLineShiftText: false,
        //EDHRightMassMidLineTowards: false,

        // Left***************************
        LeftEDH: false,

        EDHLeftLocation: false,
        EDHLeftLocationFrontal: false,
        EDHLeftLocationTemporal: false,
        EDHLeftLocaitonParietal: false,
        EDHLeftLocationOccipital: false,

        EDHLeftLocationFalx: false,
        EDHLeftLocaitonTantorium: false,
        EDHLeftLocaitonChronicity: false,

        //EDHLeftLocaitonChronicityType: false,

        EDHLeftMaximumThickness: false,
        //EDHLeftMaximumText: false,
        EDHLeftMassEffect: false,
        EDHLeftMassEffectEffecedSulci: false,
        EDHLeftMassEffectLateralVentricle: false,
        EDHLeftMassEffectUncal: false,
        EDHLeftMassMidlineShift: false,
        //EDHLeftMassMidLineShiftText: false,
        //EDHLeftMassMidLineTowards: false,

        SAH: false,
        //SAHType: false,
        SAHRight: false,
        SAHRightFrontal: false,
        SAHRightParietal: false,
        SAHRightOccipital: false,
        SAHRightTemporal: false,
        SAHRightFalx: false,
        SAHRightBasalCisterns: false,
        SAHRightSylvianFissures: false,
        SAHRightSuprasellerCistern: false,

        SAHLeft: false,
        SAHLeftFrontal: false,
        SAHLeftParietal: false,
        SAHLeftOccipital: false,
        SAHLeftTemporal: false,
        SAHLefttFalx: false,
        SAHLeftBasalCisterns: false,
        SAHLeftSylvianFissures: false,
        SAHLeftSuprasellerCistern: false,

        IVH: false,

        LateralVentriclesLeft: false,

        LateralVentriclesRight: false,

        ThirdVentricles: false,
        FourthVentricles: false,
        ObstructiveHydrocephalus: false,

        //ObstructiveHydrocephalusType: false,
        //EvansIndex: false,



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

    if (frmData.NameTextFR3 && frmData.IDTextFR3 && frmData.AgeTextFR3 && frmData.GenderTextFR3)
    {
      report += "<pre>" + "<b>" +"<header>" + "<table>" + "<tr>" + "<td>" + "Name: " + frmData.NameTextFR3 + "</td>" + "<td>" + "Patient ID: " + frmData.IDTextFR3 + "</td>" + "<td>" + "Age: " + frmData.AgeTextFR3 + "</td>" + "</tr>"  + "<tr>" + "<td>" + "Gender: " + frmData.GenderTextFR3 + "</td>" + "<td>" + "Test date: " + frmData.TestDateTextFR3 + "</td>" + "<td>" + "Report date: " + frmData.ReportDateTextFR3 + "</td>" + "</tr>" + "</table>" + "</b>" + "</pre>" + "</header>";
    }
  
    if (
      frmData.cerebralParenchyma ||
      frmData.bonyStructures ||
      frmData.MucosalThickening
    ) {
      report +=
        "<h5>" +
        "<strong>" +
        "<u>" +
        "LOW DOSE CT REPORT - BRAIN (PLAIN)" +
        "</u>" +
        "</strong>" +
        "</h5>" +
        "<strong>" +
        "<u>" +
        "Observation:" +
        "</u>" +
        "</strong>";
    }

    if (frmData.allNormal) {
      report +=
        "<p>" +
                "No evidence of contusion, edema or intracranial hemorrhage is visualized.<br><br>No evidence of fracture.<br><br>The gray white differentiation is maintained.<br><br>The cerebellum, brainstem and basal cisterns appear normal.<br><br>Cerebello pontine angles and internal auditory meatus appear normal.<br><br>Ventricular system and sulci are normal for the age.<br><br>The sella and parasellar regions are normal.<br><br>The basal ganglia, thalami and capsular tracts appear normal.<br><br>The bones of skull and pericranial soft tissue appear normal.<br><br>Visualized paranasal sinuses appear normal." +
        "<b>" +
        "</p>";
        impression.push("<P>" + "<b>" + "• No evidence of intracranial hemorrhage or bony injury.<br><br>• No significant abnormality is visualized in the Brain." + "</b>" + "</p>");
    }

    if (frmData.Atrophy) {
      if (frmData.Atrophytype === "Age Related Cerebral Atrophy") {
        report += "<p>" + "<b>" + "• Ventricular system, sulci and basal cisterns appear prominent." + "</b>" + "<br><br>• No evidence of contusion, edema or intracranial hemorrhage is visualized.<br><br>•	No evidence of fracture.<br><br>•	The gray white differentiation is maintained.<br><br>•	The cerebellum and brainstem appear normal.<br><br>•	Cerebello pontine angles and internal auditory meatus appear normal.<br><br>•	The sella and parasellar regions are normal.<br><br>•	The basal ganglia, thalami and capsular tracts appear normal.<br><br>•	The bones of skull and pericranial soft tissue appear normal.<br><br>•	Visualized paranasal sinuses appear normal." +
          "<b>";
          impression.push("<b>" + "Age related cerebral atrophy. " + "</b>");
      }
      if (frmData.Atrophytype === "Age Advanced Cerebral Atrophy") {
        report +=
          "<p>" + "<b>" + "• Ventricular system, sulci and basal cisterns appear prominent." + "</b>" +
          "<br><br>•	No evidence of contusion, edema or intracranial hemorrhage is visualized.<br><br>•	No evidence of fracture.<br><br>•	The gray white differentiation is maintained.<br><br>•	The cerebellum and brainstem appear normal.<br><br>•	Cerebello pontine angles and internal auditory meatus appear normal.<br><br>•	The sella and parasellar regions are normal.<br><br>•	The basal ganglia, thalami and capsular tracts appear normal.<br><br>•	The bones of skull and pericranial soft tissue appear normal.<br><br>•	Visualized paranasal sinuses appear normal" +
          "<b>";
          impression.push("<b>" + "Age advanced cerebral atrophy. " + "</b>");
      }
    }
    //Hemorrhage***************************
    if (frmData.Hemorrhage) {
      if (frmData.IntraRight) {
        if (frmData.Chronicity && frmData.ChronType && frmData.RadioType==="Multiple") {
          report += "<br>" + "<br>" + "<b>"+ "Multiple " + frmData.ChronType + " intraparenchymal hemorrhage " +
            "</b>";
          impression.push("<b>" + frmData.ChronType + "Multiple intraparenchymal hemorrhage " + "</b>"
          );
        }
        else {
          report += "<br>" + "<br>" + "<b>" + frmData.ChronType + " intraparenchymal hemorrhage " +
          "</b>";
          impression.push("<b>" + frmData.ChronType + "intraparenchymal hemorrhage " + "</b>"
          );
        }
        //*****combination for lobes */
        if (frmData.RightIntraLocation && frmData.Chronicity && frmData.ChronType) {
          if ((frmData.RightIntraFrontal && frmData.RightIntraTemporal) || (frmData.RightIntraFrontal && frmData.RightIntraParietal) || (frmData.RightIntraFrontal && frmData.RightIntraOccipital) || (frmData.RightIntraTemporal && frmData.RightIntraParietal) || (frmData.RightIntraTemporal && frmData.RightIntraOccipital) || (frmData.RightIntraParietal && frmData.RightIntraOccipital) || (frmData.RightIntraFrontal && frmData.RightIntraTemporal && frmData.RightIntraParietal) || (frmData.RightIntraFrontal && frmData.RightIntraTemporal && frmData.RightIntraOccipital) || (frmData.RightIntraFrontal && frmData.RightIntraParietal && frmData.RightIntraOccipital) || (frmData.RightIntraTemporal && frmData.RightIntraParietal && frmData.RightIntraOccipital) || (frmData.RightIntraFrontal && frmData.RightIntraTemporal && frmData.RightIntraParietal && frmData.RightIntraOccipital)) {
            let arr = [];
            if (frmData.RightIntraFrontal) {
              arr.push("frontal");
            }
            if (frmData.RightIntraTemporal) {
              arr.push("temporal");
            }
            if (frmData.RightIntraParietal) {
              arr.push("parietal");
            }
            if (frmData.RightIntraOccipital) {
              arr.push("occipital");
            }
          
          report +="<b>" + "seen in right " + arr.join("-") + " lobes " +
            "</b>";
          impression.push("<b>" + "in right " + arr.join("-") + " lobes " + "</b>"
          );
          }
        }
        if (frmData.RightIntraLocation && frmData.Chronicity && frmData.ChronType) {
          if (frmData.RightIntraFrontal && !frmData.RightIntraParietal && !frmData.RightIntraOccipital && !frmData.RightIntraTemporal) {
          
            report +="<b>" + "seen in right frontal lobe " + "</b>";
            impression.push("<b>" + "in right frontal lobe " + "</b>");
          }
          if (frmData.RightIntraTemporal && !frmData.RightIntraParietal && !frmData.RightIntraOccipital && !frmData.RightIntraFrontal) {
          
            report +="<b>" + "seen in right temporal lobe " + "</b>";
            impression.push("<b>" + "in right temporal lobe " + "</b>");
          }
          if (frmData.RightIntraParietal && !frmData.RightIntraFrontal && !frmData.RightIntraOccipital && !frmData.RightIntraTemporal) {
          
            report +="<b>" + "seen in right parietal lobe " + "</b>";
            impression.push("<b>" + "in right parietal lobe " + "</b>");
          }
          if (frmData.RightIntraOccipital && !frmData.RightIntraFrontal && !frmData.RightIntraParietal && !frmData.RightIntraTemporal) {
          
            report +="<b>" + "seen in right occipital lobe " + "</b>";
            impression.push("<b>" + "in right parietal lobe " + "</b>");
          }
        }
        
        if (frmData.RightIntraLocation && frmData.Chronicity && frmData.ChronType && (frmData.RightIntraBasalGanglia || frmData.RightIntraThalamus || frmData.RightIntraCerebellum || frmData.RightIntraMedulla || frmData.RightIntraMidBrain || frmData.RightIntraPons)) {
          let arr = [];
          if (frmData.RightIntraBasalGanglia) {
            arr.push("basal ganglia");
          }
          if (frmData.RightIntraThalamus) {
            arr.push("thalamus");
          }
          if (frmData.RightIntraCerebellum) {
            arr.push("cerebellum");
          }
          if (frmData.RightIntraMedulla) {
            arr.push("medulla");
          }
          if (frmData.RightIntraMidBrain) {
            arr.push("midbrain");
          }
          if (frmData.RightIntraPons) {
            arr.push("pons");
          }
          report +="<b>" + " and " + arr.join("-") + " region " +
            "</b>";
          impression.push("<b>" + " and " + arr.join("-") + " region " + "</b>"
          );
        }
        if (frmData.RightIntraLocation && !frmData.Chronicity) {
          if ((frmData.RightIntraFrontal && frmData.RightIntraTemporal) || (frmData.RightIntraFrontal && frmData.RightIntraParietal) || (frmData.RightIntraFrontal && frmData.RightIntraOccipital) || (frmData.RightIntraTemporal && frmData.RightIntraParietal) || (frmData.RightIntraTemporal && frmData.RightIntraOccipital) || (frmData.RightIntraParietal && frmData.RightIntraOccipital) || (frmData.RightIntraFrontal && frmData.RightIntraTemporal && frmData.RightIntraParietal) || (frmData.RightIntraFrontal && frmData.RightIntraTemporal && frmData.RightIntraOccipital) || (frmData.RightIntraFrontal && frmData.RightIntraParietal && frmData.RightIntraOccipital) || (frmData.RightIntraTemporal && frmData.RightIntraParietal && frmData.RightIntraOccipital) || (frmData.RightIntraFrontal && frmData.RightIntraTemporal && frmData.RightIntraParietal && frmData.RightIntraOccipital)) {
            let arr = [];
            if (frmData.RightIntraFrontal) {
              arr.push("frontal");
            }
            if (frmData.RightIntraTemporal) {
              arr.push("temporal");
            }
            if (frmData.RightIntraParietal) {
              arr.push("parietal");
            }
            if (frmData.RightIntraOccipital) {
              arr.push("occipital");
            }
          
            report += "<br>" + "<br>" + "<b>" + "Intraparenchymal hemorrhage seen in right " + arr.join("-") + " lobes " +
            "</b>";
            impression.push("<b>" + "Intraparenchymal hemorrhage in right " + arr.join("-") + " lobes " + "</b>");
          }
        }
        if (frmData.RightIntraLocation && !frmData.Chronicity) {
          if (frmData.RightIntraFrontal && !frmData.RightIntraParietal && !frmData.RightIntraOccipital && !frmData.RightIntraTemporal) {
          
            report +="<b>" + "seen in right frontal lobe " + "</b>";
            impression.push("<b>" + "in right frontal lobe " + "</b>");
          }
          if (frmData.RightIntraTemporal && !frmData.RightIntraParietal && !frmData.RightIntraOccipital && !frmData.RightIntraFrontal) {
          
            report +="<b>" + "seen in right temporal lobe " + "</b>";
            impression.push("<b>" + "in right temporal lobe " + "</b>");
          }
          if (frmData.RightIntraParietal && !frmData.RightIntraFrontal && !frmData.RightIntraOccipital && !frmData.RightIntraTemporal) {
          
            report +="<b>" + "seen in right parietal lobe " + "</b>";
            impression.push("<b>" + "in right parietal lobe " + "</b>");
          }
          if (frmData.RightIntraOccipital && !frmData.RightIntraFrontal && !frmData.RightIntraParietal && !frmData.RightIntraTemporal) {
          
            report +="<b>" + "seen in right occipital lobe " + "</b>";
            impression.push("<b>" + "in right occipital lobe " + "</b>");
          }
        }
        if (frmData.RightIntraLocation && !frmData.Chronicity && (frmData.RightIntraBasalGanglia || frmData.RightIntraThalamus || frmData.RightIntraCerebellum || frmData.RightIntraMedulla || frmData.RightIntraMidBrain || frmData.RightIntraPons)) {
          let arr = [];
          if (frmData.RightIntraBasalGanglia) {
            arr.push("basal ganglia");
          }
          if (frmData.RightIntraThalamus) {
            arr.push("thalamus");
          }
          if (frmData.RightIntraCerebellum) {
            arr.push("cerebellum");
          }
          if (frmData.RightIntraMedulla) {
            arr.push("medulla");
          }
          if (frmData.RightIntraMidBrain) {
            arr.push("midbrain");
          }
          if (frmData.RightIntraPons) {
            arr.push("pons");
          }
          report += "<b>" + " and " + arr.join("-") + " region " +
            "</b>";
          impression.push("<b>" + " and " + arr.join("-") + " region " + "</b>"
          );
        }
        
        if (frmData.Size) {
          report +="<b>" + "measuring " + frmData.SizeCCText + "x" + frmData.SizeAPText + "x" + frmData.SizeTRText + " mm " +
            "</b>";
        }
        if (frmData.Perilesional) {
          report +="<b>" + "with surrounding " + frmData.PerilesiType + " perilesional edema. " +
            "</b>";
        }
        if (frmData.MassEffect) {
          let arr1 = [];
          if (frmData.EffacedSulci) {
            arr1.push("effaced sulci");
          }
          if (frmData.EffacedLateralVentricles) {
            arr1.push("effaced lateral ventricle");
          }
          if (frmData.UncalHerniation) {
            arr1.push("uncal herniation");
          }
          report +="<br>" + "<br>" + "<b>" + "Mass effect is noted in the form of " + arr1.join(", ") + 
            "</b>";
          impression.push("<b>" + "with mass effect as described. " + "</b>"
          );
        }
        if(frmData.MidlineShift) {
          report +="<b>" + " and midline shaft of " + frmData.MidliniftText + " mm, towards left. " +
            "</b>";
        }
        if (frmData.Intraventricular && frmData.IntraventriType === "Yes") {
          let arr = [];
          if (frmData.LateralVentricle) {
            arr.push("lateral ventricles");
          }
          if (frmData.ThirdVentricle) {
            arr.push("third ventricles");
          }
          if (frmData.FourthVentricle) {
            arr.push("fourth ventricles");
          }
          report +="<br>" + "<br>" + "<b>" + "Intraventricular extension seen in " + arr.join(", ") + ". " + "</b>";
        }
        if ((!frmData.Intraventricular || frmData.IntraventriType === "No") && (frmData.IntraventriType1 === "Yes")) {
          report +="<br>" + "<br>" + "<b>" + "No intraventricular extension seen. " + "</b>";
        }
        if ((!frmData.Intraventricular || frmData.IntraventriType === "No") && (!frmData.Intraventricular1 || frmData.IntraventriType1 === "No")) {
          report +="<br>" + "<br>" + "<b>" + "No intraventricular extension seen. " + "</b>";
        }
      }
      //Intra left
      if (frmData.IntraLeft) {
        if (frmData.Chronicity1 && frmData.ChicityType1 && frmData.RadioType1) {
          report += "<br>" + "<br>" + "<b>"+ "Multiple " + frmData.ChicityType1 + " intraparenchymal hemorrhage " +
            "</b>";
          impression.push(
            "<br>" + "<b>" + frmData.ChicityType1 + "Multiple intraparenchymal hemorrhage " +
            "</b>"
          );
        }
        else {
          report += "<br>" + "<br>" + "<b>" + frmData.ChicityType1 + " intraparenchymal hemorrhage " +
            "</b>";
          impression.push(
            "<br>" + "<b>" + frmData.ChicityType1 + "intraparenchymal hemorrhage " +
            "</b>"
          );
        }
        if (frmData.LeftIntraLocation && frmData.Chronicity1 && frmData.ChicityType1) {
          if ((frmData.LeftIntraFrontal && frmData.LeftIntraTemporal) || (frmData.LeftIntraFrontal && frmData.LeftIntraParietal) || (frmData.LeftIntraFrontal && frmData.LeftIntraOccipital) || (frmData.LeftIntraTemporal && frmData.LeftIntraParietal) || (frmData.LeftIntraTemporal && frmData.LeftIntraOccipital) || (frmData.LeftIntraParietal && frmData.LeftIntraOccipital) || (frmData.LeftIntraFrontal && frmData.LeftIntraTemporal && frmData.LeftIntraParietal) || (frmData.LeftIntraFrontal && frmData.LeftIntraTemporal && frmData.LeftIntraOccipital) || (frmData.LeftIntraFrontal && frmData.LeftIntraParietal && frmData.LeftIntraOccipital) || (frmData.LeftIntraTemporal && frmData.LeftIntraParietal && frmData.LeftIntraOccipital) || (frmData.LeftIntraFrontal && frmData.LeftIntraTemporal && frmData.LeftIntraParietal && frmData.LeftIntraOccipital)) {
            let arr = [];
            if (frmData.LeftIntraFrontal) {
              arr.push("frontal");
            }
            if (frmData.LeftIntraTemporal) {
              arr.push("temporal");
            }
            if (frmData.LeftIntraParietal) {
              arr.push("parietal");
            }
            if (frmData.LeftIntraOccipital) {
              arr.push("occipital");
            }
          
            report +="<b>" + "seen in left " + arr.join("-") + " lobes " +
            "</b>";
            impression.push("<b>" + "in left " + arr.join("-") + " lobes " + "</b>");
          }
        }
        if (frmData.LeftIntraLocation && frmData.Chronicity1 && frmData.ChicityType1) {
          if (frmData.LeftIntraFrontal && !frmData.LeftIntraParietal && !frmData.LeftIntraOccipital && !frmData.LeftIntraTemporal) {
          
            report +="<b>" + "seen in right frontal lobe " + "</b>";
            impression.push("<b>" + "in right frontal lobe " + "</b>");
          }
          if (frmData.LeftIntraTemporal && !frmData.LeftIntraParietal && !frmData.LeftIntraOccipital && !frmData.LeftIntraFrontal) {
          
            report +="<b>" + "seen in right temporal lobe " + "</b>";
            impression.push("<b>" + "in right temporal lobe " + "</b>");
          }
          if (frmData.LeftIntraParietal && !frmData.LeftIntraFrontal && !frmData.LeftIntraOccipital && !frmData.LeftIntraTemporal) {
          
            report +="<b>" + "seen in right parietal lobe " + "</b>";
            impression.push("<b>" + "in right parietal lobe " + "</b>");
          }
          if (frmData.LeftIntraOccipital && !frmData.LeftIntraFrontal && !frmData.LeftIntraParietal && !frmData.LeftIntraTemporal) {
          
            report +="<b>" + "seen in right occipital lobe " + "</b>";
            impression.push("<b>" + "in right occipital lobe " + "</b>");
          }
        }
        if (frmData.LeftIntraLocation && frmData.Chronicity1 && frmData.ChicityType1 && (frmData.LeftIntraBasalGanglia || frmData.LeftIntraThalamus || frmData.LeftIntraCerebellum || frmData.LeftIntraMedulla || frmData.LeftIntraMidBrain || frmData.LeftIntraPons)) {
          let arr = [];
          if (frmData.LeftIntraBasalGanglia) {
            arr.push("basal ganglia");
          }
          if (frmData.LeftIntraThalamus) {
            arr.push("thalamus");
          }
          if (frmData.LeftIntraCerebellum) {
            arr.push("cerebellum");
          }
          if (frmData.LeftIntraMedulla) {
            arr.push("medulla");
          }
          if (frmData.LeftIntraMidBrain) {
            arr.push("midbrain");
          }
          if (frmData.LeftIntraPons) {
            arr.push("pons");
          }
          report += "<b>" + " and " + arr.join("-") + " region " +
            "</b>";
          impression.push("<b>" + " and " + arr.join("-") + " region " + "</b>"
          );
        }
        if (frmData.LeftIntraLocation && !frmData.Chronicity1) {
          if ((frmData.LeftIntraFrontal && frmData.LeftIntraTemporal) || (frmData.LeftIntraFrontal && frmData.LeftIntraParietal) || (frmData.LeftIntraFrontal && frmData.LeftIntraOccipital) || (frmData.LeftIntraTemporal && frmData.LeftIntraParietal) || (frmData.LeftIntraTemporal && frmData.LeftIntraOccipital) || (frmData.LeftIntraParietal && frmData.LeftIntraOccipital) || (frmData.LeftIntraFrontal && frmData.LeftIntraTemporal && frmData.LeftIntraParietal) || (frmData.LeftIntraFrontal && frmData.LeftIntraTemporal && frmData.LeftIntraOccipital) || (frmData.LeftIntraFrontal && frmData.LeftIntraParietal && frmData.LeftIntraOccipital) || (frmData.LeftIntraTemporal && frmData.LeftIntraParietal && frmData.LeftIntraOccipital) || (frmData.LeftIntraFrontal && frmData.LeftIntraTemporal && frmData.LeftIntraParietal && frmData.LeftIntraOccipital)) {
            let arr = [];
            if (frmData.LeftIntraFrontal) {
              arr.push("frontal");
            }
            if (frmData.LeftIntraTemporal) {
              arr.push("temporal");
            }
            if (frmData.LeftIntraParietal) {
              arr.push("parietal");
            }
            if (frmData.LeftIntraOccipital) {
              arr.push("occipital");
            }
          
            report += "<br>" + "<br>" + "<b>" + "Intraparenchymal hemorrhage seen in left " + arr.join("-") + " lobes " +
            "</b>";
            impression.push("<b>" + "Intraparenchymal hemorrhage in left " + arr.join("-") + " lobes " + "</b>");
          }
        }
        if (frmData.LeftIntraLocation && !frmData.Chronicity1) {
          if (frmData.LeftIntraFrontal && !frmData.LeftIntraParietal && !frmData.LeftIntraOccipital && !frmData.LeftIntraTemporal) {
          
            report +="<b>" + "seen in right frontal lobe " + "</b>";
            impression.push("<b>" + "in right frontal lobe " + "</b>");
          }
          if (frmData.LeftIntraTemporal && !frmData.LeftIntraParietal && !frmData.LeftIntraOccipital && !frmData.LeftIntraFrontal) {
          
            report +="<b>" + "seen in right temporal lobe " + "</b>";
            impression.push("<b>" + "in right temporal lobe " + "</b>");
          }
          if (frmData.LeftIntraParietal && !frmData.LeftIntraFrontal && !frmData.LeftIntraOccipital && !frmData.LeftIntraTemporal) {
          
            report +="<b>" + "seen in right parietal lobe " + "</b>";
            impression.push("<b>" + "in right parietal lobe " + "</b>");
          }
          if (frmData.LeftIntraOccipital && !frmData.LeftIntraFrontal && !frmData.LeftIntraParietal && !frmData.LeftIntraTemporal) {
          
            report +="<b>" + "seen in right occipital lobe " + "</b>";
            impression.push("<b>" + "in right occipital lobe " + "</b>");
          }
        }
        if (frmData.LeftIntraLocation && !frmData.Chronicity1 && (frmData.LeftIntraBasalGanglia || frmData.LeftIntraThalamus || frmData.LeftIntraCerebellum || frmData.LeftIntraMedulla || frmData.LeftIntraMidBrain || frmData.LeftIntraPons)) {
          let arr = [];
          if (frmData.LeftIntraBasalGanglia) {
            arr.push("basal ganglia");
          }
          if (frmData.LeftIntraThalamus) {
            arr.push("thalamus");
          }
          if (frmData.LeftIntraCerebellum) {
            arr.push("cerebellum");
          }
          if (frmData.LeftIntraMedulla) {
            arr.push("medulla");
          }
          if (frmData.LeftIntraMidBrain) {
            arr.push("midbrain");
          }
          if (frmData.LeftIntraPons) {
            arr.push("pons");
          }
          report += "<b>" + " and " + arr.join("-") + " region. " +
            "</b>";
          impression.push("<b>" + " and " + arr.join("-") + " region. " + "</b>"
          );
        }
        if (frmData.Size1) {
          report +="<b>" + "measuring " + frmData.SizeCCText1 + "x" + frmData.SizeAPText1 + "x" + frmData.SizeTRText1 + " mm " +
            "</b>";
        }
        if (frmData.Perilesional1) {
          report +="<b>" + "with surrounding " + frmData.Perilesi1Type + " perilesional edema. " +
            "</b>";
        }
        if (frmData.MassEffect1) {
          let arr1 = [];
          if (frmData.EffacedSulci1) {
            arr1.push("effaced sulci");
          }
          if (frmData.EffacedLateralVentricles1) {
            arr1.push("effaced lateral ventricle");
          }
          if (frmData.UncalHerniation1) {
            arr1.push("uncal herniation");
          }
          report +="<br>" + "<br>" + "<b>" + "Mass effect is noted in the form of " + arr1.join(", ") + ". " + 
            "</b>";
          impression.push("<b>" + "with mass effect as described. " + "</b>"
          );
        }
        if(frmData.MidlineShift1) {
          report +="<b>" + " and midline shaft of " + frmData.MidliftText1 + " mm, towards right. " +
            "</b>";
        }
        if (frmData.Intraventricular1 && frmData.IntraventriType1 === "Yes") {
          let arr = [];
          if (frmData.LateralVentricle1) {
            arr.push("lateral ventricles");
          }
          if (frmData.ThirdVentricle1) {
            arr.push("third ventricles");
          }
          if (frmData.FourthVentricle1) {
            arr.push("fourth ventricles");
          }
          report +="<br>" + "<br>" + "<b>" + "Intraventricular extension seen in " + arr.join(", ") + ". " + "</b>";
        }
        
        if ((!frmData.Intraventricular1 || frmData.IntraventriType1 === "No") && (frmData.IntraventriType === "Yes")) {
          report +="<br>" + "<br>" + "<b>" + "No intraventricular extension seen. " + "</b>";
        }
        if ((!frmData.Intraventricular || frmData.IntraventriType === "No") && (!frmData.Intraventricular1 || frmData.IntraventriType1 === "No")) {
          report +="<br>" + "<br>" + "<b>" + "No intraventricular extension seen. " + "</b>";
        }

      }
      if (frmData.LeftIntraLocation || frmData.RightIntraLocation) {
        if (frmData.LeftIntraFrontal && frmData.LeftIntraTemporal && frmData.LeftIntraParietal && frmData.LeftIntraOccipital && frmData.LeftIntraBasalGanglia && frmData.LeftIntraThalamus && frmData.LeftIntraCerebellum && frmData.LeftIntraMedulla && frmData.LeftIntraMidBrain && frmData.LeftIntraPons && frmData.RightIntraFrontal && frmData.RightIntraTemporal && frmData.RightIntraParietal && frmData.RightIntraOccipital && frmData.RightIntraBasalGanglia && frmData.RightIntraThalamus && frmData.RightIntraCerebellum && frmData.RightIntraMedulla && frmData.RightIntraMidBrain && frmData.RightIntraPons) {
        }
        else {
          report +="<p>" + "Rest of the cerebral parenchyma is normal. " + "</p>";
        }
        //Normal Line
        
        if (!frmData.LeftIntraMedulla && !frmData.LeftIntraMidBrain && !frmData.LeftIntraPons && !frmData.RightIntraMedulla && !frmData.RightIntraMidBrain && !frmData.RightIntraPons) {
          report +="<p>" + "The brainstem is normal. " + "</p>";
        }
        if (!frmData.LeftIntraCerebellum && !frmData.RightIntraCerebellum) {
          report +="<p>" + "Cerebellum is normal. " + "</p>"; 
        }
      }
      ////////////Extra Axial///////////////////
      if (frmData.ExtraAxial) {
        if (frmData.SDH) {
          if (frmData.RightSDH) {
            if (frmData.RightLocaitonChronicity) {
              report += "<br>" + "<br>" + "<b>" + frmData.RightSDHChronicityType + " SDH is seen along the right " + "</b>";
              impression.push("<b>" + frmData.RightSDHChronicityType + " SDH in right " + "</b>"
              );
            }
            if (frmData.RightLocation && frmData.RightLocaitonChronicity) {
              let arr = [];
              if (frmData.RightLocationFrontal) {
                arr.push("frontal");
              }
              if (frmData.RightLocationTemporal) {
                arr.push("temporal");
              }
              if (frmData.RightLocaitonParietal) {
                arr.push("parietal");
              }
              if (frmData.RightLocationOccipital) {
                arr.push("occipital");
              }
              report +="<b>" + arr.join(", ") + " convexity " + "</b>";
              impression.push("<b>" + arr.join(", ") + " convexity " + "</b>"
              );
              if (frmData.RightLocation && frmData.RightLocaitonChronicity) {
                let arr = [];
                if (frmData.RightLocationFalx) {
                  arr.push("falx");
                }
                if (frmData.RightLocaitonTantorium) {
                  arr.push("tentorium");
                }
                report +="<b>" +" and the "+ arr.join(", ") + " cerebri " + "</b>";
                impression.push("<b>" + arr.join(", ") + " cerebri " + "</b>");
              }
            }
            if (frmData.RightLocation && !frmData.RightLocaitonChronicity) {
              let arr = [];
              if (frmData.RightLocationFrontal) {
                arr.push("frontal");
              }
              if (frmData.RightLocationTemporal) {
                arr.push("temporal");
              }
              if (frmData.RightLocaitonParietal) {
                arr.push("parietal");
              }
              if (frmData.RightLocationOccipital) {
                arr.push("occipital");
              }
              report += "<br>" + "<br>" + "<b>" + "SDH is seen along the right " + arr.join(", ") + " convexity " + "</b>";
              impression.push("<b>" + " SDH in right " + arr.join(", ") + " convexity " + "</b>"
              );
              if (frmData.RightLocation && !frmData.RightLocaitonChronicity) {
                let arr = [];
                if (frmData.RightLocationFalx) {
                  arr.push("falx");
                }
                if (frmData.RightLocaitonTantorium) {
                  arr.push("tentorium");
                }
                report +="<b>" +" and the "+ arr.join(", ") + " cerebri " + "</b>";
                impression.push("<b>" + arr.join(", ") + " cerebri " + "</b>");
              }
            }
            if (frmData.RightMaximumThickness) {
              report +="<b>" + "with maximum thickness of the hematoma, measuring upto " + frmData.RightMaximumText + " mm. " + "</b>";
            }
            if (frmData.RightMassEffect && frmData.RightMassMidlineShift) {
              let arr = [];
              if (frmData.RightMassEffectEffecedSulci) {
                arr.push("effaced adjacent sulci");
              }
              if (frmData.RightMassEffectLateralVentricle) {
                arr.push("effaced right lateral ventricle");
              }
              if (frmData.RightMassEffectUncal) {
                arr.push("effected uncal");
              }
              report +="<br>" + "<br>" + "<b>" + "Mass effect is noted in the form of " + arr.join(", ") + "</b>";
              impression.push("<b>" + " with mass effect as described. " + "</b>"
              );
            }
            if (frmData.RightMassEffect && !frmData.RightMassMidlineShift) {
              let arr = [];
              if (frmData.RightMassEffectEffecedSulci) {
                arr.push("effaced adjacent sulci");
              }
              if (frmData.RightMassEffectLateralVentricle) {
                arr.push("effaced right lateral ventricle");
              }
              if (frmData.RightMassEffectUncal) {
                arr.push("effected uncal");
              }
              report +="<br>" + "<br>" + "<b>" + "Mass effect is noted in the form of " + arr.join(", ") + "." + "</b>";
  
              impression.push("<b>" + " with mass effect as described. " + "</b>"
              );
            }
            if (frmData.RightMassMidlineShift) {
              report +="<b>" + " and midline shaft of " + frmData.SDHrightMidLineShiftText + " mm towards left." + "</b>";
            }
          }
          ////left SDH
          if (frmData.LeftSDH) {
            if (frmData.LeftLocaitonChronicity) {
              report += "<br>" + "<br>" + "<b>" + frmData.LeftSDHChronicityType + " SDH is seen along the left " + "</b>";
              impression.push("<b>" + frmData.LeftSDHChronicityType + " SDH in left " + "</b>"
              );
            }
            if (frmData.LeftLocation && frmData.LeftLocaitonChronicity) {
              let arr = [];
              if (frmData.LeftLocationFrontal) {
                arr.push("frontal");
              }
              if (frmData.LeftLocationTemporal) {
                arr.push("temporal");
              }
              if (frmData.LeftLocaitonParietal) {
                arr.push("parietal");
              }
              if (frmData.LeftLocationOccipital) {
                arr.push("occipital");
              }
              report +="<b>" + arr.join(", ") + " convexity " + "</b>";
              impression.push("<b>" + arr.join(", ") + " convexity " + "</b>");
              if (frmData.LeftLocation && frmData.LeftLocaitonChronicity) {
                let arr = [];
                if (frmData.LeftLocationFalx) {
                  arr.push("falx");
                }
                if (frmData.LeftLocaitonTantorium) {
                  arr.push("tentorium");
                }
                report +="<b>" +" and the "+ arr.join(", ") + " cerebri " + "</b>";
                impression.push("<b>" + arr.join(", ") + " cerebri " + "</b>");
              }
            }
            if (frmData.LeftLocation && !frmData.LeftLocaitonChronicity) {
              let arr = [];
              if (frmData.LeftLocationFrontal) {
                arr.push("frontal");
              }
              if (frmData.LeftLocationTemporal) {
                arr.push("temporal");
              }
              if (frmData.LeftLocaitonParietal) {
                arr.push("parietal");
              }
              if (frmData.LeftLocationOccipital) {
                arr.push("occipital");
              }
              report += "<br>" + "<br>" + "<b>" + "SDH is seen along the left " + arr.join(", ") + " convexity " + "</b>";
              impression.push("<b>" + " SDH in left " + arr.join(", ") + " convexity " + "</b>"
              );
              if (frmData.LeftLocation && !frmData.LeftLocaitonChronicity) {
                let arr = [];
                if (frmData.LeftLocationFalx) {
                  arr.push("falx");
                }
                if (frmData.LeftLocaitonTantorium) {
                  arr.push("tentorium");
                }
                report +="<b>" +" and the "+ arr.join(", ") + " cerebri " + "</b>";
                impression.push("<b>" + arr.join(", ") + " cerebri " + "</b>");
              }
            }
            if (frmData.LeftMaximumThickness) {
              report +="<b>" + "with maximum thickness of the hematoma, measuring upto " + frmData.LeftMaximumText + " mm. " + "</b>";
            }
            if (frmData.LeftMassEffect) {
              let arr = [];
              if (frmData.LeftMassEffectEffecedSulci) {
                arr.push("effaced adjacent sulci");
              }
              if (frmData.LeftMassEffectLateralVentricle) {
                arr.push("effaced right lateral ventricle");
              }
              if (frmData.LeftMassEffectUncal) {
                arr.push("uncal herination");
              }
              report +="<br>" + "<br>" + "<b>" + "Mass effect is noted in the form of " + arr.join(", ") + "</b>";
              impression.push("<b>" + " with mass effect as described. " + "</b>"
              );
            }
            if (frmData.LeftMassEffect && !frmData.LeftMassMidlineShift) {
              let arr = [];
              if (frmData.LeftMassEffectEffecedSulci) {
                arr.push("effaced adjacent sulci");
              }
              if (frmData.LeftMassEffectLateralVentricle) {
                arr.push("effaced right lateral ventricle");
              }
              if (frmData.LeftMassEffectUncal) {
                arr.push("uncal herination");
              }
              report +="<br>" + "<br>" + "<b>" + "Mass effect is noted in the form of " + arr.join(", ") + " . " +  "</b>";
              impression.push("<b>" + " with mass effect as described. " + "</b>"
              );
            }
            if (frmData.LeftMassMidlineShift && frmData.LeftMassEffect) {
              report +="<b>" + " and midline shaft of " + frmData.LeftSDHMidLineShiftText + " mm towards right." + "</b>";
            }
          }
        }
        //EDH
        if (frmData.EDH) {
          if (frmData.RightEDH) {
            if (frmData.EDHRightLocaitonChronicity) {
              report += "<br>" + "<br>" + "<b>" + frmData.EDHRightLocaitonChronicityType + " EDH is seen along the right " + "</b>";
              impression.push("<b>" + frmData.EDHRightLocaitonChronicityType + " EDH in right " + "</b>"
              );
            }
            if (frmData.EDHRightLocation && frmData.EDHRightLocaitonChronicity) {
              let arr = [];
              if (frmData.EDHRightLocationFrontal) {
                arr.push("frontal");
              }
              if (frmData.EDHRightLocationTemporal) {
                arr.push("temporal");
              }
              if (frmData.EDHRightLocaitonParietal) {
                arr.push("parietal");
              }
              if (frmData.EDHRightLocationOccipital) {
                arr.push("occipital");
              }
              report +="<b>" + arr.join(", ") + " convexity " + "</b>";
              impression.push("<b>" + arr.join(", ") + " convexity " + "</b>"
              );
              if (frmData.EDHRightLocation && frmData.EDHRightLocaitonChronicity) {
                let arr = [];
                if (frmData.EDHRightLocationFalx) {
                  arr.push("falx");
                }
                if (frmData.EDHRightLocaitonTantorium) {
                  arr.push("tentorium");
                }
                report +="<b>" +" and the "+ arr.join(", ") + " cerebri " + "</b>";
                impression.push("<b>" + arr.join(", ") + " cerebri " + "</b>");
              }
            }
            if (frmData.EDHRightLocation && !frmData.EDHRightLocaitonChronicity) {
              let arr = [];
              if (frmData.EDHRightLocationFrontal) {
                arr.push("frontal");
              }
              if (frmData.EDHRightLocationTemporal) {
                arr.push("temporal");
              }
              if (frmData.EDHRightLocaitonParietal) {
                arr.push("parietal");
              }
              if (frmData.EDHRightLocationOccipital) {
                arr.push("occipital");
              }
              report += "<br>" + "<br>" + "<b>" + "EDH is seen along the right " + arr.join(", ") + " convexity " + "</b>";
              impression.push("<b>" + " EDH in left " + arr.join(", ") + " convexity " + "</b>"
              );
              if (frmData.EDHRightLocation && !frmData.EDHRightLocaitonChronicity) {
                let arr = [];
                if (frmData.EDHRightLocationFalx) {
                  arr.push("falx");
                }
                if (frmData.EDHRightLocaitonTantorium) {
                  arr.push("tentorium");
                }
                report +="<b>" +" and the "+ arr.join(", ") + " cerebri " + "</b>";
                impression.push("<b>" + arr.join(", ") + " cerebri " + "</b>");
              }
            }
            if (frmData.EDHRightMaximumThickness) {
              report +="<b>" + " with maximum thickness of the hematoma, measuring " + frmData.EDHRightMaximumText + " mm. " + "</b>";
            }
            if (frmData.EDHRightMassEffect && frmData.EDHRightMassMidlineShift) {
              let arr = [];
              if (frmData.EDHRightMassEffectEffecedSulci) {
                arr.push("effaced adjacent sulci");
              }
              if (frmData.EDHRightMassEffectLateralVentricle) {
                arr.push("effaced right lateral ventricle");
              }
              if (frmData.EDHRightMassEffectUncal) {
                arr.push("uncal herination");
              }
              report +="<br>" + "<br>" + "<b>" + "Mass effect is noted in the form of " + arr.join(", ") + "</b>";
              impression.push("<b>" + " with mass effect as described. " + "</b>"
              );
            }
            if (frmData.EDHRightMassEffect && !frmData.EDHRightMassMidlineShift) {
              let arr = [];
              if (frmData.EDHRightMassEffectEffecedSulci) {
                arr.push("effaced adjacent sulci");
              }
              if (frmData.EDHRightMassEffectLateralVentricle) {
                arr.push("effaced right lateral ventricle");
              }
              if (frmData.EDHRightMassEffectUncal) {
                arr.push("uncal herination");
              }
              report +="<br>" + "<br>" + "<b>" + "Mass effect is noted in the form of " + arr.join(", ") + "." + "</b>";
  
              impression.push("<b>" + " with mass effect as described. " + "</b>"
              );
            }
            if (frmData.EDHRightMassMidlineShift) {
              report +="<b>" + " and midline shaft of " + frmData.EDHRightMassMidLineShiftText + "mm towards left." + "</b>";
            }
          }
          ////left EDH
          if (frmData.LeftEDH) {
            if (frmData.EDHLeftLocaitonChronicity) {
              report += "<br>" + "<br>" + "<b>" + frmData.EDHLeftLocaitonChronicityType + " EDH is seen along the left " + "</b>";
              impression.push("<b>" + frmData.EDHLeftLocaitonChronicityType + " EDH in left " + "</b>"
              );
            }
            if (frmData.EDHLeftLocation && frmData.EDHLeftLocaitonChronicity) {
              let arr = [];
              if (frmData.EDHLeftLocationFrontal) {
                arr.push("frontal");
              }
              if (frmData.EDHLeftLocationTemporal) {
                arr.push("temporal");
              }
              if (frmData.EDHLeftLocaitonParietal) {
                arr.push("parietal");
              }
              if (frmData.EDHLeftLocationOccipital) {
                arr.push("occipital");
              }
              report +="<b>" + arr.join(", ") + " convexity " + "</b>";
              impression.push("<b>" + arr.join(", ") + " convexity " + "</b>"
              );
              if (frmData.EDHLeftLocation && frmData.EDHLeftLocaitonChronicity) {
                let arr = [];
                if (frmData.EDHLeftLocationFalx) {
                  arr.push("falx");
                }
                if (frmData.EDHLeftLocaitonTantorium) {
                  arr.push("tentorium");
                }
                report +="<b>" +" and the "+ arr.join(", ") + " cerebri " + "</b>";
                impression.push("<b>" + arr.join(", ") + " cerebri " + "</b>");
              }
            }
            if (frmData.EDHLeftLocation && !frmData.EDHLeftLocaitonChronicity) {
              let arr = [];
              if (frmData.EDHLeftLocationFrontal) {
                arr.push("frontal");
              }
              if (frmData.EDHLeftLocationTemporal) {
                arr.push("temporal");
              }
              if (frmData.EDHLeftLocaitonParietal) {
                arr.push("parietal");
              }
              if (frmData.EDHLeftLocationOccipital) {
                arr.push("occipital");
              }
              
              report += "<br>" + "<br>" + "<b>" + "EDH is seen along the left " + arr.join(", ") + " convexity " + "</b>";
              impression.push("<b>" + " EDH in left " + arr.join(", ") + " convexity " + "</b>"
              );
              if (frmData.EDHLeftLocation && !frmData.EDHLeftLocaitonChronicity) {
                let arr = [];
                if (frmData.EDHLeftLocationFalx) {
                  arr.push("flax");
                }
                if (frmData.EDHLeftLocaitonTantorium) {
                  arr.push("tantorium");
                }
                report +="<b>" +" and the "+ arr.join(", ") + " cerebri " + "</b>";
                impression.push("<b>" + arr.join(", ") + " cerebri " + "</b>");
              }
            }
            if (frmData.EDHLeftMaximumThickness) {
              report +="<b>" + " with maximum thickness of the hematoma, measuring " + frmData.EDHLeftMaximumText + " mm. " + "</b>";
            }
            if (frmData.EDHLeftMassEffect) {
              let arr = [];
              if (frmData.EDHLeftMassEffectEffecedSulci) {
                arr.push("effaced adjacent sulci");
              }
              if (frmData.EDHLeftMassEffectLateralVentricle) {
                arr.push("effaced right lateral ventricle");
              }
              if (frmData.EDHLeftMassEffectUncal) {
                arr.push("uncal herination");
              }
              report +="<br>" + "<br>" + "<b>" + "Mass effect is noted in the form of " + arr.join(", ") + "</b>";
              impression.push("<b>" + " with mass effect as described. " + "</b>"
              );
            }
            if (frmData.EDHLeftMassEffect && !frmData.EDHLeftMassMidlineShift) {
              let arr = [];
              if (frmData.EDHLeftMassEffectEffecedSulci) {
                arr.push("effaced adjacent sulci");
              }
              if (frmData.EDHLeftMassEffectLateralVentricle) {
                arr.push("effaced right lateral ventricle");
              }
              if (frmData.EDHLeftMassEffectUncal) {
                arr.push("uncal herination");
              }
              report +="<b>" + "Mass effect is noted in the form of " + arr.join(", ") + " . " +  "</b>";
              impression.push("<b>" + " with mass effect as described. " + "</b>");
            }
            if (frmData.EDHLeftMassMidlineShift && frmData.EDHLeftMassEffect) {
              report +="<b>" + " and midline shaft of " + frmData.EDHLeftMassMidLineShiftText + " mm towards right." + "</b>";
            }
          }
        }
        //SAH
        if (frmData.SAH) {
          if (frmData.SAHType) {
            report += "<br>" + "<br>" + "<b>" + frmData.SAHType + "</b>";
          }
          if (frmData.SAHRight && !frmData.SAHLeft) {
            let arr = [];
            if (frmData.SAHRightFrontal) {
              arr.push("frontal");
            }
            if (frmData.SAHRightParietal) {
              arr.push("pariental");
            }
            if (frmData.SAHRightOccipital) {
              arr.push("occipital");
            }
            if (frmData.SAHRightTemporal) {
              arr.push("temporal");
            }
            if (frmData.SAHRightFalx) {
              arr.push("falx");
            }
            if (frmData.SAHRightBasalCisterns) {
              arr.push("Basal cisterns");
            }
            if (frmData.SAHRightSylvianFissures) {
              arr.push("sylvian fissures");
            }
            if (frmData.SAHRightSuprasellerCistern) {
              arr.push("supraseller cistern");
            }
            report +="<b>" + " subarachnoid hemorrhage seen in right " + arr.join(", ") + "." + "</b>";
            impression.push("<b>" + " subarachnoid hemorrhage seen in right " + arr.join(", ") + "." + "</b>");
          }
          if (frmData.SAHLeft && !frmData.SAHRight) {
            let arr = [];
            if (frmData.SAHLeftFrontal) {
              arr.push("frontal");
            }
            if (frmData.SAHLeftParietal) {
              arr.push("pariental");
            }
            if (frmData.SAHLeftOccipital) {
              arr.push("occipital");
            }
            if (frmData.SAHLeftTemporal) {
              arr.push("temporal");
            }
            if (frmData.SAHLefttFalx) {
              arr.push("falx");
            }
            if (frmData.SAHLeftBasalCisterns) {
              arr.push("Basal cisterns");
            }
            if (frmData.SAHLeftSylvianFissures) {
              arr.push("sylvian fissures");
            }
            if (frmData.SAHLeftSuprasellerCistern) {
              arr.push("supraseller cistern");
            }
            report +="<b>" + " subarachnoid hemorrhage seen in right " + arr.join(", ") + "." + "</b>";
            impression.push("<b>" + " subarachnoid hemorrhage seen in right " + arr.join(", ") + "." + "</b>");
          }
          if (frmData.SAHRight && frmData.SAHLeft) {
            let arr = [];
            if (frmData.SAHRightFrontal) {
              arr.push("frontal");
            }
            if (frmData.SAHRightParietal) {
              arr.push("pariental");
            }
            if (frmData.SAHRightOccipital) {
              arr.push("occipital");
            }
            if (frmData.SAHRightTemporal) {
              arr.push("temporal");
            }
            if (frmData.SAHRightBasalCisterns) {
              arr.push("Basal cisterns");
            }
            if (frmData.SAHRightSylvianFissures) {
              arr.push("sylvian fissures");
            }
            if (frmData.SAHRightSuprasellerCistern) {
              arr.push("supraseller cistern");
            }
            let arr1 = [];
            if (frmData.SAHLeftFrontal) {
              arr1.push("frontal");
            }
            if (frmData.SAHLeftParietal) {
              arr1.push("pariental");
            }
            if (frmData.SAHLeftOccipital) {
              arr1.push("occipital");
            }
            if (frmData.SAHLeftTemporal) {
              arr1.push("temporal");
            }
            if (frmData.SAHLeftBasalCisterns) {
              arr1.push("Basal cisterns");
            }
            if (frmData.SAHLeftSylvianFissures) {
              arr1.push("sylvian fissures");
            }
            if (frmData.SAHLeftSuprasellerCistern) {
              arr1.push("supraseller cistern");
            }
            report +="<b>" + " subarachnoid hemorrhage seen in right " + arr.join(", ") + " and left " + arr1.join(", ") + "." + "</b>";
            impression.push("<b>" + " subarachnoid hemorrhage seen in right " + arr.join(", ") + " and left " + arr1.join(", ") + "." + "</b>");
          }
        }
        if (frmData.IVH) {
          let arr1 = [];
          if (frmData.LateralVentriclesLeft) {
            arr1.push("left lateral ventricle");
          }
          if (frmData.LateralVentriclesRight) {
            arr1.push("right lateral ventricle");
          }
          if (frmData.ThirdVentricles) {
            arr1.push("third ventricle");
          }
          if (frmData.FourthVentricles) {
            arr1.push("fourth ventricle");
          }
          report +="<br>" + "<br>" + "<b>" + "IVH seen in " + arr1.join(", ") + "." + "</b>";
          impression.push("<b>" + "IVH seen in " + arr1.join(", ") + "." + "</b>");
          if (frmData.ObstructiveHydrocephalus) {
            report +="<br>" + "<br>" + "<b>" + " Obstructive hydrocephalus seen. " + "</b>";
            impression.push("<b>" + " Obstructive hydrocephalus seen. " + "</b>");
          }  
          else {
            report +="<br>" + "<br>" + "<b>" + " No obstructive hydrocephalus seen. " + "</b>";
            impression.push("<b>" + " No obstructive hydrocephalus seen. " + "</b>");
          }
        }
        
        if (frmData.EvansIndex) {
          report +="<br>" + "<br>" + "<b>" + " Evans index is " + frmData.EvansIndex + "." + "</b>";
        }
        report +="<br>" + "<br>" + "Cerebral parenchyma appears normal." + "<br>" + "<br>" + "Basal ganglia and thalamus are normal." + "<br>" + "<br>" + "Cerebellum is normal." + "<br>" + "<br>" + "Brainstem is normal.";
      }
      report +="<p>" + "The bones under view are normal. " + "</p>";
    }

    if (frmData.ChronicIschemic) {
      report +=
        "<p>" +
        "<b>" +
        "• Ill-defined hypodensities seen in bilateral fronto-parietal white matter." +
        "</b>" +
        "</b>" +
        "<br><br>•	No evidence of contusion, edema or intracranial hemorrhage is visualized.<br><br>•	No evidence of fracture.<br><br>•	The cerebellum and brainstem appear normal.<br><br>•	Cerebello pontine angles and internal auditory meatus appear normal.<br><br>•	The sella and parasellar regions are normal.<br><br>•	The basal ganglia, thalami and capsular tracts appear normal.<br><br>•	The bones of skull and pericranial soft tissue appear normal.<br><br>•	Visualized paranasal sinuses appear normal" +
        "<b>";
        impression.push("<b>" + " Chronic small vessel ischemic changes seen in bilateral fronto-parietal white matter. " + "</b>");
    }
    //Infarct
    if (frmData.Infarct) {
      if (frmData.Location) {
        if (frmData.InfractRight) {
          let arr = []
          if (frmData.Frontal) {
            arr.push("frontal")
          }
          if (frmData.Parietal) {
            arr.push("parietal")
          }
          if (frmData.Temporal) {
            arr.push("temporal")
          }
          if (frmData.Occipital) {
            arr.push("occipital")
          }
          if (frmData.BasalGanglia) {
            arr.push("basal ganglia")
          }
          if (frmData.Thalamus) {
            arr.push("thalamus")
          }
          if (frmData.CoronaRadiate) {
            arr.push("corona radiate")
          }
          if (frmData.CentrumSemiovale) {
            arr.push('centrum semiovale')
          }
          if (frmData.Cerebellum) {
            arr.push('cerebellum')
          }
          if (frmData.Pons) {
            arr.push('pons')
          }
          if (frmData.Medulla) {
            arr.push('medulla')
          }
          if (frmData.Midbrain) {
            arr.push('midbrain')
          }
          report += "<p>" + "<b>" + text.LocationTypetext.replace("{2}", arr.join("-")) + "</b>" + "</p>";
        }
        if (frmData.InfractLeft) {
          let arr = []
          if (frmData.Frontal1) {
            arr.push("frontal")
          }
          if (frmData.Parietal1) {
            arr.push("parietal")
          }
          if (frmData.Temporal1) {
            arr.push("temporal")
          }
          if (frmData.Occipital1) {
            arr.push("occipital")
          }
          if (frmData.BasalGanglia1) {
            arr.push("basal ganglia")
          }
          if (frmData.Thalamus1) {
            arr.push("thalamus")
          }
          if (frmData.CoronaRadiate1) {
            arr.push("corona radiate")
          }
          if (frmData.CentrumSemiovale1) {
            arr.push('centrum semiovale')
          }
          if (frmData.Cerebellum1) {
            arr.push('cerebellum')
          }
          if (frmData.Pons1) {
            arr.push('pons')
          }
          if (frmData.Medulla1) {
            arr.push('medulla')
          }
          if (frmData.Midbrain1) {
            arr.push('midbrain')
          }
          report += "<p>" + "<b>" + text.LocationTypetextleft.replace("{2}", arr.join("-")) + "</b>" + "</p>";
        }
      }
      if (frmData.HemorrhagicTransFormation) {
        if (frmData.HeTransformationCC || frmData.HeTransformationAP || frmData.HeTransformationTR) {
          report += "<p>" + '<b>' + "Hemorrhagic transformation seen measuring " + frmData.HeTransformationCC + " x " + frmData.HeTransformationAP + " x " + frmData.HeTransformationTR + "mm." + "</b>" + "</p>";
        }
      }

      if (frmData.Location || frmData.HemorrhagicTransFormation) {
        report += "<p>" + "No evidence of fracture.<br><br>The gray white differentiation is maintained.<br><br>Cerebello pontine angles and internal auditory meatus appear normal.<br><br>Ventricular system and sulci are normal for the age.<br><br>The sella and parasellar regions are normal.<br><br>The bones of skull and pericranial soft tissue appear normal.<br><br>Visualized paranasal sinuses appear normal." + "</p>";
      }

      if ((frmData.Location || frmData.TypeofInfarct) && !frmData.HemorrhagicTransFormation) {
        if (frmData.InfractRight || frmData.InfarctTypes) {
          let arr = []
          if (frmData.Frontal) {
            arr.push("frontal")
          }
          if (frmData.Parietal) {
            arr.push("parietal")
          }
          if (frmData.Temporal) {
            arr.push("temporal")
          }
          if (frmData.Occipital) {
            arr.push("occipital")
          }
          if (frmData.BasalGanglia) {
            arr.push("basal ganglia")
          }
          if (frmData.Thalamus) {
            arr.push("thalamus")
          }
          if (frmData.CoronaRadiate) {
            arr.push("corona radiate")
          }
          if (frmData.CentrumSemiovale) {
            arr.push('centrum semiovale')
          }
          if (frmData.Cerebellum) {
            arr.push('cerebellum')
          }
          if (frmData.Pons) {
            arr.push('pons')
          }
          if (frmData.Medulla) {
            arr.push('medulla')
          }
          if (frmData.Midbrain) {
            arr.push('midbrain')
          }
          impression.push("<b>" + text.LocationTypetext1.replace("{2}", arr.join("-")) + "- likely " + frmData.InfarctTypes + " infarct." + "</b>");
        }
        if (frmData.InfractLeft || frmData.InfarctTypes) {
          let arr = []
          if (frmData.Frontal1) {
            arr.push("frontal")
          }
          if (frmData.Parietal1) {
            arr.push("parietal")
          }
          if (frmData.Temporal1) {
            arr.push("temporal")
          }
          if (frmData.Occipital1) {
            arr.push("occipital")
          }
          if (frmData.BasalGanglia1) {
            arr.push("basal ganglia")
          }
          if (frmData.Thalamus1) {
            arr.push("thalamus")
          }
          if (frmData.CoronaRadiate1) {
            arr.push("corona radiate")
          }
          if (frmData.CentrumSemiovale1) {
            arr.push('centrum semiovale')
          }
          if (frmData.Cerebellum1) {
            arr.push('cerebellum')
          }
          if (frmData.Pons1) {
            arr.push('pons')
          }
          if (frmData.Medulla1) {
            arr.push('medulla')
          }
          if (frmData.Midbrain1) {
            arr.push('midbrain')
          }
          impression.push("<b>" + text.LocationTypetextleft1.replace("{2}", arr.join("-")) + "- likely " + frmData.InfarctTypes + " infarct." + "</b>");
        }
      }
      else {
        if ((frmData.Location || frmData.TypeofInfarct) && frmData.HemorrhagicTransFormation) {
          if (frmData.InfractRight || frmData.InfarctTypes) {
            let arr = []
            if (frmData.Frontal) {
              arr.push("frontal")
            }
            if (frmData.Parietal) {
              arr.push("parietal")
            }
            if (frmData.Temporal) {
              arr.push("temporal")
            }
            if (frmData.Occipital) {
              arr.push("occipital")
            }
            if (frmData.BasalGanglia) {
              arr.push("basal ganglia")
            }
            if (frmData.Thalamus) {
              arr.push("thalamus")
            }
            if (frmData.CoronaRadiate) {
              arr.push("corona radiate")
            }
            if (frmData.CentrumSemiovale) {
              arr.push('centrum semiovale')
            }
            if (frmData.Cerebellum) {
              arr.push('cerebellum')
            }
            if (frmData.Pons) {
              arr.push('pons')
            }
            if (frmData.Medulla) {
              arr.push('medulla')
            }
            if (frmData.Midbrain) {
              arr.push('midbrain')
            }
            impression.push("<b>" + text.LocationTypetext1.replace("{2}", arr.join("-")) + "- likely " + frmData.InfarctTypes + " infarct.<br><br>Hemorrhagic transformation seen as described." + "</b>");
          }
        }
        if ((frmData.Location || frmData.TypeofInfarct) && frmData.HemorrhagicTransFormation) {
          if (frmData.InfractLeft || frmData.InfarctTypes) {
            let arr = []
            if (frmData.Frontal1) {
              arr.push("frontal")
            }
            if (frmData.Parietal1) {
              arr.push("parietal")
            }
            if (frmData.Temporal1) {
              arr.push("temporal")
            }
            if (frmData.Occipital1) {
              arr.push("occipital")
            }
            if (frmData.BasalGanglia1) {
              arr.push("basal ganglia")
            }
            if (frmData.Thalamus1) {
              arr.push("thalamus")
            }
            if (frmData.CoronaRadiate1) {
              arr.push("corona radiate")
            }
            if (frmData.CentrumSemiovale1) {
              arr.push('centrum semiovale')
            }
            if (frmData.Cerebellum1) {
              arr.push('cerebellum')
            }
            if (frmData.Pons1) {
              arr.push('pons')
            }
            if (frmData.Medulla1) {
              arr.push('medulla')
            }
            if (frmData.Midbrain1) {
              arr.push('midbrain')
            }
            impression.push("<b>" + text.LocationTypetextleft1.replace("{2}", arr.join("-")) + "- likely " + frmData.InfarctTypes + " infarct.<br><br>Hemorrhagic transformation seen as described." + "</b>");
          }
        }
      }
    }

    

    report +=
      this.getImpression(impression, totalCovidPoints) +
      this.getCorads(current_user); // TO BE ADDED

    this.setState({ reportFrmData: report }, () => {
      this.props.generateReport(report);
    });
  }
  //TO BE ADDED
  getCorads(user) {
    return (
      "<p><br><img src='" + user.signature + "' height='50' /><p>" + user.full_name + "<br>" + "<br>" + user.designation + ", MBBS</p></p>"
    );
  }

  getImpression(impression, totalCovidPoints) {
    let text = "<p><strong>IMPRESSION:</strong></p><p>";
    return (
      text +
      (impression.length !== 0
        ? impression.join("")
        : "<strong>• No significant abnormality in the paranasal sinuses.</strong>") +
      "</p>"
    );
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
            name="CT HEAD"
          />
        }
      </div>
    );
  }
}


export default CtHead;
