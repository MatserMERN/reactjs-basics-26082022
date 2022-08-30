import React, { useState } from 'react'

const HookWithObject = () => {
    const [user, setUser] = useState({firstName: '', lastName: ''})

  return (
    <div>
        <form>
            <div>
                <label>FirstName</label>
                <input type="text" 
                       value={user.firstName} 
                       className="form-control w-50"
                       onChange={(event) => setUser({...user, firstName: event.target.value})}
                />
            </div>
            <br />
            <div>
                <label>LastName</label>
                <input type="text" 
                       value={user.lastName} 
                       className="form-control w-50"
                       onChange={(event) => setUser({...user, lastName: event.target.value})}
                />
            </div>
            <br />
            <h2>Your FirstName is :  {user.firstName}</h2>
            <h2>Your LastName is  : {user.lastName}</h2>
        </form>
    </div>
  )
}

export default HookWithObject