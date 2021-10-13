import {useState} from 'react'
import AuthInput from '../components/auth/AuthInput'
import {WarningIcon} from '../components/icons'
import useAuth from '../data/hook/useAuth'

export default function Auth() {
    const {login, register, googleLogin} = useAuth()
    const [mode, setMode] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    function showError(message, time = 5) {
        setError(message)
        setTimeout(() => setError(null), time * 1000)
    }

    async function submit() {
        try {
            if (mode === 'login') {
                await login(email, password)
            }

            if (mode === 'cadastro') {
                await register(email, password)

            }
        } catch (e) {
            showError(e?.message ?? 'Erro desconhecido')
        }
    }

    return (
        <div className={`flex h-screen justify-center items-center`}>
            <div className={`hidden md:block w-1/2 md:w-1/2 lg:w-2/3`}>
                <img
                    className={`h-screen w-full object-cover`}
                    src="https://source.unsplash.com/random"
                    alt="Login"
                />
            </div>
            <div className={`m-10 w-full md:w-1/2  lg:w-1/3`}>
                <h1 className={`text-3xl font-bold mb-5`}>
                    {mode === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na plataforma'}
                </h1>

                {error ? (<div
                    className={`flex items-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `}>
                    {WarningIcon()}
                    <span className='ml-3'>{error}</span>
                </div>) : false}

                <AuthInput
                    label='Email'
                    type='email'
                    value={email}
                    valueHasChanged={setEmail}
                    required
                />
                <AuthInput
                    label='Senha'
                    type='password'
                    value={password}
                    valueHasChanged={setPassword}
                    required
                />
                <button
                    className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}
                    onClick={submit}
                >
                    {mode === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>
                <hr className={`my-6 border-gray-300 w-full`} />
                <button
                    className={`w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3`}
                    onClick={googleLogin}
                >
                    Entrar com o Google
                </button>

                {mode === 'login' ? (
                    <p className={`mt-8`}>
                        Novo por aqui?
                        <a
                            className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
                            onClick={() => setMode('cadastro')}
                        > Crie uma conta gratuitamente</a>
                    </p>
                ) : (
                    <p className={`mt-8`}>
                        Já faz parte da nossa comunidade?
                        <a
                            className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
                            onClick={() => setMode('login')}
                        > Entre com as suas credenciais </a>
                    </p>
                )}
            </div>
        </div>
    )
}
