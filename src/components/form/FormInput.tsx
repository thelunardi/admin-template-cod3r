interface FormInputProps {
    label: string
    value: any
    required?: boolean
    render?: boolean
    type?: 'text' | 'email' | 'password'
    disable?: boolean
}

export default function FormInput(props: FormInputProps) {

    return props.render ? null : (
        <div className={`flex flex-grow justify-items items-center mt-4`}>
            <label>{props.label}</label>
            <input
                className={`
                    mx-10 px-4 py-3 rounded-lg bg-gray-200 mt-2 text-gray-800
                    border focus:border-blue-500 focus:outline-none focus:bg-white
                `}
                type={props.type ?? 'text'}
                value={props.value}
                required={props.required}
                disabled={props.disable}
            />
        </div>
    )
}
