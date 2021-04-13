import Layout from '../components/Layout';

const contacto = () => {
    return (
        <Layout footer={false} dark={false}>

            <div className="row">
                <div className="col-md-4 p-3">
                    <div className="card card-body bg-dark text-center text-light">
                        <img src='/images/fotoPerfil.jpg' alt="Avatar Renzo" className='card-img-top' />
                        <h1>Renzo Oldani</h1>
                        <h5>Estudiante de programación en la UTN FRM, 25 años.</h5>
                        <a
                            href='https://github.com/oldanirenzo'
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
                        <h5>+54 261-6324756</h5>
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
                        <h5>oldanirenzo@gmail.com</h5>
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

export default contacto