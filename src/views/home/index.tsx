import Header from "./../../components/layout/header"
import TabsSelect from "./../../components/tabs/index"
import ItemsList from "./../../components/items-list"

const Homepage = () => {
  return (
    <div style={{padding: '20px'}}>
      <Header />
      <TabsSelect />
      <ItemsList />
    </div>
  )
}

export default Homepage
