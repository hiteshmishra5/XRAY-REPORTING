import React, { Component } from "react";
import { Generate } from "@jsonforms/core";
import { JsonForms } from "@jsonforms/react";
//import {vanillaRenderers, vanillaCells, JsonFormsStyleContext } from '@jsonforms/vanilla-renderers';
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";

const _schema = {
  type: "object",
  properties: {
    NameTextFR22: {
      type: "string",
    },
    IDTextFR22: {
      type: "string",
    },
    AgeTextFR22: {
      type: "string",
    },
    GenderTextFR22: {
      type: "string",
      enum: ["Male", "Female", "Others"],
    },
    TestDateTextFR22: {
      type: "string",
    },
    ReportDateTextFR22: {
      type: "string",
    },
    Optometry: {
      type: "boolean",
    },
    ///////////////Normal vision///////////////
    OptometryNormal: {
      type: "boolean",
    },
    
    ////////////////Abnormal Vision (far)////////////////
    
    OptometryAbnormalLType: {
      type: "string",
      enum: ["6/6", "6/60", "6/36", "6/24", "6/18", "6/12", "6/9"],
    },
    OptometryAbnormalRType: {
      type: "string",
      enum: ["6/6", "6/60", "6/36", "6/24", "6/18", "6/12", "6/9"],
    },
    ////////////////Abnormal vision (near)////////////////////
    
    OptometryAbnormalLTypeN: {
      type: "string",
      enum: ["N/6", "N/36", "N/24", "N/18", "N/12", "N/10", "N/8"],
    },
    OptometryAbnormalRTypeN: {
      type: "string",
      enum: ["N/6", "N/36", "N/24", "N/18", "N/12", "N/10", "N/8"],
    },

    /////////////prescription//////////////////////////
    //left minus power///////////
    
    Addition: {
      type: "string",
      enum: ["+1",
        "+1.25",
        "+1.50",
        "+1.75",
        "+2",
        "+2.25",
        "+2.50",
        "+2.75",
        "+3",
        "+3.25",
        "+3.50"]
    },
    //left eye minus cylindrical
    OptometryPrescriptionLMTypeCylindrical: {
      type: "boolean",
    },
    OptometryPrescriptionLminusCPowerType: {
      type: "string",
      enum: [
        "0",
        "-0.25",
        "-0.50",
        "-0.75",
        "-1",
        "-1.25",
        "-1.50",
        "-1.75",
        "-2",
        "-2.25",
        "-2.50",
        "-2.75",
        "-3",
        "-3.25",
        "-3.50",
        "-3.75",
        "-4",
        "-4.25",
        "-4.50",
        "-4.75",
        "-5",
        "-5.25",
        "-5.50",
        "-5.75",
        "-6",
        "-6.25",
        "-6.50",
        "-6.75",
        "-7",
        "-7.25",
        "-7.50",
        "-7.75",
        "-8",
      ],
    },
    OptometryPrescriptionLminusSPowerType: {
      type: "string",
      enum: [
        "0",
        "-0.25",
        "-0.50",
        "-0.75",
        "-1",
        "-1.25",
        "-1.50",
        "-1.75",
        "-2",
        "-2.25",
        "-2.50",
        "-2.75",
        "-3",
        "-3.25",
        "-3.50",
        "-3.75",
        "-4",
        "-4.25",
        "-4.50",
        "-4.75",
        "-5",
        "-5.25",
        "-5.50",
        "-5.75",
        "-6",
        "-6.25",
        "-6.50",
        "-6.75",
        "-7",
        "-7.25",
        "-7.50",
        "-7.75",
        "-8",
        "-8.25",
        "-8.50",
        "-8.75",
        "-9",
        "-9.25",
        "-9.50",
        "-9.75",
        "-10",
        "-10.25",
        "-10.50",
        "-10.75",
        "-11",
        "-11.25",
        "-11.50",
        "-11.75",
        "-12",
        "-12.25",
        "-12.50",
        "-12.75",
        "-13",
        "-13.25",
        "-13.50",
        "-13.75",
        "-14",
        "-14.25",
        "-14.50",
        "-14.75",
        "-15",
        "-15.25",
        "-15.50",
        "-15.75",
        "-16",
        "-16.25",
        "-16.50",
        "-16.75",
        "-17",
        "-17.25",
        "-17.50",
        "-17.75",
        "-18",
        "-18.25",
        "-18.50",
        "-18.75",
        "-19",
        "-19.25",
        "-19.50",
        "-19.75",
        "-20",
      ],
    },
    
    OptometryPrescriptionLMAxis: {
      type: "string",
      enum: [
        "0",
        "5",
        "10",
        "15",
        "20",
        "25",
        "30",
        "35",
        "40",
        "45",
        "50",
        "55",
        "60",
        "65",
        "70",
        "75",
        "80",
        "85",
        "90",
        "95",
        "100",
        "105",
        "110",
        "115",
        "120",
        "125",
        "130",
        "135",
        "140",
        "145",
        "150",
        "155",
        "160",
        "165",
        "170",
        "175",
        "180",
      ],
    },
    OptometryPrescriptionLMTypeSpherical: {
      type: "boolean",
    },

    OptometryPrescriptionLplus: {
      type: "boolean",
    },
    OptometryPrescriptionLplusPower: {
      type: "boolean",
    },
    OptometryPrescriptionLplusCPowerType: {
      type: "string",
      enum: [
        "0",
        "+0.25",
        "+0.50",
        "+0.75",
        "+1",
        "+1.25",
        "+1.50",
        "+1.75",
        "+2",
        "+2.25",
        "+2.50",
        "+2.75",
        "+3",
        "+3.25",
        "+3.50",
        "+3.75",
        "+4",
        "+4.25",
        "+4.50",
        "+4.75",
        "+5",
        "+5.25",
        "+5.50",
        "+5.75",
        "+6",
        "+6.25",
        "+6.50",
        "+6.75",
        "+7",
        "+7.25",
        "+7.50",
        "+7.75",
        "+8",
      ],
    },
    OptometryPrescriptionLplusSPowerType: {
      type: "string",
      enum: [
        "0",
        "+0.25",
        "+0.50",
        "+0.75",
        "+1",
        "+1.25",
        "+1.50",
        "+1.75",
        "+2",
        "+2.25",
        "+2.50",
        "+2.75",
        "+3",
        "+3.25",
        "+3.50",
        "+3.75",
        "+4",
        "+4.25",
        "+4.50",
        "+4.75",
        "+5",
        "+5.25",
        "+5.50",
        "+5.75",
        "+6",
        "+6.25",
        "+6.50",
        "+6.75",
        "+7",
        "+7.25",
        "+7.50",
        "+7.75",
        "+8",
        "+8.25",
        "+8.50",
        "+8.75",
        "+9",
        "+9.25",
        "+9.50",
        "+9.75",
        "+10",
        "+10.25",
        "+10.50",
        "+10.75",
        "+11",
        "+11.25",
        "+11.50",
        "+11.75",
        "+12",
        "+12.25",
        "+12.50",
        "+12.75",
        "+13",
        "+13.25",
        "+13.50",
        "+13.75",
        "+14",
        "+14.25",
        "+14.50",
        "+14.75",
        "+15",
        "+15.25",
        "+15.50",
        "+15.75",
        "+16",
        "+16.25",
        "+16.50",
        "+16.75",
        "+17",
        "+17.25",
        "+17.50",
        "+17.75",
        "+18",
        "+18.25",
        "+18.50",
        "+18.75",
        "+19",
        "+19.25",
        "+19.50",
        "+19.75",
        "+20",
      ],
    },
    OptometryPrescriptionLPTypeCylindrical: {
      type: "boolean",
    },
    OptometryPrescriptionLPTypeSpherical: {
      type: "boolean",
    },
    OptometryPrescriptionLPAxis: {
      type: "string",
      enum: [
        "0",
        "5",
        "10",
        "15",
        "20",
        "25",
        "30",
        "35",
        "40",
        "45",
        "50",
        "55",
        "60",
        "65",
        "70",
        "75",
        "80",
        "85",
        "90",
        "95",
        "100",
        "105",
        "110",
        "115",
        "120",
        "125",
        "130",
        "135",
        "140",
        "145",
        "150",
        "155",
        "160",
        "165",
        "170",
        "175",
        "180",
      ],
    },
    OptometryPrescriptionR: {
      type: "boolean",
    },
    OptometryPrescriptionRminus: {
      type: "boolean",
    },
    OptometryPrescriptionRminusPower: {
      type: "boolean",
    },
    OptometryPrescriptionRminusCPowerType: {
      type: "string",
      enum: [
        "0",
        "-0.25",
        "-0.50",
        "-0.75",
        "-1",
        "-1.25",
        "-1.50",
        "-1.75",
        "-2",
        "-2.25",
        "-2.50",
        "-2.75",
        "-3",
        "-3.25",
        "-3.50",
        "-3.75",
        "-4",
        "-4.25",
        "-4.50",
        "-4.75",
        "-5",
        "-5.25",
        "-5.50",
        "-5.75",
        "-6",
        "-6.25",
        "-6.50",
        "-6.75",
        "-7",
        "-7.25",
        "-7.50",
        "-7.75",
        "-8",
      ],
    },
    OptometryPrescriptionRminusSPowerType: {
      type: "string",
      enum: [
        "-0.25",
        "-0.50",
        "-0.75",
        "-1",
        "-1.25",
        "-1.50",
        "-1.75",
        "-2",
        "-2.25",
        "-2.50",
        "-2.75",
        "-3",
        "-3.25",
        "-3.50",
        "-3.75",
        "-4",
        "-4.25",
        "-4.50",
        "-4.75",
        "-5",
        "-5.25",
        "-5.50",
        "-5.75",
        "-6",
        "-6.25",
        "-6.50",
        "-6.75",
        "-7",
        "-7.25",
        "-7.50",
        "-7.75",
        "-8",
        "-8.25",
        "-8.50",
        "-8.75",
        "-9",
        "-9.25",
        "-9.50",
        "-9.75",
        "-10",
        "-10.25",
        "-10.50",
        "-10.75",
        "-11",
        "-11.25",
        "-11.50",
        "-11.75",
        "-12",
        "-12.25",
        "-12.50",
        "-12.75",
        "-13",
        "-13.25",
        "-13.50",
        "-13.75",
        "-14",
        "-14.25",
        "-14.50",
        "-14.75",
        "-15",
        "-15.25",
        "-15.50",
        "-15.75",
        "-16",
        "-16.25",
        "-16.50",
        "-16.75",
        "-17",
        "-17.25",
        "-17.50",
        "-17.75",
        "-18",
        "-18.25",
        "-18.50",
        "-18.75",
        "-19",
        "-19.25",
        "-19.50",
        "-19.75",
        "-20",
      ],
    },
    OptometryPrescriptionRMTypeCylindrical: {
      type: "boolean",
    },
    OptometryPrescriptionRMTypeSpherical: {
      type: "boolean",
    },
    OptometryPrescriptionRMAxis: {
      type: "string",
      enum: [
        "0",
        "5",
        "10",
        "15",
        "20",
        "25",
        "30",
        "35",
        "40",
        "45",
        "50",
        "55",
        "60",
        "65",
        "70",
        "75",
        "80",
        "85",
        "90",
        "95",
        "100",
        "105",
        "110",
        "115",
        "120",
        "125",
        "130",
        "135",
        "140",
        "145",
        "150",
        "155",
        "160",
        "165",
        "170",
        "175",
        "180",
      ],
    },
    OptometryPrescriptionRplus: {
      type: "boolean",
    },
    OptometryPrescriptionRplusPower: {
      type: "boolean",
    },
    OptometryPrescriptionRplusCPowerType: {
      type: "string",
      enum: [
        "+0.25",
        "+0.50",
        "+0.75",
        "+1",
        "+1.25",
        "+1.50",
        "+1.75",
        "+2",
        "+2.25",
        "+2.50",
        "+2.75",
        "+3",
        "+3.25",
        "+3.50",
        "+3.75",
        "+4",
        "+4.25",
        "+4.50",
        "+4.75",
        "+5",
        "+5.25",
        "+5.50",
        "+5.75",
        "+6",
        "+6.25",
        "+6.50",
        "+6.75",
        "+7",
        "+7.25",
        "+7.50",
        "+7.75",
        "+8",
      ],
    },
    OptometryPrescriptionRplusSPowerType: {
      type: "string",
      enum: [
        "+0.25",
        "+0.50",
        "+0.75",
        "+1",
        "+1.25",
        "+1.50",
        "+1.75",
        "+2",
        "+2.25",
        "+2.50",
        "+2.75",
        "+3",
        "+3.25",
        "+3.50",
        "+3.75",
        "+4",
        "+4.25",
        "+4.50",
        "+4.75",
        "+5",
        "+5.25",
        "+5.50",
        "+5.75",
        "+6",
        "+6.25",
        "+6.50",
        "+6.75",
        "+7",
        "+7.25",
        "+7.50",
        "+7.75",
        "+8",
        "+8.25",
        "+8.50",
        "+8.75",
        "+9",
        "+9.25",
        "+9.50",
        "+9.75",
        "+10",
        "+10.25",
        "+10.50",
        "+10.75",
        "+11",
        "+11.25",
        "+11.50",
        "+11.75",
        "+12",
        "+12.25",
        "+12.50",
        "+12.75",
        "+13",
        "+13.25",
        "+13.50",
        "+13.75",
        "+14",
        "+14.25",
        "+14.50",
        "+14.75",
        "+15",
        "+15.25",
        "+15.50",
        "+15.75",
        "+16",
        "+16.25",
        "+16.50",
        "+16.75",
        "+17",
        "+17.25",
        "+17.50",
        "+17.75",
        "+18",
        "+18.25",
        "+18.50",
        "+18.75",
        "+19",
        "+19.25",
        "+19.50",
        "+19.75",
        "+20",
      ],
    },
    OptometryPrescriptionRPTypeCylindrical: {
      type: "boolean",
    },
    OptometryPrescriptionRPTypeSpherical: {
      type: "boolean",
    },
    OptometryPrescriptionRPAxis: {
      type: "string",
      enum: [
        "0",
        "5",
        "10",
        "15",
        "20",
        "25",
        "30",
        "35",
        "40",
        "45",
        "50",
        "55",
        "60",
        "65",
        "70",
        "75",
        "80",
        "85",
        "90",
        "95",
        "100",
        "105",
        "110",
        "115",
        "120",
        "125",
        "130",
        "135",
        "140",
        "145",
        "150",
        "155",
        "160",
        "165",
        "170",
        "175",
        "180",
      ],
    },
    /////////////////far///////////////////
    OptometryPrescriptionFar: {
      type: "boolean",
    },
    OptometryPrescriptionLFar: {
      type: "boolean",
    },
    OptometryPrescriptionLminusFar: {
      type: "boolean",
    },
    OptometryPrescriptionLminusPowerFar: {
      type: "boolean",
    },
    OptometryPrescriptionLminusCPowerTypeFar: {
      type: "string",
      enum: [
        "0",
        "-0.25",
        "-0.50",
        "-0.75",
        "-1",
        "-1.25",
        "-1.50",
        "-1.75",
        "-2",
        "-2.25",
        "-2.50",
        "-2.75",
        "-3",
        "-3.25",
        "-3.50",
        "-3.75",
        "-4",
        "-4.25",
        "-4.50",
        "-4.75",
        "-5",
        "-5.25",
        "-5.50",
        "-5.75",
        "-6",
        "-6.25",
        "-6.50",
        "-6.75",
        "-7",
        "-7.25",
        "-7.50",
        "-7.75",
        "-8",
      ],
    },
    OptometryPrescriptionLminusSPowerTypeFar: {
      type: "string",
      enum: [
        "0",
        "-0.25",
        "-0.50",
        "-0.75",
        "-1",
        "-1.25",
        "-1.50",
        "-1.75",
        "-2",
        "-2.25",
        "-2.50",
        "-2.75",
        "-3",
        "-3.25",
        "-3.50",
        "-3.75",
        "-4",
        "-4.25",
        "-4.50",
        "-4.75",
        "-5",
        "-5.25",
        "-5.50",
        "-5.75",
        "-6",
        "-6.25",
        "-6.50",
        "-6.75",
        "-7",
        "-7.25",
        "-7.50",
        "-7.75",
        "-8",
        "-8.25",
        "-8.50",
        "-8.75",
        "-9",
        "-9.25",
        "-9.50",
        "-9.75",
        "-10",
        "-10.25",
        "-10.50",
        "-10.75",
        "-11",
        "-11.25",
        "-11.50",
        "-11.75",
        "-12",
        "-12.25",
        "-12.50",
        "-12.75",
        "-13",
        "-13.25",
        "-13.50",
        "-13.75",
        "-14",
        "-14.25",
        "-14.50",
        "-14.75",
        "-15",
        "-15.25",
        "-15.50",
        "-15.75",
        "-16",
        "-16.25",
        "-16.50",
        "-16.75",
        "-17",
        "-17.25",
        "-17.50",
        "-17.75",
        "-18",
        "-18.25",
        "-18.50",
        "-18.75",
        "-19",
        "-19.25",
        "-19.50",
        "-19.75",
        "-20",
      ],
    },
    OptometryPrescriptionLMTypeCylindricalFar: {
      type: "boolean",
    },
    OptometryPrescriptionLMTypeSphericalFar: {
      type: "boolean",
    },
    OptometryPrescriptionLMAxisFar: {
      type: "string",
      enum: [
        "0",
        "5",
        "10",
        "15",
        "20",
        "25",
        "30",
        "35",
        "40",
        "45",
        "50",
        "55",
        "60",
        "65",
        "70",
        "75",
        "80",
        "85",
        "90",
        "95",
        "100",
        "105",
        "110",
        "115",
        "120",
        "125",
        "130",
        "135",
        "140",
        "145",
        "150",
        "155",
        "160",
        "165",
        "170",
        "175",
        "180",
      ],
    },

    OptometryPrescriptionLplusFar: {
      type: "boolean",
    },
    OptometryPrescriptionLplusPowerFar: {
      type: "boolean",
    },
    OptometryPrescriptionLplusCPowerTypeFar: {
      type: "string",
      enum: [
        "0",
        "+0.25",
        "+0.50",
        "+0.75",
        "+1",
        "+1.25",
        "+1.50",
        "+1.75",
        "+2",
        "+2.25",
        "+2.50",
        "+2.75",
        "+3",
        "+3.25",
        "+3.50",
        "+3.75",
        "+4",
        "+4.25",
        "+4.50",
        "+4.75",
        "+5",
        "+5.25",
        "+5.50",
        "+5.75",
        "+6",
        "+6.25",
        "+6.50",
        "+6.75",
        "+7",
        "+7.25",
        "+7.50",
        "+7.75",
        "+8",
      ],
    },
    OptometryPrescriptionLplusSPowerTypeFar: {
      type: "string",
      enum: [
        "0",
        "+0.25",
        "+0.50",
        "+0.75",
        "+1",
        "+1.25",
        "+1.50",
        "+1.75",
        "+2",
        "+2.25",
        "+2.50",
        "+2.75",
        "+3",
        "+3.25",
        "+3.50",
        "+3.75",
        "+4",
        "+4.25",
        "+4.50",
        "+4.75",
        "+5",
        "+5.25",
        "+5.50",
        "+5.75",
        "+6",
        "+6.25",
        "+6.50",
        "+6.75",
        "+7",
        "+7.25",
        "+7.50",
        "+7.75",
        "+8",
        "+8.25",
        "+8.50",
        "+8.75",
        "+9",
        "+9.25",
        "+9.50",
        "+9.75",
        "+10",
        "+10.25",
        "+10.50",
        "+10.75",
        "+11",
        "+11.25",
        "+11.50",
        "+11.75",
        "+12",
        "+12.25",
        "+12.50",
        "+12.75",
        "+13",
        "+13.25",
        "+13.50",
        "+13.75",
        "+14",
        "+14.25",
        "+14.50",
        "+14.75",
        "+15",
        "+15.25",
        "+15.50",
        "+15.75",
        "+16",
        "+16.25",
        "+16.50",
        "+16.75",
        "+17",
        "+17.25",
        "+17.50",
        "+17.75",
        "+18",
        "+18.25",
        "+18.50",
        "+18.75",
        "+19",
        "+19.25",
        "+19.50",
        "+19.75",
        "+20",
      ],
    },
    OptometryPrescriptionLPTypeCylindricalFar: {
      type: "boolean",
    },
    OptometryPrescriptionLPTypeSphericalFar: {
      type: "boolean",
    },
    OptometryPrescriptionLPAxisFar: {
      type: "string",
      enum: [
        "0",
        "5",
        "10",
        "15",
        "20",
        "25",
        "30",
        "35",
        "40",
        "45",
        "50",
        "55",
        "60",
        "65",
        "70",
        "75",
        "80",
        "85",
        "90",
        "95",
        "100",
        "105",
        "110",
        "115",
        "120",
        "125",
        "130",
        "135",
        "140",
        "145",
        "150",
        "155",
        "160",
        "165",
        "170",
        "175",
        "180",
      ],
    },
    OptometryPrescriptionRFar: {
      type: "boolean",
    },
    OptometryPrescriptionRminusFar: {
      type: "boolean",
    },
    OptometryPrescriptionRminusPowerFar: {
      type: "boolean",
    },
    OptometryPrescriptionRminusCPowerTypeFar: {
      type: "string",
      enum: [
        "0",
        "-0.25",
        "-0.50",
        "-0.75",
        "-1",
        "-1.25",
        "-1.50",
        "-1.75",
        "-2",
        "-2.25",
        "-2.50",
        "-2.75",
        "-3",
        "-3.25",
        "-3.50",
        "-3.75",
        "-4",
        "-4.25",
        "-4.50",
        "-4.75",
        "-5",
        "-5.25",
        "-5.50",
        "-5.75",
        "-6",
        "-6.25",
        "-6.50",
        "-6.75",
        "-7",
        "-7.25",
        "-7.50",
        "-7.75",
        "-8",
      ],
    },
    OptometryPrescriptionRminusSPowerTypeFar: {
      type: "string",
      enum: [
        "-0.25",
        "-0.50",
        "-0.75",
        "-1",
        "-1.25",
        "-1.50",
        "-1.75",
        "-2",
        "-2.25",
        "-2.50",
        "-2.75",
        "-3",
        "-3.25",
        "-3.50",
        "-3.75",
        "-4",
        "-4.25",
        "-4.50",
        "-4.75",
        "-5",
        "-5.25",
        "-5.50",
        "-5.75",
        "-6",
        "-6.25",
        "-6.50",
        "-6.75",
        "-7",
        "-7.25",
        "-7.50",
        "-7.75",
        "-8",
        "-8.25",
        "-8.50",
        "-8.75",
        "-9",
        "-9.25",
        "-9.50",
        "-9.75",
        "-10",
        "-10.25",
        "-10.50",
        "-10.75",
        "-11",
        "-11.25",
        "-11.50",
        "-11.75",
        "-12",
        "-12.25",
        "-12.50",
        "-12.75",
        "-13",
        "-13.25",
        "-13.50",
        "-13.75",
        "-14",
        "-14.25",
        "-14.50",
        "-14.75",
        "-15",
        "-15.25",
        "-15.50",
        "-15.75",
        "-16",
        "-16.25",
        "-16.50",
        "-16.75",
        "-17",
        "-17.25",
        "-17.50",
        "-17.75",
        "-18",
        "-18.25",
        "-18.50",
        "-18.75",
        "-19",
        "-19.25",
        "-19.50",
        "-19.75",
        "-20",
      ],
    },
    OptometryPrescriptionRMTypeCylindricalFar: {
      type: "boolean",
    },
    OptometryPrescriptionRMTypeSphericalFar: {
      type: "boolean",
    },
    OptometryPrescriptionRMAxisFar: {
      type: "string",
      enum: [
        "0",
        "5",
        "10",
        "15",
        "20",
        "25",
        "30",
        "35",
        "40",
        "45",
        "50",
        "55",
        "60",
        "65",
        "70",
        "75",
        "80",
        "85",
        "90",
        "95",
        "100",
        "105",
        "110",
        "115",
        "120",
        "125",
        "130",
        "135",
        "140",
        "145",
        "150",
        "155",
        "160",
        "165",
        "170",
        "175",
        "180",
      ],
    },
    OptometryPrescriptionRplusFar: {
      type: "boolean",
    },
    OptometryPrescriptionRplusPowerFar: {
      type: "boolean",
    },
    OptometryPrescriptionRplusCPowerTypeFar: {
      type: "string",
      enum: [
        "+0.25",
        "+0.50",
        "+0.75",
        "+1",
        "+1.25",
        "+1.50",
        "+1.75",
        "+2",
        "+2.25",
        "+2.50",
        "+2.75",
        "+3",
        "+3.25",
        "+3.50",
        "+3.75",
        "+4",
        "+4.25",
        "+4.50",
        "+4.75",
        "+5",
        "+5.25",
        "+5.50",
        "+5.75",
        "+6",
        "+6.25",
        "+6.50",
        "+6.75",
        "+7",
        "+7.25",
        "+7.50",
        "+7.75",
        "+8",
      ],
    },
    OptometryPrescriptionRplusSPowerTypeFar: {
      type: "string",
      enum: [
        "+0.25",
        "+0.50",
        "+0.75",
        "+1",
        "+1.25",
        "+1.50",
        "+1.75",
        "+2",
        "+2.25",
        "+2.50",
        "+2.75",
        "+3",
        "+3.25",
        "+3.50",
        "+3.75",
        "+4",
        "+4.25",
        "+4.50",
        "+4.75",
        "+5",
        "+5.25",
        "+5.50",
        "+5.75",
        "+6",
        "+6.25",
        "+6.50",
        "+6.75",
        "+7",
        "+7.25",
        "+7.50",
        "+7.75",
        "+8",
        "+8.25",
        "+8.50",
        "+8.75",
        "+9",
        "+9.25",
        "+9.50",
        "+9.75",
        "+10",
        "+10.25",
        "+10.50",
        "+10.75",
        "+11",
        "+11.25",
        "+11.50",
        "+11.75",
        "+12",
        "+12.25",
        "+12.50",
        "+12.75",
        "+13",
        "+13.25",
        "+13.50",
        "+13.75",
        "+14",
        "+14.25",
        "+14.50",
        "+14.75",
        "+15",
        "+15.25",
        "+15.50",
        "+15.75",
        "+16",
        "+16.25",
        "+16.50",
        "+16.75",
        "+17",
        "+17.25",
        "+17.50",
        "+17.75",
        "+18",
        "+18.25",
        "+18.50",
        "+18.75",
        "+19",
        "+19.25",
        "+19.50",
        "+19.75",
        "+20",
      ],
    },
    OptometryPrescriptionRPTypeCylindricalFar: {
      type: "boolean",
    },
    OptometryPrescriptionRPTypeSphericalFar: {
      type: "boolean",
    },
    OptometryPrescriptionRPAxisFar: {
      type: "string",
      enum: [
        "0",
        "5",
        "10",
        "15",
        "20",
        "25",
        "30",
        "35",
        "40",
        "45",
        "50",
        "55",
        "60",
        "65",
        "70",
        "75",
        "80",
        "85",
        "90",
        "95",
        "100",
        "105",
        "110",
        "115",
        "120",
        "125",
        "130",
        "135",
        "140",
        "145",
        "150",
        "155",
        "160",
        "165",
        "170",
        "175",
        "180",
      ],
    },
    
    
    
    ///////////other//////////////
    OptometryOtherText: {
      type: "boolean",
    },
    OptometryOtherTextField: {
      type: "string",
    },
    OptometryLColor: {
      type: "boolean",
    },
    OptometryLColorType: {
      type: "string",
      enum: ["Normal", "Partial color blindness", "Total color blindness"],
    },
    OptometryLColorType1: {
      type: "string",
      enum: ["Red", "Green", "Red-Green"],
    },
    OptometryRColor: {
      type: "boolean",
    },
    OptometryRColorType: {
      type: "string",
      enum: ["Normal", "Partial color blindness", "Total color blindness"],
    },
    OptometryRColorType1: {
      type: "string",
      enum: ["Red", "Green", "Red-Green"],
    },
  },
  required: [],
};
const uischema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Group",
      elements: [
        {
          type: "HorizontalLayout",
          label: "",
          elements: [
            {
              type: "Control",
              label: "Name",
              scope: "#/properties/NameTextFR22",
            },
            {
              type: "Control",
              label: "Patient ID",
              scope: "#/properties/IDTextFR22",
            },
            {
              type: "Control",
              label: "Age",
              scope: "#/properties/AgeTextFR22",
            },
            {
              type: "Control",
              label: "Test date",
              scope: "#/properties/TestDateTextFR22",
            },
            {
              type: "Control",
              label: "Report date",
              scope: "#/properties/ReportDateTextFR22",
            },
          ],
        },

        {
          type: "Control",
          label: "Gender",
          scope: "#/properties/GenderTextFR22",
          options: {
            format: "radio",
          },
        },

        /////////////////////for all/////////////////

        {
          type: "HorizontalLayout",
          label: "",
          elements: [
            {
              type: "VerticalLayout",
              label: " ",
              elements: [
                /////////////////NOrmal vision (both)/////////////////////////
                {
                  type: "Control",
                  label: "Normal Vision (both eye)",
                  scope: "#/properties/OptometryNormal",
                },
                
              ],
            },
          ],
        },
        // Abnormal****************
        /////////////////AbnOrmal vision (far)/////////////////////////
        // left**************
        {
          type: "VerticalLayout",
          label: "Left eye vision abnormal(far)1",
          elements: [
            {
              type: "HorizontalLayout",
              label: "Left eye vision abnormal(far)2",
              elements: [
                {
                  type: "Control",
                  label: "Left eye vision abnormal(far)",
                  scope:
                    "#/properties/OptometryAbnormalLType",
                  options: {
                    format: "radio",
                  },
                },
              ],
            },
          ],
        },
        //rght abnormal(far)            
        {
          type: "VerticalLayout",
          label: "Right eye vision abnormal(far)1",
          elements: [
            {
              type: "HorizontalLayout",
              label: "Right eye vision abnormal(far)2",
              elements: [
                {
                  type: "Control",
                  label: "Right eye vision abnormal(far)",
                  scope:
                    "#/properties/OptometryAbnormalRType",
                  options: {
                    format: "radio",
                  },
                },
              ],
            },
          ],
        },
        //Addition/////////
        {
          type: "HorizontalLayout",
          label: "Left eye vision abnormal(far)2",
          elements: [
            {
              type: "Control",
              label: "Addition",
              scope:
                "#/properties/Addition",
              options: {
                format: "radio",
              },
            },
          ],
        },            
        // left**************near abnormal
        {
          type: "VerticalLayout",
          label: "Left eye vision abnormal(near)1",
          elements: [
            {
              type: "HorizontalLayout",
              label: "Left eye vision abnormal(near)2",
              elements: [
                {
                  type: "Control",
                  label: "Left eye vision abnormal(near)",
                  scope:
                    "#/properties/OptometryAbnormalLTypeN",
                  options: {
                    format: "radio",
                  },
                },
              ],
            },
          ],
        },
        //rght****************near abnormal
        {
          type: "VerticalLayout",
          label: "Right eye vision abnormal(near)1",
          elements: [
            {
              type: "HorizontalLayout",
              label: "Right eye vision abnormal(near)2",
              elements: [
                {
                  type: "Control",
                  label: "Right eye vision abnormal(near)",
                  scope:
                    "#/properties/OptometryAbnormalRTypeN",
                  options: {
                    format: "radio",
                  },
                },
              ],
            },
          ],
        },            
        //eye prescription****************************
        
        {
          type: "HorizontalLayout",
          label: "",
          elements: [
            {
              type: "VerticalLayout",
              label: " ",
              elements: [
                //left eye minus power(near)
                //cylindrical & spherical LM*************************
                                                    
                {
                  type: "Control",
                  label: "Left eye minus Cylindrical(near)",
                  scope: "#/properties/OptometryPrescriptionLMTypeCylindrical",
                },
            
                // left minus cylindrical power
                {
                  type: "Group",
                  label: "  ",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/OptometryPrescriptionLMTypeCylindrical",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "VerticalLayout",
                      label: "POWER1",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "POWER",
                          elements: [
                            {
                              type: "Control",
                              label: "POWER",
                              scope: "#/properties/OptometryPrescriptionLminusCPowerType",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    // left minus cylindrical axis 
                    {
                      type: "VerticalLayout",
                      label: "",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "AXIS",
                              scope: "#/properties/OptometryPrescriptionLMAxis",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                //left minus spherical power

                {
                  type: "Control",
                  label: "Left eye minus Spherical(near)",
                  scope: "#/properties/OptometryPrescriptionLMTypeSpherical",
                },
            
                // left minus Spherical power
                {
                  type: "Group",
                  label: "  ",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/OptometryPrescriptionLMTypeSpherical",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "VerticalLayout",
                      label: "POWER1",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "POWER",
                          elements: [
                            {
                              type: "Control",
                              label: "POWER",
                              scope: "#/properties/OptometryPrescriptionLminusSPowerType",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
              
                  ],
                },
                //left eye plus power(near)
                //cylindrical & spherical LP*************************
                {
                  type: "Control",
                  label: "Left eye plus Cylindrical(near)",
                  scope: "#/properties/OptometryPrescriptionLPTypeCylindrical",
                },
            
                // left plus cylindrical power
                {
                  type: "Group",
                  label: "  ",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/OptometryPrescriptionLPTypeCylindrical",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "VerticalLayout",
                      label: "POWER1",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "POWER",
                          elements: [
                            {
                              type: "Control",
                              label: "POWER",
                              scope: "#/properties/OptometryPrescriptionLplusCPowerType",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    // left plus cylindrical axis 
                    {
                      type: "VerticalLayout",
                      label: "",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "AXIS",
                              scope: "#/properties/OptometryPrescriptionLPAxis",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                //left plus spherical power

                {
                  type: "Control",
                  label: "Left eye plus Spherical(near)",
                  scope: "#/properties/OptometryPrescriptionLPTypeSpherical",
                },
            
                // left plus Spherical power
                {
                  type: "Group",
                  label: "  ",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/OptometryPrescriptionLPTypeSpherical",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "VerticalLayout",
                      label: "POWER1",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "POWER",
                          elements: [
                            {
                              type: "Control",
                              label: "POWER",
                              scope: "#/properties/OptometryPrescriptionLplusSPowerType",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
              
                  ],
                },
                ////////////////////////////
                //Right eye minus power(near)
                //cylindrical & spherical RM*************************
                {
                  type: "Control",
                  label: "Right eye minus Cylindrical(near)",
                  scope: "#/properties/OptometryPrescriptionRMTypeCylindrical",
                },
            
                // right minus cylindrical power
                {
                  type: "Group",
                  label: "  ",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/OptometryPrescriptionRMTypeCylindrical",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "VerticalLayout",
                      label: "POWER1",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "POWER",
                          elements: [
                            {
                              type: "Control",
                              label: "POWER",
                              scope: "#/properties/OptometryPrescriptionRminusCPowerType",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    // right minus cylindrical axis 
                    {
                      type: "VerticalLayout",
                      label: "",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "AXIS",
                              scope: "#/properties/OptometryPrescriptionRMAxis",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                //Right minus spherical power

                {
                  type: "Control",
                  label: "Right eye minus Spherical(near)",
                  scope: "#/properties/OptometryPrescriptionRMTypeSpherical",
                },
            
                // Right minus Spherical power
                {
                  type: "Group",
                  label: "  ",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/OptometryPrescriptionRMTypeSpherical",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "VerticalLayout",
                      label: "POWER1",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "POWER",
                          elements: [
                            {
                              type: "Control",
                              label: "POWER",
                              scope: "#/properties/OptometryPrescriptionRminusSPowerType",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
              
                  ],
                },
                //Right eye plus power(near)
                //cylindrical & spherical RP*************************
                {
                  type: "Control",
                  label: "Right eye plus Cylindrical(near)",
                  scope: "#/properties/OptometryPrescriptionRPTypeCylindrical",
                },
            
                // Right plus cylindrical power
                {
                  type: "Group",
                  label: "  ",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/OptometryPrescriptionRPTypeCylindrical",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "VerticalLayout",
                      label: "POWER1",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "POWER",
                          elements: [
                            {
                              type: "Control",
                              label: "POWER",
                              scope: "#/properties/OptometryPrescriptionRplusCPowerType",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    // Right plus cylindrical axis 
                    {
                      type: "VerticalLayout",
                      label: "",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "AXIS",
                              scope: "#/properties/OptometryPrescriptionRPAxis",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                //Right plus spherical power

                {
                  type: "Control",
                  label: "Right eye plus Spherical(near)",
                  scope: "#/properties/OptometryPrescriptionRPTypeSpherical",
                },
            
                // Right plus Spherical power
                {
                  type: "Group",
                  label: "  ",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/OptometryPrescriptionRPTypeSpherical",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "VerticalLayout",
                      label: "POWER1",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "POWER",
                          elements: [
                            {
                              type: "Control",
                              label: "POWER",
                              scope: "#/properties/OptometryPrescriptionRplusSPowerType",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
              
                  ],
                }, 
                
                /////////////////////////////////////////////
                //eye prescription*******Far*****************
                //left eye minus power(far)
                //cylindrical & spherical LM*************************
                                                    
                {
                  type: "Control",
                  label: "Left eye minus Cylindrical(far)",
                  scope: "#/properties/OptometryPrescriptionLMTypeCylindricalFar",
                },
            
                // left minus cylindrical power
                {
                  type: "Group",
                  label: "  ",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/OptometryPrescriptionLMTypeCylindricalFar",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "VerticalLayout",
                      label: "POWER1",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "POWER",
                          elements: [
                            {
                              type: "Control",
                              label: "POWER",
                              scope: "#/properties/OptometryPrescriptionLminusCPowerTypeFar",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    // left minus cylindrical axis 
                    {
                      type: "VerticalLayout",
                      label: "",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "AXIS",
                              scope: "#/properties/OptometryPrescriptionLMAxisFar",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                //left minus spherical power

                {
                  type: "Control",
                  label: "Left eye minus Spherical(far)",
                  scope: "#/properties/OptometryPrescriptionLMTypeSphericalFar",
                },
            
                // left minus Spherical power
                {
                  type: "Group",
                  label: "  ",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/OptometryPrescriptionLMTypeSphericalFar",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "VerticalLayout",
                      label: "POWER1",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "POWER",
                          elements: [
                            {
                              type: "Control",
                              label: "POWER",
                              scope: "#/properties/OptometryPrescriptionLminusSPowerTypeFar",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
              
                  ],
                },
                //left eye plus power(far)
                //cylindrical & spherical LP*************************
                {
                  type: "Control",
                  label: "Left eye plus Cylindrical(far)",
                  scope: "#/properties/OptometryPrescriptionLPTypeCylindricalFar",
                },
            
                // left plus cylindrical power
                {
                  type: "Group",
                  label: "  ",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/OptometryPrescriptionLPTypeCylindricalFar",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "VerticalLayout",
                      label: "POWER1",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "POWER",
                          elements: [
                            {
                              type: "Control",
                              label: "POWER",
                              scope: "#/properties/OptometryPrescriptionLplusCPowerTypeFar",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    // left plus cylindrical axis 
                    {
                      type: "VerticalLayout",
                      label: "",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "AXIS",
                              scope: "#/properties/OptometryPrescriptionLPAxisFar",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                //left plus spherical power

                {
                  type: "Control",
                  label: "Left eye plus Spherical(far)",
                  scope: "#/properties/OptometryPrescriptionLPTypeSphericalFar",
                },
            
                // left plus Spherical power
                {
                  type: "Group",
                  label: "  ",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/OptometryPrescriptionLPTypeSphericalFar",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "VerticalLayout",
                      label: "POWER1",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "POWER",
                          elements: [
                            {
                              type: "Control",
                              label: "POWER",
                              scope: "#/properties/OptometryPrescriptionLplusSPowerTypeFar",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
              
                  ],
                },
                ////////////////////////////
                //Right eye minus power(far)
                //cylindrical & spherical RM*************************
                {
                  type: "Control",
                  label: "Right eye minus Cylindrical(far)",
                  scope: "#/properties/OptometryPrescriptionRMTypeCylindricalFar",
                },
            
                // right minus cylindrical power
                {
                  type: "Group",
                  label: "  ",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/OptometryPrescriptionRMTypeCylindricalFar",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "VerticalLayout",
                      label: "POWER1",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "POWER",
                          elements: [
                            {
                              type: "Control",
                              label: "POWER",
                              scope: "#/properties/OptometryPrescriptionRminusCPowerTypeFar",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    // right minus cylindrical axis 
                    {
                      type: "VerticalLayout",
                      label: "",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "AXIS",
                              scope: "#/properties/OptometryPrescriptionRMAxisFar",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                //Right minus spherical power

                {
                  type: "Control",
                  label: "Right eye minus Spherical(far)",
                  scope: "#/properties/OptometryPrescriptionRMTypeSphericalFar",
                },
            
                // Right minus Spherical power
                {
                  type: "Group",
                  label: "  ",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/OptometryPrescriptionRMTypeSphericalFar",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "VerticalLayout",
                      label: "POWER1",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "POWER",
                          elements: [
                            {
                              type: "Control",
                              label: "POWER",
                              scope: "#/properties/OptometryPrescriptionRminusSPowerTypeFar",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
              
                  ],
                },
                //Right eye plus power(far)
                //cylindrical & spherical RP*************************
                {
                  type: "Control",
                  label: "Right eye plus Cylindrical(far)",
                  scope: "#/properties/OptometryPrescriptionRPTypeCylindricalFar",
                },
            
                // Right plus cylindrical power
                {
                  type: "Group",
                  label: "  ",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/OptometryPrescriptionRPTypeCylindricalFar",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "VerticalLayout",
                      label: "POWER1",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "POWER",
                          elements: [
                            {
                              type: "Control",
                              label: "POWER",
                              scope: "#/properties/OptometryPrescriptionRplusCPowerTypeFar",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    // Right plus cylindrical axis 
                    {
                      type: "VerticalLayout",
                      label: "",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "AXIS",
                              scope: "#/properties/OptometryPrescriptionRPAxisFar",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                //Right plus spherical power

                {
                  type: "Control",
                  label: "Right eye plus Spherical(far)",
                  scope: "#/properties/OptometryPrescriptionRPTypeSphericalFar",
                },
            
                // Right plus Spherical power
                {
                  type: "Group",
                  label: "  ",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/OptometryPrescriptionRPTypeSphericalFar",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "VerticalLayout",
                      label: "POWER1",
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "POWER",
                          elements: [
                            {
                              type: "Control",
                              label: "POWER",
                              scope: "#/properties/OptometryPrescriptionRplusSPowerTypeFar",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
              
                  ],
                },
              ],
            },
          ],
        }, 
        
        ////////////////// OTHERS/////////////////////
        {
          type: "Control",
          label: "Others",
          scope: "#/properties/OptometryOtherText",
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/OptometryOtherText",
              schema: {
                const: false,
              },
            },
          },
          elements: [
            {
              type: "HorizontalLayout",
              label: "Findings",
              elements: [
                {
                  "type": "Control",
                  "label": "Findings",
                  "scope": "#/properties/OptometryOtherTextField",
                  "options": {
                    "slider": true
                  }
                },
              ],
            },
          ],
        },
        /////////////color blindness////////////////
        {
          type: "HorizontalLayout",
          label: " ",
          elements: [
            {
              type: "VerticalLayout",
              label: " ",
              elements: [
                /////////////////////////Left eye color/////////////////////
                {
                  type: "Control",
                  label: "Left eye color blindness",
                  scope: "#/properties/OptometryLColorType",
                  options: {
                    format: "radio",
                  },
                }, 
                {
                  type: "Control",
                  label: "Partial color blindness",
                  scope: "#/properties/OptometryLColorType1",
                  options: {
                    format: "radio",
                  },
                  rule: {
                    effect: "SHOW",
                    condition: {
                      scope: "#/properties/OptometryLColorType",
                      schema: {
                        const: "Partial color blindness",
                      },
                    },
                  },
                },
                
                ////////////////Right eye color//////////////////
                {
                  type: "Control",
                  label: "Right eye color blindness",
                  scope: "#/properties/OptometryRColorType",
                  options: {
                    format: "radio",
                  },
                },  
                {
                  type: "Control",
                  label: "Partial color blindness",
                  scope: "#/properties/OptometryRColorType1",
                  options: {
                    format: "radio",
                  },
                  rule: {
                    effect: "SHOW",
                    condition: {
                      scope: "#/properties/OptometryRColorType",
                      schema: {
                        const: "Partial color blindness",
                      },
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
//Auto data update by Aman Gupta on 23/06/23
export default class Form22 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      schema: _schema,
      patients: [],
      query: "",
    };

    this.search = this.search.bind(this);
    this.setQuery = this.setQuery.bind(this);
    this.patientSelected = this.patientSelected.bind(this);
  }

  componentDidUpdate() {}

  handleForm(data) {
    const { schema } = this.state;
    this.setState({ data: data }, () => {
      this.props.handleChange(data, false);
    });
    this.forceUpdate();
  }

  setQuery(e) {
    this.setState({ query: e.target.value });
  }

  search() {
    fetch(`/patientdata?query=${this.state.query}`)
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
      })
      .then((d) => {
        let patients = [];
        d.forEach((p) => {
          patients.push(p.fields);
        });
        //this.setState(patients);
        this.setState({ patients: patients });
        //this.forceUpdate();
      })
      .catch((e) => {
        console.error(e);
      });
  }

  patientSelected(e) {
    const { data } = this.state;
    const pid = e.target.value;
    const patient = this.state.patients.find((p) => {
      return p.PatientId === pid;
    });
    let formData = {
      ...data,
      GenderTextFR22: patient.gender,
      AgeTextFR22: patient.age,
      NameTextFR22: patient.PatientName,
      IDTextFR22: patient.PatientId,
      TestDateTextFR22: patient.TestDate,
      ReportDateTextFR22: patient.ReportDate,
    };
    this.handleForm(formData);
  }

  render() {
    const { data, schema, patients } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="Enter name or Patient ID"
          onChange={this.setQuery}
        />{" "}
        <button onClick={this.search}>Search</button>
        {patients.length > 0 && (
          <select id="patients" onChange={this.patientSelected}>
            <option value="-1">-- Select Patient --</option>
            {patients.map((p) => {
              return (
                <option value={p.PatientId} key={p.PatientId}>
                  {p.PatientName} | ID: {p.PatientId}
                </option>
              );
            })}
            ;
          </select>
        )}
        <JsonForms
          schema={schema}
          uischema={uischema}
          data={data}
          renderers={materialRenderers}
          cells={materialCells}
          ValidationMode="ValidateAndShow"
          onChange={({ data, _errors }) => this.handleForm(data)}
        />
      </div>
    );
  }
}
