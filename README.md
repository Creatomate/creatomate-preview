# Creatomate Preview SDK

The [Preview SDK](https://creatomate.com/javascript-video-sdk) lets you display video and image previews in your web app prior to creating a final MP4, GIF, JPEG or PNG through the API. This is useful when developing a web-based editing or customizer tool, and want to show a real-time rendering in the browser.

This package is for browser-based apps, and it works with any framework such as React, Angular, Vue, as well as plain Javascript. For creating videos and images using Node.js, refer to the `creatomate` library instead, a different NPM package that [can be found here](https://www.npmjs.com/package/creatomate).

[Creatomate](https://creatomate.com) is a media generation API for editing and rendering videos and images using code. The platform uses templates and JSON for generating **MP4**, **GIF**, **JPEG** or **PNG** files. All processing is handled by Creatomate's cloud infrastructure, so you do not need to maintain your own servers.

## Usage

### Installation

Install the package using the following command:

```bash
npm install @creatomate/preview
```

You can now load a video template (or [JSON](https://creatomate.com/docs/json/introduction)) as follows:

```javascript
import { Preview } from '@creatomate/preview';

// The following assumes that you have a HTML element like this: <div id="container"></div>
const containerElement = document.getElementById('container');

// Initialize a preview to be spawned within the container
const preview = new Preview(containerElement, 'player', 'YOUR_VIDEO_PLAYER_TOKEN');

// Once the SDK is ready, load a template from the project
preview.onReady = async () => {
  await preview.loadTemplate('YOUR_TEMPLATE_ID');
  
  // You can also load a video from JSON:
  // await preview.setSource({ /* Your JSON here */ });
};
```

Check out the demo code provided below for a more comprehensive example.

### Demo

See the Preview SDK in action here: [Video Preview Demo](https://github.com/Creatomate/video-preview-demo)

### Compatibility

Because live video rendering is very demanding on the device's hardware, this library only works on modern desktop web browsers, such as Chrome, Firefox, Edge, Opera, and Safari. Mobile devices are not supported. Render an MP4 preview through the API to support smartphone devices. Tip: Use the [render_scale](https://creatomate.com/docs/api/rest-api/post-v1-renders) API parameter (10% to 100%) to generate a low-resolution preview without changing the composition or template.

## Issues & Comments

Feel free to contact us if you encounter any issues with the library or Creatomate API at [support@creatomate.com](mailto:support@creatomate.com).

## License

The Creatomate Preview SDK is licensed under the MIT license. Please refer to the [LICENSE](https://github.com/Creatomate/creatomate-node/blob/main/LICENSE) for more information.
