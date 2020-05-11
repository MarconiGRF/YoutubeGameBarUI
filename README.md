## Common notes

This is an initial implementation of YoutubeGameBar's VideoUI and **certainly** will be changed to a better solution in the future.

## Development

First run `npm install` on repository's root directory.

Then run `ng serve` for a development server, then go to `http://localhost:4200/video-ui?mediaUrl=ABCDEF`, where `ABCDEF` is the videoURL you want to the `youtube-player` angular component to load. It's important to use `localhost` instead of `127.0.0.1` on the URL, otherwise it may be problematic to load some videos.

## Build

Run `ng build` to build the videoUI project.