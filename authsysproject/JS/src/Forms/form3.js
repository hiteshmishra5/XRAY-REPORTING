import React, { Component } from "react";
import { Generate } from "@jsonforms/core";
import { JsonForms } from "@jsonforms/react";
//import {vanillaRenderers, vanillaCells, JsonFormsStyleContext } from '@jsonforms/vanilla-renderers';
import {materialRenderers, materialCells,} from "@jsonforms/material-renderers";

const _schema = {
  type: "object",
  properties: {
    NameTextFR3: {
			type: "string",
		},
		IDTextFR3: {
			type: "string",
		},
		AgeTextFR3: {
			type: "string",
		},
		GenderTextFR3: {
			type: "string",
			enum: ['Male', 'Female', 'Others'],
		},
		TestDateTextFR3: {
			type: "string",
		},
    ReportDateTextFR3: {
			type: "string",
		},
    allNormal: {
      type: "boolean",
    },
    Atrophy: {
      type: "boolean",
    },
    Atrophytype: {
      type: "string",
      enum: ['Age Related Cerebral Atrophy', 'Age Advanced Cerebral Atrophy']
    },
    //*************************Hemorrhage */
    Hemorrhage: {
      type: 'boolean',
    },
    IntraAxial: {
      type: "boolean",
    },

    // Intra Right
    RadioType: {
      type: "string",
      enum: ["Multiple", "Single"],
    },
    IntraRight: {
      type: "boolean",
    },
    RightIntraLocation: {
      type: "boolean",
    },

    RightIntraFrontal: {
      type: "boolean",
    },
    RightIntraTemporal: {
      type: "boolean",
    },
    RightIntraParietal: {
      type: "boolean",
    },
    RightIntraOccipital: {
      type: "boolean",
    },
    RightIntraBasalGanglia: {
      type: "boolean",
    },
    RightIntraThalamus: {
      type: "boolean",
    },
    RightIntraCerebellum: {
      type: "boolean",
    },
    RightIntraMedulla: {
      type: "boolean",
    },
    RightIntraMidBrain: {
      type: "boolean",
    },
    RightIntraPons: {
      type: "boolean",
    },
    Chronicity: {
      type: "boolean",
    },

    ChronType: {
      type: "string",
      enum: ["Acute", "Subacute", "Chronic"],
    },
    Size: {
      type: "boolean",
    },

    SizeCCText: {
      type: "string",
      description: "Type in mm.",
    },
    SizeAPText: {
      type: "string",
      description: "Type in mm.",
    },
    SizeTRText: {
      type: "string",
      description: "Type in mm.",
    },
    Perilesional: {
      type: "boolean",
    },
    PerilesiType: {
      type: "string",
      enum: ['mild', 'moderate', 'severe']
    },
    MassEffect: {
      type: "boolean",
    },
    EffacedSulci: {
      type: "boolean",
    },
    EffacedLateralVentricles: {
      type: "boolean",
    },
    UncalHerniation: {
      type: "boolean",
    },

    MidlineShift: {
      type: "boolean",
    },
    MidliniftText: {
      type: "string",
      description: "Type in mm.",
    },

    Towards: {
      type: "string",
      enum: ["right", "left"],
    },
    Intraventricular: {
      type: "boolean",
    },
    IntraventriType: {
      type: "string",
      enum: ["Yes", "No"],
    },
    Yes: {
      type: "boolean",
    },
    LateralVentricle: {
      type: "boolean",
    },
    ThirdVentricle: {
      type: "boolean",
    },
    FourthVentricle: {
      type: "boolean",
    },
    // Intra Left
    RadioType1: {
      type: "string",
      enum: ["Multiple", "Single"],
    },
    IntraLeft: {
      type: "boolean",
    },
    LeftIntraLocation: {
      type: "boolean",
    },

    LeftIntraFrontal: {
      type: "boolean",
    },
    LeftIntraTemporal: {
      type: "boolean",
    },
    LeftIntraParietal: {
      type: "boolean",
    },
    LeftIntraOccipital: {
      type: "boolean",
    },
    LeftIntraBasalGanglia: {
      type: "boolean",
    },
    LeftIntraThalamus: {
      type: "boolean",
    },
    LeftIntraCerebellum: {
      type: "boolean",
    },
    LeftIntraMedulla: {
      type: "boolean",
    },
    LeftIntraMidBrain: {
      type: "boolean",
    },
    LeftIntraPons: {
      type: "boolean",
    },
    Chronicity1: {
      type: "boolean",
    },

    ChicityType1: {
      type: "string",
      enum: ["Acute", "Subacute", "Chronic"],
    },
    Size1: {
      type: "boolean",
    },

    SizeCCText1: {
      type: "string",
      description: "Type in mm.",
    },
    SizeAPText1: {
      type: "string",
      description: "Type in mm.",
    },
    SizeTRText1: {
      type: "string",
      description: "Type in mm.",
    },
    Perilesional1: {
      type: "boolean",
    },
    Perilesi1Type: {
      type: "string",
      enum: ['mild', 'moderate', 'severe']
    },
    MassEffect1: {
      type: "boolean",
    },
    EffacedSulci1: {
      type: "boolean",
    },
    EffacedLateralVentricles1: {
      type: "boolean",
    },
    UncalHerniation1: {
      type: "boolean",
    },

    MidlineShift1: {
      type: "boolean",
    },
    MidliftText1: {
      type: "string",
      description: "Type in mm.",
    },

    Towards1: {
      type: "string",
      enum: ["right", "left"],
    },
    Intraventricular1: {
      type: "boolean",
    },
    IntraventriType1: {
      type: "string",
      enum: ["Yes", "No"],
    },
    Yes1: {
      type: "boolean",
    },
    LateralVentricle1: {
      type: "boolean",
    },
    ThirdVentricle1: {
      type: "boolean",
    },
    FourthVentricle1: {
      type: "boolean",
    },
    //ExtraAxial
    ExtraAxial: {
      type: "boolean",
    },
    SDH: {
      type: "boolean",
    },
    RightSDH: {
      type: "boolean",
    },

    RightLocation: {
      type: "boolean",
    },
    RightLocationFrontal: {
      type: "boolean",
    },
    RightLocationTemporal: {
      type: "boolean",
    },
    RightLocaitonParietal: {
      type: "boolean",
    },
    RightLocationOccipital: {
      type: "boolean",
    },

    RightLocationFalx: {
      type: "boolean",
    },
    RightLocaitonTantorium: {
      type: "boolean",
    },
    RightLocaitonChronicity: {
      type: "boolean",
    },

    RightSDHChronicityType: {
      type: "string",
      enum: ["Acute", "Subacute", "Chronic"],
    },

    RightMaximumThickness: {
      type: "boolean",
    },
    RightMaximumText: {
      type: "string",
      description: "Type in mm.",
    },
    RightMassEffect: {
      type: "boolean",
    },
    RightMassEffectEffecedSulci: {
      type: "boolean",
    },
    RightMassEffectLateralVentricle: {
      type: "boolean",
    },
    RightMassEffectUncal: {
      type: "boolean",
    },
    RightMassMidlineShift: {
      type: "boolean",
    },
    SDHrightMidLineShiftText: {
      type: "string",
    },
    RightMassMidLineTowards: {
      type: "string",
      enum: ["right", "left"],
    },

    // Left***************************
    LeftSDH: {
      type: "boolean",
    },

    LeftLocation: {
      type: "boolean",
    },
    LeftLocationFrontal: {
      type: "boolean",
    },
    LeftLocationTemporal: {
      type: "boolean",
    },
    LeftLocaitonParietal: {
      type: "boolean",
    },
    LeftLocationOccipital: {
      type: "boolean",
    },

    LeftLocationFalx: {
      type: "boolean",
    },
    LeftLocaitonTantorium: {
      type: "boolean",
    },
    LeftLocaitonChronicity: {
      type: "boolean",
    },

    LeftSDHChronicityType: {
      type: "string",
      enum: ["Acute", "Subacute", "Chronic"],
    },

    LeftMaximumThickness: {
      type: "boolean",
    },
    LeftMaximumText: {
      type: "string",
      description: "Type in mm.",
    },
    LeftMassEffect: {
      type: "boolean",
    },
    LeftMassEffectEffecedSulci: {
      type: "boolean",
    },
    LeftMassEffectLateralVentricle: {
      type: "boolean",
    },
    LeftMassEffectUncal: {
      type: "boolean",
    },
    LeftMassMidlineShift: {
      type: "boolean",
    },
    LeftSDHMidLineShiftText: {
      type: "string",
      description: "Type in mm.",
    },
    LeftMassMidLineTowards: {
      type: "string",
      enum: ["right", "left"],
    },

    EDH: {
      type: "boolean",
    },
    RightEDH: {
      type: "boolean",
    },

    EDHRightLocation: {
      type: "boolean",
    },
    EDHRightLocationFrontal: {
      type: "boolean",
    },
    EDHRightLocationTemporal: {
      type: "boolean",
    },
    EDHRightLocaitonParietal: {
      type: "boolean",
    },
    EDHRightLocationOccipital: {
      type: "boolean",
    },

    EDHRightLocationFalx: {
      type: "boolean",
    },
    EDHRightLocaitonTantorium: {
      type: "boolean",
    },
    EDHRightLocaitonChronicity: {
      type: "boolean",
    },

    EDHRightLocaitonChronicityType: {
      type: "string",
      enum: ["Acute", "Subacute", "Chronic"],
    },

    EDHRightMaximumThickness: {
      type: "boolean",
    },
    EDHRightMaximumText: {
      type: "string",
      description: "Type in mm.",
    },
    EDHRightMassEffect: {
      type: "boolean",
    },
    EDHRightMassEffectEffecedSulci: {
      type: "boolean",
    },
    EDHRightMassEffectLateralVentricle: {
      type: "boolean",
    },
    EDHRightMassEffectUncal: {
      type: "boolean",
    },
    EDHRightMassMidlineShift: {
      type: "boolean",
    },
    EDHRightMassMidLineShiftText: {
      type: "string",
      description: "Type in mm.",
    },
    EDHRightMidLineTowards: {
      type: "string",
      enum: ["right", "left"],
    },

    // Left***************************
    LeftEDH: {
      type: "boolean",
    },

    EDHLeftLocation: {
      type: "boolean",
    },
    EDHLeftLocationFrontal: {
      type: "boolean",
    },
    EDHLeftLocationTemporal: {
      type: "boolean",
    },
    EDHLeftLocaitonParietal: {
      type: "boolean",
    },
    EDHLeftLocationOccipital: {
      type: "boolean",
    },

    EDHLeftLocationFalx: {
      type: "boolean",
    },
    EDHLeftLocaitonTantorium: {
      type: "boolean",
    },
    EDHLeftLocaitonChronicity: {
      type: "boolean",
    },

    EDHLeftLocaitonChronicityType: {
      type: "string",
      enum: ["Acute", "Subacute", "Chronic"],
    },

    EDHLeftMaximumThickness: {
      type: "boolean",
    },
    EDHLeftMaximumText: {
      type: "string",
      description: "Type in mm.",
    },
    EDHLeftMassEffect: {
      type: "boolean",
    },
    EDHLeftMassEffectEffecedSulci: {
      type: "boolean",
    },
    EDHLeftMassEffectLateralVentricle: {
      type: "boolean",
    },
    EDHLeftMassEffectUncal: {
      type: "boolean",
    },
    EDHLeftMassMidlineShift: {
      type: "boolean",
    },
    EDHLeftMassMidLineShiftText: {
      type: "string",
    },
    EDHLeftMidLineTowards: {
      type: "string",
      enum: ["right", "left"],
    },

    SAH: {
      type: "boolean",
    },
    SAHType: {
      type: "string",
      enum: ["Thick", "Thin"],
    },
    SAHRight: {
      type: "boolean",
    },
    SAHRightFrontal: {
      type: "boolean",
    },
    SAHRightParietal: {
      type: "boolean",
    },
    SAHRightOccipital: {
      type: "boolean",
    },
    SAHRightTemporal: {
      type: "boolean",
    },
    SAHRightFalx: {
      type: "boolean",
    },
    SAHRightBasalCisterns: {
      type: "boolean",
    },
    SAHRightSylvianFissures: {
      type: "boolean",
    },
    SAHRightSuprasellerCistern: {
      type: "boolean",
    },

    SAHLeft: {
      type: "boolean",
    },
    SAHLeftFrontal: {
      type: "boolean",
    },
    SAHLeftParietal: {
      type: "boolean",
    },
    SAHLeftOccipital: {
      type: "boolean",
    },
    SAHLeftTemporal: {
      type: "boolean",
    },
    SAHLefttFalx: {
      type: "boolean",
    },
    SAHLeftBasalCisterns: {
      type: "boolean",
    },
    SAHLeftSylvianFissures: {
      type: "boolean",
    },
    SAHLeftSuprasellerCistern: {
      type: "boolean",
    },

    IVH: {
      type: "boolean",
    },

    LateralVentriclesLeft: {
      type: "boolean",
    },

    LateralVentriclesRight: {
      type: "boolean",
    },

    ThirdVentricles: {
      type: "boolean",
    },
    FourthVentricles: {
      type: "boolean",
    },
    ObstructiveHydrocephalus: {
      type: "boolean",
    },

    ObstructiveHydrocephalusType: {
      type: "string",
      enum: ["Yes", "No"],
    },
    EvansIndex: {
      type: "string",
    },

    //**********ChronicIschemic***************
    ChronicIschemic: {
      type: 'boolean',
    },
    // **********INfarct
    Infarct: {
      type: "boolean",
    },
    TypeofInfarct: {
      type: "boolean",
    },
    InfarctTypes: {
      type: "string",
      enum: ['Acute', 'Subacute', 'Chronic', 'Chronic Lacunar'],
    },

    Location: {
      type: "boolean",
    },
    InfractRight: {
      type: "boolean",
    },
    InfractLeft: {
      type: "boolean",
    },
    Frontal: {
      type: "boolean",
    },
    Parietal: {
      type: "boolean",
    },
    Temporal: {
      type: "boolean",
    },
    Occipital: {
      type: "boolean",
    },
    BasalGanglia: {
      type: "boolean",
    },
    Thalamus: {
      type: "boolean",
    },
    CoronaRadiate: {
      type: "boolean",
    },
    CentrumSemiovale: {
      type: 'boolean',
    },

    Cerebellum: {
      type: "boolean",
    },
    Pons: {
      type: 'boolean',
    },

    Medulla: {
      type: "boolean",
    },
    Midbrain: {
      type: "boolean",
    },
    Frontal1: {
      type: "boolean",
    },
    Parietal1: {
      type: "boolean",
    },
    Temporal1: {
      type: "boolean",
    },
    Occipital1: {
      type: "boolean",
    },
    BasalGanglia1: {
      type: "boolean",
    },
    Thalamus1: {
      type: "boolean",
    },
    CoronaRadiate1: {
      type: "boolean",
    },
    CentrumSemiovale1: {
      type: 'boolean',
    },

    Cerebellum1: {
      type: "boolean",
    },
    Pons1: {
      type: 'boolean',
    },

    Medulla1: {
      type: "boolean",
    },
    Midbrain1: {
      type: "boolean",
    },
    MassEffectInfract: {
      type: "boolean",
    },
    EffacedSulciInfract: {
      type: "boolean",
    },
    EffacedLateralVentriclesInfract: {
      type: "boolean",
    },
    UncalHerniationInfract: {
      type: "boolean",
    },
    InfractMidlineShift: {
      type: "boolean",
    },
    InfractMidLineShiftText: {
      type: "string",
    },
    HemorrhagicTransFormation: {
      type: "boolean",
    },
    HeTransformationCC: {
      type: 'string',
    },
    HeTransformationAP: {
      type: 'string',
    },
    HeTransformationTR: {
      type: 'string',
    },
  },
  required: ['typeofInfarct', 'LocationType', 'Atrophytype'],
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
							scope: "#/properties/NameTextFR3",
						},
						{
							type: "Control",
							label: "Patient ID",
							scope: "#/properties/IDTextFR3",
						},
						{
							type: "Control",
							label: "Age",
							scope: "#/properties/AgeTextFR3",
						},
						{
							type: "Control",
							label: "Test date",
							scope: "#/properties/TestDateTextFR3",
						},
                        {
							type: "Control",
							label: "Report date",
							scope: "#/properties/ReportDateTextFR3",
						},
          ],
          
        },
        {
          type: "Control",
          label: "Gender",
          scope: "#/properties/GenderTextFR3",
          options: {
            format: "radio",
          },
        },

        // normal
        {
          type: "Control",
          label: "Normal?",
          scope: "#/properties/allNormal",
        },
        // Atrophy
        {
          type: "Control",
          label: "Atrophy", 
          scope: "#/properties/Atrophy",
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/Atrophy",
              schema: {
                const: false,
              },
            },
          },
          elements: [
            {
              type: "VerticalLayout",
              label: "",
              elements: [
                {
                  type: "Control",
                  label: "",
                  scope: "#/properties/Atrophytype",
                  options: {
                    format: "radio",
                  },
                },
              ],
            },
          ],
        },

        //***************Hemmorrhage****************/
        {
          type: "Control",
          label: "Hemorrhage",
          scope: "#/properties/Hemorrhage",
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/Hemorrhage",
              schema: {
                const: false,
              },
            },
          },
          elements: [
            // Intra
            {
              type: "Control",
              label: "Intra-axial Right",
              scope: "#/properties/IntraRight",
            },
            {
              type: "Group",
              label: "",
              rule: {
                effect: "HIDE",
                condition: {
                  scope: "#/properties/IntraRight",
                  schema: {
                    const: false,
                  },
                },
              },
              elements: [
                {
                  type: "VerticalLayout",
                  label: "",
                  elements: [
                    //radio button
                    {
                      type: "Group",
                      label: "",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/RadioType",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "",
                              scope: "#/properties/RadioType",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    // Location**
                    {
                      type: "Control",
                      label: "Location*",
                      scope: "#/properties/RightIntraLocation",
                    },
                    {
                      type: "Group",
                      label: "     ",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/RightIntraLocation",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Frontal",
                                  scope: "#/properties/RightIntraFrontal",
                                },
                              ],
                            },
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Temporal",
                                  scope: "#/properties/RightIntraTemporal",
                                },
                              ],
                            },
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Parietal",
                                  scope: "#/properties/RightIntraParietal",
                                },
                              ],
                            },
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Occipital",
                                  scope: "#/properties/RightIntraOccipital",
                                },
                              ],
                            },
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Basal Ganglia",
                                  scope:
                                    "#/properties/RightIntraBasalGanglia",
                                },
                              ],
                            },
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Thalamus",
                                  scope: "#/properties/RightIntraThalamus",
                                },
                              ],
                            },
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Cerebellum",
                                  scope:
                                    "#/properties/RightIntraCerebellum",
                                },
                              ],
                            },
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Medulla",
                                  scope: "#/properties/RightIntraMedulla",
                                },
                              ],
                            },
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Midbrain",
                                  scope: "#/properties/RightIntraMidBrain",
                                },
                              ],
                            },
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Pons",
                                  scope: "#/properties/RightIntraPons",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    // Chronicity**
                    {
                      type: "Control",
                      label: "Chronicity*",
                      scope: "#/properties/Chronicity",
                    },
                    {
                      type: "Group",
                      label: "",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/Chronicity",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "",
                              scope: "#/properties/ChronType",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    // Size**
                    {
                      type: "Control",
                      label: "Size*",
                      scope: "#/properties/Size",
                    },
                    {
                      type: "Group",
                      label: "",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/Size",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "CC",
                              scope: "#/properties/SizeCCText",
                            },
                            {
                              type: "Control",
                              label: "AP",
                              scope: "#/properties/SizeAPText",
                            },
                            {
                              type: "Control",
                              label: "TR",
                              scope: "#/properties/SizeTRText",
                            },
                          ],
                        },
                      ],
                    },
                    // Perilesional**
                    {
                      type: "Control",
                      label: "Perilesional edema",
                      scope: "#/properties/Perilesional",
                    },
                    {
                      type: "Group",
                      label: "",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/Perilesional",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "",
                              scope: "#/properties/PerilesiType",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    
                    // Mass Effect**
                    {
                      type: "Control",
                      label: "Mass Effect*",
                      scope: "#/properties/MassEffect",
                    },
                    {
                      type: "Group",
                      label: "",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/MassEffect",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "Effaced Sulci",
                              scope: "#/properties/EffacedSulci",
                            },
                            {
                              type: "Control",
                              label: "Effaced Lateral Ventricle",
                              scope:
                                "#/properties/EffacedLateralVentricles",
                            },
                            {
                              type: "Control",
                              label: "Uncal Herniation",
                              scope: "#/properties/UncalHerniation",
                            },
                            {
                              type: "Control",
                              label: "Midline Shaft",
                              scope: "#/properties/MidlineShift",
                            },
                            {
                              type: "Group",
                              label: "",
                              rule: {
                                effect: "HIDE",
                                condition: {
                                  scope: "#/properties/MidlineShift",
                                  schema: {
                                    const: false,
                                  },
                                },
                              },
                              elements: [
                                {
                                  type: "VerticalLayout",
                                  label: "",
                                  elements: [
                                    {
                                      type: "Control",
                                      label: "Midline Shaft?",
                                      scope:
                                        "#/properties/MidliniftText",
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    //Intraventricular extension
                    {
                      type: "Control",
                      label: "Intra Ventricular Extension",
                      scope: "#/properties/Intraventricular",
                    },
                    {
                      type: "Group",
                      label: "",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/Intraventricular",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "",
                              scope: "#/properties/IntraventriType",
                              options: {
                                format: "radio",
                              },
                            },
                            {
                              type: "Control",
                              label: "Lateral Ventricle",
                              scope: "#/properties/LateralVentricle",
                              rule: {
                                effect: "SHOW",
                                condition: {
                                  scope:
                                    "#/properties/IntraventriType",
                                  schema: {
                                    const: "Yes",
                                  },
                                },
                              },
                            },
                            {
                              type: "Control",
                              label: "Third Ventricle",
                              scope: "#/properties/ThirdVentricle",
                              rule: {
                                effect: "SHOW",
                                condition: {
                                  scope:
                                    "#/properties/IntraventriType",
                                  schema: {
                                    const: "Yes",
                                  },
                                },
                              },
                            },
                            {
                              type: "Control",
                              label: "Fourth Ventricle",
                              scope: "#/properties/FourthVentricle",
                              rule: {
                                effect: "SHOW",
                                condition: {
                                  scope:
                                    "#/properties/IntraventriType",
                                  schema: {
                                    const: "Yes",
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
            },
            //intra axial left***********************************
            {
              type: "Control",
              label: "Intra-axial Left",
              scope: "#/properties/IntraLeft",
            },
            {
              type: "Group",
              label: "",
              rule: {
                effect: "HIDE",
                condition: {
                  scope: "#/properties/IntraLeft",
                  schema: {
                    const: false,
                  },
                },
              },
              elements: [
                {
                  type: "VerticalLayout",
                  label: "",
                  elements: [
                    //radio button
                    {
                      type: "Group",
                      label: "",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/RadioType1",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "",
                              scope: "#/properties/RadioType1",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    // Location**
                    {
                      type: "Control",
                      label: "Location*",
                      scope: "#/properties/LeftIntraLocation",
                    },
                    {
                      type: "Group",
                      label: "  ",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/LeftIntraLocation",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "  ",
                          elements: [
                            {
                              type: "HorizontalLayout",
                              label: "  ",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Frontal",
                                  scope: "#/properties/LeftIntraFrontal",
                                },
                              ],
                            },
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Temporal",
                                  scope: "#/properties/LeftIntraTemporal",
                                },
                              ],
                            },
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Parietal",
                                  scope: "#/properties/LeftIntraParietal",
                                },
                              ],
                            },
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Occipital",
                                  scope: "#/properties/LeftIntraOccipital",
                                },
                              ],
                            },
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Basal Ganglia",
                                  scope:
                                    "#/properties/LeftIntraBasalGanglia",
                                },
                              ],
                            },
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Thalamus",
                                  scope: "#/properties/LeftIntraThalamus",
                                },
                              ],
                            },
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Cerebellum",
                                  scope: "#/properties/LeftIntraCerebellum",
                                },
                              ],
                            },
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Medulla",
                                  scope: "#/properties/LeftIntraMedulla",
                                },
                              ],
                            },
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Midbrain",
                                  scope: "#/properties/LeftIntraMidBrain",
                                },
                              ],
                            },
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Pons",
                                  scope: "#/properties/LeftIntraPons",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    // Chronicity**
                    {
                      type: "Control",
                      label: "Chronicity*",
                      scope: "#/properties/Chronicity1",
                    },
                    {
                      type: "Group",
                      label: "",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/Chronicity1",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "",
                              scope: "#/properties/ChicityType1",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    // Size**
                    {
                      type: "Control",
                      label: "Size*",
                      scope: "#/properties/Size1",
                    },
                    {
                      type: "Group",
                      label: "",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/Size1",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "CC",
                              scope: "#/properties/SizeCCText1",
                            },
                            {
                              type: "Control",
                              label: "AP",
                              scope: "#/properties/SizeAPText1",
                            },
                            {
                              type: "Control",
                              label: "TR",
                              scope: "#/properties/SizeTRText1",
                            },
                          ],
                        },
                      ],
                    },
                    // Perilesional**
                    {
                      type: "Control",
                      label: "Perilesional edema",
                      scope: "#/properties/Perilesional1",
                    },
                    {
                      type: "Group",
                      label: "",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/Perilesional1",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "",
                              scope: "#/properties/Perilesi1Type",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    
                    // Mass Effect**
                    {
                      type: "Control",
                      label: "Mass Effect*",
                      scope: "#/properties/MassEffect1",
                    },
                    {
                      type: "Group",
                      label: "",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/MassEffect1",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "Effaced Sulci",
                              scope: "#/properties/EffacedSulci1",
                            },
                            {
                              type: "Control",
                              label: "Effaced Lateral Ventricle",
                              scope:
                                "#/properties/EffacedLateralVentricles1",
                            },
                            {
                              type: "Control",
                              label: "Uncal Herniation",
                              scope: "#/properties/UncalHerniation1",
                            },
                            {
                              type: "Control",
                              label: "Midline Shaft",
                              scope: "#/properties/MidlineShift1",
                            },
                            {
                              type: "Group",
                              label: "",
                              rule: {
                                effect: "HIDE",
                                condition: {
                                  scope: "#/properties/MidlineShift1",
                                  schema: {
                                    const: false,
                                  },
                                },
                              },
                              elements: [
                                {
                                  type: "VerticalLayout",
                                  label: "",
                                  elements: [
                                    {
                                      type: "Control",
                                      label: "Midline Shaft?",
                                      scope:
                                        "#/properties/MidliftText1",
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    //Intraventricular extension
                    {
                      type: "Control",
                      label: "Intra Ventricular Extension",
                      scope: "#/properties/Intraventricular1",
                    },
                    {
                      type: "Group",
                      label: "",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/Intraventricular1",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "",
                              scope: "#/properties/IntraventriType1",
                              options: {
                                format: "radio",
                              },
                            },
                            {
                              type: "Control",
                              label: "Lateral Ventricle",
                              scope: "#/properties/LateralVentricle1",
                              rule: {
                                effect: "SHOW",
                                condition: {
                                  scope:
                                    "#/properties/IntraventriType1",
                                  schema: {
                                    const: "Yes",
                                  },
                                },
                              },
                            },
                            {
                              type: "Control",
                              label: "Third Ventricle",
                              scope: "#/properties/ThirdVentricle1",
                              rule: {
                                effect: "SHOW",
                                condition: {
                                  scope:
                                    "#/properties/IntraventriType1",
                                  schema: {
                                    const: "Yes",
                                  },
                                },
                              },
                            },
                            {
                              type: "Control",
                              label: "Fourth Ventricle",
                              scope: "#/properties/FourthVentricle1",
                              rule: {
                                effect: "SHOW",
                                condition: {
                                  scope:
                                    "#/properties/IntraventriType1",
                                  schema: {
                                    const: "Yes",
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
            },
    
            // Extra
            {
              type: "Control",
              label: "Extra Axial",
              scope: "#/properties/ExtraAxial",
            },
            {
              type: "Group",
              label: "",
              rule: {
                effect: "HIDE",
                condition: {
                  scope: "#/properties/ExtraAxial",
                  schema: {
                    const: false,
                  },
                },
              },
              elements: [
                {
                  type: "VerticalLayout",
                  label: "",
                  elements: [
                    // SDH
    
                    {
                      type: "Control",
                      label: "SDH",
                      scope: "#/properties/SDH",
                    },
                    {
                      type: "Group",
                      label: "",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/SDH",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "Right SDH",
                              scope: "#/properties/RightSDH",
                            },
                            {
                              type: "Group",
                              label: "",
                              rule: {
                                effect: "HIDE",
                                condition: {
                                  scope: "#/properties/RightSDH",
                                  schema: {
                                    const: false,
                                  },
                                },
                              },
                              elements: [
                                {
                                  type: "VerticalLayout",
                                  label: "",
                                  elements: [
                                    {
                                      type: "Control",
                                      label: "Location*",
                                      scope: "#/properties/RightLocation",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope: "#/properties/RightLocation",
                                          schema: {
                                            const: false,
                                          },
                                        },
                                      },
                                      elements: [
                                        {
                                          type: "HorizontalLayout",
                                          label: "",
                                          elements: [
                                            {
                                              type: "Control",
                                              label: "Frontal",
                                              scope:
                                                "#/properties/RightLocationFrontal",
                                            },
                                            {
                                              type: "Control",
                                              label: "Temporal",
                                              scope:
                                                "#/properties/RightLocationTemporal",
                                            },
                                            {
                                              type: "Control",
                                              label: "Parietal",
                                              scope:
                                                "#/properties/RightLocaitonParietal",
                                            },
                                            {
                                              type: "Control",
                                              label: "Occipital",
                                              scope:
                                                "#/properties/RightLocationOccipital",
                                            },
    
                                            {
                                              type: "Control",
                                              label: "Falx",
                                              scope:
                                                "#/properties/RightLocationFalx",
                                            },
                                            {
                                              type: "Control",
                                              label: "Tentorium",
                                              scope:
                                                "#/properties/RightLocaitonTantorium",
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "Control",
                                      label: "Chronicity*",
                                      scope: "#/properties/RightLocaitonChronicity",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope:
                                            "#/properties/RightLocaitonChronicity",
                                          schema: {
                                            const: false,
                                          },
                                        },
                                      },
                                      elements: [
                                        {
                                          type: "HorizontalLayout",
                                          label: "",
                                          elements: [
                                            {
                                              type: "Control",
                                              label: "",
                                              scope:
                                                "#/properties/RightSDHChronicityType",
                                              options: {
                                                format: "radio",
                                              },
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "Control",
                                      label: "Maximum thickness*",
                                      scope: "#/properties/RightMaximumThickness",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope:
                                            "#/properties/RightMaximumThickness",
                                          schema: {
                                            const: false,
                                          },
                                        },
                                      },
                                      elements: [
                                        {
                                          type: "HorizontalLayout",
                                          label: "",
                                          elements: [
                                            {
                                              type: "Control",
                                              label: "Thickness?",
                                              scope:
                                                "#/properties/RightMaximumText",
                                            },
                                          ],
                                        },
                                      ],
                                    },
    
                                    {
                                      type: "Control",
                                      label: "Mass Effect*",
                                      scope: "#/properties/RightMassEffect",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope: "#/properties/RightMassEffect",
                                          schema: {
                                            const: false,
                                          },
                                        },
                                      },
                                      elements: [
                                        {
                                          type: "HorizontalLayout",
                                          label: "",
                                          elements: [
                                            {
                                              type: "Control",
                                              label: "Effaced Sulci",
                                              scope:
                                                "#/properties/RightMassEffectEffecedSulci",
                                            },
                                            {
                                              type: "Control",
                                              label: "Effaced lateral Ventricle",
                                              scope:
                                                "#/properties/RightMassEffectLateralVentricle",
                                            },
                                            {
                                              type: "Control",
                                              label: "Uncal Herniation",
                                              scope:
                                                "#/properties/RightMassEffectUncal",
                                            },
                                            {
                                              type: "Control",
                                              label: "Midline Shaft",
                                              scope:
                                                "#/properties/RightMassMidlineShift",
                                            },
                                            {
                                              type: "Group",
                                              label: "",
                                              rule: {
                                                effect: "HIDE",
                                                condition: {
                                                  scope:
                                                    "#/properties/RightMassMidlineShift",
                                                  schema: {
                                                    const: false,
                                                  },
                                                },
                                              },
                                              elements: [
                                                {
                                                  type: "VerticalLayout",
                                                  label: "",
                                                  elements: [
                                                    {
                                                      type: "Control",
                                                      label: "Midline Shaft?",
                                                      scope:
                                                        "#/properties/SDHrightMidLineShiftText",
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
                              ],
                            },
    
                            {
                              type: "Control",
                              label: "Left SDH",
                              scope: "#/properties/LeftSDH",
                            },
                            {
                              type: "Group",
                              label: "",
                              rule: {
                                effect: "HIDE",
                                condition: {
                                  scope: "#/properties/LeftSDH",
                                  schema: {
                                    const: false,
                                  },
                                },
                              },
                              elements: [
                                {
                                  type: "VerticalLayout",
                                  label: "",
                                  elements: [
                                    {
                                      type: "Control",
                                      label: "Location*",
                                      scope: "#/properties/LeftLocation",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope: "#/properties/LeftLocation",
                                          schema: {
                                            const: false,
                                          },
                                        },
                                      },
                                      elements: [
                                        {
                                          type: "HorizontalLayout",
                                          label: "",
                                          elements: [
                                            {
                                              type: "Control",
                                              label: "Frontal",
                                              scope:
                                                "#/properties/LeftLocationFrontal",
                                            },
                                            {
                                              type: "Control",
                                              label: "Temporal",
                                              scope:
                                                "#/properties/LeftLocationTemporal",
                                            },
                                            {
                                              type: "Control",
                                              label: "Parietal",
                                              scope:
                                                "#/properties/LeftLocaitonParietal",
                                            },
                                            {
                                              type: "Control",
                                              label: "Occipital",
                                              scope:
                                                "#/properties/LeftLocationOccipital",
                                            },
    
                                            {
                                              type: "Control",
                                              label: "Falx",
                                              scope:
                                                "#/properties/LeftLocationFalx",
                                            },
                                            {
                                              type: "Control",
                                              label: "Tentorium",
                                              scope:
                                                "#/properties/LeftLocaitonTantorium",
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "Control",
                                      label: "Chronicity*",
                                      scope: "#/properties/LeftLocaitonChronicity",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope:
                                            "#/properties/LeftLocaitonChronicity",
                                          schema: {
                                            const: false,
                                          },
                                        },
                                      },
                                      elements: [
                                        {
                                          type: "HorizontalLayout",
                                          label: "",
                                          elements: [
                                            {
                                              type: "Control",
                                              label: "",
                                              scope:
                                                "#/properties/LeftSDHChronicityType",
                                              options: {
                                                format: "radio",
                                              },
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "Control",
                                      label: "Maximum thickness*",
                                      scope: "#/properties/LeftMaximumThickness",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope:
                                            "#/properties/LeftMaximumThickness",
                                          schema: {
                                            const: false,
                                          },
                                        },
                                      },
                                      elements: [
                                        {
                                          type: "HorizontalLayout",
                                          label: "",
                                          elements: [
                                            {
                                              type: "Control",
                                              label: "Thickness?",
                                              scope: "#/properties/LeftMaximumText",
                                            },
                                          ],
                                        },
                                      ],
                                    },
    
                                    {
                                      type: "Control",
                                      label: "Mass Effect*",
                                      scope: "#/properties/LeftMassEffect",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope: "#/properties/LeftMassEffect",
                                          schema: {
                                            const: false,
                                          },
                                        },
                                      },
                                      elements: [
                                        {
                                          type: "HorizontalLayout",
                                          label: "",
                                          elements: [
                                            {
                                              type: "Control",
                                              label: "Effaced Sulci",
                                              scope:
                                                "#/properties/LeftMassEffectEffecedSulci",
                                            },
                                            {
                                              type: "Control",
                                              label: "Effaced lateral Ventricle",
                                              scope:
                                                "#/properties/LeftMassEffectLateralVentricle",
                                            },
                                            {
                                              type: "Control",
                                              label: "Uncal Herniation",
                                              scope:
                                                "#/properties/LeftMassEffectUncal",
                                            },
                                            {
                                              type: "Control",
                                              label: "Midline Shaft",
                                              scope:
                                                "#/properties/LeftMassMidlineShift",
                                            },
                                            {
                                              type: "Group",
                                              label: "",
                                              rule: {
                                                effect: "HIDE",
                                                condition: {
                                                  scope:
                                                    "#/properties/LeftMassMidlineShift",
                                                  schema: {
                                                    const: false,
                                                  },
                                                },
                                              },
                                              elements: [
                                                {
                                                  type: "VerticalLayout",
                                                  label: "",
                                                  elements: [
                                                    {
                                                      type: "Control",
                                                      label: "Midline Shaft?",
                                                      scope:
                                                        "#/properties/LeftSDHMidLineShiftText",
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
                              ],
                            },
                          ],
                        },
                      ],
                    },
    
                    // EDH**
                    {
                      type: "Control",
                      label: "EDH",
                      scope: "#/properties/EDH",
                    },
                    {
                      type: "Group",
                      label: "",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/EDH",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "Right EDH",
                              scope: "#/properties/RightEDH",
                            },
                            {
                              type: "Group",
                              label: "",
                              rule: {
                                effect: "HIDE",
                                condition: {
                                  scope: "#/properties/RightEDH",
                                  schema: {
                                    const: false,
                                  },
                                },
                              },
                              elements: [
                                {
                                  type: "VerticalLayout",
                                  label: "",
                                  elements: [
                                    {
                                      type: "Control",
                                      label: "Location*",
                                      scope: "#/properties/EDHRightLocation",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope: "#/properties/EDHRightLocation",
                                          schema: {
                                            const: false,
                                          },
                                        },
                                      },
                                      elements: [
                                        {
                                          type: "HorizontalLayout",
                                          label: "",
                                          elements: [
                                            {
                                              type: "Control",
                                              label: "Frontal",
                                              scope:
                                                "#/properties/EDHRightLocationFrontal",
                                            },
                                            {
                                              type: "Control",
                                              label: "Temporal",
                                              scope:
                                                "#/properties/EDHRightLocationTemporal",
                                            },
                                            {
                                              type: "Control",
                                              label: "Parietal",
                                              scope:
                                                "#/properties/EDHRightLocaitonParietal",
                                            },
                                            {
                                              type: "Control",
                                              label: "Occipital",
                                              scope:
                                                "#/properties/EDHRightLocationOccipital",
                                            },
    
                                            {
                                              type: "Control",
                                              label: "Falx",
                                              scope:
                                                "#/properties/EDHRightLocationFalx",
                                            },
                                            {
                                              type: "Control",
                                              label: "Tentorium",
                                              scope:
                                                "#/properties/EDHRightLocaitonTantorium",
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "Control",
                                      label: "Chronicity*",
                                      scope:
                                        "#/properties/EDHRightLocaitonChronicity",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope:
                                            "#/properties/EDHRightLocaitonChronicity",
                                          schema: {
                                            const: false,
                                          },
                                        },
                                      },
                                      elements: [
                                        {
                                          type: "HorizontalLayout",
                                          label: "",
                                          elements: [
                                            {
                                              type: "Control",
                                              label: "",
                                              scope:
                                                "#/properties/EDHRightLocaitonChronicityType",
                                              options: {
                                                format: "radio",
                                              },
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "Control",
                                      label: "Maximum thickness*",
                                      scope:
                                        "#/properties/EDHRightMaximumThickness",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope:
                                            "#/properties/EDHRightMaximumThickness",
                                          schema: {
                                            const: false,
                                          },
                                        },
                                      },
                                      elements: [
                                        {
                                          type: "HorizontalLayout",
                                          label: "",
                                          elements: [
                                            {
                                              type: "Control",
                                              label: "Thickness?",
                                              scope:
                                                "#/properties/EDHRightMaximumText",
                                            },
                                          ],
                                        },
                                      ],
                                    },
    
                                    {
                                      type: "Control",
                                      label: "Mass Effect*",
                                      scope: "#/properties/EDHRightMassEffect",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope: "#/properties/EDHRightMassEffect",
                                          schema: {
                                            const: false,
                                          },
                                        },
                                      },
                                      elements: [
                                        {
                                          type: "HorizontalLayout",
                                          label: "",
                                          elements: [
                                            {
                                              type: "Control",
                                              label: "Effaced Sulci",
                                              scope:
                                                "#/properties/EDHRightMassEffectEffecedSulci",
                                            },
                                            {
                                              type: "Control",
                                              label: "Effaced lateral Ventricle",
                                              scope:
                                                "#/properties/EDHRightMassEffectLateralVentricle",
                                            },
                                            {
                                              type: "Control",
                                              label: "Uncal Herniation",
                                              scope:
                                                "#/properties/EDHRightMassEffectUncal",
                                            },
                                            {
                                              type: "Control",
                                              label: "Midline Shaft",
                                              scope:
                                                "#/properties/EDHRightMassMidlineShift",
                                            },
                                            {
                                              type: "Group",
                                              label: "",
                                              rule: {
                                                effect: "HIDE",
                                                condition: {
                                                  scope:
                                                    "#/properties/EDHRightMassMidlineShift",
                                                  schema: {
                                                    const: false,
                                                  },
                                                },
                                              },
                                              elements: [
                                                {
                                                  type: "VerticalLayout",
                                                  label: "",
                                                  elements: [
                                                    {
                                                      type: "Control",
                                                      label: "Midline Shaft?",
                                                      scope:
                                                        "#/properties/EDHRightMassMidLineShiftText",
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
                              ],
                            },
    
                            {
                              type: "Control",
                              label: "Left EDH",
                              scope: "#/properties/LeftEDH",
                            },
                            {
                              type: "Group",
                              label: "",
                              rule: {
                                effect: "HIDE",
                                condition: {
                                  scope: "#/properties/LeftEDH",
                                  schema: {
                                    const: false,
                                  },
                                },
                              },
                              elements: [
                                {
                                  type: "VerticalLayout",
                                  label: "",
                                  elements: [
                                    {
                                      type: "Control",
                                      label: "Location*",
                                      scope: "#/properties/EDHLeftLocation",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope: "#/properties/EDHLeftLocation",
                                          schema: {
                                            const: false,
                                          },
                                        },
                                      },
                                      elements: [
                                        {
                                          type: "HorizontalLayout",
                                          label: "",
                                          elements: [
                                            {
                                              type: "Control",
                                              label: "Frontal",
                                              scope:
                                                "#/properties/EDHLeftLocationFrontal",
                                            },
                                            {
                                              type: "Control",
                                              label: "Temporal",
                                              scope:
                                                "#/properties/EDHLeftLocationTemporal",
                                            },
                                            {
                                              type: "Control",
                                              label: "Parietal",
                                              scope:
                                                "#/properties/EDHLeftLocaitonParietal",
                                            },
                                            {
                                              type: "Control",
                                              label: "Occipital",
                                              scope:
                                                "#/properties/EDHLeftLocationOccipital",
                                            },
    
                                            {
                                              type: "Control",
                                              label: "Falx",
                                              scope:
                                                "#/properties/EDHLeftLocationFalx",
                                            },
                                            {
                                              type: "Control",
                                              label: "Tentorium",
                                              scope:
                                                "#/properties/EDHLeftLocaitonTantorium",
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "Control",
                                      label: "Chronicity*",
                                      scope:
                                        "#/properties/EDHLeftLocaitonChronicity",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope:
                                            "#/properties/EDHLeftLocaitonChronicity",
                                          schema: {
                                            const: false,
                                          },
                                        },
                                      },
                                      elements: [
                                        {
                                          type: "HorizontalLayout",
                                          label: "",
                                          elements: [
                                            {
                                              type: "Control",
                                              label: "",
                                              scope:
                                                "#/properties/EDHLeftLocaitonChronicityType",
                                              options: {
                                                format: "radio",
                                              },
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "Control",
                                      label: "Maximum thickness*",
                                      scope: "#/properties/EDHLeftMaximumThickness",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope:
                                            "#/properties/EDHLeftMaximumThickness",
                                          schema: {
                                            const: false,
                                          },
                                        },
                                      },
                                      elements: [
                                        {
                                          type: "HorizontalLayout",
                                          label: "",
                                          elements: [
                                            {
                                              type: "Control",
                                              label: "Thickness?",
                                              scope:
                                                "#/properties/EDHLeftMaximumText",
                                            },
                                          ],
                                        },
                                      ],
                                    },
    
                                    {
                                      type: "Control",
                                      label: "Mass Effect*",
                                      scope: "#/properties/EDHLeftMassEffect",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope: "#/properties/EDHLeftMassEffect",
                                          schema: {
                                            const: false,
                                          },
                                        },
                                      },
                                      elements: [
                                        {
                                          type: "HorizontalLayout",
                                          label: "",
                                          elements: [
                                            {
                                              type: "Control",
                                              label: "Effaced Sulci",
                                              scope:
                                                "#/properties/EDHLeftMassEffectEffecedSulci",
                                            },
                                            {
                                              type: "Control",
                                              label: "Effaced lateral Ventricle",
                                              scope:
                                                "#/properties/EDHLeftMassEffectLateralVentricle",
                                            },
                                            {
                                              type: "Control",
                                              label: "Uncal Herniation",
                                              scope:
                                                "#/properties/EDHLeftMassEffectUncal",
                                            },
                                            {
                                              type: "Control",
                                              label: "Midline Shaft",
                                              scope:
                                                "#/properties/EDHLeftMassMidlineShift",
                                            },
                                            {
                                              type: "Group",
                                              label: "",
                                              rule: {
                                                effect: "HIDE",
                                                condition: {
                                                  scope:
                                                    "#/properties/EDHLeftMassMidlineShift",
                                                  schema: {
                                                    const: false,
                                                  },
                                                },
                                              },
                                              elements: [
                                                {
                                                  type: "VerticalLayout",
                                                  label: "",
                                                  elements: [
                                                    {
                                                      type: "Control",
                                                      label: "Midline Shaft?",
                                                      scope:
                                                        "#/properties/EDHLeftMassMidLineShiftText",
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
                              ],
                            },
                          ],
                        },
                      ],
                    },
    
                    // SAH**
                    {
                      type: "Control",
                      label: "SAH",
                      scope: "#/properties/SAH",
                    },
                    {
                      type: "Group",
                      label: "",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/SAH",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "",
                              scope: "#/properties/SAHType",
                              options: {
                                format: "radio",
                              },
                            },
                          ],
                        },
                        {
                          type: "Group",
                          label: "",
                          rule: {
                            effect: "HIDE",
                            condition: {
                              scope: "#/properties/SAHType",
                              schema: { enum: ["", undefined] },
                            },
                          },
                          elements: [
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "VerticalLayout",
                                  label: "",
                                  elements: [
                                    {
                                      type: "Control",
                                      label: "SAH Right",
                                      scope: "#/properties/SAHRight",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope: "#/properties/SAHRight",
                                          schema: {
                                            const: false,
                                          },
                                        },
                                      },
                                      elements: [
                                        {
                                          type: "HorizontalLayout",
                                          label: "",
                                          elements: [
                                            {
                                              type: "Control",
                                              label: "Frontal",
                                              scope: "#/properties/SAHRightFrontal",
                                            },
                                            {
                                              type: "Control",
                                              label: "parietal",
                                              scope:
                                                "#/properties/SAHRightParietal",
                                            },
                                            {
                                              type: "Control",
                                              label: "Occipital",
                                              scope:
                                                "#/properties/SAHRightOccipital",
                                            },
                                            {
                                              type: "Control",
                                              label: "Falx",
                                              scope:
                                                "#/properties/SAHRightFalx",
                                            },
                                            {
                                              type: "Control",
                                              label: "Temporal",
                                              scope:
                                                "#/properties/SAHRightTemporal",
                                            },
                                            {
                                              type: "Control",
                                              label: "Basal Cisterns",
                                              scope:
                                                "#/properties/SAHRightBasalCisterns",
                                            },
                                            {
                                              type: "Control",
                                              label: "Sylvian Fissures",
                                              scope:
                                                "#/properties/SAHRightSylvianFissures",
                                            },
                                            {
                                              type: "Control",
                                              label: "Supraseller Cistern",
                                              scope:
                                                "#/properties/SAHRightSuprasellerCistern",
                                            },
                                          ],
                                        },
                                      ],
                                    },
    
                                    {
                                      type: "Control",
                                      label: "SAH Left",
                                      scope: "#/properties/SAHLeft",
                                    },
                                    {
                                      type: "Group",
                                      label: "",
                                      rule: {
                                        effect: "HIDE",
                                        condition: {
                                          scope: "#/properties/SAHLeft",
                                          schema: {
                                            const: false,
                                          },
                                        },
                                      },
                                      elements: [
                                        {
                                          type: "HorizontalLayout",
                                          label: "",
                                          elements: [
                                            {
                                              type: "Control",
                                              label: "Frontal",
                                              scope: "#/properties/SAHLeftFrontal",
                                            },
                                            {
                                              type: "Control",
                                              label: "parietal",
                                              scope: "#/properties/SAHLeftParietal",
                                            },
                                            {
                                              type: "Control",
                                              label: "Occipital",
                                              scope:
                                                "#/properties/SAHLeftOccipital",
                                            },
                                            {
                                              type: "Control",
                                              label: "Temporal",
                                              scope: "#/properties/SAHLeftTemporal",
                                            },
                                            {
                                              type: "Control",
                                              label: "Falx",
                                              scope:
                                                "#/properties/SAHLefttFalx",
                                            },
                                            {
                                              type: "Control",
                                              label: "Basal Cisterns",
                                              scope:
                                                "#/properties/SAHLeftBasalCisterns",
                                            },
                                            {
                                              type: "Control",
                                              label: "Sylvian Fissures",
                                              scope:
                                                "#/properties/SAHLeftSylvianFissures",
                                            },
                                            {
                                              type: "Control",
                                              label: "Supraseller Cistern",
                                              scope:
                                                "#/properties/SAHLeftSuprasellerCistern",
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
                      ],
                    },
    
                    // IVH**
    
                    {
                      type: "Control",
                      label: "IVH",
                      scope: "#/properties/IVH",
                    },
                    {
                      type: "Group",
                      label: "",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/IVH",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "Lateral Ventricles Right",
                              scope: "#/properties/LateralVentriclesRight",
                            },
    
                            {
                              type: "Control",
                              label: "Lateral Ventricles Left",
                              scope: "#/properties/LateralVentriclesLeft",
                            },
                            {
                              type: "Control",
                              label: "Third Ventricles",
                              scope: "#/properties/ThirdVentricles",
                            },
                            {
                              type: "Control",
                              label: "Fourth Ventricles",
                              scope: "#/properties/FourthVentricles",
                            },
                          ],
                        },
                        {
                          type: "Control",
                          label: "Obstructive Hydrocephalus",
                          scope: "#/properties/ObstructiveHydrocephalus",
                        },
                      ],
                    },
                    {
                      type: "Control",
                      label: "Evans Index",
                      scope: "#/properties/EvansIndex",
                    },
                  ],
                },
              ],
            },
          ],
        },
          
        //chronic ischemic changes
        {
          type: "Control",
          label: "Chronic ischemic changes",
          scope: "#/properties/ChronicIschemic",
        },
        //Infarct
        {
          type: "Control",
          label: "Infarct",
          scope: "#/properties/Infarct",
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/Infarct",
              schema: {
                const: false,
              },
            },
          },
          elements: [
            {
              type: "VerticalLayout",
              label: "",
              elements: [
                {
                  type: "Control",
                  label: "Location*",
                  scope: "#/properties/Location",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/Location",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "Control",
                      label: "Right",
                      scope: "#/properties/InfractRight",
                    },
                    {
                      type: "Group",
                      label: "",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/InfractRight",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Frontal",
                                  scope: "#/properties/Frontal",
                                },
                                {
                                  type: "Control",
                                  label: "Parietal",
                                  scope: "#/properties/Parietal",
                                },
                                {
                                  type: "Control",
                                  label: "Temporal",
                                  scope: "#/properties/Temporal",
                                },
                                {
                                  type: "Control",
                                  label: "Occipital",
                                  scope: "#/properties/Occipital",
                                },
                                {
                                  type: "Control",
                                  label: "Basal Ganglia",
                                  scope: "#/properties/BasalGanglia",
                                },
                                {
                                  type: "Control",
                                  label: "Thalamus",
                                  scope: "#/properties/Thalamus",
                                },
                                {
                                  type: "Control",
                                  label: "Corona Radiate",
                                  scope: "#/properties/CoronaRadiate",
                                },
                                {
                                  type: "Control",
                                  label: "centrum Semiovale",
                                  scope: "#/properties/CentrumSemiovale",
                                },
                                {
                                  type: "Control",
                                  label: "Cerebellum",
                                  scope: "#/properties/Cerebellum",
                                },
                                {
                                  type: "Control",
                                  label: "Pons",
                                  scope: "#/properties/Pons",
                                },
                                {
                                  type: "Control",
                                  label: "Medulla",
                                  scope: "#/properties/Medulla",
                                },
                                {
                                  type: "Control",
                                  label: "Mid Brain",
                                  scope: "#/properties/Midbrain",
                                },
                              ],
                            },
                          ],
                        },
                      ]
                    },
                    //Infract left
                    {
                      type: "Control",
                      label: "Left",
                      scope: "#/properties/InfractLeft",
                    },
                    {
                      type: "Group",
                      label: "",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/InfractLeft",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Frontal",
                                  scope: "#/properties/Frontal1",
                                },
                                {
                                  type: "Control",
                                  label: "Parietal",
                                  scope: "#/properties/Parietal1",
                                },
                                {
                                  type: "Control",
                                  label: "Temporal",
                                  scope: "#/properties/Temporal1",
                                },
                                {
                                  type: "Control",
                                  label: "Occipital",
                                  scope: "#/properties/Occipital1",
                                },
                                {
                                  type: "Control",
                                  label: "Basal Ganglia",
                                  scope: "#/properties/BasalGanglia1",
                                },
                                {
                                  type: "Control",
                                  label: "Thalamus",
                                  scope: "#/properties/Thalamus1",
                                },
                                {
                                  type: "Control",
                                  label: "Corona Radiate",
                                  scope: "#/properties/CoronaRadiate1",
                                },
                                {
                                  type: "Control",
                                  label: "centrum Semiovale",
                                  scope: "#/properties/CentrumSemiovale1",
                                },
                                {
                                  type: "Control",
                                  label: "Cerebellum",
                                  scope: "#/properties/Cerebellum1",
                                },
                                {
                                  type: "Control",
                                  label: "Pons",
                                  scope: "#/properties/Pons1",
                                },
                                {
                                  type: "Control",
                                  label: "Medulla",
                                  scope: "#/properties/Medulla1",
                                },
                                {
                                  type: "Control",
                                  label: "Mid Brain",
                                  scope: "#/properties/Midbrain1",
                                },
                              ],
                            },
                          ],
                        },
                      ]
                    },
                  ],
                },
                {
                  type: "Control",
                  label: "Type of Infarct*",
                  scope: "#/properties/TypeofInfarct",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/TypeofInfarct",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "HorizontalLayout",
                      label: "",
                      elements: [
                        {
                          type: "Control",
                          label: " ",
                          scope: "#/properties/InfarctTypes",
                          options: {
                            format: "radio",
                          },
                        },
                      ],
                    },
                  ],
                },
                // Mass Effect**
                {
                  type: "Control",
                  label: "Mass Effect*",
                  scope: "#/properties/MassEffectInfract",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/MassEffectInfract",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "HorizontalLayout",
                      label: "",
                      elements: [
                        {
                          type: "Control",
                          label: "Effaced Sulci",
                          scope: "#/properties/EffacedSulciInfract",
                        },
                        {
                          type: "Control",
                          label: "Effaced Lateral Ventricle",
                          scope:
                            "#/properties/EffacedLateralVentriclesInfract",
                        },
                        {
                          type: "Control",
                          label: "Uncal Herniation",
                          scope: "#/properties/UncalHerniationInfract",
                        },
                        {
                          type: "Control",
                          label: "Midline Shaft",
                          scope:
                            "#/properties/InfractMidlineShift",
                        },
                        {
                          type: "Group",
                          label: "",
                          rule: {
                            effect: "HIDE",
                            condition: {
                              scope:
                                "#/properties/InfractMidlineShift",
                              schema: {
                                const: false,
                              },
                            },
                          },
                          elements: [
                            {
                              type: "Group",
                              label: "",
                              rule: {
                                effect: "HIDE",
                                condition: {
                                  scope:
                                    "#/properties/InfractMidlineShift",
                                  schema: {
                                    const: false,
                                  },
                                },
                              },
                              elements: [
                                {
                                  type: "VerticalLayout",
                                  label: "",
                                  elements: [
                                    {
                                      type: "Control",
                                      label: "Midline Shaft?",
                                      scope:
                                        "#/properties/InfractMidLineShiftText",
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
                
                {
                  type: "Control",
                  label: "Hemorrhagic transformation ",
                  scope: "#/properties/HemorrhagicTransFormation",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/HemorrhagicTransFormation",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "HorizontalLayout",
                      label: "",
                      elements: [
                        {
                          type: "Control",
                          label: "CC",
                          scope: "#/properties/HeTransformationCC",
                        },
                        {
                          type: "Control",
                          label: "AP",
                          scope: "#/properties/HeTransformationAP",
                        },
                        {
                          type: "Control",
                          label: "TR",
                          scope: "#/properties/HeTransformationTR",
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
  ],
};

const styleContextValue = {
  styles: [
    {
      name: "control.input",
      classNames: ["custom-input"],
    },
    {
      name: "control.select",
      classNames: ["select", "select-box"],
    },
    {
      name: "array.button",
      classNames: ["custom-array-button"],
    },
  ],
};
// export default class Form3 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: props.data,
//       schema: _schema,
//     };
//   }

//   componentDidUpdate() { }

//   handleForm(data) {
//     const { schema } = this.state;
//     this.setState(data, () => {
//       this.props.handleChange(data, false);
//     });
//   }

//   render() {
//     const { data, schema } = this.state;
//     return (
//       <JsonForms
//         schema={schema}
//         uischema={uischema}
//         data={data}
//         renderers={materialRenderers}
//         cells={materialCells}
//         ValidationMode="ValidateAndShow"
//         onChange={({ data, _errors }) => this.handleForm(data)}
//       />
//     );
//   }
// }
//Auto data by Aman Gupta on 23/06/23
export default class Form3 extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		data: props.data,
		schema: _schema,
		patients: [],
		query: '',
	  };

	  this.search = this.search.bind(this);
	  this.setQuery = this.setQuery.bind(this);
	  this.patientSelected = this.patientSelected.bind(this);
	}
  
	componentDidUpdate() { }
  
	handleForm(data) {
	  const { schema } = this.state;
	  this.setState({data: data}, () => {
		this.props.handleChange(data, false);
	  });
	  this.forceUpdate();
	}

	setQuery(e) {
		this.setState({query: e.target.value})
	}

	search() {
		fetch(`/patientdata?query=${this.state.query}`).then((r) => {
			if (r.ok) {
				return r.json();
			}
		}).then((d) => {
			let patients = [];
			d.forEach((p) => {
				patients.push(p.fields);
			});
			//this.setState(patients);
			this.setState({patients: patients});
			//this.forceUpdate();
		}).catch((e) => {
			console.error(e);
		})
	}

	patientSelected(e) {
		const {data} = this.state;
		const pid = e.target.value;
		const patient = this.state.patients.find((p) => {
			return p.PatientId === pid;
		});
		let formData = {
			...data,
			GenderTextFR3: patient.gender,
			AgeTextFR3: patient.age,
			NameTextFR3: patient.PatientName,
			IDTextFR3: patient.PatientId,
			TestDateTextFR3: patient.TestDate,
			ReportDateTextFR3: patient.ReportDate
		}
		this.handleForm(formData);
	}
  
	render() {
	  const { data, schema, patients } = this.state;
	  return (
		<div>
			<input type="text" placeholder="Enter name or Patient ID" onChange={this.setQuery}/> <button onClick={this.search}>Search</button>
			{patients.length > 0 &&
				<select id="patients" onChange={this.patientSelected}>
					<option value="-1">-- Select Patient --</option>
					{patients.map((p) => {
						return <option value={p.PatientId} key={p.PatientId}>{p.PatientName} | ID: {p.PatientId}</option>;
					})};	
				</select>
			}
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
