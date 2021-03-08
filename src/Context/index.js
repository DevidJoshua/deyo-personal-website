import React from 'react'


export const MyContext = React.createContext()
 function Context(props) {
    const [isDay,setIsDay] = React.useState(true)
    const myState={
        isDay,setIsDay
    }
    return (
        <MyContext.Provider value={myState}>
            {(props.children)}
        </MyContext.Provider>
    )
}
export default Context