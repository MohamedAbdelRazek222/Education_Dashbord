import React from 'react'

export default function Quiz({title,course,topic,due_to}) {
  return (
    <>
    

    <div  className="quiz"
style={{
  borderBottom: `1px solid gray`,
}}
>
<h5>{title}</h5>
<p style={{ fontSize: `15px`, color: `gray`, padding: `5px` }}>
  Course: {course}
</p>
<p style={{ fontSize: `15px`, color: `gray`, padding: `5px` }}>
  Topic: Unit2: {topic}
</p>
<p style={{ fontSize: `15px`, color: `gray`, padding: `5px` }}>
  Due to: {due_to} PM
</p>
<button>Start Quiz</button>
</div>




    
    </>
  )
}
