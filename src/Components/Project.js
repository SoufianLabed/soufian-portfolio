import React,{useState, useEffect} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Stack.css';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CircularProgressbar,CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';






import content from '../content';
import { Link } from 'react-scroll';

export default function Project() {


    
  const theme = useTheme();


    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        


            const handleChange = (event, newValue) => {
                setValue(newValue);
            };

            const handleChangeIndex = (index) => {
                setValue(index);
            };

            
          const useStyles = makeStyles({
            root: {
              maxWidth: 345,
            },
            media: {
              height: 140,
            },
          });


      
        return (
          
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={5}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }

      
    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };
    
    function a11yProps(index) {
        return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
        };
    }
    
    const useStyles = makeStyles((theme) => ({
        root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        },
    }));

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
      };
  


      

    
    return (
      <div id="Projects">
          <h1 className="justify-center text-center text-5xl font-dosis font-bold pt-10 pb-10 text-center text-black">Projects</h1>
    <div className="md:mx-56 mt-10" >
     <AppBar position="static" color="red">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab style={{fontWeight:"bold"}} label="React" {...a11yProps(0)} />
          <Tab style={{fontWeight:"bold"}} label="Python" {...a11yProps(1)} />
          <Tab label="HTML / CSS" {...a11yProps(2)} />
          <Tab label="Java" {...a11yProps(3)} />
          <Tab label="Android" {...a11yProps(4)} />
        </Tabs>
        
      </AppBar>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel  value={value} index={0} >
        <div className="md:flex items-center md:justify-start">

          {content.project.links[3].map((tech, index) => (
            <div
              className="p-6"
              key={index}
           
            >

          <Card  className=" w-72 h-96 shadow-2xl font-dosis  ">
          
          <CardActionArea>
              <CardMedia
              component="img"
              alt="Contemplative Reptile"
              className="h-40 "
              image={tech.img}
              title="Contemplative Reptile"
            />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" className="text-center" component="h2">
                {tech.name}
              </Typography>
              <Typography variant="body2" className="text-center" color="textSecondary" component="p">
                {tech.description}
              </Typography>
            </CardContent>
        
          <CardActions className="justify-center items-center ml-auto mr-auto " >
          <a className="inset-x-0 bottom-0" href={tech.git}> <Button size="small" color="primary">
              Git Hub
            </Button></a>

          </CardActions>
        </Card>
          



            </div>

        
          ))}


        </div>
     

        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>

         <div className="md:flex items-center justify-start">





          {content.project.links[1].map((tech, index) => (
            <div
              className="p-8"
              key={index}
          
            >

          <Card  className=" w-72 h-96 shadow-2xl font-dosis  ">

          <CardActionArea>
              <CardMedia
              component="img"
              alt="Contemplative Reptile"            
              image={tech.img}
              title="Contemplative Reptile"
              className="h-40"
            />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" className="text-center" component="h2">
              {tech.name}
              </Typography>
              <Typography variant="body2" className="text-center" color="textSecondary" component="p">
              {tech.description}
              </Typography>
            </CardContent>

          <CardActions className="justify-center items-center ml-auto mr-auto" >
          <a href={tech.git}> <Button size="small" color="primary">
              Git Hub
            </Button></a>

          </CardActions>
          </Card>




            </div>


          ))}


          </div>


          

        </TabPanel>
        

        <TabPanel value={value} index={2} dir={theme.direction}>
        <div className="md:flex items-center justify-start">


          {content.project.links[2].map((tech, index) => (
            <div
              className="p-8"
              key={index}
          
            >

          <Card  className=" w-72 h-96 shadow-2xl font-dosis  ">

          <CardActionArea>
              <CardMedia
              component="img"
              alt="Contemplative Reptile"
              className="h-40 "
              image={tech.img}
              title="Contemplative Reptile"
            />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" className="text-center" component="h2">
              {tech.name}
              </Typography>
              <Typography variant="body2" className="text-center" color="textSecondary" component="p">
                {tech.description}
              </Typography>
            </CardContent>

          <CardActions className="justify-center items-center ml-auto mr-auto" >
          <a href={tech.git}> <Button size="small" color="primary">
              Git Hub
            </Button></a>

          </CardActions>
          </Card>




            </div>


          ))}


          </div>


       
        </TabPanel>

        <TabPanel value={value} index={3} dir={theme.direction}>

        <div className="md:flex items-center justify-start">


{content.project.links[0].map((tech, index) => (
  <div
    className="p-8"
    key={index}

  >

<Card  className=" w-72 h-96 shadow-2xl font-dosis rounded-lg ">

<CardActionArea >
    <CardMedia
    component="img"
    alt="Contemplative Reptile"
    className="h-40 "
    image={tech.img}
    title="Contemplative Reptile"
  />
  </CardActionArea>
  <CardContent>
    <Typography gutterBottom variant="h5" className="text-center" component="h2">
    {tech.name}
    </Typography>
    <Typography variant="body2" className="text-center" color="textSecondary" component="p">
      {tech.description}
    </Typography>
  </CardContent>

<CardActions className="justify-center items-center ml-auto mr-auto" >
<a href={tech.git}> <Button size="small" color="primary">
    Git Hub
  </Button></a>

</CardActions>
</Card>




  </div>


))}


</div>
        
       
          
   
        </TabPanel>

        
        <TabPanel value={value} index={4} dir={theme.direction}>
        
      
                    
          {content.project.links[4].map((tech, index) => (
            <div
              className="p-8"
              key={index}

            >

          <Card  className=" w-72 h-96 shadow-2xl font-dosis rounded-lg ">

          <CardActionArea >
              <CardMedia
              component="img"
              alt="Contemplative Reptile"
              className="h-40 "
              image={tech.img}
              title="Contemplative Reptile"
            />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" className="text-center" component="h2">
              {tech.name}
              </Typography>
              <Typography variant="body2" className="text-center" color="textSecondary" component="p">
                {tech.description}
              </Typography>
            </CardContent>

          <CardActions className="justify-center items-center ml-auto mr-auto b-0" >
          <a href={tech.git}> <Button size="small" color="primary">
              Git Hub
            </Button></a>

          </CardActions>
          </Card>


            </div>


          ))}

   
        </TabPanel>


        
        

      </SwipeableViews>

      </div>
      </div>
  
    );
}
