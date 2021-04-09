import React from 'react';

const CatList = props => {
  return (
      <div>
        {props.catPics.map(pic => <img src={pic.url} id={pic.id}></img>)}
      </div>
  )
}

export default CatList;