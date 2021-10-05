import SideMenu from './SideMenu'
import Header from './Header'
import Content from './Content'

interface LayoutProps {
    title: string
    subtitle: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div>
            <Header title={props.title} subtitle={props.subtitle} />
            <SideMenu />
            <Content>
                {props.children}
            </Content>
        </div>
    )
}
