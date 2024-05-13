import s from './Tabs.module.scss'
import Button from './../button/index'
import { useApplicationContext } from './../../context/Context';

const TabsSelect = () => {

  const {tab, setTab} = useApplicationContext()


  return (
    <div className={s.tabs}>
        <Button active={tab === 'movie'} onClick={() => setTab('movie')}>Movies</Button>
        <Button active={tab === 'tv'} onClick={() => setTab('tv')}>Shows</Button>
    </div>
  )
}

export default TabsSelect