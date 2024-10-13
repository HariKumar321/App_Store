// Write your code here
import './index.css'

const TabItem = props => {
  const {isActive, eachObj, clickTabItem} = props
  const {tabId, displayText} = eachObj

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activateTabBtn = isActive ? 'active-tab-btn' : ''

  return (
    <li className="each-tab">
      <button
        onClick={onClickTabItem}
        type="button"
        className={`tab-btn ${activateTabBtn}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
