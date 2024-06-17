import { Link } from "react-router-dom";

import { CheckboxContent, Text } from "./styles";

export const ConsentLabel: ConsentLabel = ({ centered }) => (
  <CheckboxContent centered={`${centered ? "true" : "false"}`}>
    <Text variant="body2">
      I agree with
      <Link to="/privacy-policy"> Privacy Policy</Link> and
      <Link to="/terms-of-use"> Terms of Use</Link>
    </Text>
  </CheckboxContent>
);
