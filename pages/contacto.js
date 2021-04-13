import React from 'react'
import Layout from '../components/Layout';

const contacto = ({ user }) => {

    return (
        <Layout footer={false} dark={false}>

            <div className="row h-100">
                <div className="col-md-4 p-3">
                    <div className="card card-body bg-dark text-center text-light">
                        <img src={user.avatar_url} alt="Avatar Renzo" className='card-img-top' />
                        <h1>{user.name}</h1>
                        <p className="card-text">{user.bio}</p>
                        <a
                            href={user.html_url}
                            target="_blank"
                            className="btn btn-outline-success my-2"
                        >
                            Github
                            </a>
                        <a
                            href='https://www.linkedin.com/in/renzo-oldani/'
                            target="_blank"
                            className="btn btn-outline-primary my-2"
                        >
                            LinkedIn
                            </a>
                    </div>
                </div>
                <div className="col-md-4 p-3">
                    <div className="card card-body bg-dark text-center text-light">
                        <img src='/images/whatsapp.jpg' alt="WhatsApp" className='card-img-top' />
                        <h1>WhatsApp</h1>
                        <p className="card-text">+54 261-6324756</p>
                        <a
                            href='https://api.whatsapp.com/send?phone=542616324756'
                            target="_blank"
                            className="btn btn-outline-success my-2"
                        >
                            Enviame un mensaje
                            </a>
                    </div>
                </div>
                <div className="col-md-4 p-3">
                    <div className="card card-body bg-dark text-center text-light">
                        <img src='/images/gmail.jpg' alt="Gmail" className='card-img-top' />
                        <h1>Email</h1>
                        <p className="card-text">oldanirenzo@gmail.com</p>
                        <a
                            href='mailto:oldanirenzo@gmail.com'
                            target="_blank"
                            className="btn btn-outline-success my-2"
                        >
                            Enviame un email
                            </a>
                    </div>
                </div>
            </div>



        </Layout>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch('https://api.github.com/users/oldanirenzo');
    const data = await res.json()
    return {
        props: {
            user: data,
        }
    }
}

export default contacto