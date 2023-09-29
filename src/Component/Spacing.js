import {
  FormLayout,
  ProgressBar,
  LegacyStack,
  Text,
  HorizontalGrid,
} from "@shopify/polaris";
import { Page, Grid, LegacyCard } from "@shopify/polaris";
import {
  ButtonGroup,
  Button,
  Select,
  TextField,
  RangeSlider,
} from "@shopify/polaris";
import React from "react";

function Spacing() {
  return (
    <>
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
                SPACING
              </Text>
            </LegacyStack>
            <RangeSlider
              label="Block Size"
              // value={rangeValue}
              // onChange={handleRangeSliderChange}
              output
            />
          </div>
        </div>
      </div>

      <div className="progressbar">
        <div
          style={{
            width: 625,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ width: 234 }}>
            <TextField
              label="Goes up"
              type="number"
              value="0"
              suffix="PX"
              autoComplete="off"
            />
          </div>
          <TextField
            label="Goes Down"
            type="number"
            value="0"
            suffix="PX"
            autoComplete="off"
          />
        </div>
      </div>
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
                Space in between Block
              </Text>
            </LegacyStack>
            <RangeSlider output />
          </div>
          <TextField
            label=""
            type="number"
            value="0"
            suffix="%"
            autoComplete="off"
          />
        </div>
      </div>
    </>
  );
}
export default Spacing;
