import Article from "./components/article";
import styled from 'styled-components';

const HeaderDiv = styled.div`
    padding: 1rem;
  `

const HeaderH2 = styled.h2`
    line-height: 2.5rem;
    font-weight: 700;
    font-size: 1.875rem;
    margin:0;
  `
const HeaderP = styled.p`
    --tw-text-opacity: 1;
    color: rgba(156, 163, 175, var(--tw-text-opacity));
    padding-bottom: 1rem;
    margin:0;
  `

const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1rem;
  `

const Blog = () => {
  const articles = [
    {
      tag: 'article',
      title: 'Boost your conversion rate',
      summary: 'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
      author: 'Paul York',
      date: 'Mar 16, 2020',
      gender: 'men',
      minRead: 6
    },
    {
      tag: 'video',
      title: 'How to use search engine optimisation to drive sales',
      summary: 'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
      author: 'Dessie Ryan',
      date: 'Mar 10, 2020',
      gender: 'women',
      minRead: 4
    },
    {
      tag: 'case study',
      title: 'Improve your customer experience',
      summary: 'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
      author: 'Easer Collins',
      date: 'Mar 16, 2020',
      gender: 'men',
      minRead: 11
    }
  ];

  return (
    <>
      <HeaderDiv>
        <header>
          <HeaderH2>Recent publications</HeaderH2>
          <HeaderP>Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</HeaderP>
        </header>
        <hr />
      </HeaderDiv>
      <Section>
        {
          articles.map((article, index) => {
            let info = { ...article, index }
            return (
              <Article props={info} key={`article-${index}`} />
            );
          })
        }
      </Section>
    </>
  );
}

export default Blog;
