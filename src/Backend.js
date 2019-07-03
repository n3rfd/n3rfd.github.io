import React from 'react';
import Skill from './Skill'

export default (props) => {
  return (
    <div>
        <h1 className="c0" id="h.tk8mdbfq6hvl">
            <span className="c4">Back-End Stack</span>
        </h1>
        <Skill skills={props.skills}/>
    </div>
  )
}
