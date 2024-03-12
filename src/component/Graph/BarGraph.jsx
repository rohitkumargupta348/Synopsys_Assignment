// import React from 'react'
// import ReactECharts from 'echarts-for-react';
// import './graph.css';

// const BarGraph = (props) => {

//   const open = {
//     grid: { top: 8, right: 8, bottom: 24, left: 36 },
//     xAxis: {
//       type: 'category',
//       data: ['time'],
//     },
//     yAxis: {
//       type: 'value',
//     },
//     series: [
//       {
//         data: [55717.47, 55768.94, 55691.79, 55777.86, 55803.5, 55690.64, 55624.69,55651.82, 55688.08,],
//         type: 'bar',
//         smooth: true,
//       },
//     ],
//     tooltip: {
//       trigger: 'axis',
//     },
//   };

//   const high = {
//     grid: { top: 8, right: 8, bottom: 24, left: 36 },
//     xAxis: {
//       type: 'category',
//       data: ['time'],
//     },
//     yAxis: {
//       type: 'value',
//     },
//     series: [
//       {
//         data: [55723, 55849.82, 55793.15, 55777.86, 55823.88, 55822.91, 55713.02, 55675.92,55730.21,],
//         type: 'bar',
//         smooth: true,
//       },
//     ],
//     tooltip: {
//       trigger: 'axis',
//     },
//   };

//   const low = {
//     grid: { top: 8, right: 8, bottom: 24, left: 36 },
//     xAxis: {
//       type: 'category',
//       data: ['time'],
//     },
//     yAxis: {
//       type: 'value',
//     },
//     series: [
//       {
//         data: [55541.69, 55711.74, 55691.79, 55677.92, 55773.08, 55682.56,55624.63,55621.58, 55641.4,],
//         type: 'bar',
//         smooth: true,
//       },
//     ],
//     tooltip: {
//       trigger: 'axis',
//     },
//   };

//   const close = {
//     grid: { top: 8, right: 8, bottom: 24, left: 36 },
//     xAxis: {
//       type: 'category',
//       data: ['time'],
//     },
//     yAxis: {
//       type: 'value',
//     },
//     series: [
//       {
//         data: [55541.69, 55717.47, 55768.94, 55691.79, 55777.86, 55803.5,55690.64,55624.69, 55651.82,],
//         type: 'bar',
//         smooth: true,
//       },
//     ],
//     tooltip: {
//       trigger: 'axis',
//     },
//   };

//   const volume = {
//     grid: { top: 8, right: 8, bottom: 24, left: 36 },
//     xAxis: {
//       type: 'category',
//       data: ['time'],
//     },
//     yAxis: {
//       type: 'value',
//     },
//     series: [
//       {
//         data: [2.406734, 0.573458, 3.309904, 0.684934, 0.477225, 5.461717, 0.696311,0.470161, 0.456722,],
//         type: 'bar',
//         smooth: true,
//       },
//     ],
//     tooltip: {
//       trigger: 'axis',
//     },
//   };

//   const chart = props.selectedChart;

//   // console.log(chart);

//   return (
//     <div className='graph'>
//       {(chart=='open')?<ReactECharts option={open}/>:null}
//       {(chart=='high')?<ReactECharts option={high}/>:null}
//       {(chart=='low')?<ReactECharts option={low}/>:null}
//       {(chart=='close')?<ReactECharts option={close}/>:null}
//       {(chart=='volume')?<ReactECharts option={volume}/>:null}
//     </div>
//   )
// }

// export default BarGraph;