import React from 'react'
import axios from 'axios'
import { useEffect,useState} from 'react';
import { connect } from 'react-redux';
const token = localStorage.token;
const assigned_user = localStorage.user;
const company_id = localStorage.company
const url =`https://stage.api.sloovi.com/team?product=outreach&company_id=<${company_id}>`;
const url1 = `https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=<${company_id}>`;
const singleTask=`https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691/<task_id_from_previous_test>?company_id=<${company_id}>`
function Task() {
  const [task_msg, settask_msg] = useState('')
  const [task_time, settask_time] = useState('')
  const [task_date, settask_date] = useState('')
  const [task,settask]=useState([])
  useEffect(() => {
    axios.get(url, {
      headers:
      {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((res) => {
       console.log(res)
      })});
      axios.get(url1, {
        headers:
        {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then((res) => {
         console.log(res)
        })
    function addTask(details){
      axios.post(url1, details,{
        headers:
        {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then((res) => {
         console.log(res)
        })
    }
  return (
    <>
    <div className='menu'>
      <div className='man'></div>
      <div className='main col-3 mt-5 mx-5 border'>
        <div className='px-2 bg-white p-2'>TASK</div>
        <div className='flex-column '>
          <label htmlFor="" className='p-2'>Task Description</label>
          <div className='d-flex '>
            <input className='con form-control' onChange={(e)=>settask_msg(e.target.value)} value={task_msg}  type="text" placeholder='Follow up' />
          </div>
        </div>
        <div className='d-flex '>
          <div className='flex-column'>
            <label htmlFor="" className=''>Date</label><br />
            <input onChange={(e)=>settask_date(e.target.value)} value={task_date}  className='con form-control' type="date" />
          </div>
          <div className='flex-column mx-2' >
            <label htmlFor="" className=''>Time</label><br />
            <input onChange={(e)=>settask_time(e.target.value)} value={task_time}  className='con form-control' type="time" />
          </div>
        </div>
        <div className='flex-column '>
          <label htmlFor="" className='p-1'>Assign User</label>
          <div className=''>
            <input className='con form-control' value={assigned_user} type="number" placeholder='Prem Kumar' />
          </div>
        </div>
        <div class="d-grid gap-2 p-4 d-md-flex justify-content-md-end">
          <button class="btn me-md-2" type="button">Cancel</button>
          <button class="btn btn-success" onClick={()=>addTask({task_date,task_msg,task_time,assigned_user})}  type="button">Save</button>
        </div>
      </div>
      </div>
       

    </>
  )
}
const mapDispatch =(dispatch)=>{
  return {
    deletePost: (id)=>{dispatch({type: 'DELETE_TASK',id:id})}
  }
}
export default connect(mapDispatch)(Task)