import {
  FormLayout,
  ProgressBar,
  LegacyStack,
  Text,
  HorizontalGrid,
  RangeSlider,
} from "@shopify/polaris";
import { Page, Grid, LegacyCard } from "@shopify/polaris";
import { ButtonGroup, Button, Select, TextField } from "@shopify/polaris";
import React from "react";
import Color from "./Color";
import Typography from "./Typography";
import Spacing from "./Spacing";

function form() {
  return (
    <>
      <Page fullWidth>
        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <div>
              <ButtonGroup className="">
                <div style={{ width: "730px", display: "flex", margin:"5px" }}>
                  <div style={{ margin: "2px" }}>
                    <Button className="" size="large">
                      Block
                    </Button>
                  </div>
                  <div style={{ margin: "2px" }}>
                    <Button size="large" className="">
                      Icon
                    </Button>
                  </div>
                  <div style={{ margin: "2px" }}>
                    <Button size="large" primary>
                      Style
                    </Button>
                  </div>
                </div>
              </ButtonGroup>
            </div>
            <LegacyCard sectioned>
              <FormLayout>
                <div className="progressbar">
                  <div
                    style={{
                      width: 625,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ marginBottom: "10px" }}>
                      <LegacyStack vertical>
                        <Text variant="headingXs" as="h6">
                          ICON SIZE
                        </Text>
                      </LegacyStack>
                      <RangeSlider label="" value={50} output />
                    </div>
                    <TextField
                      label="Price"
                      type="number"
                      value="50"
                      suffix="PX"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <hr />
                <div className="colors">
                  <Color />
                </div>
                <hr />
                <div>
                  <Typography />
                </div>

                <hr />
                <div className="typography">
                  <Spacing />
                </div>
              </FormLayout>
            </LegacyCard>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <LegacyCard title="Orders" sectioned>
              <p>View a summary of your online store’s orders.</p>
            </LegacyCard>
          </Grid.Cell>
        </Grid>
        <div>
          <ButtonGroup>
            <Button>Cancel</Button>
            <Button primary>Save</Button>
          </ButtonGroup>
        </div>
      </Page>
    </>
  );
}
export default form;
