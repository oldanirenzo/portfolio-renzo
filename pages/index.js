import Layout from '../components/Layout'
import { skills, projects } from '../profile'

export default function Home() {
  return (
    <Layout>
      {/* Header */}
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark ">
            <div className="row">
              <div className="col-md-4">
                <img src='/images/fotoPerfil.jpg' alt="Imagen perfil Renzo" className='img-fluid' />
              </div>
              <div className="col-md-8">
                <h1>
                  Renzo Oldani
                  </h1>
                <h3>Developer</h3>
                <p className='h5'>
                  <br />
                Entré al mundo de la programación en el 2018, realizando el curso de 'Aprendiendo a programar' que se dicta
                en la UTN, desde entonces estoy cursando la Tecnicatura Universitaria en Programación, y me encuentro a punto de graduarme.</p>
                <hr />
                <p className='h5'>Tengo una personalidad tranquila, me gusta resolver desafíos y expandir mis conocimientos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Skills y Proyectos */}
      {/* Skills */}
      <div id='conocimientos' className="row py-2">
        <div className="col-md-4 mt-2">
          <div className="card bg-light text-center text-dark h-100">
            <div className="card-body ">
              <h3><b>Conocimientos</b></h3>
              {skills.map(({ id, skill, percentage }) => (
                <div className="py-4 mt-2" key={id}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div className="progress-bar-striped bg-warning" role="progressbar" style={{ width: `${percentage}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Projects */}

        <div id='proyectos' className="col-md-8 mt-2">
          <div className="card bg-light text-dark  h-100">
            <div className="card-body text-center">
              <h3><b>Proyectos</b></h3>
              <div className="row py-3">
                {projects.map(({ id, name, description, image, alt, link, github }) =>
                  <div className="col-md-4 p-2 " key={id}>
                    <div className="card bg-primary text-light h-100">
                      <div className="overflow">
                        <img src={`/images/${image}`} alt={alt} className='card-img-top' style={{ height: '250px' }} />
                      </div>
                      <div className="card-body ">
                        <h4>
                          {name}
                        </h4>
                        <div className="card-text">
                          {description}
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-6 m-0">
                          {link != '' &&
                            <a href={link} target='_blank'>
                              <button type="button" className="btn btn-outline-warning">Visitame</button>
                            </a>}

                        </div>
                        <div className="col-6 m-0">
                          {github != '' &&
                            <a href={github} target='_blank'>
                              <button type="button" className="btn btn-outline-dark">Repo</button>
                            </a>}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}
