import React from 'react';
import { Link, Head } from '@inertiajs/react';


export default function Homepage(props) {
    console.log(props)
    return (
        <div>
            <Head title={props.title} />
            <h1>{props.description}</h1>
            {props.news ? props.news.map((data, i) => {
                return (
                    <div key={i}>
                        <h1>{data.title}</h1>
                        <br />
                        <h5>{data.description}</h5>

                        <h3>{data.category}</h3>
                        <br />
                        <h4>{data.author}</h4>
                        <br />
                    </div>
                )
            }) : <p>Belum ada berita terbaru</p>
            }
        </div>
    )
};
