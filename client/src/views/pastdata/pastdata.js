import React from "react";
// @material-ui/core components
// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import GridContainer from "components/Grid/GridContainer.js";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import GridItem from "components/Grid/GridItem.js";
import DatatablePage from '../table'

export default function Icons() {
 var data=1997;
  // const classes = useStyles();
  // let district = "";

  function handleChange() {
    data =1997

  }

  let CATEGORY = ["Employee", "Unemployee", "Agestructure"];
  return (

    <div>
      <Card>
        <CardHeader color="primary">
          <h4>Past Years Data Summary</h4>
          <p>Select necessary details</p>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <FormControl
                variant="filled"
                style={{
                  minWidth: 200
                }}
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Select Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={data}
                  onChange={handleChange}
                  name="YEAR"
                >
                  {CATEGORY.map(item => (
                    // eslint-disable-next-line react/jsx-key
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
            <DatatablePage></DatatablePage>
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>
      
    </div>
  );
}
