/* eslint-disable react/prop-types */
import { Dna } from "react-loader-spinner";
import ArticleCard from "./ArticleCard";

const ArticleTabs = ({ items, loader }) => {
  return (
    <>
    {
            loader ?
            <div className="flex items-center justify-center py-36">
              <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            </div> :
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {items.map((item) => (
                <ArticleCard key={item._id} item={item}></ArticleCard>
              ))}
            </div>
    }
    </>
  );
};

export default ArticleTabs;