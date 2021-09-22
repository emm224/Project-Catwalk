import React from 'react';


const SocialShare = (props) => {
  if (!props.selectedStyle) {
    return ''
  }

  let postUrl = encodeURI(props.selectedStyle.photos[0].url);
  let postTitle = encodeURI('Check out this outfit!');

  const shareFb = () => {
    window.open(`https://www.facebook.com/sharer.php?u=${postUrl}`, 'popup','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250'); return false;
  }
  const shareTwitter = () => {
    window.open(`https://twitter.com/share?url=${postUrl}&text=${postTitle}&via=[Team_Orcus]&hashtags=[hashtags]
    `, 'popup','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250'); return false;
  }

  const sharePinterest = () => {
    window.open(`https://pinterest.com/pin/create/bookmarklet/?media=${postUrl}&url=${postUrl}&description=${postTitle}`, 'popup','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250'); return false;
  }

  return (
    <div className='share-btn-container'>
      <div className='facebook-btn'>
        <a target='popup'  onClick={shareFb}>
          <i className='fab fa-facebook'></i>
        </a>
      </div>
      <div className='twitter-btn'>
        <a target='popup' onClick={shareTwitter}>
        <i className='fab fa-twitter'></i>
        </a>
      </div>
      <div className='pinterest-btn'>
        <a target='popup' onClick={sharePinterest}>
        <i className='fab fa-pinterest'></i>
        </a>
      </div>
    </div>
  )
}

export default SocialShare;



// <FacebookShareButton url={props.selectedStyle.photos[0].url} quote={'Check out this outfit piece!'} >
// <FacebookIcon logoFillColor='white' round={true}/>
// </FacebookShareButton>

{/* <a href={`https://www.facebook.com/sharer.php?u=${postUrl}`} target="_blank" rel="noopener noreferrer">
<i className='fab fa-facebook'></i>
</a> */}