import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useArticle from "../../../Hooks/useArticle";
import ArticleTabs from "./ArticleTabs";



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
  // console.log(article)



  const technology = article.filter( item => item.category === "Technology" );
  const marketing = article.filter( item => item.category === "Marketing" );
  const social = article.filter( item => item.category === "Social" );
  const writing = article.filter( item => item.category === "Writing" );
  const business = article.filter( item => item.category === "Business" );
  const travel = article.filter( item => item.category === "Travel" );
  const culture = article.filter( item => item.category === "Culture" );
  const society = article.filter( item => item.category === "Society" );
  const life = article.filter( item => item.category === "Life" );
  const history = article.filter( item => item.category === "History" );
  const religion = article.filter( item => item.category === "Religion" );
  const cryptocurrency = article.filter( item => item.category === "Cryptocurrency" );
  const education = article.filter( item => item.category === "Education" );



  const handleChange = (event, newValue) => {
    // Use the event parameter here if needed
    console.log("Event:", event);
    setValue(newValue);
  };
  

  return (
    <section className="">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <div className="text-center bg-white pb-5">
            <div className="md:pt-16 pt-5">
              <h1 className="font-bold text-2xl md:text-4xl">Popular Article Section</h1>
            </div>
            <h4 className="">Let’s See What’s New</h4>
          </div>
          <div className="bg-white">
            <Tabs
              className="w-full text-center border-none"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              // aria-label="basic tabs example"
            >
              <Tab label="Technology" {...a11yProps(0)} />
              <Tab label=" Marketing" {...a11yProps(1)} />
              <Tab label="Social Media" {...a11yProps(2)} />
              <Tab label="Writing" {...a11yProps(3)} />
              <Tab label="Business" {...a11yProps(4)} />
              <Tab label="Travel" {...a11yProps(5)} />
              <Tab label="Culture" {...a11yProps(6)} />
              <Tab label="Society" {...a11yProps(7)} />
              <Tab label="Life" {...a11yProps(8)} />
              <Tab label="History" {...a11yProps(9)} />
              <Tab label="Religion" {...a11yProps(10)} />
              <Tab label="Cryptocurrency" {...a11yProps(11)} />
              <Tab label="Education" {...a11yProps(12)} />
            </Tabs>
          </div>
        </Box>
        <div className="">
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
    </section>
  );
}



















