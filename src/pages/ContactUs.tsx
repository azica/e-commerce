import shopBg from "assets/images/shopBg.png";
import { Breadcrumbs } from "components/Breadcrumbs";
import { PageHeader } from "components/PageHeader";

const ContactUs = () => {
  return (
    <PageHeader
      backgroundImage={shopBg}
      title="Contact Us Page"
      subtitle="Let’s design the place you always imagined."
      breadcrumbs={<Breadcrumbs />}
    />
  );
};

export default ContactUs;
