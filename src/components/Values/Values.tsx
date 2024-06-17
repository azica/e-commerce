import { valuesData } from "assets/data/mockdata";
import { Container } from "components/Wrappers/Container";

import { Inner } from "./styles";
import ValueCard from "./ValueCard/ValueCard";

export const Values = () => {
  return (
    <Container>
      <Inner>
        {valuesData.map((value) => (
          <ValueCard key={value.id} {...value} />
        ))}
      </Inner>
    </Container>
  );
};
