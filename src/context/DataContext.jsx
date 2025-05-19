import { createContext, useState } from "react"
export const usercontext = createContext(null);
const DataContext = (props) => {
     const [users, setusers] = useState([]);

    const [toggler, settoggler] = useState(true);

  return (
    <div>
      
    </div>
  )
}

export default DataContext
