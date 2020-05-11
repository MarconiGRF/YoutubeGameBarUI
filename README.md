## Common notes

This is an initial implementation of YoutubeGameBar's VideoUI and **certainly** will be changed to a better solution in the future.

## Development

First run `npm install` on repository's root directory.

Then run `ng serve` for a development server, then go to `http://localhost:4200/video-ui?mediaUrl=ABCDEF`, where `ABCDEF` is the videoURL you want to the `youtube-player` angular component to load. It's important to use `localhost` instead of `127.0.0.1` on the URL, otherwise it may be problematic to load some videos.

## Building and testing

Run `ng build --prod=true` to build the videoUI project.
Once builded, serve the builded files with an webserver then test going to `localhost/?mediaUrl=ABCDEF`, the app will automatically route to the desired location (still working on a fix for this redirect).
