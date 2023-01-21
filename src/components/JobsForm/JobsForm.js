import React from 'react'
import "./JobsForm.css"
import Button from '@mui/material/Button';
// import JobsListing from '../JobsListing/JobsListing';
// import JobsListing from '../JobsListing/JobsListing';


function JobsForm() {
  // const [industry, setfirst] = useState(second)
    return (
        <div>
            <h2>All Jobs</h2>

            <div>
                <input type="text" placeholder='Title,Client,Location' className='input' />
                <Button variant="contained">Search</Button>

            </div>

            <div className='jobsform-options'>
              <select name="allJobs" className='jobsform-options-select'>
                <option value="All Jobs">All Jobs</option>                
              </select>

              <select name="allJobs" className='jobsform-options-select'>
                <option value="industry">Industry</option>  
                <option value="industry">Software</option> 
                <option value="industry">Management</option>           
              </select>


              <select name="allJobs" className='jobsform-options-select'>
                <option value="location">Location</option> 
                <option value="">Bangalore</option>
                <option value="">Hyderabad</option>
                <option value="">Mumbai</option>  
                <option value="">Chennai</option>               
              </select>


              <select name="allJobs" className='jobsform-options-select'>
                <option value="jobType">Job Type</option>                
                <option value="">Full time</option>
                <option value="">Part time</option>
                <option value="">Remote</option>
              </select>

              <select name="allJobs" className='jobsform-options-select'> 
                <option value="postedDate">Posted Date</option>                
              </select>
            </div>
            
           {/* <JobsListing/> */}

        







        </div>
    )
}

export default JobsForm