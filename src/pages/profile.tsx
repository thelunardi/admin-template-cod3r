import Layout from '../components/template/Layout'
import FormInput from '../components/form/FormInput'
import ProfileModel from '../core/ProfileModel'

export default function Profile() {
    const profile = new ProfileModel('Alexandre de Castro', 29, 'alexandre.cl@gmail.com')
    return (
        <Layout title='Perfil' subtitle='Visualize e edite informações do seu perfil'>
            <div className={`flex flex-col justify-items-start items-center w-full mt-10`}>
                <FormInput label='Nome' value={profile.name} disable />
                <FormInput label='Idade' value={profile.age} disable />
                <FormInput label='Email' value={profile.email} disable />
            </div>
        </Layout>
    )
}
