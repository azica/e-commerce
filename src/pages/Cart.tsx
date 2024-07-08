import shopBg from "assets/images/shopBg.png";
import { Breadcrumbs } from "components/Breadcrumbs";
import { PageHeader } from "components/PageHeader";

const Cart = () => {
    return (
        <PageHeader
            backgroundImage={shopBg}
            title="Cart"
            subtitle="Let’s design the place you always imagined."
            breadcrumbs={<Breadcrumbs center />}
        />
    )
}

export default Cart