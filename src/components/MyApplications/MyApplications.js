import React , {useState} from 'react'
import "./MyApplications.css"
// import { useDispatch, useSelector } from "react-redux"


function MyApplications() {
    // const Dispatch = useDispatch();
    // const jobsCount = useSelector(state => state.JobsCount);

   const [shortlisted, setShortlisted] = useState(10)
   
   const [interviewing, setInterviewing] = useState(3)
   
   const [rejected, setRejected] = useState(4)
   const [offerReceived, setOfferReceived] = useState(5)


  return (
    <>
     <h3>My Applications</h3>
            <div className='myapplications'>
                <div className='myapplications-shortlisted'>
                    <p>Shortlisted</p>
                    <p>{shortlisted}</p>

                </div>

                <div className='myapplications-interviewing'>
                    <p>Interviewing</p>
                    <p>{interviewing}</p>

                </div>

                <div className='myapplications-rejected'>
                    <p>Rejected</p>
                    <p>{rejected}</p>

                </div>

                <div className='myapplications-offerReceived'>
                    <p>Offer Received</p>
                    <p>{offerReceived}</p>

                </div>

            </div>
    </>
  )
}

export default MyApplications