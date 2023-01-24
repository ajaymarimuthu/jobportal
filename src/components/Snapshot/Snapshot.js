import React ,{useState ,useEffect} from 'react'
// import { useDispatch, useSelector } from "react-redux"
import "./Snapshot.css"
function Snapshot({response}) {
    // const Dispatch = useDispatch();
    // const jobsCount = useSelector(state => state.JobsCount);

    // console.log("from snapshot",jobsCount.allJobs);


    const [allJobs, setAllJobs] = useState(0)
    const [eligibleJobs, setEligibleJobs] = useState(0)
    const [appliedJobs, setAppliedJobs] = useState(0)

    // let count=0;

    // console.log(response.length);
    // setAllJobs(response.length)

    let appliedCount=response.filter(element => {

         return element.applied === true
         
        
        
     });

     let count=0;

     response.forEach(element => {

        if(element){
            count++;
        }
        
     });

    

     //  setAppliedJobs(appliedCount.length)

    //  console.log(appliedCount.length);
   

    //  setAppliedJobs(response.length);

    //  useEffect( () => {

    
    // let appliedCount=response.filter(element => {
    //      return element.applied === true        
    //  });
       

    //  setAppliedJobs(appliedCount.length)
     
    //  }, [appliedJobs])
     


    return (

        <>
        
            <h3>Snapshot</h3>
            <div className='snapshot'>
                <div className='snapshot-alljobs'>
                    <p>All Jobs</p>
                    <p>{count}</p>

                </div>

                <div className='snapshot-eligibleJobs'>
                    <p>Eligible Jobs</p>
                    <p>{eligibleJobs}</p>

                </div>

                <div className='snapshot-appliedJobs'>
                    <p>Applied Jobs</p>
                    <p>{appliedCount.length}</p>

                </div>

            </div>

        </>


    )
}

export default Snapshot