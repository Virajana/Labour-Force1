import "./TableList.css";
import React, { Component } from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import ChartistGraph from "react-chartist";
import ArrowUpward from "@material-ui/core/SvgIcon/SvgIcon";
import AccessTime from "@material-ui/icons/AccessTime";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import swal from "sweetalert";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

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

/**
 * MONTH:
 SECTOR:
 DISTRICT:
 HH_NO:
 BLANK:
 * @type {StylesHook<Styles<Theme, {}, string>>}
 */

class TableList extends Component {
  constructor() {
    super();
    this.state = {
      month: "",
      sector: "",
      district: "",
      hh_no: "",
      black: ""
    };
  }

  MONTH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  SECTOR = [1, 2, 3];
  DISTRICT = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24
  ];
  HH_NO = Array.from(Array(215).keys());
  BLANK = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitInput = () => {
    const payload = {
      month: this.state.month,
      sector: this.state.sector,
      district: this.state.district,
      hh_no: this.state.hh_no,
      black: this.state.black
    };
    console.log(payload)

    axios
      .post("http://localhost:5000/agestructure", payload)
      .then(res => {
        swal({
          title: "Good job!",
          text: "You have succesfully registered!",
          icon: "success"
        });
      })
      .catch(err => {
        swal("Oops", "Something went wrong!!!", "error");
      });
  };
  render() {
    return (
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
                        MONTH
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={this.state.month}
                        onChange={this.handleChange}
                        name="month"
                      >
                        {this.MONTH.map(item => (
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
                        SECTOR
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={this.state.sector}
                        onChange={this.handleChange}
                        name="sector"
                      >
                        {this.SECTOR.map(item => (
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
                          <MenuItem value={item}>{item}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <FormControl
                      variant="filled"
                      style={{
                        minWidth: 200
                      }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        HH_NO
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={this.state.hh_no}
                        onChange={this.handleChange}
                        name="hh_no"
                      >
                        {this.HH_NO.map(item => (
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
                        BLANK
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={this.state.black}
                        onChange={this.handleChange}
                        name="black"
                      >
                        {this.BLANK.map(item => (
                          // eslint-disable-next-line react/jsx-key
                          <MenuItem value={item}>{item}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary" onClick={this.submitInput}>
                  Predict
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4>Daily Sales</h4>
                <p>
                  <span>
                    <ArrowUpward /> 55%
                  </span>{" "}
                  increase in today sales.
                </p>
              </CardBody>
              <CardFooter chart>
                <div>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4>Email Subscriptions</h4>
                <p c>Last Campaign Performance</p>
              </CardBody>
              <CardFooter chart>
                <div>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4>Completed Tasks</h4>
                <p>Last Campaign Performance</p>
              </CardBody>
              <CardFooter chart>
                <div>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default TableList;
