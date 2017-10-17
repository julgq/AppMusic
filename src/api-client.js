const URL = 'https://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=disco&api_key=505b58d85331dcccb94f7d19e4fcf755&format=json'

function getArtists(){

	return fetch(URL)
	.then(response => response.json())
	.then(data => data.topartists.artist)
	.then(artists => artists.map(artist => ({
		name: artist.name,
		image: artist.image[3]['#text'],
		likes: 200,
		comments: 140

	})))
}


export { getArtists }
