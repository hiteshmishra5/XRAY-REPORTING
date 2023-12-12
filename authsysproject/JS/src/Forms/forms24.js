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
    NameTextFR24: {
      type: "string",
    },
    IDTextFR24: {
      type: "string",
    },
    AgeTextFR24: {
      type: "string",
    },
    GenderTextFR24: {
      type: "string",
      enum: ["Male", "Female", "Others"],
    },
    TestDateTextFR24: {
      type: "string",
    },
    ReportDateTextFR24: {
      type: "string",
    },
    HeightText24: {
      type: "string",
    },
    WeightText24: {
      type: "string",
    },
    // BmiText24: {
    //   type: "string",
    // },
    BloodText24: {
      type: "string",
    },
    PulseText24: {
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
              scope: "#/properties/NameTextFR24",
            },
            {
              type: "Control",
              label: "Patient ID",
              scope: "#/properties/IDTextFR24",
            },
            {
              type: "Control",
              label: "Age",
              scope: "#/properties/AgeTextFR24",
            },
            {
              type: "Control",
              label: "Test date",
              scope: "#/properties/TestDateTextFR24",
            },
            {
              type: "Control",
              label: "Report date",
              scope: "#/properties/ReportDateTextFR24",
            },
          ],
        },

        {
          type: "Control",
          label: "Gender",
          scope: "#/properties/GenderTextFR24",
          options: {
            format: "radio",
          },
        },

        {
            type: "HorizontalLayout",
            label: "",
            elements: [
              {
                type: "Control",
                label: "Height(in cm)",
                scope: "#/properties/HeightText24",
              },
              {
                type: "Control",
                label: "Weight(in kg)",
                scope: "#/properties/WeightText24",
              },
            //   {
            //     type: "Control",
            //     label: "BMI",
            //     scope: "#/properties/BmiText24",
            //   },
              {
                type: "Control",
                label: "Blood Pressure",
                scope: "#/properties/BloodText24",
              },
              {
                type: "Control",
                label: "Pulse",
                scope: "#/properties/PulseText24",
              },
            ],
        },
      ],
    },
  ],
};
//Auto data update by Aman Gupta on 23/06/23
export default class Form24 extends Component {
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
    fetch(`/vitalpatientdata?query=${this.state.query}`)
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
      GenderTextFR24: patient.gender,
      AgeTextFR24: patient.age,
      NameTextFR24: patient.PatientName,
      IDTextFR24: patient.PatientId,
      TestDateTextFR24: patient.TestDate,
      ReportDateTextFR24: patient.ReportDate,
      HeightText24: patient.height,
      WeightText24: patient.weight,
      BloodText24: patient.blood,
      PulseText24: patient.pulse,
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
