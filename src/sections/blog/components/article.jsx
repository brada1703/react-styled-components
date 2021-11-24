import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

function Article(props) {
  const article = props.props;
  // These colours are meaningless
  const textColours = {
    article: '124, 58, 237',
    video: '220, 38, 38',
    'case study': '5, 150, 105'
  };
  const bgColours = {
    article: '237, 233, 254',
    video: '254, 226, 226',
    'case study': '209, 250, 229'
  };

  const SingleArticle = styled.article`
    max-width: 350px;
    width: 100%;
    padding: 0.5rem;
    border-radius: 1rem;
    cursor: pointer;
    &:hover {
      --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    ${breakpoint('tablet')`
      width: 50%;
    `}
    ${breakpoint('desktop')`
      width: 33%;
    `}
  `

  const ArticleTag = styled.p`
    --tw-text-opacity: 1;
    color: rgba(${textColours[article.tag]}, var(--tw-text-opacity));
    --tw-bg-opacity: 1;
    background-color: rgba(${bgColours[article.tag]}, var(--tw-bg-opacity));
    text-transform: capitalize;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 1rem;
    display: inline-block;
    margin: 0;
  `

  const ArticleH2 = styled.h2`
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
  `
  const ArticleSummary = styled.p`
    --tw-text-opacity: 1;
    color: rgba(156, 163, 175, var(--tw-text-opacity));
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin: 0;
  `

  const ArticleFooter = styled.footer`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
  `

  const AuthorFigure = styled.figure`
    margin-right: 0.5rem;
    margin-left: 0;
  `

  const AuthorImage = styled.img`
    border-radius: 9999px;
    max-height: 2.5rem;
  `

  const AuthorName = styled.p`
    font-weight: bold;
    font-size: 0.75rem;
    line-height: 1rem;
    margin:0;
  `

  const ArticleInfo = styled.p`
    --tw-text-opacity: 1;
    color: rgba(156, 163, 175, var(--tw-text-opacity));
    font-size: 0.75rem;
    line-height: 1rem;
    margin: 0;
  `

  return (
    <SingleArticle>
      <ArticleTag>{article.tag}</ArticleTag>
      <ArticleH2>{article.title}</ArticleH2>
      <ArticleSummary>{article.summary}</ArticleSummary>
      <ArticleFooter>
        <AuthorFigure>
          <AuthorImage id="avatar"
            src={`https://randomuser.me/api/portraits/med/${article.gender}/${article.index}.jpg`}
            alt={`Articles by ${article.author}`}
            title={`Articles by ${article.author}`}
          />
        </AuthorFigure>
        <figcaption>
          <AuthorName>{article.author}</AuthorName>
          <ArticleInfo>{article.date} &bull; {article.minRead} min read</ArticleInfo>
        </figcaption>
      </ArticleFooter>
    </SingleArticle>
  );
}

export default Article;
