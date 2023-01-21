import React ,{useEffect,useState} from 'react'
 
// import { useDispatch, useSelector } from "react-redux"
// import { jobsActions } from '../../store/JobsSlice'
 
import JobsForm from '../JobsForm/JobsForm'
import MyApplications from '../MyApplications/MyApplications'
import Snapshot from '../Snapshot/Snapshot'
import JobsListing from '../JobListing/JobListing'
import axios from "axios"
import './DashBoard.css'

function DashBoard() {

//   const dispatch = useDispatch();
//   const data = useSelector(state=>state);

const [response, setResponse] = useState([])
 

  const fetchJobsDetails = async () =>{

    const response=await axios.get("http://localhost:5000/api/jobs");
 

    // dispatch(jobsActions.addJobs(response.data))

    setResponse(response.data)
    // console.log(response.data);
 

  }

  useEffect(() => {

      fetchJobsDetails();
    
  }, [])
  

  return (
    <div className='dashboard'>
       <Snapshot/>
       <MyApplications/>
      <JobsForm/>
       <JobsListing response={response}/>  
    </div>
  )
}

export default DashBoard