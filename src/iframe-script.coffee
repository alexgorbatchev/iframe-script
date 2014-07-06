createIframe = ->
  iframe = document.createElement 'IFRAME'

  {style} = iframe
  style.width = style.height = '1px'
  style.left = style.top = '-10px'
  style.position = 'absolute'

  document.body.appendChild iframe

injectFunc = (iframe, fn, opts) ->
  contentWindow    = iframe.contentWindow
  iframeDoc        = contentWindow.document
  script           = iframeDoc.createElement 'SCRIPT'
  script.innerHTML = "var fn = #{fn.toString()};"

  iframeDoc.body.appendChild script
  contentWindow.fn opts

module.exports = (fn, opts, callback) ->
  iframe = createIframe()
  setTimeout -> callback null, injectFunc iframe, fn, opts
