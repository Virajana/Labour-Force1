import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      year: "",
      gender: "",
      district: "",
      agecategory: "",
      result: ""
    };
  }

  YEAR = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];
  AGECATEGORY = [
    { id: 1, catagory: "Below 15" },
    { id: 2, catagory: "15-60" },
    { id: 3, catagory: "above 60" }
  ];
  DISTRICT = [
    { code: 11, name: "Colombo" },
    { code: 63, name: "Ampara" },
    { code: 25, name: "Anuradhapura" },
    { code: 36, name: "Avissawella" },
    { code: 55, name: "Badulla" },
    { code: 57, name: "Bandarawela" },
    { code: 65, name: "Batticaloa" },
    { code: 32, name: "Chilaw" },
    { code: 91, name: "Galle" },
    { code: 33, name: "Gampaha" },
    { code: 47, name: "Hambantota" },
    { code: 51, name: "Hatton" },
    { code: 21, name: "Jaffna" },
    { code: 67, name: "Kalmunai" },
    { code: 34, name: "Kalutara" },
    { code: 81, name: "Kandy" },
    { code: 35, name: "Kegalle" },
    { code: 37, name: "Kurunegala" },
    { code: 23, name: "Mannar" },
    { code: 66, name: "matale" },
    { code: 41, name: "Matara" },
    { code: 54, name: "Nawalapitiya" },
    { code: 31, name: "Negombo" },
    { code: 52, name: "Nuwara Eliya" },
    { code: 38, name: "Panadura" },
    { code: 27, name: "Polonnaruwa" },
    { code: 45, name: "Ratnapura" },
    { code: 26, name: "Trincomalee" },
    { code: 24, name: "Vavuniya" }
  ];
  GENDER = [{ id: 1, catagory: "Male" }, { id: 2, catagory: "Female" }];

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitInput = () => {
    const payload = {
      year: this.state.year,
      agecategory: this.state.agecategory,
      district: this.state.district,
      gender: this.state.gender
    };
    console.log(payload);

    axios
      .post("http://localhost:5000/unemployee", payload)
      .then(res => {
        this.setState({ result: res.data.result[0] });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader color="primary">
                  <h4>Unemployement Population Prediction</h4>
                  <p>Select necessary details</p>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <FormControl
                        variant="filled"
                        style={{
                          minWidth: "100%",
                          flexDirection: 'row-reverse'
                        }}
                      >

                        <InputLabel id="demo-simple-select-filled-label">
                          Select the prediction year
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={this.state.year}
                          onChange={this.handleChange}
                          name="year"
                          style={{width: '40%'}}
                        >
                          {this.YEAR.map(item => (
                            // eslint-disable-next-line react/jsx-key
                            <MenuItem value={item}>{item}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={12}>
                      <FormControl
                        variant="filled"
                        style={{
                          minWidth: "100%",
                          flexDirection: 'row-reverse'
                        }}
                      >
                        <InputLabel id="demo-simple-select-filled-label">
                          Select the age category
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={this.state.agecategory}
                          onChange={this.handleChange}
                          name="agecategory"
                          style={{width: '40%'}}
                        >
                          {this.AGECATEGORY.map(item => (
                            // eslint-disable-next-line react/jsx-key
                            <MenuItem value={item.id}>{item.catagory}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={12}>
                      <FormControl
                        variant="filled"
                        style={{
                          minWidth: "100%",
                          flexDirection: 'row-reverse'
                        }}
                      >
                        <InputLabel id="demo-simple-select-filled-label">
                          Select the district
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={this.state.district}
                          onChange={this.handleChange}
                          name="district"
                          style={{width: '40%'}}
                        >
                          {this.DISTRICT.map(item => (
                            // eslint-disable-next-line react/jsx-key
                            <MenuItem value={item.code}>{item.name}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <FormControl
                        variant="filled"
                        style={{
                          minWidth: "100%",
                          flexDirection: 'row-reverse'
                        }}
                      >
                        <InputLabel id="demo-simple-select-filled-label">
                          Select the gender
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={this.state.gender}
                          onChange={this.handleChange}
                          name="gender"
                          style={{width: '40%'}}
                        >
                          {this.GENDER.map(item => (
                            // eslint-disable-next-line react/jsx-key
                            <MenuItem value={item.id}>{item.catagory}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}>
                      <Button color="primary" onClick={this.submitInput}>
                        Predict
                      </Button>
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
              <Card>
                <CardHeader color="primary">
                  <h4>Prediction Result</h4>
                </CardHeader>
                <CardBody>
                  <div
                    style={{
                      paddingLeft: "25%",
                      marginBottom: "40px",
                      position: "relative",
                      fontWeight: "bold"
                    }}
                  >
                    <h1>{this.state.result}</h1>
                  </div>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default Dashboard;
