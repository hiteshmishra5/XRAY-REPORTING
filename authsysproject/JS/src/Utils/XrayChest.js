import React, { Component } from "react";
import "../style.css";
import PopUp from "../PopUps/PopUpXrayChest";

import text from "../Forms/text_hrct_chest.json";
import { data } from "jquery";
import { FlashOnRounded, InvertColorsOff } from "@material-ui/icons";

class XrayChest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frmData: {
        name: "John Doe",
        description: "",
        measurements: 0,
        done: true,
        recurrence: "Daily",
        rating: 3,
        opacities: false,
        opacitiesRUL: false,
        opacitiesRML: false,
        opacitiesRLL: false,
        opacitiesLUL: false,
        opacitiesLML: false,
        opacitiesLLL: false,

        mildHaziness: false,
        mildHazinessRUL: false,
        mildHazinessRML: false,
        mildHazinessRLL: false,
        mildHazinessLUL: false,
        mildHazinessLML: false,
        mildHazinessLLL: false,

        rightObliteratedType: false,
        leftObliteratedType: false,
        pneumothorax: false,
        pneumothoraxL: false,
        pneumothoraxR: false,
        SoftTissue: false,
        bonyThoracicCage: false,
        ribFracture: false,
        ribFractureL: false,
        ribFractureR: false,
        Clavicle: false,
        ClavicleL: false,
        ClavicleR: false,
        // ClavicleRType: false,
        // ClavicleLType: false,
        bonyother: false,
        // enlargedFindings: false,
        mass: false,
        focalLungParenchymalLesion: false,
        margin: false,
        wall: false,
        calcification: false,
        airFluidLevel: false,
        intraCavitaryMass: false,
        tuberculosis: false,
        copd: false,
        mediastinalMass: false,
        diaphragmaticHernia: false,
        curvatureScoliosisL: false,
        curvatureScoliosisR: false,
        Bronchiectasis: false,
        FibroCavitaryLesions: false,
        MultipleNodules: false,
        othersMass: false,
        othersMiliaryShadow: false,
        ReticularOpacities: false,
        DomesOfDiaphragm: false,
        DomesLeft: false,
        DomesRight: false,
        DomesLeftElevated: false,
        DomesLeftelevated: false,
        DomesRightelevated: false,
        DomesRightElevated: false,
        DomesLeftFlattened: false,
        DomesRightFlattened: false,
        ChestType: false,
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



    //Auto data by Aman Gutpa on 23/06/23
    if (frmData.NameTextFR2 && frmData.IDTextFR2 && frmData.AgeTextFR2 && frmData.GenderTextFR2)
    {
      report += "<pre>" + "<b>" +"<header>" + "<table>" + "<tr>" + "<td>" + "Name: " + frmData.NameTextFR2 + "</td>" + "<td>" + "Patient ID: " + frmData.IDTextFR2 + "</td>" + "<td>" + "Age: " + frmData.AgeTextFR2 + "</td>" + "</tr>"  + "<tr>" + "<td>" + "Gender: " + frmData.GenderTextFR2 + "</td>" + "<td>" + "Test date: " + frmData.TestDateTextFR2 + "</td>" + "<td>" + "Report date: " + frmData.ReportDateTextFR2 + "</td>" + "</tr>" + "</table>" + "</b>" + "</pre>" + "</header>";
    }

    if ((frmData.XrayTypes === 'AP' || frmData.opacities || frmData.mildHaziness
      || frmData.BothNormal || frmData.rightHilarShadow
      || frmData.leftHilarShadow || frmData.rightCostophrenicAngle || frmData.leftCostophrenicAngle
      || frmData.pneumothorax || frmData.cardiacSilhouette || frmData.bonyThoracicCage
      || frmData.tracheaAndMediastinalStructures || frmData.DomesOfDiaphragm || frmData.etLine || frmData.cvpLine
      || frmData.tracheostomy || frmData.NGtube || frmData.info || frmData.SoftTissue) && !(frmData.XrayTypes === 'PA' || frmData.XrayTypes === 'LATERAL' || frmData.XrayTypes === 'AP/PA')) {
      report += "<p style={{'text-center'}}>" + "<strong>" + "<u>" + "X-RAY - CHEST AP VIEW" + "</u>" + "</strong>" + "</p>";
      report += "<h5>" + "<strong>" + "<u>" + "OBSERVATIONS:" + "</u>" + "</strong>" + "</h5>";
    }

    if ((frmData.XrayTypes === 'PA' || frmData.opacities || frmData.mildHaziness || frmData.BothNormal || frmData.rightHilarShadow
      || frmData.leftHilarShadow || frmData.rightCostophrenicAngle || frmData.leftCostophrenicAngle
      || frmData.pneumothorax || frmData.cardiacSilhouette || frmData.bonyThoracicCage
      || frmData.tracheaAndMediastinalStructures || frmData.DomesOfDiaphragm || frmData.etLine || frmData.cvpLine
      || frmData.tracheostomy || frmData.NGtube || frmData.info || frmData.SoftTissue) && !(frmData.XrayTypes === 'AP' || frmData.XrayTypes === 'LATERAL' || frmData.XrayTypes === 'AP/PA')) {
      report += "<h5>" + "<strong>" + "<u>" + "X-RAY - CHEST PA VIEW" + "</u>" + "</strong>" + "</h5>";
      report += "<h5>" + "<strong>" + "<u>" + "OBSERVATIONS:" + "</u>" + "</strong>" + "</h5>";
    }

    if ((frmData.XrayTypes === 'LATERAL' && frmData.opacities || frmData.mildHaziness || frmData.BothNormal || frmData.rightHilarShadow
      || frmData.leftHilarShadow || frmData.rightCostophrenicAngle || frmData.leftCostophrenicAngle
      || frmData.pneumothorax || frmData.cardiacSilhouette || frmData.bonyThoracicCage
      || frmData.tracheaAndMediastinalStructures || frmData.DomesOfDiaphragm || frmData.etLine || frmData.cvpLine
      || frmData.tracheostomy || frmData.NGtube || frmData.info || frmData.SoftTissue) && !(frmData.XrayTypes === 'AP' || frmData.XrayTypes === 'PA' || frmData.XrayTypes === 'AP/PA')) {
      report += "<h5>" + "<center>" + "<strong>" + "<u>" + "X-RAY - CHEST LATERAL VIEW" + "</u>" + "</strong>" + "</center>" + "</h5>";
      report += "<h5>" + "<strong>" + "<u>" + "OBSERVATIONS:" + "</u>" + "</strong>" + "</h5>";
    }

    if ((frmData.XrayTypes === 'AP/PA' && frmData.opacities || frmData.mildHaziness || frmData.BothNormal || frmData.rightHilarShadow
      || frmData.leftHilarShadow || frmData.rightCostophrenicAngle || frmData.leftCostophrenicAngle
      || frmData.pneumothorax || frmData.cardiacSilhouette || frmData.bonyThoracicCage
      || frmData.tracheaAndMediastinalStructures || frmData.DomesOfDiaphragm || frmData.etLine || frmData.cvpLine
      || frmData.tracheostomy || frmData.NGtube || frmData.info || frmData.SoftTissue) && !(frmData.XrayTypes === 'AP' || frmData.XrayTypes === 'PA' || frmData.XrayTypes === 'LATERAL')) {
      report += "<h5>" + "<center>" + "<strong>" + "<u>" + "X-RAY - CHEST AP/PA VIEW" + "</u>" + "</strong>" + "</center>" + "</h5>";
      report += "<h5>" + "<strong>" + "<u>" + "OBSERVATIONS:" + "</u>" + "</strong>" + "</h5>";
    }




    //***************************OPACITIES****************************************************

    if (frmData.BothNormal && (frmData.XrayTypes === 'AP' || frmData.XrayTypes === 'PA' || frmData.XrayTypes === 'AP/PA')) {
      report += "<p>" + "The trachea is central.<br><br>Lung zones are clear.<br><br>Both hila are normal.<br><br>Cardiophrenic and costophrenic angles are normal.<br><br>The mediastinal and cardiac silhouette are normal.<br><br>Bones of the thoracic cage are normal.<br><br>Soft tissues of the chest wall are normal.<br><br>Cardiothoracic ratio is normal." + "</p>"
    }
    if (frmData.BothNormal && frmData.XrayTypes === 'LATERAL') {
      report += "<p>" + "Cardiac shadow appears normal.<br><br>Visualized thoracic vertebral is normal.<br><br>Lung zones are normal.<br><br>Diaphragmatic domes appear normal.<br><br>Sternum appears normal." + "</p>";
    }

