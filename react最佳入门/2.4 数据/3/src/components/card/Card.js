import React,{Component} from 'react';
import PropTypes from 'prop-types';

let propTypes = {
  imgSrc:PropTypes.string,
  name:PropTypes.string.isRequired,
  meta:PropTypes.string,
  desc:PropTypes.string,
  joined:PropTypes.number,
  likeNum:PropTypes.number
}

export default class Card extends Component {
  render() {
    
    let {imgSrc,name,meta,desc,joined,likeNum} = this.props;
    
    return (
      <div className="ui card">
        <div className="image">
          <img src={imgSrc} alt="" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="meta">
            <a href="">{meta}</a>
          </div>
          <div className="description">{desc}</div>
        </div>
        <div className="extra content">
          <span className="right floated">{`Joined in ${joined}`}</span>
          <span><i className="empty heart icon"></i> {`${likeNum} like`}</span>
        </div>
      </div>
    )
  }
}

Card.propTypes = propTypes;
