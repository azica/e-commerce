import { SectionTopBlock } from "components/SectionTopBlock";
import { Container } from "components/Wrappers/Container";
import { useGetPostsQuery } from "shared/store/queries/post.query";

import { ArticleCard } from "./ArticleCard";
import { Section, Inner } from "./styles";

export const Articles = () => {
  const { data, isSuccess, isLoading, error } = useGetPostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <Section>
      <Container>
        <SectionTopBlock title="Articles" linkName="More Articles" link="/posts" />
        <Inner>{isSuccess && (data as GetPosts).posts.map((post) => <ArticleCard key={post.id} {...post} />)}</Inner>
      </Container>
    </Section>
  );
};
