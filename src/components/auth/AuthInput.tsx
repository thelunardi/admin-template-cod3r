interface AuthInputProps {
    label: string
    value: any
    required?: boolean
    render?: boolean
    type?: 'text' | 'email' | 'password' | 'number'
    valueHasChanged: (newValue: any) => void
}

export default function AuthInput(props: AuthInputProps) {
    return props.render ? null : (
        <div className={`flex flex-col mt-4`}>
            <label>{props.label}</label>
            <input
                className={`
                    px-4 py-3 rounded-lg bg-gray-200 mt-2
                    border focus:border-blue-500 focus:outline-none focus:bg-white
                `}
                type={props.type ?? 'text'}
                value={props.value}
                onChange={e => props.valueHasChanged?.(e.target.value)}
                required={props.required}
            />
        </div>
    )
}
