import Image from 'next/image'
import Head from 'next/head'
import loadingImage from '../../../public/images/loading.gif'
import useAuth from "../../data/hook/useAuth";
import router from 'next/router'

export default function ForceAuth(props) {
    const {user, loading} = useAuth()

    function renderContent() {
        return (
            <>
                <Head>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                        if(!document.cookie?.includes("admin-template-auth")) {
                            window.location.href = "/auth"
                        }
                        `
                    }} />
                </Head>
                {props.children}
            </>
        )
    }

    function renderLoading() {
        return (
            <div className={`flex justify-center items-center h-screen`}>
                <Image src={loadingImage} alt='Loading' />
            </div>
        )
    }

    if(!loading && user?.email) {
        return renderContent()
    }
    if (loading) {
        return renderLoading()
    }
    router.push('/auth')
    return null
}
