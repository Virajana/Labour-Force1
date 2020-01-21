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
  /**
   * Ampara	LK.AP	52	CE01	APR	32	52	649,402	2,984	1,152	5
   Anuradhapura	LK.AD	71	CE02	AD	50	71	860,575	7,128	2,752	7
   Badulla	LK.BD	81	CE03	BD	90	81	815,405	2,818	1,088	8
   Batticaloa	LK.BC	51	CE04	BC	30	51	526,567	2,463	951	5
   Colombo	LK.CO	11	CE23	CO	10	11	2,324,349	642	248	1
   Galle	LK.GL	31	CE06	GL	80	31	1,063,334	1,673	646	3
   Gampaha	LK.GQ	12	CE24	GQ	11	12	2,304,833	1,393	538	1
   Hambantota	LK.HB	33	CE07	HB	82	33	599,903	2,593	1,001	3
   Jaffna	LK.JA	41	CE25	JA	40	41	583,882	1,114	430	4
   Kalutara	LK.KT	13	CE09	KT	12	13	1,221,948	1,606	620	1
   Kandy	LK.KY	21	CE10	KY	20	21	1,375,382	2,365	913	2
   Kegalle	LK.KE	92	CE11	KE	71	92	840,648	1,663	642	9
   Kilinochchi	LK.KL	42	 	 	 	45	113,510	1,171	452	4
   Kurunegala	LK.KG	61	CE12	KG	60	61	1,618,465	4,771	1,842	6
   Mannar	LK.MB	43	CE26	MB	41	42	99,570	1,963	758	4
   Matale	LK.MT	22	CE14	MT	21	22	484,531	1,987	767	2
   Matara	LK.MH	32	CE15	MH	81	32	814,048	1,246	481	3
   Moneragala	LK.MJ	82	CE16	MJ	91	82	451,058	7,133	2,754	8
   Mullaitivu	LK.MP	45	CE27	MP	42	44	92,238	1,580	610	4
   Nuwara Eliya	LK.NW	23	CE17	NW	22	23	711,644	1,228	474	2
   Polonnaruwa	LK.PR	72	CE18	PR	51	72	406,088	3,403	1,314	7
   Puttalam	LK.PX	62	CE19	PX	61	62	762,396	2,976	1,149	6
   Ratnapura	LK.RN	91	CE20	RN	70	91	1,088,007	3,237	1,250	9
   Trincomalee	LK.TC	53	CE21	TC	31	53	379,541	2,616	1,010	5
   Vavuniya	LK.
   * @type {*[]}
   */
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
      .post("https://lk-laber-force-data-prediction.herokuapp.com/underemployee", payload)
      .then(res => {

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
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader color="primary">
                  <h4>Under Employement Population Prediction</h4>
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
                <CardFooter>
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
