import useAppData from '../../data/hook/useAppData'
import SideMenu from './SideMenu'
import Header from './Header'
import Content from './Content'
import ForceAuth from '../auth/ForceAuth'

interface LayoutProps {
    title: string
    subtitle: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const {theme, changeTheme} = useAppData()
    return (
        <ForceAuth>
            <div className={`${theme} flex h-screen w-screen`}>
                <SideMenu />
                <div className={`
                flex flex-col w-full p-6
                bg-gray-300 dark:bg-gray-800
            `}>
                    <Header title={props.title} subtitle={props.subtitle} />
                    <Content>
                        {props.children}
                    </Content>
                </div>
            </div>
        </ForceAuth>
    )
}
