import Link from 'next/link'
import useAuth from '../../data/hook/useAuth'

interface UserAvatarProps {
    className?: string
}

export default function UserAvatar(props: UserAvatarProps) {
    const {user} = useAuth()
    return (
        <Link href='/profile'>
            <img
                className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}
                src={user?.urlImage ?? '/images/avatar.svg'}
                alt="Avatar do usuário" />
        </Link>
    )

}
