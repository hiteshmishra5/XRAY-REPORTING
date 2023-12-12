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
    NameTextFR19: {
      type: "string",
    },
    IDTextFR19: {
      type: "string",
    },
    AgeTextFR19: {
      type: "string",
    },
    GenderTextFR19: {
      type: "string",
      enum: ['Male', 'Female', 'Others'],
    },
    TestDateTextFR19: {
			type: "string",
		},
    ReportDateTextFR19: {
			type: "string",
		},
    AudiometryNormal: {
      type: "boolean",
    },
    AudiometryNormalL: {
      type: "boolean",
    },

    AudiometryNormalR: {
      type: "boolean",
    },
    AudiometryAbnormalL: {
      type: "boolean",
    },
    AudiometryAbnormalLType: {
      type: 'string',
      enum: ['21-40 dB', '41-55 dB', '56-70 dB', '71-90 dB', '91-Above dB'],
    },

    AudiometryAbnormalR: {
      type: "boolean",
    },
    AudiometryAbnormalRType: {
      type: 'string',
      enum: ['21-40 dB', '41-55 dB', '56-70 dB', '71-90 dB', '91-Above dB'],
    }

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
              scope: "#/properties/NameTextFR19",
            },
            {
              type: "Control",
              label: "Patient ID",
              scope: "#/properties/IDTextFR19",
            },
            {
              type: "Control",
              label: "Age",
              scope: "#/properties/AgeTextFR19",
            },
            {
							type: "Control",
							label: "Test date",
							scope: "#/properties/TestDateTextFR19",
						},
                        {
							type: "Control",
							label: "Report date",
							scope: "#/properties/ReportDateTextFR19",
						},
          ],
        },

        {
          type: "Control",
          label: "Gender",
          scope: "#/properties/GenderTextFR19",
          options: {
            format: "radio",
          },
        },

        // Normal******************

        {
          type: "HorizontalLayout",
          label: "",
          elements: [
            {
              type: "VerticalLayout",
              label: "",
              elements: [

                {
                  type: "VerticalLayout",
                  label: " ",
                  elements: [
                    {
                      type: "Control",
                      label: "Normal Audiometry?",
                      scope: "#/properties/AudiometryNormal",
                    },
                    {
                      type: "Group",
                      label: " ",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/AudiometryNormal",
                          schema: {
                            const: false,
                          },
                        },
                      },
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: " ",
                          elements: [
                            {
                              type: "HorizontalLayout",
                              label: " ",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Left Normal?",
                                  scope: "#/properties/AudiometryNormalL",
                                },
                                {
                                  type: "Control",
                                  label: "Right Normal?",
                                  scope: "#/properties/AudiometryNormalR",
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

        // Abnormal****************
        // left**************
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
                  label: "Left Ear hearing loss?",
                  scope: "#/properties/AudiometryAbnormalL",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/AudiometryAbnormalL",
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
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "",
                              scope: "#/properties/AudiometryAbnormalLType",
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

            // Right**************

            {
              type: "VerticalLayout",
              label: "",
              elements: [
                {
                  type: "Control",
                  label: "Right Ear hearing loss?",
                  scope: "#/properties/AudiometryAbnormalR",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/AudiometryAbnormalR",
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
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "Control",
                              label: "",
                              scope: "#/properties/AudiometryAbnormalRType",
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
};
// export default class Form19 extends Component {
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
//Auto data update by Aman Gupta on 23/06/23
export default class Form19 extends Component {
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
			GenderTextFR19: patient.gender,
			AgeTextFR19: patient.age,
			NameTextFR19: patient.PatientName,
			IDTextFR19: patient.PatientId,
			TestDateTextFR19: patient.TestDate,
			ReportDateTextFR19: patient.ReportDate
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
