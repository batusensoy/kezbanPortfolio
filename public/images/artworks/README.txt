# Artwork Images Directory

Place the artist's high-resolution painting photographs in this folder:
`public/images/artworks/`

### Recommended Image Specs:
- **Format**: `.jpg`, `.jpeg`, `.webp`, or `.png`
- **Resolution**: Width of 1600px - 2400px (300 DPI for high-DPI displays)
- **Aspect Ratio**: 3:4 or 4:5 for vertical portraits, 4:3 or 16:10 for landscapes, 1:1 for square
- **Color Profile**: sRGB
- **Naming Convention**: `title-in-kebab-case.jpg` (e.g., `solitude-in-ochre.jpg`)

Once placed here, reference it in `src/data/artworks.ts` as:
`image: '/images/artworks/your-file-name.jpg'`

