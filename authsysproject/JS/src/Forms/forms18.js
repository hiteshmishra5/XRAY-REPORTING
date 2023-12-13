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
		NameTextFR18: {
			type: "string",
		},
		IDTextFR18: {
			type: "string",
		},
		AgeTextFR18: {
			type: "string",
		},
		GenderTextFR18: {
			type: "string",
			enum: ['Male', 'Female', 'Others'],
		},
		TestDateTextFR18: {
			type: "string",
		},
        ReportDateTextFR18: {
			type: "string",
		},
		Appendix: {
			type: "boolean",
		},
		AppendixDialated: {
			type: "boolean",
		},
		AppendixDialatedText: {
			type: 'string',
			description: "type in mm.",
		},

		AppendixDialatedPeriappendicealFatStranding: {
			type: "boolean",
		},

		AppendixDialatedPeriappendicealFluidCollection: {
			type: "boolean",
		},
		AppendixDialatedPeriappendicealFluidType: {
			type: "boolean",
		},
		AppendixDialatedPeriappendicealPeriphereally: {
			type: "boolean",
		},
		AppendixDialatedPeriappendicealPeriphereallyText: {
			type: "string",
		},
		AppendixDialatedPeriappendicealPeriphereallyText1: {
			type: "string",
		},


		AppendixDialatedPeriappendiceal: {
			type: "boolean",
		},
		AppendixDialatedMesentericNodes: {
			type: "boolean",
		},
		AppendixDialatedMesentericNodesType: {
			type: "string",
			enum: ['Few', 'Multiple', 'Subcentimetre size', 'Enlarged'],
		},
		AppendixDialatedMesentericNodesEnlarged: {
			type: "string",
		},

		AppendixDialatedAppendicularMass: {
			type: "boolean",
		},
		AppendixDialatedAppendicularMassWithAdhesion: {
			type: "boolean",
		},
		AppendixDialatedAppendicularMassWithAdhesionText: {
			type: 'string',
			description: "Type in cm.",
		},
		AppendixDialatedAppendicularMassWithAdhesionText1: {
			type: 'string',
			description: "Type in cm.",
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
							scope: "#/properties/NameTextFR18",
						},
						{
							type: "Control",
							label: "Patient ID",
							scope: "#/properties/IDTextFR18",
						},
						{
							type: "Control",
							label: "Age",
							scope: "#/properties/AgeTextFR18",
						},
						{
							type: "Control",
							label: "Test date",
							scope: "#/properties/TestDateTextFR18",
						},
                        {
							type: "Control",
							label: "Report date",
							scope: "#/properties/ReportDateTextFR18",
						},
					],

				},
				{
					type: "Control",
					label: "Gender",
					scope: "#/properties/GenderTextFR18",
					options: {
						format: "radio",
					},
				},
				// Appendix
				{
					type: "Control",
					label: "appendix",
					scope: "#/properties/Appendix",
				},
				{
					type: "Group",
					label: "",
					rule: {
						effect: "HIDE",
						condition: {
							scope: "#/properties/Appendix",
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
									label: "Dialated",
									scope: "#/properties/AppendixDialated",
								},
								{
									type: "Group",
									label: "",
									rule: {
										effect: "HIDE",
										condition: {
											scope: "#/properties/AppendixDialated",
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
													label: "measurements?",
													scope: "#/properties/AppendixDialatedText",
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
									label: "Periappendiceal fat stranding",
									scope: "#/properties/AppendixDialatedPeriappendicealFatStranding",
								},

								{
									type: "Control",
									label: "Periappendiceal flood collection",
									scope: "#/properties/AppendixDialatedPeriappendicealFluidCollection",
								},
								{
									type: "Group",
									label: "",
									rule: {
										effect: "HIDE",
										condition: {
											scope: "#/properties/AppendixDialatedPeriappendicealFluidCollection",
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
													label: "free fluid",
													scope: "#/properties/AppendixDialatedPeriappendicealFluidType",
												},
												{
													type: "Control",
													label: "Peripherally enhancing Localized fluid collection",
													scope: "#/properties/AppendixDialatedPeriappendicealPeriphereally",
												},
												{
													type: "Group",
													label: "",
													rule: {
														effect: "HIDE",
														condition: {
															scope: "#/properties/AppendixDialatedPeriappendicealPeriphereally",
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
																	label: "measurements?",
																	scope: "#/properties/AppendixDialatedPeriappendicealPeriphereallyText",
																	options: {
																		format: "radio",
																	},
																},
																{
																	type: "Control",
																	label: "measurements?",
																	scope: "#/properties/AppendixDialatedPeriappendicealPeriphereallyText1",
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

								{
									type: "Control",
									label: "Periappendiceal Extra luminal air pockets",
									scope: "#/properties/AppendixDialatedPeriappendiceal",
								},

								{
									type: "Control",
									label: "Mesenteric nodes",
									scope: "#/properties/AppendixDialatedMesentericNodes",
								},
								{
									type: "Group",
									label: "",
									rule: {
										effect: "HIDE",
										condition: {
											scope: "#/properties/AppendixDialatedMesentericNodes",
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
													scope: "#/properties/AppendixDialatedMesentericNodesType",
													options: {
														format: "radio",
													},
												},
												{
													type: "Control",
													label: "size?",
													scope: "#/properties/AppendixDialatedMesentericNodesEnlarged",
													rule: {
														effect: "SHOW",
														condition: {
															scope: "#/properties/AppendixDialatedMesentericNodesType",
															schema: {
																const: "enlarged",
															},
														},
													},
												},
											],
										},
									],
								},

								{
									type: "Control",
									label: "Appendicular mass formation",
									scope: "#/properties/AppendixDialatedAppendicularMass",
								},
								{
									type: "Group",
									label: "",
									rule: {
										effect: "HIDE",
										condition: {
											scope: "#/properties/AppendixDialatedAppendicularMass",
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
													label: "With adhesion to distal ileal loops and ceacum",
													scope: "#/properties/AppendixDialatedAppendicularMassWithAdhesion",
												},
											],
										},
										{
											type: "HorizontalLayout",
											label: "",
											elements: [
												{
													type: "Control",
													label: "measurements?",
													scope: "#/properties/AppendixDialatedAppendicularMassWithAdhesionText",
													options: {
														format: "radio",
													},
												},
												{
													type: "Control",
													label: "measurements?",
													scope: "#/properties/AppendixDialatedAppendicularMassWithAdhesionText1",
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
};
// export default class Form3 extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			data: props.data,
// 			schema: _schema,
// 		};
// 	}

// 	componentDidUpdate() { }

// 	handleForm(data) {
// 		const { schema } = this.state;
// 		this.setState(data, () => {
// 			this.props.handleChange(data, false);
// 		});
// 	}

// 	render() {
// 		const { data, schema } = this.state;
// 		return (
// 			<JsonForms
// 				schema={schema}
// 				uischema={uischema}
// 				data={data}
// 				renderers={materialRenderers}
// 				cells={materialCells}
// 				ValidationMode="ValidateAndShow"
// 				onChange={({ data, _errors }) => this.handleForm(data)}
// 			/>
// 		);
// 	}
// }
//Auto data update by Aman Gupta on 23/06/23
export default class Form18 extends Component {
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
			GenderTextFR18: patient.gender,
			AgeTextFR18: patient.age,
			NameTextFR18: patient.PatientName,
			IDTextFR18: patient.PatientId,
			TestDateTextFR18: patient.TestDate,
			ReportDateTextFR18: patient.ReportDate
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
