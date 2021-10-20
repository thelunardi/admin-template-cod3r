import { useState } from 'react'

import Layout from '../components/template/Layout'
import FormInput from '../components/form/FormInput'
import ProfileModel from '../core/ProfileModel'
import Button from '../components/template/Button'

const profile = new ProfileModel('Alexandre de Castro', 29, 'alexandre.cl@gmail.com')

export default function Profile() {
    const [name, setName] = useState(profile.name ?? '')
    const [age, setAge] = useState(profile.age ?? '')
    const [email, setEmail] = useState(profile.email ?? '')

    return (
        <Layout title='Perfil' subtitle='Visualize e edite informações do seu perfil'>
            <div className={`flex flex-col justify-items-start items-center w-full mt-10`}>
                <FormInput label='Nome' value={name} onChanged={setName} />
                <FormInput label='Idade' value={age} type='number' onChanged={setAge} />
                <FormInput label='Email' value={email} type='email' onChanged={setEmail} />
                <Button className='mt-4' color='green'>
                    Salvar
                </Button>
            </div>
        </Layout>
    )
}
