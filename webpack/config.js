const highPriorityChunk = ['vendor', 'polyfills']

module.exports = {
  OUTPUT: 'dist',
  sortChunks: (prev, next) => {
    const prevName = prev.names[0]
    const nextName = next.names[0]
    return highPriorityChunk.indexOf(prevName) < highPriorityChunk
      .indexOf(nextName)
  }
}
