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

const [search, setSearch] = useState("")
 

  const fetchJobsDetails = async () =>{

    const response=await axios.get("http://localhost:5000/api/jobs");
 

    // dispatch(jobsActions.addJobs(response.data))

    setResponse(response.data)
    // console.log(response.data);
 

  }

  const handleinputChange =(e)=>{
    setSearch(e.target.value)
    // console.log(e.target.value);
  }

  useEffect(() => {

      fetchJobsDetails();
    
  }, [])
  

  return (
    <div className='dashboard'>
       <Snapshot response={response}/>
       <MyApplications/>
      <JobsForm handleinputChange={handleinputChange}/>
       <JobsListing search={search} response={response} fetchJobsDetails={fetchJobsDetails}/>  
    </div>
  )
}

export default DashBoard