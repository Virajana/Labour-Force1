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

  YEAR = [{name:2020,code:12},{name:2021,code:13},{name:2022,code:14},{name:2023,code:15}];
  AGECATEGORY = [{id:1,catagory:'Below 15'}, {id:2,catagory:'15-60'}, {id:3,catagory:'above 60'}];
  DISTRICT = [
    { code :0,name :'Colombo'},
    { code :15,name :'Ampara'},
    { code :19,name :'Anuradhapura'},
    { code :21,name :'Badulla'},
    { code :14,name :'Batticaloa'},
    { code :6,name :'Galle'},
    { code :1,name :'Gampaha'},
    { code :8,name :'Hambantota'},
    { code :9,name :'Jaffna'},
    { code :2,name :'Kalutara'},
    { code :3,name :'Kandy'},
    { code :24,name :'Kegalle'},
    {code:10,name:'Kilinochchi'},
    { code :17,name :'Kurunegala'},
    { code :11,name :'Mannar'},
    { code :4,name :'matale'},
    { code :16,name :'Moneragala'},
    { code :13,name :'Mullaitivu'},
    { code :7,name :'Matara'},
    { code :5,name :'Nuwara Eliya'},
    { code :20,name :'Polonnaruwa'},
    { code :23,name :'Ratnapura'},
    { code :22,name :'Trincomalee'},
    { code :18,name :'Puththalama'},
    { code :12,name :'Vavuniya'},
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
      .post("https://lk-laber-force-data-prediction.herokuapp.com/unemployee", payload)
      .then(res => {
        this.setState({ result: res.data.result[0] });
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
