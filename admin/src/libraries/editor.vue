<template>
  <div ref="editor"></div>
</template>

<script>
  if (process.browser) {
    require('quill/dist/quill.core.css')
    require('quill/dist/quill.snow.css')
    window.Quill = require('quill/dist/quill.min.js')
    require('quill/dist/quill.core.js')
  }

  export default {
    data () {
      return {
        editor: null
      }
    },
    methods: {
      html: function () {
        let self = this
        return self.editor.root.innerHTML
      },
      storeData: function () {
        let self = this
        let content = self.editor.getContents()
        let blods = []
        content.ops.forEach(function (data) {
          if (data.insert.image !== undefined && self.isDataURL(data.insert.image) === true) {
            let blod = self.dataURLtoBlob(data.insert.image)
            data.insert.image = `{im-${blods.length}}`
            blods.push(blod)
          }
        })
        return { content, blods }
      },
      setContents: function (delta) {
        let self = this
        self.editor.setContents(delta)
      }
    },
    created () {
      let self = this

      self.isDataURL = function (text) {
        let regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i
        return !!text.match(regex)
      }

      self.dataURLtoBlob = function (dataURL) {
        var byteString
        if (dataURL.split(',')[0].indexOf('base64') >= 0)
          byteString = atob(dataURL.split(',')[1])
        else
          byteString = unescape(dataURL.split(',')[1])

        var mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0]

        var ia = new Uint8Array(byteString.length)
        for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i)
        }

        return new Blob([ia], { type: mimeString })
      }
    },
    mounted () {
      let self = this

      let BlockEmbed = Quill.import('blots/block/embed')
      class ImageBlot extends BlockEmbed {
        static create(value) {
          let node = super.create()
          node.setAttribute('src', value)
          node.setAttribute('class', 'w-100 mt-2 mb-3')
          return node
        }

        static value(node) {
          return node.getAttribute('src')
        }
      }
      ImageBlot.blotName = 'image';
      ImageBlot.tagName = 'img';

      Quill.register(ImageBlot, true)

      self.editor = new Quill(self.$refs.editor, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: [2, 3, false] }],
            ['bold', 'italic', 'underline'],
            ['link', 'blockquote', 'code-block', 'image'],
            [{ 'color': [] }],
            [{ list: 'ordered' }, { list: 'bullet' }]
          ]
        }
      })
    }
  }
</script>

<style lang="scss">
  .ql-editor p {
    margin-bottom: 1rem;
  }
</style>

<!-- /**
 * Step1. select local image
 *
 */
function selectLocalImage() {
  const input = document.createElement('input')
  input.setAttribute('type', 'file')
  input.click()

  // Listen upload local image and save to server
  input.onchange = () => {
    const file = input.files[0]
    debugger
    // file type is only image.
    if (/^image\//.test(file.type)) {
      saveToServer(file)
    } else {
      console.warn('You could only upload images.')
    }
  }
}

/**
 * Step2. save to server
 *
 * @param {File} file
 */
function saveToServer(file) {
  const fd = new FormData()
  fd.append('image', file)

  const xhr = new XMLHttpRequest()
  xhr.open('POST', 'http://localhost:3000/upload/image', true)
  xhr.onload = () => {
    if (xhr.status === 200) {
      // this is callback data: url
      const url = JSON.parse(xhr.responseText).data
      insertToEditor(url)
    }
  };
  xhr.send(fd)
}

/**
 * Step3. insert image url to rich editor.
 *
 * @param {string} url
 */
function insertToEditor(url) {
  // push image url to rich editor.
  const range = editor.getSelection();
  editor.insertEmbed(range.index, 'image', `http://localhost:9000${url}`);
} -->

<!-- // quill editor add image handler
// self.editor.getModule('toolbar').addHandler('image', () => {
//   selectLocalImage()
// }) -->
