import React from "react"
import "./Playlist.css"
import TrackList from "../TrackList/TrackList"

class Playlist extends React.Component {
	constructor(props) {
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this);
	}
	handleNameChange(event) {
		let value = event.target.value;
		this.props.onNameChange(value);
	}

	render() {
		return (
			<div className="Playlist">
				<input
					defaultValue={this.props.playListName}
					onChange={this.handleNameChange}
				/>
			<TrackList
					tracks={this.props.playListTracks}
					isRemoval={true}
					onRemove={this.props.onRemove}
			/>
				<button
					className="Playlist-save"
					onClick={this.props.onSave}
				>SAVE TO SPOTIFY</button>
			</div>

		)
	}
}
export default Playlist;

