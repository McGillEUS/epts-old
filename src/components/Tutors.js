import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import defilia from '../images/Defilia.jpg';
import itai from '../images/Itai.jpg';
import judy from '../images/Judy.jpg';
import dylan from '../images/Dylan.jpg';
import nabila from '../images/Nabila.jpg';
import salar from '../images/Salar.jpg';
import sinan from '../images/Sinan.jpg';
import greg from '../images/Greg.jpg';
import hansen from '../images/Hansen.jpg';



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 550,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

 const tileData = [
   {
     img: defilia,
     title: 'Image',
     author: 'author',
   },
   {
    img: itai,
    title: 'Image',
    author: 'author',
  },
  {
    img: judy,
    title: 'Image',
    author: 'author',
  },
  {
    img: dylan,
    title: 'Image',
    author: 'author',
  },
  {
    img: nabila,
    title: 'Image',
    author: 'author',
  },
  {
    img: salar,
    title: 'Image',
    author: 'author',
  }
 ]
function Tutors(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={280} className={classes.gridList}>
        <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon} onClick={() => alert('aaa')}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Tutors.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tutors);