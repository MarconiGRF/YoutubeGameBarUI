import backArrow from "./assets/mdl2_back.png";

function PlaybackUI() {
	const baseSource = "https://www.youtube.com/embed/";
	const listSource = "videoseries?list=";
	const invalidInfoMessage = "No valid video or playlist ID provided.";
	const imgAlt = "A icon of an arrow pointing left to go back to main screen.";

	/**
	 * Notifies the YTGBO to navigate to Main Screen.
	 */
	function notifyBack() {
		window.external.notify('goback');
	}

	if (window.location.search && window.location.search !== "") {
		const videoId = window.location.search.split("videoId=");
		const playlistId = window.location.search.split("playlistId=");

		let completeSource = "";
		if (videoId.length > 1) {
			completeSource = baseSource + videoId[1];
			return (
				<div>
					<button class="backButton" onClick={notifyBack}>
						<img class="backIcon" src={backArrow} alt={imgAlt}/>
					</button>
					<iframe id="player" type="text/html" src={completeSource} allow="autoplay; encrypted-media" autoplay="1" frameborder="0" title="p">
					</iframe>
				</div>
				
			);
		} else if (playlistId.length > 1) {
			completeSource = baseSource + listSource + playlistId[1];
			return (
				<div>
					<button class="backButton" onClick={notifyBack}>
						<img class="backIcon" src={backArrow} alt={imgAlt}/>
					</button>
					<iframe id="player" type="text/html" src={completeSource} allow="autoplay; encrypted-media" autoplay="1" frameborder="0" title="p">
					</iframe>
				</div>
			);
		} else {
			return (<p>{invalidInfoMessage}</p>);
		}
	} else {
		return (<p>{invalidInfoMessage}</p>);
	}
}

export default PlaybackUI;
