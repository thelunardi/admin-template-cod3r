import Title from './Title'
import ChangeThemeButton from './ChangeThemeButton'
import useAppData from '../../data/hook/useAppData'
import UserAvatar from './UserAvatar'

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
            <div  className={`flex flex-grow justify-end items-center`}>
                <ChangeThemeButton theme={theme} changeTheme={changeTheme} />
                <UserAvatar className='ml-3' />
            </div>
        </div>
    )
}
