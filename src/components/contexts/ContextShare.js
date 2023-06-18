import React, { createContext, useState } from 'react'
export const addData =  createContext()

function ContextShare({children}) {
    // register data

    const [useradd,setUserAdd] = useState("")
  return (
    <>
    <addData.Provider value={{useradd,setUserAdd}}>
      {children}
    </addData.Provider>
    </>
  )
}

export default ContextShare