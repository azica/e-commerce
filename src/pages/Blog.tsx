import blogBg from "assets/images/blogBg.png";
import { Breadcrumbs } from "components/Breadcrumbs";
import { PageHeader } from "components/PageHeader";

const Blog = () => {
  return (
    <PageHeader
      backgroundImage={blogBg}
      title="Blog Us Page"
      subtitle="Home ideas and design inspiration"
      breadcrumbs={<Breadcrumbs center />}
    />
  );
};

export default Blog;
