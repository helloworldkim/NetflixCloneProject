import React from 'react';

const NewContent = (props) => {
    return (
        <section className='bg-color'>
            <div
            className='container-fluid'
            style={{background: '#181818', flex: 1, height: '2000px'}}
            >
                <div className='row'>
                    <div className='col'>
                        <h1 style={{color: 'white'}}>대세 콘텐츠</h1>
                        <div className='container-fluid'>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewContent;
