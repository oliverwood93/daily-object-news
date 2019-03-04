import React from 'react'


function TopicSelector({topics}) {
  return (
    <div>
      <select className="topic-selector">
       {topics.map(({slug}) => <option key={slug} value={slug}>{slug}</option>)}
      </select>
    </div>
  )
}


export default TopicSelector

