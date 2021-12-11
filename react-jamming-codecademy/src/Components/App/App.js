import "./App.css";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist"
import Spotify from "../util/Spotify";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResult: [],
			playListName: "New Playlist",
			playListTracks: []
		};
		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
		this.updatePlayListName = this.updatePlayListName.bind(this);
		this.savePlayList = this.savePlayList.bind(this);
		this.search = this.search.bind(this);
	}
	addTrack(track) {
		//check if item exists in saved playlist and negate it
		if (!this.state.playListTracks.some((stateTrack) => {
			return track.id === stateTrack.id;
		})) {
			//if it doesn't exist, update the state
			this.setState((prevState) => prevState.playListTracks.push(track));
		}
	}
	removeTrack(track) {
		let tracks = this.state.playListTracks;
		tracks = tracks.filter(stateTrack => stateTrack.id !== track.id);
		this.setState({playListTracks:tracks})
}
	updatePlayListName(updatedName) {
		this.setState({playlistName: updatedName})
	}
	
	savePlayList() {
		const uriArr = this.state.playListTracks.map(track => track.uri);
		Spotify.savePlaylist(this.state.playListName, uriArr)
			.then(() => {
				this.setState({
					playListName: 'New Playlist',
					playListTracks: []
			})
		})
		return uriArr;
	}
	
	search(searchTerm) {
		Spotify.search(searchTerm).then(searchResults => {
			console.log(`${searchTerm} and ${searchResults}`)
			this.setState({searchResult: searchResults})
		})
	}
	render() {
		return (
			<div>
				<h1>Ja<span className="highlight">mmm</span>ing</h1>
				<div className="App">
					<SearchBar
						onSearch={this.search}
					/>
					<div className="App-playlist">
						<SearchResults
							searchResults={this.state.searchResult}
							onAdd={this.addTrack}
						/>
						<Playlist
							playListName={this.state.playListName}
							playListTracks={this.state.playListTracks}
							onRemove={this.removeTrack}
							onNameChange={this.updatePlayListName}
							onSave={this.savePlayList}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;