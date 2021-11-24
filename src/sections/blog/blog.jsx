import Article from "./components/article";
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

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
      <div className="p-4">
        <header>
          <h2 className="font-bold text-3xl leading-10">Recent publications</h2>
          <p className="text-gray-400 pb-4">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
        </header>
        <hr />
      </div>
      <section className="flex flex-wrap justify-around p-4">
        {
          articles.map((article, index) => {
            let info = { ...article, index }
            return (
              <Article props={info} key={`article-${index}`} />
            );
          })
        }
      </section>
    </>
  );
}

export default Blog;
