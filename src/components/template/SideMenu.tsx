import MenuItem from './MenuItem'
import {HomeIcon, LogoutIcon, NotificationIcon, SettingsIcon} from '../icons'
import Logo from './Logo'

export default function SideMenu() {
    return (
        <aside className={`flex flex-col`}>
            <div className={`
                flex flex-col items-center justify-center
                h-20 w-20
                bg-gradient-to-r from-indigo-500 to-purple-800
            `}>
                <Logo />
            </div>
            <ul className={`flex-grow`}>
                <MenuItem url='/' text='Home' icon={HomeIcon} />
                <MenuItem url='/settings' text='Settings' icon={SettingsIcon} />
                <MenuItem url='/notifications' text='Notifications' icon={NotificationIcon} />
            </ul>
            <ul>
                <MenuItem
                    className={`text-red-600 hover:bg-red-400 hover:text-white`}
                    onClick={() => console.log('asdas')}
                    text='Sair'
                    icon={LogoutIcon} />
            </ul>
        </aside>
    )
}
