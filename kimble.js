process.stdout.write(
  JSON.stringify(
    require('kimble-plain-words')
      .reduce(
        function(words, entry) {
          if (entry.category === 'lawyerisms') {
            return words }
          else if (!entry.hasOwnProperty('consider')) {
            return words }
          else {
            return words.concat(
              entry['instead of']
                .reduce(
                  function(phrases, phrase) {
                    if (phrase.hasOwnProperty('sense')) {
                      return phrases }
                    else if (phrase.hasOwnProperty('type')) {
                      return phrases }
                    else {
                      return phrases.concat(
                        entry.consider.map(function(replacement) {
                          return {
                            target: phrase.phrase,
                            replacement: replacement } })) } },
                  [ ])) } },
        [ ])
      .reduce(
        function(object, instruction) {
          object[instruction.target] = instruction.replacement
          return object },
        { }),
    null,
    2
  ) + '\n')