    if (frmData.opacities) {

      let arr = []
      // ********************Single OpacitiesType*****************Date: 05/03/22 Hitesh Mishra******
      if (frmData.opacitiesRUL && !frmData.opacitiesRML && !frmData.opacitiesRLL && !frmData.opacitiesLUL && !frmData.opacitiesLLL && !frmData.opacitiesLML) {
        arr.push("right upper zone")
      }
      if (frmData.opacitiesRML && !frmData.opacitiesRUL && !frmData.opacitiesRLL && !frmData.opacitiesLUL && !frmData.opacitiesLLL && !frmData.opacitiesLML) {
        arr.push("right middle zone");
      }
      if (frmData.opacitiesRLL && !frmData.opacitiesRML && !frmData.opacitiesRUL && !frmData.opacitiesLUL && !frmData.opacitiesLLL && !frmData.opacitiesLML) {
        arr.push("right lower zone");
      }
      if (frmData.opacitiesLUL && !frmData.opacitiesRUL && !frmData.opacitiesRML && !frmData.opacitiesRLL && !frmData.opacitiesLLL && !frmData.opacitiesLML) {
        arr.push("left upper zone");
      }
      if (frmData.opacitiesLML && !frmData.opacitiesRUL && !frmData.opacitiesRLL && !frmData.opacitiesRML && !frmData.opacitiesLUL && !frmData.opacitiesLLL) {
        arr.push('left middle zone');
      }
      if (frmData.opacitiesLLL && !frmData.opacitiesRUL && !frmData.opacitiesRML && !frmData.opacitiesRLL && !frmData.opacitiesLUL && !frmData.opacitiesLML) {
        arr.push("left lower zone");
      }

      // **************************2 Combinations*************************
      if (frmData.opacitiesRUL && frmData.opacitiesLUL && !frmData.opacitiesRML && !frmData.opacitiesRLL && !frmData.opacitiesLLL && !frmData.opacitiesLML) {
        arr.push("bilateral upper zone");
      }
      if (frmData.opacitiesRLL && frmData.opacitiesLLL && !frmData.opacitiesRUL && !frmData.opacitiesLUL && !frmData.opacitiesRML && !frmData.opacitiesLML) {
        arr.push("bilateral lower zone");
      }
      if (frmData.opacitiesRUL && frmData.opacitiesRML && !frmData.opacitiesLML && !frmData.opacitiesLLL && !frmData.opacitiesLUL && !frmData.opacitiesRLL) {
        arr.push('right upper zone, right middle zone');
      }
      if (frmData.opacitiesLUL && frmData.opacitiesLLL && !frmData.opacitiesRLL && !frmData.opacitiesRML && !frmData.opacitiesRUL && !frmData.opacitiesLML) {
        arr.push("left upper zone, left lower zone");
      }
      if (frmData.opacitiesRUL && frmData.opacitiesRLL && !frmData.opacitiesRML && !frmData.opacitiesLUL && !frmData.opacitiesLLL && !frmData.opacitiesLML) {
        arr.push('right upper zone, right lower zone');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesLML && !frmData.opacitiesLUL && !frmData.opacitiesRLL && !frmData.opacitiesRML && !frmData.opacitiesLLL) {
        arr.push('right upper zone, left middle zone');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesLLL && !frmData.opacitiesRML && !frmData.opacitiesLUL && !frmData.opacitiesRLL && !frmData.opacitiesLML) {
        arr.push('right upper zone, left lower zone');
      }
      if (frmData.opacitiesRML && frmData.opacitiesRLL && !frmData.opacitiesRUL && !frmData.opacitiesLUL && !frmData.opacitiesLLL && !frmData.opacitiesLML) {
        arr.push('right middle zone, right lower zone');
      }
      if (frmData.opacitiesRML && frmData.opacitiesLML && !frmData.opacitiesRUL && !frmData.opacitiesLUL && !frmData.opacitiesLLL && !frmData.opacitiesRLL) {
        arr.push('bilateral middle zone');
      }
      if (frmData.opacitiesRLL && frmData.opacitiesLML && !frmData.opacitiesRML && !frmData.opacitiesRUL && !frmData.opacitiesLUL && !frmData.opacitiesLLL) {
        arr.push('right lower zone, left middle zone');
      }
      if (frmData.opacitiesLUL && frmData.opacitiesLML && !frmData.opacitiesRLL && !frmData.opacitiesRML && !frmData.opacitiesRUL && !frmData.opacitiesLLL) {
        arr.push('left upper zone, left middle zone');
      }
      if (frmData.opacitiesRML && frmData.opacitiesLUL && !frmData.opacitiesRUL && !frmData.opacitiesRLL && !frmData.opacitiesLLL && !frmData.opacitiesLML) {
        arr.push('right middle zone, left upper zone');
      }
      if (frmData.opacitiesRML && frmData.opacitiesLLL && !frmData.opacitiesRUL && !frmData.opacitiesRLL && !frmData.opacitiesLUL && !frmData.opacitiesLML) {
        arr.push('right middle zone, left lower zone');
      }
      if (frmData.opacitiesRLL && frmData.opacitiesLUL && !frmData.opacitiesRUL && !frmData.opacitiesRML && !frmData.opacitiesLLL && !frmData.opacitiesLML) {
        arr.push('right lower zone, left upper zone');
      }
      if (frmData.opacitiesLML && frmData.opacitiesLLL && !frmData.opacitiesRUL && !frmData.opacitiesRML && !frmData.opacitiesRLL && !frmData.opacitiesLUL) {
        arr.push('left middle zone, left lower zone')
      }

      // ************************ 3 Combinations******************************
      if (frmData.opacitiesRUL && frmData.opacitiesRML && frmData.opacitiesRLL && !frmData.opacitiesLUL && !frmData.opacitiesLLL && !frmData.opacitiesLML) {
        arr.push('right lung');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesRML && frmData.opacitiesLUL && !frmData.opacitiesRLL && !frmData.opacitiesLLL && !frmData.opacitiesLML) {
        arr.push('bilateral upper zone, right middle zone');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesRML && frmData.opacitiesLML && !frmData.opacitiesRLL && !frmData.opacitiesLUL && !frmData.opacitiesLLL) {
        arr.push('bilateral middle zone, right upper zone');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesRML && frmData.opacitiesLLL && !frmData.opacitiesLML && !frmData.opacitiesLUL && !frmData.opacitiesRLL) {
        arr.push('right upper zone, right middle zone, left lower zone');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesRLL && frmData.opacitiesLUL && !frmData.opacitiesRML && !frmData.opacitiesLLL && !frmData.opacitiesLML) {
        arr.push('bilateral upper zone, right lower zone');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesRLL && frmData.opacitiesLML && !frmData.opacitiesLUL && !frmData.opacitiesLLL && !frmData.opacitiesRML) {
        arr.push('right upper zone, right lower zone, left middle zone');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesRLL && frmData.opacitiesLLL && !frmData.opacitiesLUL && !frmData.opacitiesRML && !frmData.opacitiesLML) {
        arr.push('bilateral lower zone, right upper zone');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesLUL && frmData.opacitiesLML && !frmData.opacitiesRML && !frmData.opacitiesRLL && !frmData.opacitiesLLL) {
        arr.push('bilateral upper zone, left middle zone');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesLUL && frmData.opacitiesLLL && !frmData.opacitiesRML && !frmData.opacitiesRLL && !frmData.opacitiesLML) {
        arr.push('bilateral upper zone, left lower zone');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesLML && frmData.opacitiesLLL && !frmData.opacitiesLUL && !frmData.opacitiesRLL && !frmData.opacitiesRML) {
        arr.push('right upper zone, left middle zone, left lower zone');
      }
      if (frmData.opacitiesRML && frmData.opacitiesRLL && frmData.opacitiesLUL && !frmData.opacitiesLLL && !frmData.opacitiesLML && !frmData.opacitiesRUL) {
        arr.push('right middle zone, right lower zone, left upper zone');
      }
      if (frmData.opacitiesRML && frmData.opacitiesLUL && frmData.opacitiesLLL && !frmData.opacitiesLML && !frmData.opacitiesRUL && !frmData.opacitiesRLL) {
        arr.push('right middle zone, left upper zone, left lower zone');
      }
      if (frmData.opacitiesRLL && frmData.opacitiesLUL && frmData.opacitiesLLL && !frmData.opacitiesLML && !frmData.opacitiesRML && !frmData.opacitiesRUL) {
        arr.push('right lower zone, left upper zone, left lower zone');
      }
      if (frmData.opacitiesRLL && frmData.opacitiesLML && frmData.opacitiesLLL && !frmData.opacitiesLUL && !frmData.opacitiesRML && !frmData.opacitiesRUL) {
        arr.push('bilateral lower zone, left middle zone');
      }
      if (frmData.opacitiesRML && frmData.opacitiesRLL && frmData.opacitiesLML && !frmData.opacitiesLLL && !frmData.opacitiesLUL && !frmData.opacitiesRUL) {
        arr.push('bilateral middle zone, right lower zone');
      }
      if (frmData.opacitiesLLL && frmData.opacitiesLML && frmData.opacitiesLUL && !frmData.opacitiesRLL && !frmData.opacitiesRML && !frmData.opacitiesRUL) {
        arr.push('left lung');
      }
      if (frmData.opacitiesRML && frmData.opacitiesRLL && frmData.opacitiesLLL && !frmData.opacitiesRUL && !frmData.opacitiesLUL && !frmData.opacitiesLML) {
        arr.push('bilateral lower zone, right middle zone');
      }
      if (frmData.opacitiesRML && frmData.opacitiesLUL && frmData.opacitiesLML && !frmData.opacitiesRUL && !frmData.opacitiesRLL && !frmData.opacitiesLLL) {
        arr.push("bilateral middle zone, left upper zone");
      }

      if (frmData.opacitiesRML && frmData.opacitiesLML && frmData.opacitiesLLL && !frmData.opacitiesRUL && !frmData.opacitiesRLL && !frmData.opacitiesLUL) {
        arr.push('bilateral middle zone, left lower zone');
      }
      if (frmData.opacitiesRLL && frmData.opacitiesLUL && frmData.opacitiesLML && !frmData.opacitiesRUL && !frmData.opacitiesRML && !frmData.opacitiesLLL) {
        arr.push("right lower zone, left upper zone, left middle zone");
      }


      // ***************************4 Combination.************************************
      if (frmData.opacitiesRUL && frmData.opacitiesRML && frmData.opacitiesRLL && frmData.opacitiesLUL && !frmData.opacitiesLLL && !frmData.opacitiesLML) {
        arr.push('right lung, left upper zone');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesRML && frmData.opacitiesRLL && frmData.opacitiesLML && !frmData.opacitiesLLL && !frmData.opacitiesLUL) {
        arr.push('right lung, left middle zone');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesRML && frmData.opacitiesRLL && frmData.opacitiesLLL && !frmData.opacitiesLUL && !frmData.opacitiesLML) {
        arr.push('right lung, left lower zone');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesRML && frmData.opacitiesLUL && frmData.opacitiesLML && !frmData.opacitiesLLL && !frmData.opacitiesRLL) {
        arr.push('bilateral middle zone, bilateral upper zone');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesRML && frmData.opacitiesLUL && frmData.opacitiesLLL && !frmData.opacitiesRLL && !frmData.opacitiesLML) {
        arr.push('bilateral upper zone, right middle zone, left lower zone');
      }

      if (frmData.opacitiesRUL && frmData.opacitiesRLL && frmData.opacitiesLUL && frmData.opacitiesLML && !frmData.opacitiesLLL && !frmData.opacitiesRML) {
        arr.push('bilateral upper zone, right lower zone, left middle zone');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesRLL && frmData.opacitiesLUL && frmData.opacitiesLLL && !frmData.opacitiesRML && !frmData.opacitiesLML) {
        arr.push('bilateral upper zone, bilateral lower zone');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesRLL && frmData.opacitiesLML && frmData.opacitiesLLL && !frmData.opacitiesRML && !frmData.opacitiesLUL) {
        arr.push('bilateral lower zone, right upper zone, left middle zone');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesLUL && frmData.opacitiesLML && frmData.opacitiesLLL && !frmData.opacitiesRLL && !frmData.opacitiesRML) {
        arr.push('left lung, right upper zone');
      }
      if (frmData.opacitiesRML && frmData.opacitiesRLL && frmData.opacitiesLUL && frmData.opacitiesLML && !frmData.opacitiesLLL && !frmData.opacitiesRUL) {
        arr.push('bilateral middle zone, left upper zone, right lower zone');
      }
      if (frmData.opacitiesRML && frmData.opacitiesRLL && frmData.opacitiesLUL && frmData.opacitiesLLL && !frmData.opacitiesRUL && !frmData.opacitiesLML) {
        arr.push('bilateral lower zone, right middle zone, left upper zone');
      }
      if (frmData.opacitiesRML && frmData.opacitiesRLL && frmData.opacitiesLML && frmData.opacitiesLLL && !frmData.opacitiesRUL && !frmData.opacitiesLUL) {
        arr.push('bilateral middle zone, bilateral lower zone');
      }
      if (frmData.opacitiesRML && frmData.opacitiesLUL && frmData.opacitiesLML && frmData.opacitiesLLL && !frmData.opacitiesRLL && !frmData.opacitiesRUL) {
        arr.push('left lung, right middle zone');
      }
      if (frmData.opacitiesRLL && frmData.opacitiesLUL && frmData.opacitiesLML && frmData.opacitiesLLL && !frmData.opacitiesRML && !frmData.opacitiesRUL) {
        arr.push('left lung, right lower zone');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesRML && frmData.opacitiesLML && frmData.opacitiesLLL && !frmData.opacitiesLUL && !frmData.opacitiesRLL) {
        arr.push('bilateral middle zone, right upper zone, left lower zone');
      }

      // ****************************************5 Combination*************************************
      if (frmData.opacitiesRUL && frmData.opacitiesRML && frmData.opacitiesRLL && frmData.opacitiesLUL && frmData.opacitiesLLL && !frmData.opacitiesLML) {
        arr.push("bilateral upper zone, bilateral lower zone, right middle zone");
      }
      if (frmData.opacitiesRUL && frmData.opacitiesRML && frmData.opacitiesRLL && frmData.opacitiesLUL && frmData.opacitiesLML && !frmData.opacitiesLLL) {
        arr.push('bilateral upper zone, bilateral middle zone, right lower zone');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesRML && frmData.opacitiesRLL && frmData.opacitiesLML && frmData.opacitiesLLL && !frmData.opacitiesLUL) {
        arr.push('bilateral middle zone, bilateral lower zone, right upper zone');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesRML && frmData.opacitiesLUL && frmData.opacitiesLML && frmData.opacitiesLLL && !frmData.opacitiesRLL) {
        arr.push('bilateral upper zone, bilateral middle zone, left lower zone');
      }
      if (frmData.opacitiesRUL && frmData.opacitiesRLL && frmData.opacitiesLUL && frmData.opacitiesLML && frmData.opacitiesLLL && !frmData.opacitiesRML) {
        arr.push('bilateral upper zone, bilateral lower zone, left middle zone');
      }
      if (frmData.opacitiesRML && frmData.opacitiesRLL && frmData.opacitiesLUL && frmData.opacitiesLML && frmData.opacitiesLLL && !frmData.opacitiesRUL) {
        arr.push('bilateral middle zone, bilateral lower zone, left upper zone');
      }

      // **************************6 Combination. ***************************************
      if (frmData.opacitiesRUL && frmData.opacitiesRML && frmData.opacitiesRLL && frmData.opacitiesLUL && frmData.opacitiesLLL && frmData.opacitiesLML) {
        arr.push('both lungs');
      }

      if (!(frmData.RuzAirBronchogram || frmData.RuzFibrosis || frmData.RuzConsolidation || frmData.RuzCavitation
        || frmData.RmzAirBronchogram || frmData.RmzFibrosis || frmData.RmzConsolidation || frmData.RmzCavitation
        || frmData.RlzAirBronchogram || frmData.RlzFibrosis || frmData.RlzConsolidation || frmData.RlzCavitation
        || frmData.LuzAirBronchogram || frmData.LuzFibrosis || frmData.LuzConsolidation || frmData.LuzCavitation
        || frmData.LmzAirBronchogram || frmData.LmzFibrosis || frmData.LmzConsolidation || frmData.LmzCavitation
        || frmData.LlzAirBronchogram || frmData.LlzFibrosis || frmData.LlzConsolidation || frmData.LlzCavitation)) {
        report += "<p>" + "<b>" + text.opacities.replace("{1}", frmData.opacitiesType).replace("{2}", arr.join(', ')) + "</b>" + "</p>";

      }
    }

