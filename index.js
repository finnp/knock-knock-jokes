
var jokes = [
  {name: 'Dozen', answer: 'anybody want to let me in?'},
  {name: 'Avenue', answer: 'knocked on this door before?'}
]

module.exports = function () {
    var joke = jokes[Math.floor(Math.random()*jokes.length)]
    return formatJoke(joke)
}

function formatJoke(joke) {
  return [
    'Knock, knock.',
    'Who’s there?',
    joke.name + '.',
    joke.name + ' who?',
    joke.name + ' ' + joke.answer
  ].join('\n')
}