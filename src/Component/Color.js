import React from "react";
import {
  LegacyStack,
  Text,
  RadioButton,
  Checkbox,
  TextField,
} from "@shopify/polaris";
const Color = () => {
  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <LegacyStack vertical>
          <Text variant="headingXs" as="h6">
            COLORS
          </Text>
        </LegacyStack>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Background Color</div>
          <div style={{ margin: "4px" }}>
            <TextField type="text" value="#fffff" autoComplete="off" />
          </div>
          <div>Title Color</div>
          <div style={{ margin: "4px" }}>
            <TextField type="text" value="#fffff" autoComplete="off" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Icon Color</div>
          <div style={{ margin: "4px" }}>
            <TextField type="text" value="#fffff" autoComplete="off" />
          </div>
          <div>Subtitle Color</div>
          <div style={{ margin: "4px" }}>
            <TextField type="text" value="#fffff" autoComplete="off" />
          </div>
        </div>
        <Checkbox label="Transparent Background" />
      </div>
    </>
  );
};

export default Color;
