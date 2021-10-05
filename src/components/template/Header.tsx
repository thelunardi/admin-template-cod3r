import Title from './Title'

interface HeaderProps {
    title: string
    subtitle: string
    children?: any
}

export default function Header(props: HeaderProps) {
    return (
        <div>
            <Title title={props.title} subtitle={props.subtitle} />
        </div>
    )
}
