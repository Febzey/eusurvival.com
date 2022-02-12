module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,ttf.otf}",
  ],
  theme: {
    extend: {
      height: {
        'banner': "88vh",
        'content': '44vh'
      },
      backgroundImage: {
        'hero': "url('/src/images/lavacast.png')",
        'contentBackground': "url('/src/images/contentBackground.svg')",
        'votebg': "url('/src/images/banner.jpg')",
        'waveSvg': "url('/src/images/waveSvg.svg')",
        'wave': "url('/src/images/wave.svg')"
      },
      fontFamily: {
        'permMarker': "'Permanent Marker', cursive",
        'bebas': "'Bebas Neue', cursive",
        'Quicksand': "'Quicksand', sans-serif",
        'Fredoka': "'Fredoka One', cursive",
        'minecraft': "'minecraft', sans-serif",
      },
      backgroundColor: {
        'discordblue': '#7289da',
        'dGray': '#292a2d'
      },
      borderColor: {
        'darkGray': '#292a2d'
      },
      minHeight: {
        content: "44vh"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [],
}
