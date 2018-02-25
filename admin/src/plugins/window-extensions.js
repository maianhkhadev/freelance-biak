window.hasClass = function (element, className) {
  return element.classList ? element.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(element.className)
}

window.addClass = function (element, className) {
  if (element.classList) element.classList.add(className)
  else if (!hasClass(element, className)) element.className += ' ' + className
}

window.removeClass = function (element, className) {
  if (element.classList) element.classList.remove(className)
  else element.className = element.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '')
}

window.switchClass = function (element, className) {
  if(hasClass(element, className)) removeClass(element, 'active')
  else addClass(element, 'active')
}

window.isDataURL = function (text) {
  let regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i
  return !!text.match(regex)
}

window.dataURLtoBlob = function (dataURL) {
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
