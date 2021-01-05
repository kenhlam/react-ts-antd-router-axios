import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'



import MainLayout from '@/layouts/mainLayout'

const App: React.FC = () => {
 
  return (
    <Router>
    
        <Switch>
         
          <Route path='/' component={MainLayout}/>
        </Switch>
  
    </Router>
  )
}

export default App
