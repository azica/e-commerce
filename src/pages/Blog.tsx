import blogBg from "assets/images/blogBg.png";
import { Breadcrumbs } from "components/Breadcrumbs";
import { PageHeader } from "components/PageHeader";

const Blog = () => {
  return (
    <PageHeader
      bg={blogBg}
      title="Blog Us Page"
      subtitle="Home ideas and design inspiration"
      breadcrumbs={<Breadcrumbs />}
    />
  );
};

export default Blog;
