require 'coffee-errors'

{expect} = require 'chai'
iframeScript = require '../src/iframe-script'

describe 'iframe-script', ->
  iframeObject = null

  # executed as a string inside iframe, no outside scope
  frameScript = (opts) ->
    opts: -> opts

    html: (selector) ->
      element = document.querySelector selector
      element.innerHTML

  before (done) ->
    iframeScript frameScript, {param: 'hello world', document}, (err, results) ->
      iframeObject = results
      done()

  describe 'returned value', ->
    it 'is an object', ->
      expect(iframeObject).to.be.ok

    it 'has opts', ->
      expect(iframeObject.opts).to.be.a.function

    it 'has html', ->
      expect(iframeObject.html).to.be.a.function

  describe 'options', ->
    it 'passed a string', ->
      expect(iframeObject.opts().param).to.eql 'hello world'

    it 'passed an object by reference', ->
      expect(iframeObject.opts().document).to.eql document

