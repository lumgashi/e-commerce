import React,{useState,useEffect} from 'react'
import '../../styles/clock.css'

const Clock = () => {


      const [days, setDays] = useState()
      const [hours, setHours] = useState()
      const [min, setMin] = useState()
      const [sec, setSec] = useState()

      let interval;

      const countDown = () => {
            const destination = new Date('Jan 19, 2023').getTime();
            interval = setInterval(()=> {
                 const now = new Date().getTime();
                 const different = destination - now;
                 const days = Math.floor(different / (1000*60*60*24))
                 
                 const hours  = Math.floor(different % (1000*60*60*24) / (1000*60*60));

                 const minutes = Math.floor(different % (1000*60*60) / (1000*60));

                 const sec = Math.floor(different % (1000*60) / 1000 );

                 if(destination < 0) clearInterval(interval.current);
                 else{
                  setDays(days);
                  setHours(hours);
                  setMin(minutes);
                  setSec(sec);
                 }
            })
      }

      useEffect(() => {
            countDown();
      })

  return (
    <div className="clock__wrapper d-flex align-itens-center gap-5 mb-4">
      <div className="clock_data d-flex align-itens-center gap-4">
            <div className='text-center'>
                  <h1 className='text-white fs-3'>{days}</h1>
                  <h5 className='text-white fs-6'>Days</h5>
            </div>
            <span className='text-white fs-1'>:</span>
      </div>

      <div className="clock_data d-flex align-itens-center gap-4">
            <div className='text-center'>
                  <h1 className='text-white fs-3'>{hours}</h1>
                  <h5 className='text-white fs-6'>Hours</h5>
            </div>
            <span className='text-white fs-1'>:</span>
      </div>

      <div className="clock_data d-flex align-itens-center gap-4">
            <div className='text-center'>
                  <h1 className='text-white fs-3'>{min}</h1>
                  <h5 className='text-white fs-6'>Minutes</h5>
            </div>
            <span className='text-white fs-1'>:</span>
      </div>


      <div className="clock_data d-flex align-itens-center gap-4">
            <div className='text-center'>
                  <h1 className='text-white fs-3'>{sec}</h1>
                  <h5 className='text-white fs-6'>Sec</h5>
            </div>
      </div>

    </div>
  )
}

export default Clock