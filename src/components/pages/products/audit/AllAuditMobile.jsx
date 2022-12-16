import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import TokenIcon from '@mui/icons-material/Token';
import styles from "./allauditMobile.module.css"
import { ListItem, ListItemAvatar, ListItemText, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CustomizedListText = styled(ListItemText)`
  color: white;
  
// font-weight:bold;
  // :hover {
  //   color: rgb(173, 181, 189);
  // }
   & .MuiListItemText-secondary {
                color: rgb(173, 181, 189);
                
              },
`;
export default function AllAuditMobile({title,image,description,contract,nft,audit,date}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <div style={{width:"100%"}}  >

    <Card   className={styles.allauditCardBackground} >
      <CardHeader
      
      className={styles.textGradient}
        avatar={
          <Avatar  onClick={()=>handleNavigate(contract)} sx={{ bgcolor: red[500] }} aria-label="recipe">
         
            
            <GitHubIcon/>
        
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        
        title={title}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={title}
      />
      {/* <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing>
        {/* <IconButton aria-label="contract">
            
          <PlagiarismIcon />
        </IconButton> */}
          <ListItem
          sx={{cursor:"pointer",display:"grid"}}
           onClick={()=>handleNavigate(contract)}
          >
              <ListItemAvatar>
                
                <Avatar
             
                  sx={{
                    border: "1.5px dotted white",
                    backgroundColor: "#0C352D",
                  }}
                >
                <PlagiarismIcon />
                </Avatar>
              
              </ListItemAvatar>
              <CustomizedListText
                primary="Contract"
                
              />
            </ListItem>
          <ListItem sx={{display:"grid"}}>
              <ListItemAvatar
                onClick={()=>handleNavigate(audit)}
          sx={{cursor:"pointer"}}
              
              >
                <Avatar
                  sx={{
                    border: "1.5px dotted white",
                    backgroundColor: "#0C352D",
                  }}
                >
                <DescriptionIcon />
                </Avatar>
              </ListItemAvatar>
              <CustomizedListText
                primary="Audit"
                
              />
            </ListItem>
          <Tooltip title="NFT">
          <ListItem sx={{display:"grid"}}>
              <ListItemAvatar
                onClick={()=>handleNavigate(nft)}
          sx={{cursor:"pointer"}}
              
              >
                <Avatar
                  sx={{
                    border: "1.5px dotted white",
                    backgroundColor: "#0C352D",
                  }}
                >
                <TokenIcon />
                </Avatar>
              </ListItemAvatar>
              <CustomizedListText
                primary="NFT"
                
            />
            </ListItem>
            
            </Tooltip>
        {/* <IconButton aria-label="audit">
          <DescriptionIcon />
        </IconButton> */}
        {/* <IconButton aria-label="nft">
          <TokenIcon />
        </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{color:"white"}}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography className={styles.textGradient} variant='h3' sx={{color:"white",
          // fontFamily:"poppins"
          }}paragraph>{title}</Typography>
          
          <Typography sx={{color:"grey",
          // fontFamily:"open-sans"
          }} paragraph>
            {description}
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}
