import React ,{useState} from 'react'
// import { useDispatch, useSelector } from "react-redux"
import "./Snapshot.css"
function Snapshot() {
    // const Dispatch = useDispatch();
    // const jobsCount = useSelector(state => state.JobsCount);

    // console.log("from snapshot",jobsCount.allJobs);

    const [allJobs, setAllJobs] = useState(100)
    const [eligibleJobs, setEligibleJobs] = useState(20)
    const [appliedJobs, setAppliedJobs] = useState(20)

    return (

        <>
            <h3>Snapshot</h3>
            <div className='snapshot'>
                <div className='snapshot-alljobs'>
                    <p>All Jobs</p>
                    <p>{allJobs}</p>

                </div>

                <div className='snapshot-eligibleJobs'>
                    <p>Eligible Jobs</p>
                    <p>{eligibleJobs}</p>

                </div>

                <div className='snapshot-appliedJobs'>
                    <p>Applied Jobs</p>
                    <p>{ appliedJobs}</p>

                </div>

            </div>

        </>


    )
}

export default Snapshot