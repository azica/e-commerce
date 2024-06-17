import shopBg from "assets/images/shopBg.png";
import { Breadcrumbs } from "components/Breadcrumbs";
import { PageHeader } from "components/PageHeader";
import { SideBar } from "components/SideBar";
import { Container } from "components/Wrappers/Container";

import { Content } from "./styles";

export const Shop = () => {
  return (
    <>
      <PageHeader
        bg={shopBg}
        title="Shop Page"
        subtitle="Let’s design the place you always imagined."
        breadcrumbs={<Breadcrumbs />}
      />
      <Container>
        <Content>
          <SideBar />
        </Content>
      </Container>
    </>
  );
};
