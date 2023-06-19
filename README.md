Figma + FigJam widget development environment with UI components and utils.

Contains:
- [Advanced Changelog](https://www.figma.com/community/widget/1142539867133322876)
- [Type Modeller](https://www.figma.com/community/widget/1154859859907562654)
- [Checklist](https://www.figma.com/community/widget/1151240412068749314)

---

## Development

1. Clone the repo and install NPM dependencies.
2. Open Figma desktop app and create a new file.
3. Open `Menu → Widgets → Development → Import widget from manifest` and select one of `manifest.json` in the `~/dist/*` folder.
4. Open your code editor and run `$ npm run watch` with a `--widget` argument which contains the name of the selected widget (e.g `$ npm run watch --widget=Changelog`)

### Scripts

- `$ npm run build --widget=<WidgetName>`
- `$ npm run watch --widget=<WidgetName>`

### Publication

1. Run `$ npm run build --widget=<WidgetName>`
2. Publish the `~/dist/<WidgetName>` folder in Figma 
