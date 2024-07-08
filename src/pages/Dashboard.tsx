import shopBg from "assets/images/shopBg.png";
import { Breadcrumbs } from "components/Breadcrumbs";
import { PageHeader } from "components/PageHeader";

const Dashboard = () => {
    return (
        <PageHeader
            backgroundImage={shopBg}
            title="Dashboard"
            subtitle="Let’s design the place you always imagined."
            breadcrumbs={<Breadcrumbs center />}
        />
    )
}

export default Dashboard