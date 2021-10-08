import Layout from '../components/template/Layout'
// import {AppConsumer} from '../data/context/AppContext'
import useAppData from '../data/hook/useAppData'

export default function Notifications() {
    const {theme, changeTheme} = useAppData()
    return (
        <Layout title='Notificações' subtitle='Gerencia de notificações'>
            {/*<AppConsumer>*/}
            {/*    {data => <h3> {data.name}</h3>}*/}
            {/*</AppConsumer>*/}
            <button onClick={changeTheme}>Click</button>
        </Layout>
    )
}
