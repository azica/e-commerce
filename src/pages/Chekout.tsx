import shopBg from "assets/images/shopBg.png";
import { Breadcrumbs } from "components/Breadcrumbs";
import { PageHeader } from "components/PageHeader";

const Checkout = () => {
    return (
        <PageHeader
            backgroundImage={shopBg}
            title="Checkout"
            subtitle="Let’s design the place you always imagined."
            breadcrumbs={<Breadcrumbs center />}
        />
    )
}

export default Checkout