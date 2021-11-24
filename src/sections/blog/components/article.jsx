function Article(props) {
  let article = props.props;
  let colours = {
    article: 'purple',
    video: 'red',
    'case study': 'green'
  };
  return (
    <article className="w-full md:w-1/2 lg:w-1/3 rounded-2xl hover:shadow-lg p-2 cursor-pointer" style={{ maxWidth: 350 }}>
      <p className={`
        capitalize font-bold rounded-2xl inline-block px-2 py-1 text-xs
        bg-${colours[article.tag]}-100 text-${colours[article.tag]}-600`}>
        {article.tag}
      </p>
      <h2 className="text-lg font-bold my-2">{article.title}</h2>
      <p className="text-sm text-gray-400">{article.summary}</p>
      <footer className="flex items-center mt-2">
        <figure className="mr-2">
          <img id="avatar"
            src={`https://randomuser.me/api/portraits/med/${article.gender}/${article.index}.jpg`}
            alt={`Articles by ${article.author}`}
            title={`Articles by ${article.author}`}
            className="rounded-full max-h-10"
          />
        </figure>
        <figcaption>
          <p className="font-bold text-xs">{article.author}</p>
          <p className="text-gray-400 text-xs">{article.date} &bull; {article.minRead} min read</p>
        </figcaption>
      </footer>
    </article>
  );
}

export default Article;
