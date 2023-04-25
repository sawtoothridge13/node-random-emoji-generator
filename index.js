// Import the node-emoji library that we installed
import emoji from 'node-emoji';

// Get the emoji name that the user specified on the command line
const emojiName = process.argv[2];

const foundEmoji = emoji.find(emojiName);

if (!emojiName) {
  // If the user did not specity an emoji,
  // display a random emoji
  const randomEmoji = emoji.random();
  console.log(randomEmoji.emoji);
} else if (foundEmoji) {
  // Iff the use did specify an emoji, try
  // to find that emoji
  console.log(foundEmoji.emoji);
} else {
  // if the emoji doesn't exist ( is invalid)
  console.log('Invalid emoji name');
}
