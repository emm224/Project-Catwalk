import React from 'react';

function SearchHighlight(props) {
  const { query, body } = props
  const Query = query.toLowerCase()
  const Body = body.toLowerCase()
  const marked = body.substring(Body.indexOf(Query), Body.indexOf(Query) + query.length)

  return (
    <span>
      {body.substring(0, Body.indexOf(Query))}
      {' '}
      <mark>{marked}</mark>
      {' '}
      {body.substring(Body.indexOf(Query) + query.length)}
    </span>
  )
}

export default SearchHighlight;