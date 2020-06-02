export default {
    name: 'InfoBox',
    props: {
      pictureSrc: String,
      pictureAlt: String,
      urlSrc: String,
      infoboxTitle: String,
      infoboxParagraph: String
    },
    methods: {
      resolve_img_url: function (path) {
        let images = require.context('@/assets/images');
        return images("./"+path)
      },
      set_href_url: function (href_path) {
        return href_path
      }
    }
  }