import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function StreamingService({ name, img, url }) {
    return (
        <div className={'col'} id={`${uuidv4()}`}>
            <div className="card">
                <div className={`d-flex justify-content-center`}>
                    <a href={url}><img className={`img-fluid`} src={process.env.PUBLIC_URL + img} alt={name}/></a>
                </div>

            </div>
        </div>
    );
}

export default StreamingService;