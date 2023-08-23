import ArticleCard from "./ArticleCard";

const ArticleTabs = ({ items }) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((item) => (
          <ArticleCard key={item._id} item={item}></ArticleCard>
        ))}
      </div>
    </section>
  );
};

export default ArticleTabs;