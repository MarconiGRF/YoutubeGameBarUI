## Common notes

This is an initial implementation of YoutubeGameBar's VideoUI and **certainly** will be changed to a better solution in the future.

## Development
* 1: Go to `ytgbvui` directory.

* 2: Run `npm install` to install necessary packages.

* 3: Then run `npm start` to start a development server.
    * 2.1: Then go to `http://localhost:3000/?videoId=VIDEO_ID`, where `VIDEO_ID` is the Video ID you want to the `youtube-player` angular component to load.
    * 2.2: Then go to `http://localhost:3000/?listId=PLAYLIST_ID`, where `PLAYLIST_ID` is the Playlist ID you want to the `YouTube iFrame` to load.

 It's important to use `localhost` instead of `127.0.0.1` on the URL, otherwise it may be problematic to load some videos.

## Building and testing

Run `npm run build` to build the videoUI project.
Once builded, serve the builded files with an webserver then test it with the url formats describeds in item `2`.