    // Opacities Types***********************************************************
    if (frmData.opacities) {

      if (frmData.opacitiesRUL) {
        let arr = []
        if (frmData.RuzAirBronchogram && !frmData.RuzFibrosis && !frmData.RuzConsolidation && !frmData.RuzCavitation) {
          arr.push('with air bronchogram');
        }
        if (frmData.RuzFibrosis && !frmData.RuzAirBronchogram && !frmData.RuzCavitation && !frmData.RuzConsolidation) {
          arr.push('without air bronchogram s/o fibrosis');
        }
        if (frmData.RuzConsolidation && !frmData.RuzAirBronchogram && !frmData.RuzCavitation && !frmData.RuzFibrosis) {
          arr.push('without air bronchogram s/o consolidation');
        }
        if (frmData.RuzCavitation && !frmData.RuzAirBronchogram && !frmData.RuzConsolidation && !frmData.RuzFibrosis) {
          arr.push('without air bronchogram s/o cavitation');
        }

        if (frmData.RuzAirBronchogram && frmData.RuzFibrosis && !frmData.RuzConsolidation && !frmData.RuzCavitation) {
          arr.push('with air bronchogram s/o fibrosis.');
        }
        if (frmData.RuzAirBronchogram && !frmData.RuzFibrosis && frmData.RuzConsolidation && !frmData.RuzCavitation) {
          arr.push('with air bronchogram s/o consolidation.');
        }
        if (frmData.RuzAirBronchogram && !frmData.RuzFibrosis && !frmData.RuzConsolidation && frmData.RuzCavitation) {
          arr.push('with air bronchogram s/o cavitation.');
        }
        if (!frmData.RuzAirBronchogram && frmData.RuzFibrosis && frmData.RuzConsolidation && !frmData.RuzCavitation) {
          arr.push('without air bronchogram s/o fibrosis and consolidation.');
        }
        if (!frmData.RuzAirBronchogram && frmData.RuzFibrosis && !frmData.RuzConsolidation && frmData.RuzCavitation) {
          arr.push('without air bronchogram s/o fibrosis and cavitation.');
        }
        if (!frmData.RuzAirBronchogram && !frmData.RuzFibrosis && frmData.RuzConsolidation && frmData.RuzCavitation) {
          arr.push('without air bronchogram s/o consolidation and cavitation.');
        }

        if (frmData.RuzAirBronchogram && frmData.RuzFibrosis && frmData.RuzConsolidation && !frmData.RuzCavitation) {
          arr.push('with air bronchogram s/o fibrosis and consolidation.');
        }
        if (frmData.RuzAirBronchogram && frmData.RuzFibrosis && !frmData.RuzConsolidation && frmData.RuzCavitation) {
          arr.push('with air bronchogram s/o fibrosis and cavitation.');
        }
        if (frmData.RuzAirBronchogram && !frmData.RuzFibrosis && frmData.RuzConsolidation && frmData.RuzCavitation) {
          arr.push('with air bronchogram s/o consolidation and cavitation.');
        }
        if (!frmData.RuzAirBronchogram && frmData.RuzFibrosis && frmData.RuzConsolidation && frmData.RuzCavitation) {
          arr.push('without air bronchogram s/o fibrosis, consolidation and cavitation.');
        }

        if (frmData.RuzAirBronchogram && frmData.RuzFibrosis && frmData.RuzConsolidation && frmData.RuzCavitation) {
          arr.push('with air bronchogram s/o fibrosis, consolidation and cavitation.');
        }

        if (frmData.RuzAirBronchogram || frmData.RuzFibrosis || frmData.RuzConsolidation || frmData.RuzCavitation
          || frmData.RmzAirBronchogram || frmData.RmzFibrosis || frmData.RmzConsolidation || frmData.RmzCavitation
          || frmData.RlzAirBronchogram || frmData.RlzFibrosis || frmData.RlzConsolidation || frmData.RlzCavitation
          || frmData.LuzAirBronchogram || frmData.LuzFibrosis || frmData.LuzConsolidation || frmData.LuzCavitation
          || frmData.LmzAirBronchogram || frmData.LmzFibrosis || frmData.LmzConsolidation || frmData.LmzCavitation
          || frmData.LlzAirBronchogram || frmData.LlzFibrosis || frmData.LlzConsolidation || frmData.LlzCavitation) {
          report += "<p>" + "<b>" + text.opacitiesrul.replace("{1}", frmData.opacitiesType).replace("{2}", arr.join('')) + "</b>" + "</p>";

        }
      }
      if (frmData.opacitiesRML) {
        let arr = []
        if (frmData.RmzAirBronchogram && !frmData.RmzFibrosis && !frmData.RmzConsolidation && !frmData.RmzCavitation) {
          arr.push('with air bronchogram');
        }
        if (frmData.RmzFibrosis && !frmData.RmzAirBronchogram && !frmData.RmzCavitation && !frmData.RmzConsolidation) {
          arr.push('without air bronchogram s/o fibrosis');
        }
        if (frmData.RmzConsolidation && !frmData.RmzAirBronchogram && !frmData.RmzCavitation && !frmData.RmzFibrosis) {
          arr.push('without air bronchogram s/o consolidation')
        }
        if (frmData.RmzCavitation && !frmData.RmzAirBronchogram && !frmData.RmzConsolidation && !frmData.RmzFibrosis) {
          arr.push('without air bronchogram s/o cavitation');
        }

        if (frmData.RmzAirBronchogram && frmData.RmzFibrosis && !frmData.RmzConsolidation && !frmData.RmzCavitation) {
          arr.push('with air bronchogram s/o fibrosis.');
        }
        if (frmData.RmzAirBronchogram && !frmData.RmzFibrosis && frmData.RmzConsolidation && !frmData.RmzCavitation) {
          arr.push('with air bronchogram s/o consolidation.');
        }
        if (frmData.RmzAirBronchogram && !frmData.RmzFibrosis && !frmData.RmzConsolidation && frmData.RmzCavitation) {
          arr.push('with air bronchogram s/o cavitation.');
        }
        if (!frmData.RmzAirBronchogram && frmData.RmzFibrosis && frmData.RmzConsolidation && !frmData.RmzCavitation) {
          arr.push('without air bronchogram s/o fibrosis and consolidation.');
        }
        if (!frmData.RmzAirBronchogram && frmData.RmzFibrosis && !frmData.RmzConsolidation && frmData.RmzCavitation) {
          arr.push('without air bronchogram s/o fibrosis and cavitation.');
        }
        if (!frmData.RmzAirBronchogram && !frmData.RmzFibrosis && frmData.RmzConsolidation && frmData.RmzCavitation) {
          arr.push('without air bronchogram s/o consolidation and cavitation.');
        }

        if (frmData.RmzAirBronchogram && frmData.RmzFibrosis && frmData.RmzConsolidation && !frmData.RmzCavitation) {
          arr.push('with air bronchogram s/o fibrosis and consolidation.');
        }
        if (frmData.RmzAirBronchogram && frmData.RmzFibrosis && !frmData.RmzConsolidation && frmData.RmzCavitation) {
          arr.push('with air bronchogram s/o fibrosis and cavitation.');
        }
        if (frmData.RmzAirBronchogram && !frmData.RmzFibrosis && frmData.RmzConsolidation && frmData.RmzCavitation) {
          arr.push('with air bronchogram s/o consolidation and cavitation.');
        }
        if (!frmData.RmzAirBronchogram && frmData.RmzFibrosis && frmData.RmzConsolidation && frmData.RmzCavitation) {
          arr.push('without air bronchogram s/o fibrosis, consolidation and cavitation.');
        }

        if (frmData.RmzAirBronchogram && frmData.RmzFibrosis && frmData.RmzConsolidation && frmData.RmzCavitation) {
          arr.push('with air bronchogram s/o fibrosis, consolidation and cavitation.');
        }

        if (frmData.RuzAirBronchogram || frmData.RuzFibrosis || frmData.RuzConsolidation || frmData.RuzCavitation
          || frmData.RmzAirBronchogram || frmData.RmzFibrosis || frmData.RmzConsolidation || frmData.RmzCavitation
          || frmData.RlzAirBronchogram || frmData.RlzFibrosis || frmData.RlzConsolidation || frmData.RlzCavitation
          || frmData.LuzAirBronchogram || frmData.LuzFibrosis || frmData.LuzConsolidation || frmData.LuzCavitation
          || frmData.LmzAirBronchogram || frmData.LmzFibrosis || frmData.LmzConsolidation || frmData.LmzCavitation
          || frmData.LlzAirBronchogram || frmData.LlzFibrosis || frmData.LlzConsolidation || frmData.LlzCavitation) {
          report += "<p>" + "<b>" + text.opacitiesrml.replace("{1}", frmData.opacitiesType).replace("{2}", arr.join('')) + "</b>" + "</p>";

        }
      }
      if (frmData.opacitiesRLL) {
        let arr = []
        if (frmData.RlzAirBronchogram && !frmData.RlzFibrosis && !frmData.RlzConsolidation && !frmData.RlzCavitation) {
          arr.push('with air bronchogram');
        }
        if (frmData.RlzFibrosis && !frmData.RlzAirBronchogram && !frmData.RlzCavitation && !frmData.RlzConsolidation) {
          arr.push('without air bronchogram s/o fibrosis');
        }
        if (frmData.RlzConsolidation && !frmData.RlzAirBronchogram && !frmData.RlzCavitation && !frmData.RlzFibrosis) {
          arr.push('without air bronchogram s/o consolidation')
        }
        if (frmData.RlzCavitation && !frmData.RlzAirBronchogram && !frmData.RlzConsolidation && !frmData.RlzFibrosis) {
          arr.push('without air bronchogram s/o cavitation');
        }

        if (frmData.RlzAirBronchogram && frmData.RlzFibrosis && !frmData.RlzConsolidation && !frmData.RlzCavitation) {
          arr.push('with air bronchogram s/o fibrosis.');
        }
        if (frmData.RlzAirBronchogram && !frmData.RlzFibrosis && frmData.RlzConsolidation && !frmData.RlzCavitation) {
          arr.push('with air bronchogram s/o consolidation.');
        }
        if (frmData.RlzAirBronchogram && !frmData.RlzFibrosis && !frmData.RlzConsolidation && frmData.RlzCavitation) {
          arr.push('with air bronchogram s/o cavitation.');
        }
        if (!frmData.RlzAirBronchogram && frmData.RlzFibrosis && frmData.RlzConsolidation && !frmData.RlzCavitation) {
          arr.push('without air bronchogram s/o fibrosis and consolidation.');
        }
        if (!frmData.RlzAirBronchogram && frmData.RlzFibrosis && !frmData.RlzConsolidation && frmData.RlzCavitation) {
          arr.push('without air bronchogram s/o fibrosis and cavitation.');
        }
        if (!frmData.RlzAirBronchogram && !frmData.RlzFibrosis && frmData.RlzConsolidation && frmData.RlzCavitation) {
          arr.push('without air bronchogram s/o consolidation and cavitation.');
        }

        if (frmData.RlzAirBronchogram && frmData.RlzFibrosis && frmData.RlzConsolidation && !frmData.RlzCavitation) {
          arr.push('with air bronchogram s/o fibrosis and consolidation.');
        }
        if (frmData.RlzAirBronchogram && frmData.RlzFibrosis && !frmData.RlzConsolidation && frmData.RlzCavitation) {
          arr.push('with air bronchogram s/o fibrosis and cavitation.');
        }
        if (frmData.RlzAirBronchogram && !frmData.RlzFibrosis && frmData.RlzConsolidation && frmData.RlzCavitation) {
          arr.push('with air bronchogram s/o consolidation and cavitation.');
        }
        if (!frmData.RlzAirBronchogram && frmData.RlzFibrosis && frmData.RlzConsolidation && frmData.RlzCavitation) {
          arr.push('without air bronchogram s/o fibrosis, consolidation and cavitation.');
        }

        if (frmData.RlzAirBronchogram && frmData.RlzFibrosis && frmData.RlzConsolidation && frmData.RlzCavitation) {
          arr.push('with air bronchogram s/o fibrosis, consolidation and cavitation.');
        }

        if (frmData.RuzAirBronchogram || frmData.RuzFibrosis || frmData.RuzConsolidation || frmData.RuzCavitation
          || frmData.RmzAirBronchogram || frmData.RmzFibrosis || frmData.RmzConsolidation || frmData.RmzCavitation
          || frmData.RlzAirBronchogram || frmData.RlzFibrosis || frmData.RlzConsolidation || frmData.RlzCavitation
          || frmData.LuzAirBronchogram || frmData.LuzFibrosis || frmData.LuzConsolidation || frmData.LuzCavitation
          || frmData.LmzAirBronchogram || frmData.LmzFibrosis || frmData.LmzConsolidation || frmData.LmzCavitation
          || frmData.LlzAirBronchogram || frmData.LlzFibrosis || frmData.LlzConsolidation || frmData.LlzCavitation) {
          report += "<p>" + "<b>" + text.opacitiesrll.replace("{1}", frmData.opacitiesType).replace("{2}", arr.join('')) + "</b>" + "</p>";

        }
      }

      if (frmData.opacitiesLUL) {
        let arr = []
        if (frmData.LuzAirBronchogram && !frmData.LuzFibrosis && !frmData.LuzConsolidation && !frmData.LuzCavitation) {
          arr.push('with air bronchogram');
        }
        if (frmData.LuzFibrosis && !frmData.LuzAirBronchogram && !frmData.LuzCavitation && !frmData.LuzConsolidation) {
          arr.push('without air bronchogram s/o fibrosis');
        }
        if (frmData.LuzConsolidation && !frmData.LuzAirBronchogram && !frmData.LuzCavitation && !frmData.LuzFibrosis) {
          arr.push('without air bronchogram s/o consolidation')
        }
        if (frmData.LuzCavitation && !frmData.LuzAirBronchogram && !frmData.LuzConsolidation && !frmData.LuzFibrosis) {
          arr.push('without air bronchogram s/o cavitation');
        }

        if (frmData.LuzAirBronchogram && frmData.LuzFibrosis && !frmData.LuzConsolidation && !frmData.LuzCavitation) {
          arr.push('with air bronchogram s/o fibrosis.');
        }
        if (frmData.LuzAirBronchogram && !frmData.LuzFibrosis && frmData.LuzConsolidation && !frmData.LuzCavitation) {
          arr.push('with air bronchogram s/o consolidation.');
        }
        if (frmData.LuzAirBronchogram && !frmData.LuzFibrosis && !frmData.LuzConsolidation && frmData.LuzCavitation) {
          arr.push('with air bronchogram s/o cavitation.');
        }
        if (!frmData.LuzAirBronchogram && frmData.LuzFibrosis && frmData.LuzConsolidation && !frmData.LuzCavitation) {
          arr.push('without air bronchogram s/o fibrosis and consolidation.');
        }
        if (!frmData.LuzAirBronchogram && frmData.LuzFibrosis && !frmData.LuzConsolidation && frmData.LuzCavitation) {
          arr.push('without air bronchogram s/o fibrosis and cavitation.');
        }
        if (!frmData.LuzAirBronchogram && !frmData.LuzFibrosis && frmData.LuzConsolidation && frmData.LuzCavitation) {
          arr.push('without air bronchogram s/o consolidation and cavitation.');
        }

        if (frmData.LuzAirBronchogram && frmData.LuzFibrosis && frmData.LuzConsolidation && !frmData.LuzCavitation) {
          arr.push('with air bronchogram s/o fibrosis and consolidation.');
        }
        if (frmData.LuzAirBronchogram && frmData.LuzFibrosis && !frmData.LuzConsolidation && frmData.LuzCavitation) {
          arr.push('with air bronchogram s/o fibrosis and cavitation.');
        }
        if (frmData.LuzAirBronchogram && !frmData.LuzFibrosis && frmData.LuzConsolidation && frmData.LuzCavitation) {
          arr.push('with air bronchogram s/o consolidation and cavitation.');
        }
        if (!frmData.LuzAirBronchogram && frmData.LuzFibrosis && frmData.LuzConsolidation && frmData.LuzCavitation) {
          arr.push('without air bronchogram s/o fibrosis, consolidation and cavitation.');
        }

        if (frmData.LuzAirBronchogram && frmData.LuzFibrosis && frmData.LuzConsolidation && frmData.LuzCavitation) {
          arr.push('with air bronchogram s/o fibrosis, consolidation and cavitation.');
        }

        if (frmData.RuzAirBronchogram || frmData.RuzFibrosis || frmData.RuzConsolidation || frmData.RuzCavitation
          || frmData.RmzAirBronchogram || frmData.RmzFibrosis || frmData.RmzConsolidation || frmData.RmzCavitation
          || frmData.RlzAirBronchogram || frmData.RlzFibrosis || frmData.RlzConsolidation || frmData.RlzCavitation
          || frmData.LuzAirBronchogram || frmData.LuzFibrosis || frmData.LuzConsolidation || frmData.LuzCavitation
          || frmData.LmzAirBronchogram || frmData.LmzFibrosis || frmData.LmzConsolidation || frmData.LmzCavitation
          || frmData.LlzAirBronchogram || frmData.LlzFibrosis || frmData.LlzConsolidation || frmData.LlzCavitation) {
          report += "<p>" + "<b>" + text.opacitieslul.replace("{1}", frmData.opacitiesType).replace("{2}", arr.join('')) + "</b>" + "</p>";

        }
      }

      if (frmData.opacitiesLML) {
        let arr = []
        if (frmData.LmzAirBronchogram && !frmData.LmzFibrosis && !frmData.LmzConsolidation && !frmData.LmzCavitation) {
          arr.push('with air bronchogram');
        }
        if (frmData.LmzFibrosis && !frmData.LmzAirBronchogram && !frmData.LmzCavitation && !frmData.LmzConsolidation) {
          arr.push('without air bronchogram s/o fibrosis');
        }
        if (frmData.LmzConsolidation && !frmData.LmzAirBronchogram && !frmData.LmzCavitation && !frmData.LmzFibrosis) {
          arr.push('without air bronchogram s/o consolidation')
        }
        if (frmData.LmzCavitation && !frmData.LmzAirBronchogram && !frmData.LmzConsolidation && !frmData.LmzFibrosis) {
          arr.push('without air bronchogram s/o cavitation');
        }

        if (frmData.LmzAirBronchogram && frmData.LmzFibrosis && !frmData.LmzConsolidation && !frmData.LmzCavitation) {
          arr.push('with air bronchogram s/o fibrosis.');
        }
        if (frmData.LmzAirBronchogram && !frmData.LmzFibrosis && frmData.LmzConsolidation && !frmData.LmzCavitation) {
          arr.push('with air bronchogram s/o consolidation.');
        }
        if (frmData.LmzAirBronchogram && !frmData.LmzFibrosis && !frmData.LmzConsolidation && frmData.LmzCavitation) {
          arr.push('with air bronchogram s/o cavitation.');
        }
        if (!frmData.LmzAirBronchogram && frmData.LmzFibrosis && frmData.LmzConsolidation && !frmData.LmzCavitation) {
          arr.push('without air bronchogram s/o fibrosis and consolidation.');
        }
        if (!frmData.LmzAirBronchogram && frmData.LmzFibrosis && !frmData.LmzConsolidation && frmData.LmzCavitation) {
          arr.push('without air bronchogram s/o fibrosis and cavitation.');
        }
        if (!frmData.LmzAirBronchogram && !frmData.LmzFibrosis && frmData.LmzConsolidation && frmData.LmzCavitation) {
          arr.push('without air bronchogram s/o consolidation and cavitation.');
        }

        if (frmData.LmzAirBronchogram && frmData.LmzFibrosis && frmData.LmzConsolidation && !frmData.LmzCavitation) {
          arr.push('with air bronchogram s/o fibrosis and consolidation.');
        }
        if (frmData.LmzAirBronchogram && frmData.LmzFibrosis && !frmData.LmzConsolidation && frmData.LmzCavitation) {
          arr.push('with air bronchogram s/o fibrosis and cavitation.');
        }
        if (frmData.LmzAirBronchogram && !frmData.LmzFibrosis && frmData.LmzConsolidation && frmData.LmzCavitation) {
          arr.push('with air bronchogram s/o consolidation and cavitation.');
        }
        if (!frmData.LmzAirBronchogram && frmData.LmzFibrosis && frmData.LmzConsolidation && frmData.LmzCavitation) {
          arr.push('without air bronchogram s/o fibrosis, consolidation and cavitation.');
        }

        if (frmData.LmzAirBronchogram && frmData.LmzFibrosis && frmData.LmzConsolidation && frmData.LmzCavitation) {
          arr.push('with air bronchogram s/o fibrosis, consolidation and cavitation.');
        }

        if (frmData.RuzAirBronchogram || frmData.RuzFibrosis || frmData.RuzConsolidation || frmData.RuzCavitation
          || frmData.RmzAirBronchogram || frmData.RmzFibrosis || frmData.RmzConsolidation || frmData.RmzCavitation
          || frmData.RlzAirBronchogram || frmData.RlzFibrosis || frmData.RlzConsolidation || frmData.RlzCavitation
          || frmData.LuzAirBronchogram || frmData.LuzFibrosis || frmData.LuzConsolidation || frmData.LuzCavitation
          || frmData.LmzAirBronchogram || frmData.LmzFibrosis || frmData.LmzConsolidation || frmData.LmzCavitation
          || frmData.LlzAirBronchogram || frmData.LlzFibrosis || frmData.LlzConsolidation || frmData.LlzCavitation) {
          report += "<p>" + "<b>" + text.opacitieslml.replace("{1}", frmData.opacitiesType).replace("{2}", arr.join('')) + "</b>" + "</p>";

        }
      }

      if (frmData.opacitiesLLL) {
        let arr = []
        if (frmData.LlzAirBronchogram && !frmData.LlzFibrosis && !frmData.LlzConsolidation && !frmData.LlzCavitation) {
          arr.push('with air bronchogram');
        }
        if (frmData.LlzFibrosis && !frmData.LlzAirBronchogram && !frmData.LlzCavitation && !frmData.LlzConsolidation) {
          arr.push('without air bronchogram s/o fibrosis');
        }
        if (frmData.LlzConsolidation && !frmData.LlzAirBronchogram && !frmData.LlzCavitation && !frmData.LlzFibrosis) {
          arr.push('without air bronchogram s/o consolidation');
        }
        if (frmData.LlzCavitation && !frmData.LlzAirBronchogram && !frmData.LlzConsolidation && !frmData.LlzFibrosis) {
          arr.push('without air bronchogram s/o cavitation');
        }

        if (frmData.LlzAirBronchogram && frmData.LlzFibrosis && !frmData.LlzConsolidation && !frmData.LlzCavitation) {
          arr.push('with air bronchogram s/o fibrosis.');
        }
        if (frmData.LlzAirBronchogram && !frmData.LlzFibrosis && frmData.LlzConsolidation && !frmData.LlzCavitation) {
          arr.push('with air bronchogram s/o consolidation.');
        }
        if (frmData.LlzAirBronchogram && !frmData.LlzFibrosis && !frmData.LlzConsolidation && frmData.LlzCavitation) {
          arr.push('with air bronchogram s/o cavitation.');
        }
        if (!frmData.LlzAirBronchogram && frmData.LlzFibrosis && frmData.LlzConsolidation && !frmData.LlzCavitation) {
          arr.push('without air bronchogram s/o fibrosis and consolidation.');
        }
        if (!frmData.LlzAirBronchogram && frmData.LlzFibrosis && !frmData.LlzConsolidation && frmData.LlzCavitation) {
          arr.push('without air bronchogram s/o fibrosis and cavitation.');
        }
        if (!frmData.LlzAirBronchogram && !frmData.LlzFibrosis && frmData.LlzConsolidation && frmData.LlzCavitation) {
          arr.push('without air bronchogram s/o consolidation and cavitation.');
        }

        if (frmData.LlzAirBronchogram && frmData.LlzFibrosis && frmData.LlzConsolidation && !frmData.LlzCavitation) {
          arr.push('with air bronchogram s/o fibrosis and consolidation.');
        }
        if (frmData.LlzAirBronchogram && frmData.LlzFibrosis && !frmData.LlzConsolidation && frmData.LlzCavitation) {
          arr.push('with air bronchogram s/o fibrosis and cavitation.');
        }
        if (frmData.LlzAirBronchogram && !frmData.LlzFibrosis && frmData.LlzConsolidation && frmData.LlzCavitation) {
          arr.push('with air bronchogram s/o consolidation and cavitation.');
        }
        if (!frmData.LlzAirBronchogram && frmData.LlzFibrosis && frmData.LlzConsolidation && frmData.LlzCavitation) {
          arr.push('without air bronchogram s/o fibrosis, consolidation and cavitation.');
        }

        if (frmData.LlzAirBronchogram && frmData.LlzFibrosis && frmData.LlzConsolidation && frmData.LlzCavitation) {
          arr.push('with air bronchogram s/o fibrosis, consolidation and cavitation.');
        }

        if (frmData.RuzAirBronchogram || frmData.RuzFibrosis || frmData.RuzConsolidation || frmData.RuzCavitation
          || frmData.RmzAirBronchogram || frmData.RmzFibrosis || frmData.RmzConsolidation || frmData.RmzCavitation
          || frmData.RlzAirBronchogram || frmData.RlzFibrosis || frmData.RlzConsolidation || frmData.RlzCavitation
          || frmData.LuzAirBronchogram || frmData.LuzFibrosis || frmData.LuzConsolidation || frmData.LuzCavitation
          || frmData.LmzAirBronchogram || frmData.LmzFibrosis || frmData.LmzConsolidation || frmData.LmzCavitation
          || frmData.LlzAirBronchogram || frmData.LlzFibrosis || frmData.LlzConsolidation || frmData.LlzCavitation) {
          report += "<p>" + "<b>" + text.opacitieslll.replace("{1}", frmData.opacitiesType).replace("{2}", arr.join('')) + "</b>" + "</p>";

        }
      }
    }

