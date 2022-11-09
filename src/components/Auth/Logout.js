import Button from "../UI/Button"
import Card from "../UI/Card"

const Logout = props => {
  return (
    <Card>
      <h1>Logout</h1>
      <Button onClick={props.onLogout}>Log out</Button>
    </Card>
  )
}

export default Logout