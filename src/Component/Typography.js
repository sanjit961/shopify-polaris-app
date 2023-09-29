import React, { useState, useCallback } from "react";
import {
  LegacyStack,
  Text,
  RadioButton,
  Checkbox,
  TextField,
  Select,
} from "@shopify/polaris";
const Typography = () => {
  const [selected, setSelected] = useState("today");
  const handleSelectChange = useCallback(() => setSelected(), []);

  const options = [
    { label: "Bold", value: "Bold" },
    { label: "Regular", value: "Regular" },
    { label: "Italic", value: "Italic" },
  ];

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <LegacyStack vertical>
          <Text variant="headingXs" as="h6">
            TYPOGRAPHY
          </Text>
        </LegacyStack>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            label="Title Font size"
            type="number"
            value="45"
            suffix="PX"
            autoComplete="on"
          />

          <Select
            label="Title Font style"
            options={options}
            onChange={handleSelectChange}
            value={selected}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            label="Subtitle Font size"
            type="number"
            value="45"
            suffix="PX"
            autoComplete="off"
          />

          <Select
            label="Subtitle Font style"
            options={options}
            onChange={handleSelectChange}
            value={selected}
          />
        </div>
      </div>
    </>
  );
};

export default Typography;
