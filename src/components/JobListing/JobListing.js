import React from 'react'

import "./JobListing.css"

// import { useDispatch, useSelector } from "react-redux"
// import { jobsActions } from '../../store/JobsSlice'
//  import { jobsCountActions } from '../../store/JobsCountInfoSlice'

import Button from '@mui/material/Button';

function JobsListing({response}) {
    // const data = useSelector(state => state.jobs.jobsArray);

// const dispatch=useDispatch();
    // console.log("Inside job listing:",data);

    //  console.log(data);


    return (
        <div >
            {response.map((job) => {

                return  (
                    <div key={job._id} >

                    <div className='jobslisting' >  
                    
                     {/* <Button className='apply-button' variant="outlined" onClick={()=>dispatch(jobsActions.changingAppliedInfo(job._id))} > {job.applied? 'Applied' :'Apply'}   </Button> */}
                       
                       <Button  className='apply-button'  variant="outlined" >apply</Button>

                        <h3>{job.jobTitle}</h3>
                        <div className='jobslisting-details'>

                            <p className='jobslisting-details-list'>{job.location}</p>
                            <p className='jobslisting-details-list'>{job.jobType}</p>
                            <p className='jobslisting-details-list'>{job.salary}</p>

                        </div>


                        <p>{job.jobDesc}</p>
                        {/* <Button className='apply-button' variant="outlined" onClick={()=>dispatch(jobsActions.decreaseAppliedJobs())}>CancelApply</Button> */}
                     

                    </div>


                  </div>

                )
            }

            )}
        </div>
    )
}

export default JobsListing