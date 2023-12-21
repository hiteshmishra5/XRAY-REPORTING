import React, { Component } from "react";
import { Generate } from "@jsonforms/core";
import { JsonForms } from "@jsonforms/react";
//import {vanillaRenderers, vanillaCells, JsonFormsStyleContext } from '@jsonforms/vanilla-renderers';
import {
	materialRenderers,
	materialCells,
} from "@jsonforms/material-renderers";
import { data } from "jquery";

const _schema = {
	type: "object",
	properties: {
		NameTextFR21: {
			type: "string",
		},
		IDTextFR21: {
			type: "string",
		},
		AgeTextFR21: {
			type: "string",
		},
		GenderTextFR21: {
			type: "string",
			enum: ['Male', 'Female', 'Others'],
		},
		HeartTextFR21: {
			type: "string",
		},
		PRIntervalFR21: {
		    type: "string",
		},
		TestDateTextFR21: {
			type: "string",
		},
        ReportDateTextFR21: {
			type: "string",
		},
		ECGcampNormal: {
			type: "boolean",
		},
		NormalECGText: {
			type: "string",
			"description": "Type between 0-300(in BPM)",
		},
        RhythmRBBB: {
			type: "boolean",
		},
		RhythmText: {
			type: "string",
			"description": "Type between 0-300(in BPM)",
		},
        TachycardiaRBBB: {
			type: "boolean",
		},
		TachycardiaText: {
			type: "string",
			"description": "Type between 0-300(in BPM)",
		},
        BradycardiaRBBB: {
			type: "boolean",
		},
		BradycardiaText: {
			type: "string",
			"description": "Type between 0-300(in BPM)",
		},
        Tachycardia: {
			type: "boolean",
		},
		TachycardiarwText: {
			type: "string",
			"description": "Type between 0-300(in BPM)",
		},
        Bradycardia: {
			type: "boolean",
		},
		TInversion: {
		    type: "boolean",
		},
		BradycardiarwText: {
			type: "string",
			"description": "Type between 0-300(in BPM)",
		},
		Others: {
			type: "boolean",
		},
		OthersText1: {
            type: "string",
		},
		OthersText2: {
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
							scope: "#/properties/NameTextFR21",
						},
						{
							type: "Control",
							label: "Patient ID",
							scope: "#/properties/IDTextFR21",
						},
						{
							type: "Control",
							label: "Age",
							scope: "#/properties/AgeTextFR21",
						},
						{
							type: "Control",
							label: "Test date",
							scope: "#/properties/TestDateTextFR21",
						},
                        {
							type: "Control",
							label: "Report date",
							scope: "#/properties/ReportDateTextFR21",
						},
					],
				},

				{
					type: "Control",
					label: "Gender",
					scope: "#/properties/GenderTextFR21",
					options: {
						format: "radio",
					},
				},

				{
					type: "Control",
					label: "Heart rate",
					scope: "#/properties/HeartTextFR21",
				},

				// Normal******************
				{
					type: "Control",
					label: "Normal ECG",
					scope: "#/properties/ECGcampNormal",
				},
				


				// Abnormal****************
				// Sinus rhythm with incomplete RBBB
				{
					type: "Control",
					label: "Sinus rhythm with incomplete RBBB",
					scope: "#/properties/RhythmRBBB",
				},
				
                // Abnormal****************
				// Sinus Tachycardia with incomplete RBBB
				{
					type: "Control",
					label: "Sinus Tachycardia with incomplete RBBB",
					scope: "#/properties/TachycardiaRBBB",
				},
				
                // Sinus Bradycardia with incomplete RBBB
				{
					type: "Control",
					label: "Sinus Bradycardia with incomplete RBBB",
					scope: "#/properties/BradycardiaRBBB",
				},
				
                // Sinus Bradycardia
				{
					type: "Control",
					label: "Sinus Bradycardia",
					scope: "#/properties/Bradycardia",
				},
				
                // Sinus Tachycardia
				{
					type: "Control",
					label: "Sinus Tachycardia",
					scope: "#/properties/Tachycardia",
				},

				{
				    type: "Control",
				    label: "Normal sinus rhythm with t wave inversion in lead III",
				    scope: "#/properties/TInversion",
				},
				
				// Others
				{
					type: "HorizontalLayout",
					label: "Findings",
					elements: [
						{
							"type": "Control",
							"label": "Findings",
							"scope": "#/properties/OthersText2",
							"options": {
								"slider": true
							}
						},
					],
				},
				
            ],    
		},
	],
};

// export default class Form21 extends Component {
// 	constructor(props) {
// 	  super(props);
// 	  this.state = {
// 		data: props.data,
// 		schema: _schema,
// 		query: '',
// 		patients: [],
// 	  };

// 	  this.search = this.search.bind(this);
// 	}
  
// 	componentDidUpdate() { }
  
// 	handleForm(data) {
// 	  const { schema } = this.state;
// 	  this.setState(data, () => {
// 		this.props.handleChange(data, false);
// 	  });
// 	}
    
//     //Aman at 04:36
	
	  
// 	setQuery(e) {
// 		this.setState({query: e.target.value});
// 	}
	  
// 	search(e) {
// 		fetch(`/patientdata?query=${e.target.value}`).then((r) => {
// 			if (r.ok) {
// 				return r.json();
// 			}
// 		}).then((d) => {
// 			let patients = [];
// 			d.forEach((p) => {
// 				patients.push(p.fields);
// 			});
// 			//this.setState(patients);
// 			this.setState({patients: patients});
// 			//this.forceUpdate();
// 		}).catch((e) => {
// 			console.error(e);
// 		})
// 	}

// 	//Aman at 04:36
	
	  
  
// 	render() {
// 	  const { data, schema, patients } = this.state;
// 	  return (
// 		<div>
// 			<div>
// 				<input type="text" placeholder="Enter name or Patient ID" onChange={this.setQuery} />
// 				<button onClick={this.search}>Search</button>
// 			</div>
// 			<div id="patients">
// 				{/* {patients.map((p) => {
//                     return <input type="radio" value={p.PatientId} key={p.PatientId}/>{p.PatientName};
//                 })}; */}
// 				{patients.map((p) => {
//                    console.log("Now I'm here!");

//                    return <option value={p.PatientId} key={p.PatientId}>{p.PatientName}</option>;
//                 })};
// 			</div>
// 			<JsonForms
// 			schema={schema}
// 			uischema={uischema}
// 			data={data}
// 			renderers={materialRenderers}
// 			cells={materialCells}
// 			ValidationMode="ValidateAndShow"
// 			onChange={({ data, _errors }) => this.handleForm(data)}
// 			/>
// 		</div>
// 	  );
// 	}
// }

//Aman at 01:17
export default class Form21 extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		data: props.data,
		schema: _schema,
	  };
	}
  
	componentDidUpdate() { }
  
	handleForm(data) {
	  const { schema } = this.state;
	  this.setState(data, () => {
		this.props.handleChange(data, false);
	  });
	}
  
	render() {
	  const { data, schema } = this.state;
	  return (
		<JsonForms
		  schema={schema}
		  uischema={uischema}
		  data={data}
		  renderers={materialRenderers}
		  cells={materialCells}
		  ValidationMode="ValidateAndShow"
		  onChange={({ data, _errors }) => this.handleForm(data)}
		/>
	  );
	}
}

  