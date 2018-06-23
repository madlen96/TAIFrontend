// import * as React from 'react';
//
// interface MovieFoundItem {
//     id: string;
//     title: string;
// }
//
// interface MovieFoundState {
//     movies: Array<MovieFoundItem>;
//     error: string;
// }
//
// class MovieFound extends React.Component<MovieFoundState> {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             movies: [],
//             isLoading: false,
//             error: ''
//         };
//     }
//
//     async componentDidMount() {
//
//     }
//
//     render() {
//         const {movies, error} = this.state;
//
//         if (isLoading) {
//             return <p>Loading ...</p>;
//         }
//
//         if (error.length > 0) {
//             return <p>Error: {error}</p>;
//         }
//
//         return (
//             <div>
//                 {movies.map((movie: MovieFoundItem) =>
//                     <div key={movie.id}>
//                         <div className="item">
//                             <div className="padder">{movie.id} </div>
//                             {movie.title}<br/>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }
//
// export default MovieFound;