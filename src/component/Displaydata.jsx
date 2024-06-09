import React from 'react'
import { useSelector } from 'react-redux'

const Displaydata = () => {
    const data = useSelector((state) =>{
        return state.users;
    })
    console.log(data)
  return (
    <div>

        {
            data.map((val,ind)=>{
                return (
                    <div key={ind}>
                        Data is : {val}
                    </div>
                )
            })
        }
      
    </div>
  )
}

export default Displaydata
