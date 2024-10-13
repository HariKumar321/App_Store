// Write your code here
import './index.css'

const AppItem = props => {
  const {eachObj} = props
  const {appName, imageUrl} = eachObj

  return (
    <li className="each-app-list-container">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-name"> {appName} </p>
    </li>
  )
}

export default AppItem
