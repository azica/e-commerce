import articleImage1 from "assets/images/articleImage1.png";
import { Link } from "components/Link";

import { Wrapper, Image, Title } from "./styles";

export const ArticleCard = ({ title, id }: Model.Article) => {
  return (
    <Wrapper>
      <Image>
        <img src={articleImage1} alt={title} />
      </Image>
      <Title variant="heading7">{title}</Title>
      <Link linkLabel="Read More" link={`/posts/${id}`} />
    </Wrapper>
  );
};
