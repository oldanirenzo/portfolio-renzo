import React from 'react'

export const Card = (props) => {

    const handlerLink = () => (
        <a href={props.link} />
    )


    return (
        <div>
            <div className="card bg-primary text-light h-100">
                <div className="overflow">
                    <img src={`/images/${props.image}`} alt={props.alt} className='card-img-top img-fluid' style={{ minHeight: '200px', maxHeight: '200px' }} />
                </div>
                <div className="card-body h-auto">
                    <h4>
                        {props.name}
                    </h4>
                    <div className="card-text">
                        {props.description}
                    </div>
                    {props.link != '' &&
                        <a href={props.link} target='_blank'>
                            <button type="button" className="btn btn-outline-warning">Visitame</button>
                        </a>}

                    {props.github != '' && 
                    <a href={props.github} target='_blank'>
                        <button type="button" className="btn btn-outline-dark">Repositorio</button>
                        </a>}
                </div>
            </div>
        </div >
    )
}