    // **************************************************MILD-HAZINESS********************************************************************
    if (frmData.mildHaziness) {
      let arr = []
      // ********************Single OpacitiesType*****************Date: 05/03/22 Hitesh Mishra******
      if (frmData.mildHazinessRUL && !frmData.mildHazinessRML && !frmData.mildHazinessRLL && !frmData.mildHazinessLUL && !frmData.mildHazinessLLL && !frmData.mildHazinessLML) {
        arr.push("right upper zone")
      }
      if (frmData.mildHazinessRML && !frmData.mildHazinessRUL && !frmData.mildHazinessRLL && !frmData.mildHazinessLUL && !frmData.mildHazinessLLL && !frmData.mildHazinessLML) {
        arr.push("right middle zone");
      }
      if (frmData.mildHazinessRLL && !frmData.mildHazinessRML && !frmData.mildHazinessRUL && !frmData.mildHazinessLUL && !frmData.mildHazinessLLL && !frmData.mildHazinessLML) {
        arr.push("right lower zone");
      }
      if (frmData.mildHazinessLUL && !frmData.mildHazinessRUL && !frmData.mildHazinessRML && !frmData.mildHazinessRLL && !frmData.mildHazinessLLL && !frmData.mildHazinessLML) {
        arr.push("left upper zone");
      }
      if (frmData.mildHazinessLML && !frmData.mildHazinessRUL && !frmData.mildHazinessRLL && !frmData.mildHazinessRML && !frmData.mildHazinessLUL && !frmData.mildHazinessLLL) {
        arr.push('left middle zone');
      }
      if (frmData.mildHazinessLLL && !frmData.mildHazinessRUL && !frmData.mildHazinessRML && !frmData.mildHazinessRLL && !frmData.mildHazinessLUL && !frmData.mildHazinessLML) {
        arr.push("left lower zone");
      }

      // **************************2 Combinations*************************
      if (frmData.mildHazinessRUL && frmData.mildHazinessLUL && !frmData.mildHazinessRML && !frmData.mildHazinessRLL && !frmData.mildHazinessLLL && !frmData.mildHazinessLML) {
        arr.push("bilateral upper zone");
      }
      if (frmData.mildHazinessRLL && frmData.mildHazinessLLL && !frmData.mildHazinessRUL && !frmData.mildHazinessLUL && !frmData.mildHazinessRML && !frmData.mildHazinessLML) {
        arr.push("bilateral lower zone");
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessRML && !frmData.mildHazinessLML && !frmData.mildHazinessLLL && !frmData.mildHazinessLUL && !frmData.mildHazinessRLL) {
        arr.push('right upper zone, right middle zone');
      }
      if (frmData.mildHazinessLUL && frmData.mildHazinessLLL && !frmData.mildHazinessRLL && !frmData.mildHazinessRML && !frmData.mildHazinessRUL && !frmData.mildHazinessLML) {
        arr.push("left upper zone, left lower zone");
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessRLL && !frmData.mildHazinessRML && !frmData.mildHazinessLUL && !frmData.mildHazinessLLL && !frmData.mildHazinessLML) {
        arr.push('right upper zone, right lower zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessLML && !frmData.mildHazinessLUL && !frmData.mildHazinessRLL && !frmData.mildHazinessRML && !frmData.mildHazinessLLL) {
        arr.push('right upper zone, left middle zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessLLL && !frmData.mildHazinessRML && !frmData.mildHazinessLUL && !frmData.mildHazinessRLL && !frmData.mildHazinessLML) {
        arr.push('right upper zone, left lower zone');
      }
      if (frmData.mildHazinessRML && frmData.mildHazinessRLL && !frmData.mildHazinessRUL && !frmData.mildHazinessLUL && !frmData.mildHazinessLLL && !frmData.mildHazinessLML) {
        arr.push('right middle zone, right lower zone');
      }
      if (frmData.mildHazinessRML && frmData.mildHazinessLML && !frmData.mildHazinessRUL && !frmData.mildHazinessLUL && !frmData.mildHazinessLLL && !frmData.mildHazinessRLL) {
        arr.push('bilateral middle zone');
      }
      if (frmData.mildHazinessRLL && frmData.mildHazinessLML && !frmData.mildHazinessRML && !frmData.mildHazinessRUL && !frmData.mildHazinessLUL && !frmData.mildHazinessLLL) {
        arr.push('right lower zone, left middle zone');
      }
      if (frmData.mildHazinessLUL && frmData.mildHazinessLML && !frmData.mildHazinessRLL && !frmData.mildHazinessRML && !frmData.mildHazinessRUL && !frmData.mildHazinessLLL) {
        arr.push('left upper zone, left middle zone');
      }
      if (frmData.mildHazinessRML && frmData.mildHazinessLUL && !frmData.mildHazinessRUL && !frmData.mildHazinessRLL && !frmData.mildHazinessLLL && !frmData.mildHazinessLML) {
        arr.push('right middle zone, left upper zone');
      }
      if (frmData.mildHazinessRML && frmData.mildHazinessLLL && !frmData.mildHazinessRUL && !frmData.mildHazinessRLL && !frmData.mildHazinessLUL && !frmData.mildHazinessLML) {
        arr.push('right middle zone, left lower zone');
      }
      if (frmData.mildHazinessRLL && frmData.mildHazinessLUL && !frmData.mildHazinessRUL && !frmData.mildHazinessRML && !frmData.mildHazinessLLL && !frmData.mildHazinessLML) {
        arr.push('right lower zone, left upper zone');
      }
      if (frmData.mildHazinessLML && frmData.mildHazinessLLL && !frmData.mildHazinessRUL && !frmData.mildHazinessRML && !frmData.mildHazinessRLL && !frmData.mildHazinessLUL) {
        arr.push('left middle zone, left lower zone')
      }

      // ************************ 3 Combinations******************************
      if (frmData.mildHazinessRUL && frmData.mildHazinessRML && frmData.mildHazinessRLL && !frmData.mildHazinessLUL && !frmData.mildHazinessLLL && !frmData.mildHazinessLML) {
        arr.push('right lung');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessRML && frmData.mildHazinessLUL && !frmData.mildHazinessRLL && !frmData.mildHazinessLLL && !frmData.mildHazinessLML) {
        arr.push('bilateral upper zone, right middle zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessRML && frmData.mildHazinessLML && !frmData.mildHazinessRLL && !frmData.mildHazinessLUL && !frmData.mildHazinessLLL) {
        arr.push('bilateral middle zone, right upper zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessRML && frmData.mildHazinessLLL && !frmData.mildHazinessLML && !frmData.mildHazinessLUL && !frmData.mildHazinessRLL) {
        arr.push('right upper zone, right middle zone, left lower zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessRLL && frmData.mildHazinessLUL && !frmData.mildHazinessRML && !frmData.mildHazinessLLL && !frmData.mildHazinessLML) {
        arr.push('bilateral upper zone, right lower zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessRLL && frmData.mildHazinessLML && !frmData.mildHazinessLUL && !frmData.mildHazinessLLL && !frmData.mildHazinessRML) {
        arr.push('right upper zone, right lower zone, left middle zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessRLL && frmData.mildHazinessLLL && !frmData.mildHazinessLUL && !frmData.mildHazinessRML && !frmData.mildHazinessLML) {
        arr.push('bilateral lower zone, right upper zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessLUL && frmData.mildHazinessLML && !frmData.mildHazinessRML && !frmData.mildHazinessRLL && !frmData.mildHazinessLLL) {
        arr.push('bilateral upper zone, left middle zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessLUL && frmData.mildHazinessLLL && !frmData.mildHazinessRML && !frmData.mildHazinessRLL && !frmData.mildHazinessLML) {
        arr.push('bilateral upper zone, left lower zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessLML && frmData.mildHazinessLLL && !frmData.mildHazinessLUL && !frmData.mildHazinessRLL && !frmData.mildHazinessRML) {
        arr.push('right upper zone, left middle zone, left lower zone');
      }
      if (frmData.mildHazinessRML && frmData.mildHazinessRLL && frmData.mildHazinessLUL && !frmData.mildHazinessLLL && !frmData.mildHazinessLML && !frmData.mildHazinessRUL) {
        arr.push('right middle zone, right lower zone, left upper zone');
      }
      if (frmData.mildHazinessRML && frmData.mildHazinessLUL && frmData.mildHazinessLLL && !frmData.mildHazinessLML && !frmData.mildHazinessRUL && !frmData.mildHazinessRLL) {
        arr.push('right middle zone, left upper zone, left lower zone');
      }
      if (frmData.mildHazinessRLL && frmData.mildHazinessLUL && frmData.mildHazinessLLL && !frmData.mildHazinessLML && !frmData.mildHazinessRML && !frmData.mildHazinessRUL) {
        arr.push('right lower zone, left upper zone, left lower zone');
      }
      if (frmData.mildHazinessRLL && frmData.mildHazinessLML && frmData.mildHazinessLLL && !frmData.mildHazinessLUL && !frmData.mildHazinessRML && !frmData.mildHazinessRUL) {
        arr.push('bilateral lower zone, left middle zone');
      }
      if (frmData.mildHazinessRML && frmData.mildHazinessRLL && frmData.mildHazinessLML && !frmData.mildHazinessLLL && !frmData.mildHazinessLUL && !frmData.mildHazinessRUL) {
        arr.push('bilateral middle zone, right lower zone');
      }
      if (frmData.mildHazinessLLL && frmData.mildHazinessLML && frmData.mildHazinessLUL && !frmData.mildHazinessRLL && !frmData.mildHazinessRML && !frmData.mildHazinessRUL) {
        arr.push('left lung');
      }
      if (frmData.mildHazinessRML && frmData.mildHazinessRLL && frmData.mildHazinessLLL && !frmData.mildHazinessRUL && !frmData.mildHazinessLUL && !frmData.mildHazinessLML) {
        arr.push('bilateral lower zone, right middle zone');
      }
      if (frmData.mildHazinessRML && frmData.mildHazinessLUL && frmData.mildHazinessLML && !frmData.mildHazinessRUL && !frmData.mildHazinessRLL && !frmData.mildHazinessLLL) {
        arr.push("bilateral middle zone, left upper zone");
      }
      if (frmData.mildHazinessRML && frmData.mildHazinessLML && frmData.mildHazinessLLL && !frmData.mildHazinessRUL && !frmData.mildHazinessRLL && !frmData.mildHazinessLUL) {
        arr.push('bilateral middle zone, left lower zone');
      }
      if (frmData.mildHazinessRLL && frmData.mildHazinessLUL && frmData.mildHazinessLML && !frmData.mildHazinessRUL && !frmData.mildHazinessRML && !frmData.mildHazinessLLL) {
        arr.push("right lower zone, left upper zone, left middle zone");
      }


      // ***************************4 Combination.************************************
      if (frmData.mildHazinessRUL && frmData.mildHazinessRML && frmData.mildHazinessRLL && frmData.mildHazinessLUL && !frmData.mildHazinessLLL && !frmData.mildHazinessLML) {
        arr.push('right lung, left upper zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessRML && frmData.mildHazinessRLL && frmData.mildHazinessLML && !frmData.mildHazinessLLL && !frmData.mildHazinessLUL) {
        arr.push('right lung, left middle zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessRML && frmData.mildHazinessRLL && frmData.mildHazinessLLL && !frmData.mildHazinessLUL && !frmData.mildHazinessLML) {
        arr.push('right lung, left lower zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessRML && frmData.mildHazinessLUL && frmData.mildHazinessLML && !frmData.mildHazinessLLL && !frmData.mildHazinessRLL) {
        arr.push('bilateral middle zone, bilateral upper zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessRML && frmData.mildHazinessLUL && frmData.mildHazinessLLL && !frmData.mildHazinessRLL && !frmData.mildHazinessLML) {
        arr.push('bilateral upper zone, right middle zone, left lower zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessRLL && frmData.mildHazinessLUL && frmData.mildHazinessLML && !frmData.mildHazinessLLL && !frmData.mildHazinessRML) {
        arr.push('bilateral upper zone, right lower zone, left middle zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessRLL && frmData.mildHazinessLUL && frmData.mildHazinessLLL && !frmData.mildHazinessRML && !frmData.mildHazinessLML) {
        arr.push('bilateral upper zone, bilateral lower zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessRLL && frmData.mildHazinessLML && frmData.mildHazinessLLL && !frmData.mildHazinessRML && !frmData.mildHazinessLUL) {
        arr.push('bilateral lower zone, right upper zone, left middle zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessLUL && frmData.mildHazinessLML && frmData.mildHazinessLLL && !frmData.mildHazinessRLL && !frmData.mildHazinessRML) {
        arr.push('left lung, right upper zone');
      }
      if (frmData.mildHazinessRML && frmData.mildHazinessRLL && frmData.mildHazinessLUL && frmData.mildHazinessLML && !frmData.mildHazinessLLL && !frmData.mildHazinessRUL) {
        arr.push('bilateral middle zone, left upper zone, right lower zone');
      }
      if (frmData.mildHazinessRML && frmData.mildHazinessRLL && frmData.mildHazinessLUL && frmData.mildHazinessLLL && !frmData.mildHazinessRUL && !frmData.mildHazinessLML) {
        arr.push('bilateral lower zone, right middle zone, left upper zone');
      }
      if (frmData.mildHazinessRML && frmData.mildHazinessRLL && frmData.mildHazinessLML && frmData.mildHazinessLLL && !frmData.mildHazinessRUL && !frmData.mildHazinessLUL) {
        arr.push('bilateral middle zone, bilateral lower zone');
      }
      if (frmData.mildHazinessRML && frmData.mildHazinessLUL && frmData.mildHazinessLML && frmData.mildHazinessLLL && !frmData.mildHazinessRLL && !frmData.mildHazinessRUL) {
        arr.push('left lung, right middle zone');
      }
      if (frmData.mildHazinessRLL && frmData.mildHazinessLUL && frmData.mildHazinessLML && frmData.mildHazinessLLL && !frmData.mildHazinessRML && !frmData.mildHazinessRUL) {
        arr.push('left lung, right lower zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessRML && frmData.mildHazinessLML && frmData.mildHazinessLLL && !frmData.mildHazinessLUL && !frmData.mildHazinessRLL) {
        arr.push('bilateral middle zone, right upper zone, left lower zone');
      }


      // ****************************************5 Combination*************************************
      // if (frmData.mildHazinessRUL && frmData.mildHazinessRML && frmData.mildHazinessRLL && frmData.mildHazinessLUL && frmData.mildHazinessLLL && !frmData.mildHazinessLML) {
      //   arr.push("bilateral upper zone & bilateral lower zone & right middle zone");
      // }
      if (frmData.mildHazinessRUL && frmData.mildHazinessRML && frmData.mildHazinessRLL && frmData.mildHazinessLUL && frmData.mildHazinessLML && !frmData.mildHazinessLLL) {
        arr.push('bilateral upper zone, bilateral middle zone, right lower zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessRML && frmData.mildHazinessRLL && frmData.mildHazinessLML && frmData.mildHazinessLLL && !frmData.mildHazinessLUL) {
        arr.push('bilateral middle zone, bilateral lower zone, right upper zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessRML && frmData.mildHazinessLUL && frmData.mildHazinessLML && frmData.mildHazinessLLL && !frmData.mildHazinessRLL) {
        arr.push('bilateral upper zone, bilateral middle zone, left lower zone');
      }
      if (frmData.mildHazinessRUL && frmData.mildHazinessRLL && frmData.mildHazinessLUL && frmData.mildHazinessLML && frmData.mildHazinessLLL && !frmData.mildHazinessRML) {
        arr.push('bilateral upper zone, bilateral lower zone, left middle zone');
      }
      if (frmData.mildHazinessRML && frmData.mildHazinessRLL && frmData.mildHazinessLUL && frmData.mildHazinessLML && frmData.mildHazinessLLL && !frmData.mildHazinessRUL) {
        arr.push('bilateral middle zone, bilateral lower zone, left upper zone');
      }

      // **************************6 Combination. ***************************************
      if (frmData.mildHazinessRUL && frmData.mildHazinessRML && frmData.mildHazinessRLL && frmData.mildHazinessLUL && frmData.mildHazinessLLL && frmData.mildHazinessLML) {
        arr.push('both lungs');
      }
      report += "<p>" + "<b>" + text.mildHaziness.replace("{1}", arr.join(', ')) + "</b>" + "</p>";


      if (frmData.mildHazinessText) {
        report += "<p>" + "<b>" + frmData.mildHazinessText + "</b>" + "</p>";
      }
    }

    if (frmData.opacities || frmData.mildHaziness) {
      let arr = []
      if (frmData.opacitiesRUL || frmData.mildHazinessRUL) {
        arr.push("right upper zone")
      }
      if (frmData.opacitiesRML || frmData.mildHazinessRML) {
        arr.push("right middle zone")
      }
      if (frmData.opacitiesRLL || frmData.mildHazinessRLL) {
        arr.push("right lower zone")
      }
      if (frmData.opacitiesLUL || frmData.mildHazinessLUL) {
        arr.push("left upper zone")
      }
      if (frmData.opacitiesLML || frmData.mildHazinessLML) {
        arr.push("left middle zone")
      }
      if (frmData.opacitiesLLL || frmData.mildHazinessLLL) {
        arr.push("left lower zone")
      }
      impression.push("<p>" + "<b>" + text.opacitiesImpression.replace("{1}", arr.join(' & ')) + "</b>" + "</p>");

    }


    //****************************************RIGHT HILAR SHADOW 04/03/22(Hitesh Mishra)*****************************************
    if (frmData.rightHilarShadow === frmData.leftHilarShadow && frmData.rightHilarShadow !== undefined) {
      if (frmData.rightHilarShadow === 'Calcifications' && frmData.CalcificationImpressionLHS &&
        frmData.CalcificationImpressionRHS) {
        report += "<p>" + "<b>" + text.bothCalcification + "</b>" + "</p>";
      }
      else {
        if (frmData.rightHilarShadow === 'prominent' && frmData.ProminentImpressionLHS &&
          frmData.ProminentImpressionRHS) {
          report += "<p>" + "<b>" + text.bothhilarshadow.replace("{1}", frmData.rightHilarShadow) + "</b>" + "</p>";
        }
      }
      // ******************Without impression.************************************
      // if (frmData.rightHilarShadow === 'Calcifications') {
      //   report += "<p>" + "<b>" + text.bothCalcification + "</b>" + "</p>";
      // }
      // else {
      //   if (frmData.rightHilarShadow === 'Prominent') {
      //     report += "<p>" + "<b>" + text.bothhilarshadow.replace("{1}", frmData.rightHilarShadow) + "</b>" + "</p>";
      //   }
      // }
    }
    else {
      if (frmData.rightHilarShadow !== undefined || frmData.leftHilarShadow !== undefined) {
        if (frmData.rightHilarShadow) {
          if (frmData.rightHilarShadow === 'calcifications' && frmData.CalcificationImpressionRHS) {
            report += "<p>" + "<b>" + text.righthilarshadowCalcification + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + frmData.CalcificationImpressionRHS + "</b>" + "</p>");
          }
          else {
            if (frmData.rightHilarShadow === 'prominent' && frmData.ProminentImpressionRHS) {
              report += "<p>" + "<b>" + text.righthilarshadow.replace("{1}", frmData.rightHilarShadow) + "</b>" + "</p>";
              impression.push("<p>" + "<b>" + frmData.ProminentImpressionRHS + "</b>" + "</p>");
            }
          }

          // if (frmData.rightHilarShadow === 'Calcifications') {
          //   report += "<p>" + "<b>" + text.righthilarshadowCalcification + "</b>" + "</p>";
          //   impression.push("<p>" + "<b>" + frmData.CalcificationImpressionRHS + "</b>" + "</p>");
          // }
          // else {
          //   if (frmData.rightHilarShadow === 'Prominent') {
          //     report += "<p>" + "<b>" + text.righthilarshadow.replace("{1}", frmData.rightHilarShadow) + "</b>" + "</p>";
          //     impression.push("<p>" + "<b>" + frmData.ProminentImpressionRHS + "</b>" + "</p>");
          //   }
          // }
        }
        // *************************************LEFT HILAR SHADOW 05/03/22(Hitesh Mishra)***********************************************
        if (frmData.leftHilarShadow) {
          if (frmData.leftHilarShadow === 'calcifications' && frmData.CalcificationImpressionLHS) {
            report += "<p>" + "<b>" + text.lefthilarshadowCalcification + "</b>" + "</p>";
            impression.push("<b>" + frmData.CalcificationImpressionLHS + "</b>");
          }
          else {
            if (frmData.leftHilarShadow === 'prominent' && frmData.ProminentImpressionLHS) {
              report += "<p>" + "<b>" + text.lefthilarshadow.replace("{1}", frmData.leftHilarShadow) + "</b>" + "</p>";
              impression.push("<b>" + frmData.ProminentImpressionLHS + "</b>");
            }
          }

          // if (frmData.leftHilarShadow === 'Calcifications') {
          //   report += "<p>" + "<b>" + text.lefthilarshadowCalcification + "</b>" + "</p>";
          //   impression.push("<p>" + "<b>" + frmData.CalcificationImpressionLHS + "</b>" + "</p>");
          // }
          // else {
          //   if (frmData.leftHilarShadow === 'Prominent') {
          //     report += "<p>" + "<b>" + text.lefthilarshadow.replace("{1}", frmData.leftHilarShadow) + "</b>" + "</p>";
          //     impression.push("<p>" + "<b>" + frmData.ProminentImpressionLHS + "</b>" + "</p>");
          //   }
          // }


        }
      }
    }

    // *****************************************Both CP********************************************************

    if (frmData.rightCostophrenicAngle === frmData.leftCostophrenicAngle && frmData.rightCostophrenicAngle !== undefined) {
      if (frmData.rightCostophrenicAngle === 'obliterated' && frmData.rightObliteratedType) {
        report += "<p>" + "<b>" + text.bothCPAngle.replace("{1}", frmData.rightCostophrenicAngle) + "</p>" + "</b>";
        impression.push("<b>" + text.bothCPAngleImpression.replace("{1}", frmData.rightCostophrenicAngle) + "</p>");
      }
    }

    if (frmData.rightCostophrenicAngle === frmData.leftCostophrenicAngle && frmData.rightCostophrenicAngle !== undefined) {
      if (frmData.rightCostophrenicAngle === 'obliterated' && !frmData.rightObliteratedType) {
        report += "<p>" + "<b>" + text.bothCPAngle.replace("{1}", frmData.rightCostophrenicAngle) + "</b>" + "</p>";
        impression.push("<b>" + text.bothCPAngle.replace("{1}", frmData.rightCostophrenicAngle) + "</b>");
      }

    }

    // **************************************Single CP*************************************************
    else {
      if (frmData.rightCostophrenicAngle !== undefined || frmData.leftCostophrenicAngle !== undefined) {
        if (frmData.rightCostophrenicAngle) {
          if (frmData.rightCostophrenicAngle === 'obliterated' && !frmData.rightObliteratedType) {
            report += "<p>" + "<b>" + text.rightCPAngle.replace("{1}", frmData.rightCostophrenicAngle) + "</b>" + "</p>";
            impression.push("<b>" + text.rightCPAngle.replace("{1}", frmData.rightCostophrenicAngle) + "</b>")
          }
        }
        if (frmData.rightCostophrenicAngle) {
          if (frmData.rightCostophrenicAngle === 'obliterated' && frmData.rightObliteratedType) {
            report += "<p>" + "<b>" + text.rightCPAngle.replace("{1}", frmData.rightCostophrenicAngle) + "</b>" + "</p>";
            impression.push("<b>" + text.rightCPAngleImpression.replace("{1}", frmData.rightCostophrenicAngle) + "</b>");
          }
        }

        if (frmData.leftCostophrenicAngle) {
          if (frmData.leftCostophrenicAngle === 'obliterated' && !frmData.leftObliteratedType) {
            report += "<p>" + "<b>" + text.leftCPAngle.replace("{1}", frmData.leftCostophrenicAngle) + "</b>" + "</p>";
            impression.push("<b>" + text.leftCPAngle.replace("{1}", frmData.leftCostophrenicAngle) + "</b>");
          }
        }
        if (frmData.leftCostophrenicAngle) {
          if (frmData.leftCostophrenicAngle === 'obliterated' && frmData.leftObliteratedType) {
            report += "<p>" + "<b>" + text.leftCPAngle.replace("{1}", frmData.leftCostophrenicAngle) + "</b>" + "</p>";
            impression.push("<b>" + text.leftCPAngleImpression.replace("{1}", frmData.leftCostophrenicAngle) + "</b>");
          }
        }

      }
    }

    // **************************************PNEUMOTHORAX******************************************

    if (frmData.pneumothorax) {
      if (frmData.pneumothoraxR && !frmData.pneumothoraxL) {
        if (frmData.pneumothoraxRType === 'Mild'
          || frmData.pneumothoraxRType === 'Moderate'
          || frmData.pneumothoraxRType === 'Severe') {
          report += "<p>" + "<b>" + text.pneumothoraxRTypes.replace("{1}", frmData.pneumothoraxRType) + "</b>" + "</p>";
          impression.push("<b>" + text.pneumothoraxRTypesImpression.replace("{1}", frmData.pneumothoraxRType) + "</b>");
        }
      }

      if (frmData.pneumothoraxL && !frmData.pneumothoraxR) {
        if (frmData.pneumothoraxLType === 'Mild'
          || frmData.pneumothoraxLType === 'Moderate'
          || frmData.pneumothoraxLType === 'Severe') {
          report += "<p>" + "<b>" + text.pneumothoraxLTypes.replace("{1}", frmData.pneumothoraxLType) + "</b>" + "</p>";
          impression.push("<b>" + text.pneumothoraxLTypesImpression.replace("{1}", frmData.pneumothoraxLType) + "</b>");
        }
      }
      if (frmData.pneumothoraxL && frmData.pneumothoraxR) {
        if (frmData.pneumothoraxLType === 'Mild' && frmData.pneumothoraxRType === 'Mild') {
          report += "<p>" + "<b>" + text.pneumothoraxBothPartialTypes.replace("{1}", 'both') + "</b>" + "</b>";
          impression.push("<b>" + text.pneumothoraxBothPartialTypesImpression.replace("{1}", 'both') + "</b>");
        }

        if (frmData.pneumothoraxLType === 'Moderate' && frmData.pneumothoraxRType === 'Moderate') {
          report += "<p>" + "<b>" + text.pneumothoraxBothCompleteTypes.replace("{1}", 'both') + "</b>" + "</b>";
          impression.push("<b>" + text.pneumothoraxBothCompleteTypesImpression.replace("{1}", 'both') + "</b>");
        }

        if (frmData.pneumothoraxLType === 'Severe' && frmData.pneumothoraxRType === 'Severe') {
          report += "<p>" + "<b>" + text.pneumothoraxBothMediastinalTypes.replace("{1}", 'both') + "</b>" + "</b>";
          impression.push("<b>" + text.pneumothoraxBothMediastinalTypesImpression.replace("{1}", 'both') + "</b>");
        }

        if (frmData.pneumothoraxLType === 'Mild' && frmData.pneumothoraxRType === 'Moderate') {
          report += "<p>" + "<b>" + "Mild pneumothorax noted on left Side.<br><br>Moderate pneumothorax noted on right side." + "</b>" + "</b>";
          impression.push("<b>" + "Mild pneumothorax- Left Side.<br><br>Moderate pneumothorax- Right Side." + "</b>");
        }

        if (frmData.pneumothoraxLType === 'Mild' && frmData.pneumothoraxRType === 'Severe') {
          report += "<p>" + "<b>" + "Pneumothorax noted on left side with partial.<br><br>Pneumothorax noted on right side with mediastinal shift." + "</b>" + "</b>";
          impression.push("<b>" + "Mild pneumothorax- Left Side.<br><br>Severe pneumothorax- Right Side." + "</b>");
        }

        if (frmData.pneumothoraxLType === 'Moderate' && frmData.pneumothoraxRType === 'Mild') {
          report += "<p>" + "<b>" + "Moderate pneumothorax noted on left side.<br><br>Mild pneumothorax noted on right side." + "</b>" + "</b>";
          impression.push("<b>" + "Moderate pneumothorax- Left Side.<br><br>Mild pneumothorax- Right Side." + "</b>");
        }

        if (frmData.pneumothoraxLType === 'Moderate' && frmData.pneumothoraxRType === 'Severe') {
          report += "<p>" + "<b>" + "Moderate pneumothorax noted on left side.<br><br>Severe pneumothorax noted on right side." + "</b>" + "</b>";
          impression.push("<b>" + "Moderate pneumothorax- Left side.<br><br>Severe pneumothorax- Right Side." + "</b>");
        }

        if (frmData.pneumothoraxLType === 'Severe' && frmData.pneumothoraxRType === 'Mild') {
          report += "<p>" + "<b>" + "Severe pneumothorax noted on left side.<br><br>Mild pneumothorax noted on right side." + "</b>" + "</b>";
          impression.push("<b>" + "Severe pneumothorax- Left side.<br><br>Mild pneumothorax- Right Side." + "</b>");
        }

        if (frmData.pneumothoraxLType === 'Severe' && frmData.pneumothoraxRType === 'Moderate') {
          report += "<p>" + "<b>" + "Severe pneumothorax noted on left side.<br><br>Moderate pneumothorax noted on right side." + "</b>" + "</b>";
          impression.push("<b>" + "Severe pneumothorax- Left side.<br><br>Moderate pneumothorax- Right Side." + "</b>");
        }
      }
    }
    // ***********************************************CARFDIAC SILHOUETTE 05/03/22(Hitesh Mishra)***************************************

    if (frmData.cardiacSilhouette) {

      if (frmData.cardiacSilhouette === 'enlarged' && !frmData.enlargedFindings) {
        report += "<p>" + "<b>" + "Cardiomegaly seen." + "</b>" + "</p>";
        impression.push("<b>" + "Cardiomegaly seen." + "</b>");
      }
      if (frmData.cardiacSilhouette === 'enlarged' && frmData.enlargedFindings) {
        report += "<p>" + "<b>" + 'Cardiomegaly seen ' + frmData.enlargedFindings + "." + "</b>" + "</p>";
        impression.push("<b>" + 'Cardiomegaly seen ' + frmData.enlargedFindings + "." + "</b>");
      }
    }
    // Soft Tissue********************************************************************
    if (frmData.SoftTissue) {
      if (frmData.SoftText) {
        report += "<p>" + "<b>" + frmData.SoftText + "</b>" + "</p>";
        impression.push("<b>" + frmData.SoftText + "</b>");
      }
    }

    // ************************************Bony Thoracic Cage 05/03/33(Hitesh Mishra)**********************************************

    if (frmData.bonyThoracicCage) {

      if (frmData.sternalSutures) {
        report += "<p>" + "<b>" + "Sternal Sutures are present." + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + "Sternal Sutures present." + "</b>" + "</p>");
      }
      if (frmData.Clavicle) {
        if (frmData.ClavicleL && (frmData.ClavicleLRType === "proximal one third" || frmData.ClavicleLRType === "middle one third" || frmData.ClavicleLRType === "distal one third")) {
          report += "<p>" + "<b>" + text.clavicleLeftType.replace("{1}", frmData.ClavicleLRType) + "</b>" + "</p>";
          if (!frmData.ClavicleR) {
            impression.push("<p>" + "<b>" + "Left clavicle fracture." + "</b>" + "</p>");
          }
        }
        if (frmData.ClavicleR && (frmData.ClavicleLRType1 === "proximal one third" || frmData.ClavicleLRType1 === "middle one third" || frmData.ClavicleLRType1 === "distal one third")) {
          report += "<p>" + "<b>" + text.clavicleRightType.replace("{1}", frmData.ClavicleLRType1) + "</b>" + "</p>";
          if (!frmData.ClavicleL) {
            impression.push("<p>" + "<b>" + "Right clavicle fracture." + "</b>" + "</p>");
          }
        }
        if (frmData.ClavicleL && frmData.ClavicleR
          && (frmData.ClavicleLRType === "proximal one third" || frmData.ClavicleLRType === "middle one third" || frmData.ClavicleLRType === "distal one third")
          && (frmData.ClavicleLRType1 === "proximal one third" || frmData.ClavicleLRType1 === "middle one third" || frmData.ClavicleLRType1 === "distal one third")) {
          impression.push("<p>" + "<b>" + " Bilateral clavicle fractures." + "</b>" + "</p>");
        }
      }
      if (frmData.ribFracture) {
        if (frmData.ribFractureL || frmData.ribFractureR || frmData.RibsR || frmData.RibsL) {
          if (frmData.RibsL && !frmData.RibsR) {
            report += "<p>" + "<b>" + text.FractureL.replace("{1}", frmData.RibsL) + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + text.FractureL.replace("{1}", frmData.RibsL) + "</b>" + "</p>");
          }
          if (frmData.RibsR && !frmData.RibsL) {
            report += "<p>" + "<b>" + text.FractureR.replace("{1}", frmData.RibsR) + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + text.FractureR.replace("{1}", frmData.RibsR) + "</b>" + "</p>");
          }

          if (frmData.RibsL && frmData.RibsR) {
            report += "<p>" + "<b>" + text.FractureL.replace("{1}", frmData.RibsL) + "</b>" + "</p>";
            report += "<p>" + "<b>" + text.FractureR.replace("{1}", frmData.RibsR) + "</b>" + "</p>";
            impression.push("<p>" + "<b>" + text.FractureL.replace("{1}", frmData.RibsL) + "</b>" + "</p>");
            impression.push("<p>" + "<b>" + text.FractureR.replace("{1}", frmData.RibsR) + "</b>" + "</p>");
          }

        }
      }
      if (frmData.bonyinfo) {
        report += "<p>" + "<b>" + frmData.bonyinfo + "</b>" + "</p>";
        impression.push("<p>" + "<b>" + frmData.bonyinfo + "</b>" + "</p>");
      }
    }

    //********************************Trachea And Severe**********************************

    if (frmData.tracheaAndMediastinalStructures) {
      if (frmData.tracheaAndMediastinalStructuresShifted) {
        report += "<p>" + "<b>" + text.tracheaAndMediastinalStructures.replace("{1}", frmData.tracheaAndMediastinalStructuresShifted).replace("{2}", frmData.tracheaAndMediastinalStructures) + "</b>" + "</p>";
        if (frmData.tracheaAndMediastinalLeftImpression) {
          impression.push("<p>" + "<b>" + frmData.tracheaAndMediastinalLeftImpression + "</b>" + "</p>");
        }
        else {
          impression.push("<p>" + frmData.tracheaAndMediastinalRightImpression + "</p>");
        }
      }
    }

    if (frmData.DomesOfDiaphragm) {
      if (frmData.DomesLeft || frmData.DomesRight) {
        if (frmData.DomesLeftType === 'Elevated') {
          if (frmData.DomesLeftElevatedType === 'Eventration' && !(frmData.DomesRightElevatedType || frmData.DomesRightType)) {
            report += "<p>" + "<b>" + "Left dome of diaphragm is elevated." + "</p>" + "</b>";
            impression.push("<p>" + "<b>" + "Left dome of diaphragm is elevated due to eventration." + "</p>" + "</b>")
          }
          if (frmData.DomesLeftElevatedType === 'Abdominal Distention' && !(frmData.DomesRightElevatedType || frmData.DomesRightType)) {
            report += "<p>" + "<b>" + "Left dome of diaphragm is elevated." + "</p>" + "</b>";
            impression.push("<p>" + "<b>" + "Left dome of diaphragm is elevated due to abdominal distention." + "</p>" + "</b>")
          }
        }

        if (frmData.DomesLeftType === 'Flattened' && !frmData.DomesRightType) {
          report += "<p>" + "<b>" + "Left dome of diaphragm is flattened." + "</p>" + "</b>";
          impression.push("<p>" + "<b>" + "Left dome of diaphragm is flattened." + "</p>" + "</b>")
        }

        if (frmData.DomesRightType === 'Elevated') {
          if (frmData.DomesRightElevatedType === 'Eventration' && !(frmData.DomesLeftElevatedType || frmData.DomesLeftType)) {
            report += "<p>" + "<b>" + "Right dome of diaphragm is elevated." + "</p>" + "</b>";
            impression.push("<p>" + "<b>" + "Right dome of diaphragm is elevated due to eventration." + "</p>" + "</b>")
          }
          if (frmData.DomesRightElevatedType === 'Abdominal Distention' && !(frmData.DomesLeftElevatedType || frmData.DomesLeftType)) {
            report += "<p>" + "<b>" + "Right dome of diaphragm is elevated." + "</p>" + "</b>";
            impression.push("<p>" + "<b>" + "Right dome of diaphragm is elevated due to abdominal distention." + "</p>" + "</b>")
          }
        }

        if (frmData.DomesRightType === 'Flattened' && !frmData.DomesLeftType) {
          report += "<p>" + "<b>" + "Right dome of diaphragm is flattened." + "</p>" + "</b>";
          impression.push("<p>" + "<b>" + "Right dome of diaphragm is flattened." + "</p>" + "</b>")
        }

        if (frmData.DomesLeftType === 'Elevated' && !frmData.DomesLeftElevatedType && !frmData.DomesRightType) {
          report += "<p>" + "<b>" + "Left dome of diaphragm is elevated." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Left dome of diaphragm is elevated." + "</b>" + "</p>")
        }
        if (frmData.DomesRightType === 'Elevated' && !frmData.DomesRightElevatedType && !frmData.DomesLeftType) {
          report += "<p>" + "<b>" + "Right dome of diaphragm is elevated." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Right dome of diaphragm is elevated." + "</b>" + "</p>");
        }
      }

      if (frmData.DomesLeftType && frmData.DomesRightType) {
        if (frmData.DomesLeftType === 'Flattened' && frmData.DomesRightType === 'Flattened') {
          report += "<p>" + "<b>" + "Both domes of diaphragm are flattened." + "</p>" + "</b>";
          impression.push("<p>" + "<b>" + "Both domes of diaphragm are flattened." + "</p>" + "</b>")
        }
        if (frmData.DomesLeftType === 'Elevated' && frmData.DomesRightType === 'Elevated' && !(frmData.DomesLeftElevatedType || frmData.DomesRightElevatedType)) {
          report += "<p>" + "<b>" + "Both domes of diaphragm are elevated." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Both domes of diaphragm are elevated." + "</b>" + "</p>");
        }
        if (frmData.DomesLeftElevatedType === 'Eventration' && frmData.DomesRightElevatedType === 'Eventration') {
          report += "<p>" + "<b>" + "Both domes of diaphragm are elevated." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Both domes of diaphragm are elevated due to eventration." + "</b>" + "</p>");
        }
        if (frmData.DomesLeftElevatedType === 'Abdominal Distention' && frmData.DomesRightElevatedType === 'Abdominal Distention') {
          report += "<p>" + "<b>" + "Both domes of diaphragm are elevated." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Both domes of diaphragm are elevated due to abdominal distention." + "</b>" + "</p>");
        }

        if (frmData.DomesLeftElevatedType === 'Eventration' && frmData.DomesRightElevatedType === 'Abdominal Distention') {
          report += "<p>" + "<b>" + "Left dome of diaphragm are elevated due to eventration.<br><br>Right dome of diaphragm is elevated due to abdominal distention." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Both domes of diaphragm are elevated." + "</b>" + "</p>");
        }

        if (frmData.DomesLeftElevatedType === 'Abdominal Distention' && frmData.DomesRightElevatedType === 'Eventration') {
          report += "<p>" + "<b>" + "Left dome of diaphragm is elevated due to abdominal distention.<br><br>Right dome of diaphragm is elevated due to eventration." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Both domes of diaphragm are elevated." + "</b>" + "</p>");
        }

        if (frmData.DomesLeftType === 'Elevated' && frmData.DomesRightElevatedType === 'Eventration' && !frmData.DomesLeftElevatedType) {
          report += "<p>" + "<b>" + "Left dome of diaphragm is elevated.<br><br>Right dome of diaphragm is elevated due to eventration." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Both domes of diaphragm are elevated." + "</b>" + "</p>");
        }
        if (frmData.DomesLeftType === 'Elevated' && frmData.DomesRightElevatedType === 'Abdominal Distention' && !frmData.DomesLeftElevatedType) {
          report += "<p>" + "<b>" + "Left dome of diaphragm are elevated.<br><br>Right dome of diaphragm is elevated due to addominal distention." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Both domes of diaphragm are elevated." + "</b>" + "</p>");
        }

        if (frmData.DomesLeftType === 'Flattened' && frmData.DomesRightType === 'Elevated' && !frmData.DomesRightElevatedType) {
          report += "<p>" + "<b>" + "Left dome of diaphragm is flattened.<br><br>Right dome of diaphragm is elevated." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Both domes of diaphragm are elevated." + "</b>" + "</p>");
        }

        if (frmData.DomesLeftType === 'Flattened' && frmData.DomesRightElevatedType === 'Eventration') {
          report += "<p>" + "<b>" + "Left dome of diaphragm is flattened.<br><br>Right dome of diaphragm is elevated due to eventration." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Both domes of diaphragm are elevated." + "</b>" + "</p>");
        }

        if (frmData.DomesLeftType === 'Flattened' && frmData.DomesRightElevatedType === 'Abdominal Distention') {
          report += "<p>" + "<b>" + "Left dome of diaphragm is flattened.<br><br>Right dome of diaphragm is elevated due to abdominal distention." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Both domes of diaphragm are elevated." + "</b>" + "</p>");
        }

        // Right ************************************

        if (frmData.DomesRightType === 'Elevated' && frmData.DomesLeftElevatedType === 'Eventration' && !frmData.DomesRightElevatedType) {
          report += "<p>" + "<b>" + "Right dome of diaphragm is elevated.<br><br>Left dome of diaphragm is elevated due to eventration." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Both domes of diaphragm are elevated." + "</b>" + "</p>");
        }
        if (frmData.DomesRightType === 'Elevated' && frmData.DomesRightElevatedType === 'Abdominal Distention' && !frmData.DomesRightElevatedType) {
          report += "<p>" + "<b>" + "Right dome of diaphragm is elevated.<br><br>Left dome of diaphragm is elevated due to abdominal distention." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Both domes of diaphragm are elevated." + "</b>" + "</p>");
        }

        if (frmData.DomesRightType === 'Flattened' && frmData.DomesLeftType === 'Elevated' && !frmData.DomesLeftElevatedType) {
          report += "<p>" + "<b>" + "Right dome of diaphragm is flattened.<br><br>Left dome of diaphragm is elevated." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Both domes of diaphragm are elevated." + "</b>" + "</p>");
        }

        if (frmData.DomesRightType === 'Flattened' && frmData.DomesLeftElevatedType === 'Eventration') {
          report += "<p>" + "<b>" + "Right dome of diaphragm is flattened.<br><br>Left dome of diaphragm is elevated due to eventration." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Both domes of diaphragm are elevated." + "</b>" + "</p>");
        }

        if (frmData.DomesRightType === 'Flattened' && frmData.DomesLeftElevatedType === 'Abdominal Distention') {
          report += "<p>" + "<b>" + "Right dome of diaphragm is flattened.<br><br>Left dome of diaphragm is elevated due to abdominal distention." + "</b>" + "</p>";
          impression.push("<p>" + "<b>" + "Both domes of diaphragm are elevated." + "</b>" + "</p>");
        }
      }


    }

    if (frmData.info) {
      report += "<p>" + "<b>" + frmData.info + "</b>" + "</p>";
      impression.push("<p>" + "<b>" + frmData.info + "</b>" + "</p>");
    }

    // ***********************************ET LINE AND CVP LINE******************************************
    if (frmData.etLine) {
      report += "<p>" + "<b>" + text.present.replace("{1}", "ET Line") + "</b>" + "</p>";
      impression.push("<p>" + "<b>" + "ET line in situ." + "</b>" + "</p>")
    }
    if (frmData.cvpLine) {
      report += "<p>" + "<b>" + text.present.replace("{1}", "CVP Line") + "</b>" + "</p>";
      impression.push("<p>" + "<b>" + "CVP line in situ." + "</b>" + "</p>")
    }
    if (frmData.tracheostomy) {
      report += "<p>" + "<b>" + text.tracheostomyinfo.replace("{1}", "Tracheostomy") + "</b>" + "</p>";
      impression.push("<p>" + "<b>" + "Tracheostomy tube in situ." + "</b>" + "</p>")
    }
    if (frmData.NGtube) {
      report += "<p>" + "<b>" + text.ngtube.replace("{1}", "Ng Tube") + "</b>" + "</p>";
      impression.push("<p>" + "<b>" + "Ng tube in situ." + "</b>" + "</p>")
    }


    // *******************************Opacities***********************************
    if ((frmData.opacitiesRUL || frmData.opacitiesRML || frmData.opacitiesRLL
      || frmData.mildHazinessRUL || frmData.mildHazinessRML || frmData.mildHazinessRLL)
      && !(frmData.opacitiesLUL || frmData.opacitiesLML || frmData.opacitiesLLL
        || frmData.mildHazinessLUL || frmData.mildHazinessLML || frmData.mildHazinessLLL
        || frmData.RuzAirBronchogram || frmData.RuzFibrosis || frmData.RuzConsolidation || frmData.RuzCavitation
        || frmData.RmzAirBronchogram || frmData.RmzFibrosis || frmData.RmzConsolidation || frmData.RmzCavitation
        || frmData.RlzAirBronchogram || frmData.RlzFibrosis || frmData.RlzConsolidation || frmData.RlzCavitation
        || frmData.LuzAirBronchogram || frmData.LuzFibrosis || frmData.LuzConsolidation || frmData.LuzCavitation
        || frmData.LmzAirBronchogram || frmData.LmzFibrosis || frmData.LmzConsolidation || frmData.LmzCavitation
        || frmData.LlzAirBronchogram || frmData.LlzFibrosis || frmData.LlzConsolidation || frmData.LlzCavitation)) {
      report += "<p>" + "Left lung is normal." + "</p>";
    }
    if ((frmData.opacitiesLUL || frmData.opacitiesLML || frmData.opacitiesLLL
      || frmData.mildHazinessLUL || frmData.mildHazinessLML || frmData.mildHazinessLLL)
      && !(frmData.opacitiesRUL || frmData.opacitiesRML || frmData.opacitiesRLL
        || frmData.mildHazinessRUL || frmData.mildHazinessRML || frmData.mildHazinessRLL
        || frmData.RuzAirBronchogram || frmData.RuzFibrosis || frmData.RuzConsolidation || frmData.RuzCavitation
        || frmData.RmzAirBronchogram || frmData.RmzFibrosis || frmData.RmzConsolidation || frmData.RmzCavitation
        || frmData.RlzAirBronchogram || frmData.RlzFibrosis || frmData.RlzConsolidation || frmData.RlzCavitation
        || frmData.LuzAirBronchogram || frmData.LuzFibrosis || frmData.LuzConsolidation || frmData.LuzCavitation
        || frmData.LmzAirBronchogram || frmData.LmzFibrosis || frmData.LmzConsolidation || frmData.LmzCavitation
        || frmData.LlzAirBronchogram || frmData.LlzFibrosis || frmData.LlzConsolidation || frmData.LlzCavitation)) {
      report += "<p>" + "Right lung is normal." + "</p>";
    }

    // ******************************Opacities Type*********************************
    if ((frmData.RuzAirBronchogram || frmData.RuzFibrosis || frmData.RuzConsolidation || frmData.RuzCavitation
      || frmData.RmzAirBronchogram || frmData.RmzFibrosis || frmData.RmzConsolidation || frmData.RmzCavitation
      || frmData.RlzAirBronchogram || frmData.RlzFibrosis || frmData.RlzConsolidation || frmData.RlzCavitation)
      && !(frmData.opacitiesLUL || frmData.opacitiesLML || frmData.opacitiesLLL ||
        frmData.mildHazinessLUL || frmData.mildHazinessLML || frmData.mildHazinessLLL ||
        frmData.LuzAirBronchogram || frmData.LuzFibrosis || frmData.LuzConsolidation || frmData.LuzCavitation
        || frmData.LmzAirBronchogram || frmData.LmzFibrosis || frmData.LmzConsolidation || frmData.LmzCavitation
        || frmData.LlzAirBronchogram || frmData.LlzFibrosis || frmData.LlzConsolidation || frmData.LlzCavitation)) {
      report += "<p>" + "Left lung is normal." + "</p>"
    }

    if ((frmData.LuzAirBronchogram || frmData.LuzFibrosis || frmData.LuzConsolidation || frmData.LuzCavitation
      || frmData.LmzAirBronchogram || frmData.LmzFibrosis || frmData.LmzConsolidation || frmData.LmzCavitation
      || frmData.LlzAirBronchogram || frmData.LlzFibrosis || frmData.LlzConsolidation || frmData.LlzCavitation)
      && !(frmData.opacitiesRUL || frmData.opacitiesRML || frmData.opacitiesRLL ||
        frmData.mildHazinessRUL || frmData.mildHazinessRML || frmData.mildHazinessRLL ||
        frmData.RuzAirBronchogram || frmData.RuzFibrosis || frmData.RuzConsolidation || frmData.RuzCavitation
        || frmData.RmzAirBronchogram || frmData.RmzFibrosis || frmData.RmzConsolidation || frmData.RmzCavitation
        || frmData.RlzAirBronchogram || frmData.RlzFibrosis || frmData.RlzConsolidation || frmData.RlzCavitation)) {
      report += "<p>" + "Right lung is normal." + "</p>"
    }
    // *******************************MILDHAZINESS************************************

    // ********************************RHS/LHS**************************************
    if (!(frmData.rightHilarShadow && frmData.leftHilarShadow)) {
      if (frmData.rightHilarShadow === 'Prominent' || frmData.rightHilarShadow === 'Calcifications' && !(frmData.leftHilarShadow
        === 'Prominent' || frmData.leftHilarShadow === 'Calcifications')) {
        report += "<p>" + "Left hilar shadow is normal." + "</p>";
      }

      if ((frmData.leftHilarShadow === 'Prominent' || frmData.leftHilarShadow === 'Calcifications')
        && !(frmData.rightHilarShadow === 'Prominent' || frmData.rightHilarShadow === 'Calcifications')) {
        report += "<p>" + "Right hilar shadow is normal." + "</p>";
      }
    }
    // ***********************************both Costophrenic angle************************************
    if (frmData.rightCostophrenicAngle && !frmData.leftCostophrenicAngle) {
      report += "<p>" + "Left costophrenic angle is clear." + "</p>";
    }
    if (frmData.leftCostophrenicAngle && !frmData.rightCostophrenicAngle) {
      report += "<p>" + "Right costophrenic angle is clear." + "</p>";
    }

    if (frmData.DomesLeft && !frmData.DomesRight) {
      if ((frmData.DomesLeftType || frmData.DomesLeftElevatedType) && !(frmData.DomesRightType || frmData.DomesRightElevatedType)) {
        report += "<p>" + "Right dome of diaphragm is normal." + "</p>";
      }
    }

    if (frmData.DomesRight && !frmData.DomesLeft) {
      if ((frmData.DomesRightType || frmData.DomesRightElevatedType) && !(frmData.DomesLeftType || frmData.DomesLeftElevatedType)) {
        report += "<p>" + "Left dome of diaphragm is normal." + "</p>";
      }
    }

    // ********************************************Default Normal*******************************************

    if (!(frmData.opacities || frmData.mildHaziness || frmData.BothNormal)) {
      report += "<p>" + "Both lung fields are clear." + "</p>"
    }

    if (!(frmData.rightHilarShadow === 'Prominent' || frmData.rightHilarShadow === 'Calcifications' || frmData.BothNormal) && !(frmData.leftHilarShadow
      === 'Prominent' || frmData.leftHilarShadow === 'Calcifications' || frmData.BothNormal)) {
      report += "<p>" + "Both hilar shadows are normal." + "</p>";
    }

    if (!(frmData.leftCostophrenicAngle === 'Obliterated' || frmData.rightObliteratedType || frmData.BothNormal) && !(frmData.rightCostophrenicAngle
      === 'Obliterated' || frmData.leftObliteratedType || frmData.BothNormal)) {
      report += "<p>" + "Both costophrenic angles are clear." + "</p>";
    }

    if (!(frmData.cardiacSilhouette || frmData.BothNormal)) {
      report += "<p>" + "Cardiac silhouette is normal." + "</p>";
    }

    if (!(frmData.SoftTissue || frmData.BothNormal)) {
      report += "<p>" + "Soft tissues are normal." + "</p>";
    }

    if (!(frmData.bonyThoracicCage || frmData.BothNormal)) {
      report += "<p>" + "Bony thoracic cage is normal." + "</p>";
    }

    if (!(frmData.tracheaAndMediastinalStructures || frmData.BothNormal)) {
      report += "<p>" + "Trachea and mediastinal structures are normal." + "</p>";
    }

    // *************************************Can't be commented**************************************

    if (frmData.cardiacSilhouette === 'cannot be commented') {
      report += "<p>" + "Cardiac size and shape cannot be commented upon." + "</p>";
    }

    if (!(frmData.DomesOfDiaphragm || frmData.BothNormal)) {
      report += "Both domes of diaphragm are normal."
    }
    //TO BE ADDED
    var current_user = JSON.parse(document.getElementById("current-user").textContent);

    report +=
      this.pageBreak() +

      this.getImpression(impression, totalCovidPoints) +
      this.getCorads(current_user); // TO BE ADDED

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
  //TO BE ADDED
  getCorads(user) {
    return (
      "<p><br><img src='" + user.signature + "' height='75' /><p>" + user.full_name + "<br>" + "<br>" + user.designation + "</p></p>"
    );
  }

  getImpression(impression, totalCovidPoints) {
    let text = "</br><p><strong><u>IMPRESSION:</u></strong></p><p>";
    return (
      text +
      (impression.length !== 0
        ? impression.join("")
        : "<strong>•  No significant abnormality seen.</strong>") +
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
            name="X-RAY CHEST" />
        }
      </div>

    );
  }
}

export default XrayChest;