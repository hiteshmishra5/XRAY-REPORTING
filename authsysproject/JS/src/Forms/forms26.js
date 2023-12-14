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
    NameTextFR26: {
      type: "string",
    },
    IDTextFR26: {
      type: "string",
    },
    AgeTextFR26: {
      type: "string",
    },
    GenderTextFR26: {
      type: "string",
      enum: ["Male", "Female", "Others"],
    },
    TestDateTextFR26: {
      type: "string",
    },
    ReportDateTextFR26: {
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
    ///////////other//////////////
    OptometryOtherText: {
      type: "boolean",
    },
    OptometryOtherTextField: {
      type: "string",
    },
    OptometryColor: {
      type: "string",
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
              scope: "#/properties/NameTextFR26",
            },
            {
              type: "Control",
              label: "Patient ID",
              scope: "#/properties/IDTextFR26",
            },
            {
              type: "Control",
              label: "Age",
              scope: "#/properties/AgeTextFR26",
            },
            {
              type: "Control",
              label: "Test date",
              scope: "#/properties/TestDateTextFR26",
            },
            {
              type: "Control",
              label: "Report date",
              scope: "#/properties/ReportDateTextFR26",
            },
          ],
        },

        {
          type: "Control",
          label: "Gender",
          scope: "#/properties/GenderTextFR26",
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
        
        ////////////////// OTHERS/////////////////////
        {
          type: "Control",
          label: "Others finding",
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
              label: "Findings hai ye",
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
                {
                  type: "Control",
                  label: "Color blindness",
                  scope: "#/properties/OptometryColor",
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
export default class Form26 extends Component {
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
      GenderTextFR26: patient.gender,
      AgeTextFR26: patient.age,
      NameTextFR26: patient.PatientName,
      IDTextFR26: patient.PatientId,
      TestDateTextFR26: patient.TestDate,
      ReportDateTextFR26: patient.ReportDate,
      OptometryAbnormalRType: patient.FarVisionRight,
      OptometryAbnormalLType: patient.FarVisionLeft,
      OptometryAbnormalRTypeN: patient.NearVisionRight,
      OptometryAbnormalLTypeN: patient.NearVisionLeft,
      OptometryColor: patient.ColorBlindness,
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
// export default class Form26 extends Component {
// 	constructor(props) {
// 	  super(props);
// 	  this.state = {
// 		data: props.data,
// 		schema: _schema,
// 	  };
// 	}
  
// 	componentDidUpdate() { }
  
// 	handleForm(data) {
// 	  const { schema } = this.state;
// 	  this.setState(data, () => {
// 		this.props.handleChange(data, false);
// 	  });
// 	}
  
// 	render() {
// 	  const { data, schema } = this.state;
// 	  return (
// 		<JsonForms
// 		  schema={schema}
// 		  uischema={uischema}
// 		  data={data}
// 		  renderers={materialRenderers}
// 		  cells={materialCells}
// 		  ValidationMode="ValidateAndShow"
// 		  onChange={({ data, _errors }) => this.handleForm(data)}
// 		/>
// 	  );
// 	}
// }
