import Layout from '../components/Layout'
import { skills, projects } from '../profile'
import 'bootswatch/dist/darkly/bootstrap.min.css'
import { Card } from '../components/Card'

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
      <div id='conocimientos' className="row p-2">
        <div className="col-md-4 mt-2">
          <div className="card bg-light text-center text-dark">
            <div className="card-body">
              <h3>Conocimientos</h3>
              {skills.map(({ id, skill, percentage }) => (
                <div className="py-3" key={id}>
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
          <div className="card bg-light text-dark">
            <div className="card-body text-center">
              <h3>Proyectos</h3>
              <div className="row py-3">
                {projects.map(({ name, description, image, alt, link, github }, index) =>
                  <div className="col-md-4 p-2 ">
                    <div key={index}>
                      <Card name={name} description={description} image={image} alt={alt} link={link} github={github} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </Layout>
  )
}
