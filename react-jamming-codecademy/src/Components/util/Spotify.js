const clientId = "043d8969206b4db99d1cb1fa499d48fb";
const redirectUrl = "https://superjammingbandreact.surge.sh";
let accessToken;


const Spotify = {
	getAccessToken() {
		if (accessToken) {
			return accessToken;
		}
		// check for access tocken match
		const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
		const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
		if (accessTokenMatch && expiresInMatch)
		{
			accessToken = accessTokenMatch[1];
			const expiresIn = Number(expiresInMatch[1]);
			//This clears the parameters, allowing us to grab a new access token when it expires
			window.setTimeout(() => accessToken = '', expiresIn * 1000);
			window.history.pushState('Access Token', null, '/');
			return accessToken;
		} else {
			const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
			window.location = accessUrl;
		}
	},
	async search(term) {
		const accessToken = Spotify.getAccessToken();
		const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			},
			method: 'GET'
		});
		const jsonResponse = await response.json();
		if (!jsonResponse) {
			return [];
		}
		return jsonResponse.tracks.items.map(track => {
			;
			return ({
				id: track.id,
				name: track.name,
				artist: track.artists[0].name,
				album: track.album.name,
				uri: track.uri
			});
		});
	},
	async savePlaylist(name, trackUris) {
		const accessToken = this.getAccessToken();
		const headers = { Authorization: `Bearer ${accessToken}`};
		let userId;
		const response = await fetch('https://api.spotify.com/v1/me', {
			headers: headers,
			method: 'GET'
		});
		const jsonResponse = await response.json();
		userId = jsonResponse.id;
		fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
			headers: headers,
			body: JSON.stringify({ name: name }),
			method: 'POST'
		}).then(response_1 => response_1.json()
		).then(jsonResponse => {
			const playListId = jsonResponse.id;
			console.log(playListId);
			return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playListId}/tracks`, {
				headers: headers,
				method: 'POST',
				body: JSON.stringify({ uris: trackUris })
			});
		});
	}	
}


export default Spotify;
