import React ,{useState,useEffect} from 'react'

import "./JobListing.css"

// import { useDispatch, useSelector } from "react-redux"
// import { jobsActions } from '../../store/JobsSlice'
//  import { jobsCountActions } from '../../store/JobsCountInfoSlice'

import Button from '@mui/material/Button';
import axios from 'axios';
import JobsList from './JobsList';

function JobsListing({response,fetchJobsDetails,search}) {
    // const [jobId, setJobId] = useState()

    const [jobData, setJobData] = useState({
        jobTitle: "",
        location: "",
        jobType : "",
        salary : null,
        applied: true,
        jobDesc: "",
    })

    // const [apply, setApply] = useState(false)
    // const data = useSelector(state => state.jobs.jobsArray);

// const dispatch=useDispatch();
    // console.log("Inside job listing:",data);

    //  console.log(data);

    const getsingleJob =(job)=>{

        
            // console.log(job);
       
        // console.log(job._id);
        // console.log(jobId);

        // const {applied,jobDesc,jobTitle,jobType,location,salar}=job;

        // console.log(applied);
        
     
        // setJobData({...jobData,jobTitle:job.jobTitle,jobType:job.jobType,location:job.location,salary:job.salary,jobDesc:job.jobDesc})

        // console.log(jobData);
        handleJobApplied(job);
    }

    const handleJobApplied = async(job) =>{ 

        // console.log(id);

        try {
             
           
                // console.log(jobId);
                // await axios.put(`http://localhost:5000/api/jobs/${jobId}`,jobData)
                await axios.put(`http://localhost:5000/api/jobs/${job._id}`,{jobTitle:job.jobTitle,jobType:job.jobType,location:job.location,salary:job.salary,jobDesc:job.jobDesc,applied:true})

            setJobData({...jobData, applied:false});
            fetchJobsDetails();

            // console.log(jobData);
         
        } catch (error) {

            console.log(error)        
            
        }

    
        
    }

   

    //  useEffect(  () => {

    //     try {
              
        
    //                   axios.put(`http://localhost:5000/api/jobs/${jobId}`,jobData)
    //                 console.log(jobData);
    //                 setJobData({...jobData, applied:false});
    //                 console.log(jobData);
       
                 
    //             } catch (error) {
        
    //                 console.log(error)        
                    
    //             }
      
    // }, [])
    


    return (
        <div >
            {response.filter((job)=>{
                if(search === ""){
                    return job;
                }
                else if(job.jobTitle.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                    return job;
                }
                else if(job.location.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                    return job;
                }
                else if(job.jobType.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                    return job;
                }
                
            })
            .map((job) => {

                return <JobsList key={job._id} job={job} getsingleJob={getsingleJob}/>

                // return  (
                //     <div key={job._id} >

                //     <div className='jobslisting' >  
                    
                //      {/* <Button className='apply-button' variant="outlined" onClick={()=>dispatch(jobsActions.changingAppliedInfo(job._id))} > {job.applied? 'Applied' :'Apply'}   </Button> */}
                       
                //        {/* <Button  className='apply-button'  variant="outlined" onClick={()=>getsingleJob(job)}  > {job.applied? 'Applied' :'Apply'} </Button> */}

                //        <Button  className='apply-button'  variant="outlined" onClick={()=>getsingleJob(job)}  > {job.applied? 'Applied' :'Apply'} </Button>
                //        {/* <Button  className='apply-button'  variant="outlined" onClick={()=>setApply(!apply)}  > {apply? "Applied":"apply"} </Button> */}

                //         <h3>{job.jobTitle}</h3>
                //         <div className='jobslisting-details'>

                //             <p className='jobslisting-details-list'>{job.location}</p>
                //             <p className='jobslisting-details-list'>{job.jobType}</p>
                //             <p className='jobslisting-details-list'>{job.salary}</p>

                //         </div>


                //         <p>{job.jobDesc}</p>
                //         {/* <Button className='apply-button' variant="outlined" onClick={()=>dispatch(jobsActions.decreaseAppliedJobs())}>CancelApply</Button> */}
                     

                //     </div>


                //   </div>

                // )
            }

            )}
        </div>
    )
}

export default JobsListing