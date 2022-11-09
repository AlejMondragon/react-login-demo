import Button from "../UI/Button"
import Card from "../UI/Card"
// import classes from "./Logout.module.css"


const Logout = props => {
  return (
    <Card>
      <h1>Logout</h1>
      <Button onClick={props.onLogout}>Logout</Button>
    </Card>
  )
}

export default Logout