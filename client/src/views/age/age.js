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
import swal from "sweetalert";

class TableList extends Component {
  constructor() {
    super();
    this.state = {
      year: 2020,
      gender: 1,
      district: 11,
      agecategory: 1,
      result: "0",
      total: "0",
      precentage: "0"
    };
  }

  YEAR = [
    { name: 2020, code: 2020 },
    { name: 2021, code: 2021 },
    { name: 2022, code: 2022 },
    { name: 2023, code: 2023 },
    { name: 2024, code: 2024 },
    { name: 2025, code: 2025 },
    { name: 2026, code: 2026 },
    { name: 2027, code: 2027 },
    { name: 2028, code: 2028 },
    { name: 2029, code: 2029 },
    { name: 2030, code: 2030 }
  ];
  AGECATEGORY = [
    { id: 1, catagory: "Below 15" },
    { id: 2, catagory: "15-60" },
    { id: 3, catagory: "above 60" }
  ];
  DISTRICT = [
    { code: 11, name: "Colombo" },
    { code: 52, name: "Ampara" },
    { code: 71, name: "Anuradhapura" },
    { code: 81, name: "Badulla" },
    { code: 51, name: "Batticaloa" },
    { code: 31, name: "Galle" },
    { code: 12, name: "Gampaha" },
    { code: 33, name: "Hambantota" },
    { code: 41, name: "Jaffna" },
    { code: 13, name: "Kalutara" },
    { code: 21, name: "Kandy" },
    { code: 92, name: "Kegalle" },
    { code: 42, name: "Kilinochchi" },
    { code: 61, name: "Kurunegala" },
    { code: 43, name: "Mannar" },
    { code: 22, name: "matale" },
    { code: 16, name: "Moneragala" },
    { code: 13, name: "Mullaitivu" },
    { code: 32, name: "Matara" },
    { code: 23, name: "Nuwara Eliya" },
    { code: 72, name: "Polonnaruwa" },
    { code: 91, name: "Ratnapura" },
    { code: 53, name: "Trincomalee" },
    { code: 62, name: "Puththalama" },
    { code: 44, name: "Vavuniya" }
  ];

  GENDER = [{ id: 1, catagory: "male" }, { id: 2, catagory: "female" }];

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
    // https://lk-laber-force-data-prediction.herokuapp.com
    // http://0.0.0.0:5000/

    axios
      .post(
        "https://lk-laber-force-data-prediction.herokuapp.com/agestructure",
        payload
      )
      .then(res => {
        // swal({
        //   title: "Good job!",
        //   text: "You have succesfully registered!",
        //   icon: "success"
        // });
        this.setState({
          result: res.data.result,
          total: res.data.total,
          precentage: res.data.precentage
        });
      })
      .catch(err => {
        swal("Oops", "Something went wrong!!!", "error");
      });
  };
  render() {
    return (
      <div>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader color="info">
                  <h3>Sri Lankan age Structure Population Prediction</h3>
                  <h5>Select necessary details</h5>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <FormControl
                        variant="filled"
                        style={{
                          minWidth: "100%",
                          flexDirection: "row-reverse"
                        }}
                      >
                        <InputLabel id="demo-simple-select-filled-label">
                          <h5>Select the prediction year</h5>
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={this.state.year}
                          onChange={this.handleChange}
                          name="year"
                          style={{ width: "30%" }}
                        >
                          {this.YEAR.map(item => (
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
                          flexDirection: "row-reverse"
                        }}
                      >
                        <InputLabel id="demo-simple-select-filled-label">
                          <h5>Select the age category</h5>
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={this.state.agecategory}
                          onChange={this.handleChange}
                          name="agecategory"
                          style={{ width: "30%" }}
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
                          flexDirection: "row-reverse"
                        }}
                      >
                        <InputLabel id="demo-simple-select-filled-label">
                          <h5>Select the district</h5>
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={this.state.district}
                          onChange={this.handleChange}
                          name="district"
                          style={{ width: "30%" }}
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
                          flexDirection: "row-reverse"
                        }}
                      >
                        <InputLabel id="demo-simple-select-filled-label">
                         <h5>Select the gender</h5>
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={this.state.gender}
                          onChange={this.handleChange}
                          name="gender"
                          style={{ width: "30%" }}
                        >
                          {this.GENDER.map(item => (
                            // eslint-disable-next-line react/jsx-key
                            <MenuItem value={item.id}>{item.catagory}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}>
                      <Button color="info" onClick={this.submitInput}>
                        Predict
                      </Button>
                    </GridItem>
                  </GridContainer>
                  <CardFooter></CardFooter>
                </CardBody>
              </Card>
              <Card>
                <CardHeader color="success">
                  <h3>
                    Prediction Result <small>(Accuary: 70.67%)</small>
                  </h3>
                </CardHeader>
                <CardBody>
                  <div
                    style={{
                      paddingLeft: "25%",
                      marginBottom: "30px",
                      position: "relative",
                      fontWeight: "bold"
                    }}
                  >
                    <h1>{this.state.precentage} %. </h1>
                    <h5>{this.state.result} Population.</h5>
                    <h5>{this.state.total} Total population in the year.</h5>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardHeader color="info">
                  <h3>Model summary</h3>
                </CardHeader>
                <CardBody>
                  {/*<h4>Total records: 1041</h4>*/}
                  <h4>Features: 32</h4>
                  <h4>
                    Model: Polynomial interpolated ARDRegression Model without
                    hyperparameter tuning
                  </h4>
                  <h4>Model score: 0.7067</h4>
                  <h4>Model R2: 0.70667</h4>
                  <h4>Model explained variance score: 0.7075</h4>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default TableList;
