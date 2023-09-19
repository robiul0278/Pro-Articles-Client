import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useArticle from "../../../Hooks/useArticle";
import ArticleTabs from "./ArticleTabs";
import { useState } from "react";
import PerPage from "./PerPage";
import { ThemContext } from "../../../Routes/ThemProvider";



function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Categories() {
  const [value, setValue] = React.useState(0);
  const [article, loading] = useArticle();
  const subArticle = article.filter(item => item.status === "approved");
  // console.log(article)

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(6)

  // get current page
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = subArticle.slice(indexOfFirstPost, indexOfLastPost)


  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const technology = currentPost?.filter(item => item.category === "Technology");
  const marketing = subArticle.filter(item => item.category === "Marketing");
  const social = subArticle.filter(item => item.category === "Social");
  const writing = subArticle.filter(item => item.category === "Writing");
  const business = subArticle.filter(item => item.category === "Business");
  const travel = subArticle.filter(item => item.category === "Travel");
  const culture = subArticle.filter(item => item.category === "Culture");
  const society = subArticle.filter(item => item.category === "Society");
  const life = subArticle.filter(item => item.category === "Life");
  const history = subArticle.filter(item => item.category === "History");
  const religion = subArticle.filter(item => item.category === "Religion");
  const cryptocurrency = subArticle.filter(item => item.category === "Cryptocurrency");
  const education = subArticle.filter(item => item.category === "Education");



  const handleChange = (event, newValue) => {
    // Use the event parameter here if needed
    console.log("Event:", event);
    setValue(newValue);
  };
  const [{ theme }] = React.useContext(ThemContext)

  return (
    <>
      <section className="bg-white" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <Box sx={{ width: "100%" }} >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <div className="text-center mb-5">
              <div className="pt-16">
                <h1 className="font-bold text-2xl md:text-4xl">Discover Trending Topics and Engaging Content</h1>
              </div>
              <h4 className="md:text-xl">Find Inspiration in Our Communitys Favorites</h4>
            </div>
            <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className="text-center">
              <Tabs
                style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
                className="w-full text-center border-none"
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              // aria-label="basic tabs example"
              >

                <Tab style={{ backgroundColor: theme.backgroundColor, color: theme.color }} label="Technology" {...a11yProps(0)} />
                <Tab style={{ backgroundColor: theme.backgroundColor, color: theme.color }} label=" Marketing" {...a11yProps(1)} />
                <Tab style={{ backgroundColor: theme.backgroundColor, color: theme.color }} label="Social Media" {...a11yProps(2)} />
                <Tab style={{ backgroundColor: theme.backgroundColor, color: theme.color }} label="Writing" {...a11yProps(3)} />
                <Tab style={{ backgroundColor: theme.backgroundColor, color: theme.color }} label="Business" {...a11yProps(4)} />
                <Tab style={{ backgroundColor: theme.backgroundColor, color: theme.color }} label="Travel" {...a11yProps(5)} />
                <Tab style={{ backgroundColor: theme.backgroundColor, color: theme.color }} label="Culture" {...a11yProps(6)} />
                <Tab style={{ backgroundColor: theme.backgroundColor, color: theme.color }} label="Society" {...a11yProps(7)} />
                <Tab style={{ backgroundColor: theme.backgroundColor, color: theme.color }} label="Life" {...a11yProps(8)} />
                <Tab style={{ backgroundColor: theme.backgroundColor, color: theme.color }} label="History" {...a11yProps(9)} />
                <Tab style={{ backgroundColor: theme.backgroundColor, color: theme.color }} label="Religion" {...a11yProps(10)} />
                <Tab style={{ backgroundColor: theme.backgroundColor, color: theme.color }} label="Cryptocurrency" {...a11yProps(11)} />
                <Tab style={{ backgroundColor: theme.backgroundColor, color: theme.color }} label="Education" {...a11yProps(12)} />
              </Tabs>
            </div>
          </Box>
          <div className="bg-white" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <TabPanel value={value} index={0}>
              <ArticleTabs
                items={technology}
                loader={loading}
              ></ArticleTabs>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ArticleTabs
                items={marketing}
                loader={loading}
              ></ArticleTabs>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <ArticleTabs
                items={social}
                loader={loading}
              ></ArticleTabs>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <ArticleTabs
                items={writing}
                loader={loading}
              ></ArticleTabs>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <ArticleTabs
                items={business}
                loader={loading}
              ></ArticleTabs>
            </TabPanel>
            <TabPanel value={value} index={5}>
              <ArticleTabs
                items={travel}
                loader={loading}
              ></ArticleTabs>
            </TabPanel>
            <TabPanel value={value} index={6}>
              <ArticleTabs
                items={culture}
                loader={loading}
              ></ArticleTabs>
            </TabPanel>
            <TabPanel value={value} index={7}>
              <ArticleTabs
                items={society}
                loader={loading}
              ></ArticleTabs>
            </TabPanel>
            <TabPanel value={value} index={8}>
              <ArticleTabs
                items={life}
                loader={loading}
              ></ArticleTabs>
            </TabPanel>
            <TabPanel value={value} index={9}>
              <ArticleTabs
                items={history}
                loader={loading}
              ></ArticleTabs>
            </TabPanel>
            <TabPanel value={value} index={10}>
              <ArticleTabs
                items={religion}
                loader={loading}
              ></ArticleTabs>
            </TabPanel>
            <TabPanel value={value} index={11}>
              <ArticleTabs
                items={cryptocurrency}
                loader={loading}
              ></ArticleTabs>
            </TabPanel>
            <TabPanel value={value} index={12}>
              <ArticleTabs
                items={education}
                loader={loading}
              ></ArticleTabs>
            </TabPanel>
          </div>
        </Box>
        <PerPage postPerPage={postPerPage} totalPosts={article.length} paginate={paginate}></PerPage>
      </section>
    </>
  );
}



















