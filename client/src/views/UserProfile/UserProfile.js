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

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  formControl: {
    minWidth: 200
  },
  selectEmpty: {}
};

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      year: "",
      gender: "",
      district: "",
      agecategory: "",
      result:'',
    };
  }

  YEAR = [2019,2020,2021,2022,2023,2024,2025,2026];
  AGECATEGORY = [{id:1,catagory:'Below 15'}, {id:2,catagory:'15-60'}, {id:3,catagory:'above 60'}];
  DISTRICT = [
    { code :11,name :'Colombo'},
    { code :63,name :'Ampara'},
    { code :25,name :'Anuradhapura'},
    { code :36,name :'Avissawella'},
    { code :55,name :'Badulla'},
    { code :57,name :'Bandarawela'},
    { code :65,name :'Batticaloa'},
    { code :32,name :'Chilaw'},
    { code :91,name :'Galle'},
    { code :33,name :'Gampaha'},
    { code :47,name :'Hambantota'},
    { code :51,name :'Hatton'},
    { code :21,name :'Jaffna'},
    { code :67,name :'Kalmunai'},
    { code :34,name :'Kalutara'},
    { code :81,name :'Kandy'},
    { code :35,name :'Kegalle'},
    { code :37,name :'Kurunegala'},
    { code :23,name :'Mannar'},
    { code :66,name :'matale'},
    { code :41,name :'Matara'},
    { code :54,name :'Nawalapitiya'},
    { code :31,name :'Negombo'},
    { code :52,name :'Nuwara Eliya'},
    { code :38,name :'Panadura'},
    { code :27,name :'Polonnaruwa'},
    { code :45,name :'Ratnapura'},
    { code :26,name :'Trincomalee'},
    { code :24,name :'Vavuniya'},
  ];
  GENDER = [{id:1,catagory:'male'}, {id:2,catagory:'female'}];

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
      .post("http://localhost:5000/underemployee", payload)
      .then(res => {
        swal({
          title: "Good job!",
          text: "You have succesfully registered!",
          icon: "success"
        });
        this.setState({result:res.data.result[0]})
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
            <GridItem xs={12} sm={12} md={8}>
              <Card>
                <CardHeader color="primary">
                  <h4>Enter the details</h4>
                  <p>details</p>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                      <FormControl
                        variant="filled"
                        style={{
                          minWidth: 200
                        }}
                      >
                        <InputLabel id="demo-simple-select-filled-label">
                          YEAR
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={this.state.year}
                          onChange={this.handleChange}
                          name="year"
                        >
                          {this.YEAR.map(item => (
                            // eslint-disable-next-line react/jsx-key
                            <MenuItem value={item}>{item}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={3}>
                      <FormControl
                        variant="filled"
                        style={{
                          minWidth: 200
                        }}
                      >
                        <InputLabel id="demo-simple-select-filled-label">
                          AGE CATEGORY
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={this.state.agecategory}
                          onChange={this.handleChange}
                          name="agecategory"
                        >
                          {this.AGECATEGORY.map(item => (
                            // eslint-disable-next-line react/jsx-key
                              <MenuItem value={item.id}>{item.catagory}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={3}>
                      <FormControl
                        variant="filled"
                        style={{
                          minWidth: 200
                        }}
                      >
                        <InputLabel id="demo-simple-select-filled-label">
                          DISTRICT
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={this.state.district}
                          onChange={this.handleChange}
                          name="district"
                        >
                          {this.DISTRICT.map(item => (
                            // eslint-disable-next-line react/jsx-key
                              <MenuItem value={item.code}>{item.name}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <FormControl
                        variant="filled"
                        style={{
                          minWidth: 200
                        }}
                      >
                        <InputLabel id="demo-simple-select-filled-label">
                          GENDER
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={this.state.gender}
                          onChange={this.handleChange}
                          name="gender"
                        >
                          {this.GENDER.map(item => (
                            // eslint-disable-next-line react/jsx-key
                              <MenuItem value={item.id}>{item.catagory}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter>
                  <Button color="secondary" onClick={this.submitInput}>
                    Predict
                  </Button>
                </CardFooter>
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

export default UserProfile;
