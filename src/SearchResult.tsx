// import * as React from 'react';
// import Movie from './MovieList';
// import MovieListState from './MovieList';
//
// interface SearchResultProps {
//     query: '';
// }
//
// class SearchResult extends React.Component<SearchResultProps, MovieListState> {
//
//     constructor(props: SearchResultProps) {
//         super(props);
//         this.getResults = this.getResults.bind(this);
//         this.state = {
//             query: this.props.query,
//             movies: [],
//             isLoading: false,
//             error: ''
//         };
//     }
//
//
//     async componentDidMount(){
//         if (this.state.query) {
//             this.getResults();
//         }
//     }
//
//
//     getResults() {
//         this.setState({isLoading: true});
//         axios.get('http://localhost:8080/search', {
//             params: {
//                 query: this.state.query
//             }
//         })
//             .then( response => {
//                 this.setState({
//                     results: response.data.results,
//                     isLoading: false
//                 });
//             });
//     }
//
//     // async componentDidMount() {
//     //     this.setState({isLoading: true});
//     //
//     //     try {
//     //         const response = await fetch('http://localhost:8080/search', {
//     //             headers: {
//     //                 Authorization: 'Bearer ' + await this.props.auth.getAccessToken()
//     //             }
//     //         });
//     //         const data = await response.json();
//     //         this.setState({movies: data, isLoading: false});
//     //     } catch (err) {
//     //         this.setState({error: err});
//     //     }
//     //
//     // }
//
//     render() {
//         const {query, results, isLoading, error} = this.state;
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
//                 <h2>Result:</h2>
//                 {results.map((movie: Movie) =>
//                     <div key={movie.id}>
//                         <div className="item">
//                             <div className="results"><img src={movie.posterPath} /> </div>
//                             {movie.title}<br/>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }
//
// export default SearchResult;