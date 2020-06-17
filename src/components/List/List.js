import React from 'react'

let movies = ['Ghostbusters', 'Back to the Future', 'Scott Pilgrim vs. The World', 'Hot Fuzz', 'La La Land', 'Spider-Man: Into The Spider-Verse', 'It Follows', 'Your Name.', 'The Social Network', 'Shaun of the Dead']

const List = () => {
    return (
        <div className="card col-sm-6" style={{ maxWidth: '18rem' }}>
        <ol className="list-group list-group-flush">
            {
                movies.map(movie => <li className="list-group-item">{movie}</li>)
            }
        </ol>
    </div>
    )
}

export default List