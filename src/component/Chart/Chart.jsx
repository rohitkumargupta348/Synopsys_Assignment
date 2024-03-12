import React from 'react'
import './chart.css'
import UpdateChart from '../Graph/LineGraph';

function Chart(props) {

  // const val = props.option;

  // console.log(props.val);

  return (
    <div className='chart'> 
      <UpdateChart selectedChart = {props.option} type={props.val}/>
    </div>
  )
}

export default Chart