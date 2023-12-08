import React, { Component, useState } from "react";
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


    NameTextFR2: {
			type: "string",
		},
		IDTextFR2: {
			type: "string",
		},
		AgeTextFR2: {
			type: "string",
		},
		GenderTextFR2: {
			type: "string",
			enum: ['Male', 'Female', 'Others'],
		},
		TestDateTextFR2: {
			type: "string",
		},
    ReportDateTextFR2: {
			type: "string",
		},
    XrayTypes: {
      type: "string",
      enum: ['AP', 'PA', 'LATERAL', 'AP/PA'],
    },
    BothNormal: {
      type: "boolean",
    },

    opacities: {
      type: "boolean",
    },
    opacitiesType: {
      type: "string",
      enum: ["Homogenous", "Ill-defined", "Non homogenous"],
    },
    opacitiesRUL: {
      type: "boolean",
    },
    opacitiesRML: {
      type: "boolean",
    },
    opacitiesRLL: {
      type: "boolean",
    },
    opacitiesLUL: {
      type: "boolean",
    },
    opacitiesLML: {
      type: "boolean",
    },
    opacitiesLLL: {
      type: "boolean",
    },

    RuzAirBronchogram: {
      type: "boolean",
    },
    RuzFibrosis: {
      type: "boolean",
    },
    RuzConsolidation: {
      type: "boolean",
    },
    RuzCavitation: {
      type: "boolean",
    },

    RmzAirBronchogram: {
      type: "boolean",
    },
    RmzFibrosis: {
      type: "boolean",
    },
    RmzConsolidation: {
      type: "boolean",
    },
    RmzCavitation: {
      type: "boolean",
    },

    RlzAirBronchogram: {
      type: "boolean",
    },
    RlzFibrosis: {
      type: "boolean",
    },
    RlzConsolidation: {
      type: "boolean",
    },
    RlzCavitation: {
      type: "boolean",
    },

    LuzAirBronchogram: {
      type: "boolean",
    },
    LuzFibrosis: {
      type: "boolean",
    },
    LuzConsolidation: {
      type: "boolean",
    },
    LuzCavitation: {
      type: "boolean",
    },

    LmzAirBronchogram: {
      type: "boolean",
    },
    LmzFibrosis: {
      type: "boolean",
    },
    LmzConsolidation: {
      type: "boolean",
    },
    LmzCavitation: {
      type: "boolean",
    },

    LlzAirBronchogram: {
      type: "boolean",
    },
    LlzFibrosis: {
      type: "boolean",
    },
    LlzConsolidation: {
      type: "boolean",
    },
    LlzCavitation: {
      type: "boolean",
    },

    mildHaziness: {
      type: "boolean",
    },
    mildHazinessRUL: {
      type: "boolean",
    },
    mildHazinessRML: {
      type: "boolean",
    },
    mildHazinessRLL: {
      type: "boolean",
    },
    mildHazinessLUL: {
      type: "boolean",
    },
    mildHazinessLML: {
      type: "boolean",
    },
    mildHazinessLLL: {
      type: "boolean",
    },
    mildHazinessText: {
      type: "string",
      "description": "Use Windows + H for voice.",
    },

    rightHilarShadow: {
      type: "string",
      enum: ["prominent", "calcifications"],
    },

    leftHilarShadow: {
      type: "string",
      enum: ["prominent", "calcifications"],
    },
    ProminentImpressionLHS: {
      type: "string",
    },
    CalcificationImpressionLHS: {
      type: "string",
    },
    ProminentImpressionRHS: {
      type: "string",
    },
    CalcificationImpressionRHS: {
      type: "string",
    },
    rightCostophrenicAngle: {
      type: "string",
      enum: ["obliterated"],
    },
    rightObliteratedType: {
      type: "boolean",
    },
    leftCostophrenicAngle: {
      type: "string",
      enum: ["obliterated"],
    },
    leftObliteratedType: {
      type: "boolean",
    },
    pneumothorax: {
      type: "boolean",
    },

    pneumothoraxR: {
      type: "boolean",
    },

    pneumothoraxRType: {
      type: "string",
      enum: ['Mild', 'Moderate', 'Severe']
    },

    pneumothoraxL: {
      type: "boolean",
    },

    pneumothoraxLType: {
      type: "string",
      enum: ['Mild', 'Moderate', 'Severe']
    },

    cardiacSilhouette: {
      type: "string",
      enum: ["enlarged", "cannot be commented"],
    },
    enlargedFindings: {
      type: "string",
      "description": "Use Windows + H for voice.",
    },

    SoftTissue: {
      type: "boolean",
    },

    SoftText: {
      type: "string",
      "description": "Use Windows + H for voice.",
    },
    bonyThoracicCage: {
      type: "boolean",
    },

    ribFracture: {
      type: "boolean",
    },
    ribFractureL: {
      type: "boolean",
    },
    ribFractureR: {
      type: 'boolean',
    },
    RibsR: {
      "type": "string",
      "description": "Type between 1-12 Ribs.",
    },

    RibsL: {
      "type": "string",
      "description": "Type between 1-12 Ribs.",
    },

    Clavicle: {
      type: "boolean",
    },
    ClavicleL: {
      type: "boolean",
    },
    ClavicleR: {
      type: "boolean",
    },
    ClavicleLRType: {
      type: "string",
      enum: ["proximal one third", "middle one third", "distal one third"],
    },
    ClavicleLRType1: {
      type: "string",
      enum: ["proximal one third", "middle one third", "distal one third"],
    },
    sternalSutures: {
      type: "boolean",
    },
    bonyinfo: {
      type: "string",
      description: "Use Windows + H for voice."
    },
    tracheaAndMediastinalStructures: {
      type: "string",
      enum: ["shifted"],
    },
    tracheaAndMediastinalStructuresShifted: {
      type: "string",
      enum: ["right", "left"],
    },
    tracheaAndMediastinalLeftImpression: {
      type: "string",
    },

    tracheaAndMediastinalRightImpression: {
      type: "string",
    },

    DomesOfDiaphragm: {
      type: "boolean",
    },

    DomesLeft: {
      type: "boolean",
    },
    DomesLeftType: {
      type: "string",
      enum: ['Elevated', 'Flattened'],
    },
    DomesLeftElevatedType: {
      type: "string",
      enum: ['Eventration', 'Abdominal Distention'],
    },

    DomesRight: {
      type: "boolean",
    },
    DomesRightType: {
      type: "string",
      enum: ['Elevated', 'Flattened'],
    },
    DomesRightElevatedType: {
      type: "string",
      enum: ['Eventration', 'Abdominal Distention'],
    },


    etLine: {
      type: "boolean",
    },
    cvpLine: {
      type: "boolean",
    },
    tracheostomy: {
      type: "boolean",
    },
    NGtube: {
      type: "boolean",
    },
    info: {
      type: "string",
      "description": "Use Windows + H for voice.",
    },
  },
  required: ['XrayTypes', 'opacitiesType', 'ProminentImpressionLHS', 'ProminentImpressionRHS',
    'CalcificationImpressionLHS', 'CalcificationImpressionRHS', 'pneumothoraxRType',
    'pneumothoraxLType', 'SoftText', 'tracheaAndMediastinalLeftImpression', 'tracheaAndMediastinalRightImpression', 'RibsL', 'RibsR'
    , 'DomesLeftType', 'DomesRightType'],
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
							scope: "#/properties/NameTextFR2",
						},
						{
							type: "Control",
							label: "Patient ID",
							scope: "#/properties/IDTextFR2",
						},
						{
							type: "Control",
							label: "Age",
							scope: "#/properties/AgeTextFR2",
						},
						{
							type: "Control",
							label: "Test date",
							scope: "#/properties/TestDateTextFR2",
						},
            {
							type: "Control",
							label: "Report date",
							scope: "#/properties/ReportDateTextFR2",
						},

          ],

        },
        {
          type: "Control",
          label: "Gender",
          scope: "#/properties/GenderTextFR2",
          options: {
            format: "radio",
          },
        },
      ],
    },
    {
      type: "Group",
      elements: [
        // ***************************Opacities****************************
        {
          type: "Control",
          label: "X-Ray Type",
          scope: "#/properties/XrayTypes",
          options: {
            format: "radio",
          },
        },

        {
          type: "Control",
          label: "Chest Normal?",
          scope: "#/properties/BothNormal",
        },


        // Opacities**********************************************************

        {
          type: "Control",
          label: "Opacities?",
          scope: "#/properties/opacities",
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/opacities",
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
                  scope: "#/properties/opacitiesType",
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
                  scope: "#/properties/opacitiesType",
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
                          label: "RUZ",
                          scope: "#/properties/opacitiesRUL",
                        },
                        {
                          type: "Group",
                          label: "",
                          rule: {
                            effect: "HIDE",
                            condition: {
                              scope: "#/properties/opacitiesRUL",
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
                                  label: "Air Bronchogram?",
                                  scope: "#/properties/RuzAirBronchogram",
                                },
                                {
                                  type: "Control",
                                  label: "Fibrosis?",
                                  scope: "#/properties/RuzFibrosis",
                                },
                                {
                                  type: "Control",
                                  label: "Consolidation?",
                                  scope: "#/properties/RuzConsolidation",
                                },
                                {
                                  type: "Control",
                                  label: "Cavitation?",
                                  scope: "#/properties/RuzCavitation",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },

                    {
                      type: "VerticalLayout",
                      label: "",
                      elements: [
                        {
                          type: "Control",
                          label: "RMZ",
                          scope: "#/properties/opacitiesRML",
                        },
                        {
                          type: "Group",
                          label: "",
                          rule: {
                            effect: "HIDE",
                            condition: {
                              scope: "#/properties/opacitiesRML",
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
                                  label: "Air Bronchogram?",
                                  scope: "#/properties/RmzAirBronchogram",
                                },
                                {
                                  type: "Control",
                                  label: "Fibrosis?",
                                  scope: "#/properties/RmzFibrosis",
                                },
                                {
                                  type: "Control",
                                  label: "Consolidation?",
                                  scope: "#/properties/RmzConsolidation",
                                },
                                {
                                  type: "Control",
                                  label: "Cavitation?",
                                  scope: "#/properties/RmzCavitation",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },

                    {
                      type: "VerticalLayout",
                      label: "",
                      elements: [
                        {
                          type: "Control",
                          label: "RLZ",
                          scope: "#/properties/opacitiesRLL",
                        },
                        {
                          type: "Group",
                          label: " ",
                          rule: {
                            effect: "HIDE",
                            condition: {
                              scope: "#/properties/opacitiesRLL",
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
                                  label: "Air Bronchogram?",
                                  scope: "#/properties/RlzAirBronchogram",
                                },

                                {
                                  type: "Control",
                                  label: "Fibrosis?",
                                  scope: "#/properties/RlzFibrosis",
                                },
                                {
                                  type: "Control",
                                  label: "Consolidation?",
                                  scope: "#/properties/RlzConsolidation",
                                },
                                {
                                  type: "Control",
                                  label: "Cavitation?",
                                  scope: "#/properties/RlzCavitation",
                                },

                              ],
                            },
                          ],
                        },
                      ],
                    },

                    {
                      type: "VerticalLayout",
                      label: "",
                      elements: [
                        {
                          type: "Control",
                          label: "LUZ",
                          scope: "#/properties/opacitiesLUL",
                        },
                        {
                          type: "Group",
                          label: "",
                          rule: {
                            effect: "HIDE",
                            condition: {
                              scope: "#/properties/opacitiesLUL",
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
                                  label: "Air Bronchogram?",
                                  scope: "#/properties/LuzAirBronchogram",
                                },
                                {
                                  type: "Control",
                                  label: "Fibrosis?",
                                  scope: "#/properties/LuzFibrosis",
                                },
                                {
                                  type: "Control",
                                  label: "Consolidation?",
                                  scope: "#/properties/LuzConsolidation",
                                },
                                {
                                  type: "Control",
                                  label: "Cavitation?",
                                  scope: "#/properties/LuzCavitation",
                                },
                              ],

                            },
                          ],
                        },
                      ],
                    },

                    {
                      type: "VerticalLayout",
                      label: "",
                      elements: [
                        {
                          type: "Control",
                          label: "LMZ",
                          scope: "#/properties/opacitiesLML",
                        },
                        {
                          type: "Group",
                          label: "",
                          rule: {
                            effect: "HIDE",
                            condition: {
                              scope: "#/properties/opacitiesLML",
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
                                  label: "Air Bronchogram?",
                                  scope: "#/properties/LmzAirBronchogram",
                                },
                                {
                                  type: "Control",
                                  label: "Fibrosis?",
                                  scope: "#/properties/LmzFibrosis",
                                },
                                {
                                  type: "Control",
                                  label: "Consolidation?",
                                  scope: "#/properties/LmzConsolidation",
                                },
                                {
                                  type: "Control",
                                  label: "Cavitation?",
                                  scope: "#/properties/LmzCavitation",
                                },

                              ],
                            },
                          ],
                        },
                      ],
                    },

                    {
                      type: "VerticalLayout",
                      label: "",
                      elements: [
                        {
                          type: "Control",
                          label: "LLZ",
                          scope: "#/properties/opacitiesLLL",
                        },
                        {
                          type: "Group",
                          label: "",
                          rule: {
                            effect: "HIDE",
                            condition: {
                              scope: "#/properties/opacitiesLLL",
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
                                  label: "Air Bronchogram?",
                                  scope: "#/properties/LlzAirBronchogram",
                                },
                                {
                                  type: "Control",
                                  label: "Fibrosis?",
                                  scope: "#/properties/LlzFibrosis",
                                },
                                {
                                  type: "Control",
                                  label: "Consolidation?",
                                  scope: "#/properties/LlzConsolidation",
                                },
                                {
                                  type: "Control",
                                  label: "Cavitation?",
                                  scope: "#/properties/LlzCavitation",
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

        // ****************************Mild Haziness*************************************
        {
          type: "Control",
          label: "Mild Haziness?",
          scope: "#/properties/mildHaziness",
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/mildHaziness",
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
                  label: "RUZ",
                  scope: "#/properties/mildHazinessRUL",
                },
                {
                  type: "Control",
                  label: "RMZ",
                  scope: "#/properties/mildHazinessRML",
                },
                {
                  type: "Control",
                  label: "RLZ",
                  scope: "#/properties/mildHazinessRLL",
                },

                {
                  type: "Control",
                  label: "LUZ",
                  scope: "#/properties/mildHazinessLUL",
                },
                {
                  type: "Control",
                  label: "LMZ",
                  scope: "#/properties/mildHazinessLML",
                },

                {
                  type: "Control",
                  label: "LLZ",
                  scope: "#/properties/mildHazinessLLL",
                },
              ],
            },
            {
              type: "HorizontalLayout",
              label: "",
              elements: [
                {
                  type: "Control",
                  label: "Additional Findings?",
                  scope: "#/properties/mildHazinessText",
                },
              ],
            },
          ],
        },




        // ******************************RHS/LHS/RCA/LCA***********************************
        {
          type: "Control",
          label: "Right Hilar Shadow",
          scope: "#/properties/rightHilarShadow",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "Impression?",
          scope: "#/properties/ProminentImpressionRHS",
          rule: {
            effect: "SHOW",
            condition: {
              scope: "#/properties/rightHilarShadow",
              schema: {
                const: "prominent",
              },
            },
          },
        },
        {
          type: "Control",
          label: "Impression?",
          scope: "#/properties/CalcificationImpressionRHS",
          rule: {
            effect: "SHOW",
            condition: {
              scope: "#/properties/rightHilarShadow",
              schema: {
                const: "calcifications",
              },
            },
          },
        },

        {
          type: "Control",
          label: "Left Hilar Shadow",
          scope: "#/properties/leftHilarShadow",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "Impression?",
          scope: "#/properties/ProminentImpressionLHS",
          rule: {
            effect: "SHOW",
            condition: {
              scope: "#/properties/leftHilarShadow",
              schema: {
                const: "prominent",
              },
            },
          },
        },
        {
          type: "Control",
          label: "Impression?",
          scope: "#/properties/CalcificationImpressionLHS",
          rule: {
            effect: "SHOW",
            condition: {
              scope: "#/properties/leftHilarShadow",
              schema: {
                const: "calcifications",
              },
            },
          },
        },

        // costophrenic angle right/ left
        {
          type: "Control",
          label: "Right Costophrenic Angle",
          scope: "#/properties/rightCostophrenicAngle",
          options: {
            format: "radio",
          },
        },

        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/rightCostophrenicAngle",
              schema: { enum: ["clear", "", undefined] },
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
                      label: "pleural effusion",
                      scope: "#/properties/rightObliteratedType",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          type: "Control",
          label: "Left Costophrenic Angle",
          scope: "#/properties/leftCostophrenicAngle",
          options: {
            format: "radio",
          },
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/leftCostophrenicAngle",
              schema: { enum: ["clear", "", undefined] },
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
                      label: "pleural effusion",
                      scope: "#/properties/leftObliteratedType",
                    },
                  ],
                },
              ],
            },
          ],
        },

        //******************************Pheumothorax***********************************
        {
          type: "Control",
          label: "Pneumothorax?",
          scope: "#/properties/pneumothorax",
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/pneumothorax",
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
                  label: "Left",
                  scope: "#/properties/pneumothoraxL",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/pneumothoraxL",
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
                          scope: "#/properties/pneumothoraxLType",
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
                  label: "Right",
                  scope: "#/properties/pneumothoraxR",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/pneumothoraxR",
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
                          scope: "#/properties/pneumothoraxRType",
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

        // *****************************Cardiac Silhouette********************************

        {
          type: "Control",
          label: "Cardiac Silhouette",
          scope: "#/properties/cardiacSilhouette",
          options: {
            format: "radio",
          },
        },
        {
          type: "Control",
          label: "CTR & Additional Findings?",
          scope: "#/properties/enlargedFindings",
          rule: {
            effect: "SHOW",
            condition: {
              scope: "#/properties/cardiacSilhouette",
              schema: {
                const: "enlarged",
              },
            },
          },
        },

        // Soft tissue*************************
        {
          type: "Control",
          label: "Soft Tissue?",
          scope: "#/properties/SoftTissue",
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/SoftTissue",
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
                  label: "Findings?",
                  scope: "#/properties/SoftText",
                }
              ],
            },
          ],
        },

        //****************************Bony Thoracic Cage******************************** 

        {
          type: "Control",
          label: "Bony Thoracic Cage?",
          scope: "#/properties/bonyThoracicCage",
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/bonyThoracicCage",
              schema: {
                const: false,
              },
            },
          },

          //  ***********************abnormal************************
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
                      label: "Rib fracture",
                      scope: "#/properties/ribFracture",
                    },
                    {
                      type: "Group",
                      label: "",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/ribFracture",
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
                              label: "Left",
                              scope: "#/properties/ribFractureL",
                            },
                            {
                              type: "Group",
                              label: "",
                              rule: {
                                effect: "HIDE",
                                condition: {
                                  scope: "#/properties/ribFractureL",
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
                                      "type": "Control",
                                      "scope": "#/properties/RibsL",
                                      "options": {
                                        "slider": true
                                      }
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: "Control",
                              label: "Right",
                              scope: "#/properties/ribFractureR",
                            },
                            {
                              type: "Group",
                              label: "",
                              rule: {
                                effect: "HIDE",
                                condition: {
                                  scope: "#/properties/ribFractureR",
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
                                      "type": "Control",
                                      "scope": "#/properties/RibsR",
                                      "options": {
                                        "slider": true
                                      }
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
                  type: "VerticalLayout",
                  label: "",
                  elements: [
                    {
                      type: "Control",
                      label: "Clavicle Fracture",
                      scope: "#/properties/Clavicle",
                    },
                    {
                      type: "Group",
                      label: "",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/Clavicle",
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
                              label: "Left",
                              scope: "#/properties/ClavicleL",
                            },
                            {
                              type: "Group",
                              label: "",
                              rule: {
                                effect: "HIDE",
                                condition: {
                                  scope: "#/properties/ClavicleL",
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
                                      scope: "#/properties/ClavicleLRType",
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
                              label: "Right",
                              scope: "#/properties/ClavicleR",
                            },
                            {
                              type: "Group",
                              label: "",
                              rule: {
                                effect: "HIDE",
                                condition: {
                                  scope: "#/properties/ClavicleR",
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
                                      scope: "#/properties/ClavicleLRType1",
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


                {
                  type: "Control",
                  label: "Sternal Sutures",
                  scope: "#/properties/sternalSutures",
                },

              ],
            },



            {
              type: "Control",
              label: "Additional findings?",
              scope: "#/properties/bonyinfo",
            }
          ],
        },

        // *************************Trachea And Mediastinal Structures*****************************
        {
          type: "Control",
          label: "Trachea And Mediastinal Structures?",
          scope: "#/properties/tracheaAndMediastinalStructures",
          options: {
            format: "radio",
          },
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/tracheaAndMediastinalStructures",
              schema: { enum: ["normal", "", undefined] },
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
                  scope: "#/properties/tracheaAndMediastinalStructuresShifted",
                  options: {
                    format: "radio",
                  },
                },


                {
                  type: "Control",
                  label: "Impression?",
                  scope: "#/properties/tracheaAndMediastinalLeftImpression",
                  rule: {
                    effect: "SHOW",
                    condition: {
                      scope: "#/properties/tracheaAndMediastinalStructuresShifted",
                      schema: {
                        const: "left",
                      },
                    },
                  },
                },
                {
                  type: "Control",
                  label: "Impression?",
                  scope: "#/properties/tracheaAndMediastinalRightImpression",
                  rule: {
                    effect: "SHOW",
                    condition: {
                      scope: "#/properties/tracheaAndMediastinalStructuresShifted",
                      schema: {
                        const: "right",
                      },
                    },
                  },
                },
              ],
            },
          ],
        },

        // *****************************Domes of diagram*********************

        {
          type: "Control",
          label: "Domes Of Diaphragm?",
          scope: "#/properties/DomesOfDiaphragm",
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/DomesOfDiaphragm",
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
                // Left Side
                {
                  type: "Control",
                  label: "Left",
                  scope: "#/properties/DomesLeft",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/DomesLeft",
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
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "",
                              scope: "#/properties/DomesLeftType",
                              options: {
                                format: "radio",
                              }
                            },
                            {
                              type: "Group",
                              label: "",
                              rule: {
                                effect: "HIDE",
                                condition: {
                                  scope: "#/properties/DomesLeftType",
                                  schema: { enum: ["Flattened", "", undefined] },
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
                                      scope: "#/properties/DomesLeftElevatedType",
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
                // Right Side

                {
                  type: "Control",
                  label: "Right",
                  scope: "#/properties/DomesRight",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/DomesRight",
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
                          type: "VerticalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "",
                              scope: "#/properties/DomesRightType",
                              options: {
                                format: "radio",
                              }
                            },
                            {
                              type: "Group",
                              label: "",
                              rule: {
                                effect: "HIDE",
                                condition: {
                                  scope: "#/properties/DomesRightType",
                                  schema: { enum: ["Flattened", "", undefined] },
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
                                      scope: "#/properties/DomesRightElevatedType",
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
              ],
            },
          ],
        },



        // ****************************ET Line/CPV Line*********************************

        {
          type: "Control",
          label: "ET line in situ?",
          scope: "#/properties/etLine",
        },
        {
          type: "Control",
          label: "CVP line in situ?",
          scope: "#/properties/cvpLine",
        },
        {
          type: "Control",
          label: "Tracheostomy?",
          scope: "#/properties/tracheostomy",
        },
        {
          type: "Control",
          label: "NG tube?",
          scope: "#/properties/NGtube",
        },
        {
          type: "Control",
          label: "Additional findings?",
          scope: "#/properties/info",
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
// export default class Form2 extends Component {
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
//Auto data by Aman Gupta on 23/06/2023
export default class Form2 extends Component {
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
			GenderTextFR2: patient.gender,
			AgeTextFR2: patient.age,
			NameTextFR2: patient.PatientName,
			IDTextFR2: patient.PatientId,
			TestDateTextFR2: patient.TestDate,
			ReportDateTextFR2: patient.ReportDate
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
