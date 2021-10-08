import Title from './Title'
import ChangeThemeButton from './ChangeThemeButton'
import useAppData from '../../data/hook/useAppData'

interface HeaderProps {
    title: string
    subtitle: string
    children?: any
}

export default function Header(props: HeaderProps) {
    const {theme, changeTheme} = useAppData()
    return (
        <div  className={`flex`}>
            <Title title={props.title} subtitle={props.subtitle} />
            <div  className={`flex flex-grow justify-end`}>
                <ChangeThemeButton theme={theme} changeTheme={changeTheme} />
            </div>
        </div>
    )
}
