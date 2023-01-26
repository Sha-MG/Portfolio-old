function listTimeline(timeNode) {
  return (
    <li className='work'>
    <input className='radio' id={timeNode.name} name='works' type='radio'/>
    <div className="relative">
      <label htmlFor={timeNode.name}>{timeNode.name}</label>
      <span className='date'>{timeNode.date}</span>
      <span className='circle'></span>
    </div>
    <div className='content'>
      <p>
      {timeNode.description}
      </p>
    </div>
  </li>
  )
}


export default listTimeline
