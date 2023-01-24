import React from 'react'

import Button from '@mui/material/Button';


function JobsList({getsingleJob,job}) {
    return (

        <div className='jobslisting' >

            {/* <Button className='apply-button' variant="outlined" onClick={()=>dispatch(jobsActions.changingAppliedInfo(job._id))} > {job.applied? 'Applied' :'Apply'}   </Button> */}

            {/* <Button  className='apply-button'  variant="outlined" onClick={()=>getsingleJob(job)}  > {job.applied? 'Applied' :'Apply'} </Button> */}

            <Button className='apply-button' variant="outlined" onClick={() => getsingleJob(job)}  > {job.applied ? 'Applied' : 'Apply'} </Button>
            {/* <Button  className='apply-button'  variant="outlined" onClick={()=>setApply(!apply)}  > {apply? "Applied":"apply"} </Button> */}

            <h3>{job.jobTitle}</h3>
            <div className='jobslisting-details'>

                <p className='jobslisting-details-list'>{job.location}</p>
                <p className='jobslisting-details-list'>{job.jobType}</p>
                <p className='jobslisting-details-list'>{job.salary}</p>

            </div>


            <p>{job.jobDesc}</p>
            {/* <Button className='apply-button' variant="outlined" onClick={()=>dispatch(jobsActions.decreaseAppliedJobs())}>CancelApply</Button> */}


        </div>
    )
}

export default JobsList