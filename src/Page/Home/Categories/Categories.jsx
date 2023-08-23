import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from "@fortawesome/free-solid-svg-icons";



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
  const [article, setArticle] = useState([]);

  React.useEffect(() => {
    fetch("https://premium-articles-platform-sever.vercel.app/article")
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, []);

  const handleChange = (event, newValue) => {
    // Use the event parameter here if needed
    console.log("Event:", event);
    setValue(newValue);
  };
  

  return (
    <div className="">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <div className="text-center mb-5">
            <div className="pt-16">
              <h1 className="font-bold text-4xl px-4">Popular Article Section</h1>
            </div>
            <h4 className="px-4">Let’s See What’s New</h4>
          </div>
          <div className="text-center">
            <Tabs
              className="w-full text-center border-none"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              // aria-label="basic tabs example"
            >
              <Tab label="Social Media" {...a11yProps(0)} />
              <Tab label=" Marketing" {...a11yProps(1)} />
              <Tab label="Technology" {...a11yProps(2)} />
              <Tab label="Writing" {...a11yProps(3)} />
              <Tab label="Business" {...a11yProps(4)} />
              <Tab label="Politics" {...a11yProps(5)} />
              <Tab label="Culture" {...a11yProps(6)} />
              <Tab label="Facebook" {...a11yProps(7)} />
              <Tab label="Life" {...a11yProps(8)} />
              <Tab label="History" {...a11yProps(9)} />
              <Tab label="Society" {...a11yProps(10)} />
              <Tab label="Art" {...a11yProps(11)} />
              <Tab label="Music" {...a11yProps(12)} />
              <Tab label="Travel" {...a11yProps(13)} />
              <Tab label="Life Lessons" {...a11yProps(14)} />
            </Tabs>
          </div>
        </Box>
        <div className=" bg-white">
          <TabPanel value={value} index={0}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {article.map((blog) => (
                <div key={blog.id}>
                  <div>
                    <div className="card card-compact bg-base-100 shadow-x">
                      <figure className="">
                        <img
                          className=" bg-cover md:h-64 w-full bg-center rounded-xl"
                          src={blog.image}
                          alt="image"
                        />
                      </figure>
                      <div className="card-body">
                        <div className="flex justify-between pb-3">
                          <div className="flex items-center">
                            <div>
                              <img
                                className="rounded-full w-14"
                                src={blog.authorImage}
                                alt="author"
                              />
                            </div>
                            <div className=" px-3 leading-6">
                              <p className="font-bold">
                                {blog.authorName}
                              </p>
                              <p className="text-neutral-500 text-sm">
                                {blog.date}
                              </p>
                            </div>
                          </div>
                          <div className="px-3 ">
                            <span className="text-neutral-500 pr-2 text-">
                              {blog.readTime} min read
                            </span>
                            <button >
                              <FontAwesomeIcon
                                className="hover:text-blue-400 text-slate-600 text-xl"
                                icon={faBookmark}
                              />
                            </button>
                          </div>
                        </div>
                        <h2 className="card-title text-xl font-bold py-3">
                          {blog.title}
                        </h2>
                        <p className="py-1 text-xl">#beginners #programming</p>
                        <a
                          className="pb-2 text-indigo-600 font-bold"
                        >
                          Mark as read
                        </a>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* map  */}
            </div>
          </TabPanel>
        </div>
      </Box>
    </div>
  );
}



















