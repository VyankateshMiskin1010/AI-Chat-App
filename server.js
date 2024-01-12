// Import necessary modules
const express = require("express"); // Import the Express framework
const bodyParser = require("body-parser"); // Middleware to parse JSON in the request body
const cors = require("cors"); // Middleware to enable Cross-Origin Resource Sharing

// Create an Express application
const app = express();

// Set the port number for the server
const port = 3001;

// Define predefined responses for specific keywords

const predefinedResponses = {
  responses: [
    {
      keywords: ["hello", "hi", "hii", "hey"],
      response: "Hello! How can I assist you today?",
    },
    {
      keywords: ["how are you", "what's up"],
      response:
        "I'm just a computer program, but thanks for asking! How can I help you?",
    },
    {
      keywords: ["weather", "forecast", "todays weather"],
      response:
        "I'm sorry, I don't have real-time weather information at the moment.",
    },
    {
      keywords: ["help", "assistance"],
      response: "Sure, I'm here to help. What do you need assistance with?",
    },
    {
      keywords: ["bye", "goodbye", "see you later"],
      response:
        "Goodbye! If you have more questions, feel free to ask anytime.",
    },
    {
      keywords: ["programming", "code", "developer"],
      response:
        "Ah, programming! I love helping with coding questions. What language are you working with?",
    },
    {
      keywords: ["javascript"],
      response:
        "JavaScript is a versatile programming languagedesigned for web browsers. It enables dynamic and interactive content on websites through client-side scripting. It follows ECMAScript standards, is object-oriented, supports asynchronous programming, and has a vast ecosystem of frameworks and libraries. With Node.js, it can be used for server-side development, making it a fundamental language in web development and beyond.",
    },
    {
      keywords: ["movies", "films", "cinema"],
      response:
        "Movies are great! Do you have a favorite genre or movie you would like to discuss?",
    },
    {
      keywords: ["food", "cooking", "recipe"],
      response:
        "I enjoy talking about food! Any specific dish you want to know more about or share recipes?",
    },
    {
      keywords: ["what is vadapav"],
      response:
        "Vada Pav is a popular street food in the Indian state of Maharashtra, especially in the city of Mumbai. It consists of a spiced mashed potato filling encased in a gram flour batter, which is deep-fried to form a fritter known as vada. This vada is then placed inside a small bread bun called pav, often accompanied by various chutneys and condiments.",
    },
    {
      keywords: ["technology", "innovation", "what are the latest tech"],
      response:
        "Technology is fascinating! Are you interested in the latest tech trends or a specific area like artificial intelligence, blockchain, or cybersecurity?",
    },
    {
      keywords: ["artificial intelligence", "what is ai", "ai"],
      response:
        "Artificial Intelligence (AI) refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, language understanding, and even decision-making. The ultimate goal of AI is to create machines that can simulate human cognitive abilities. AI is a rapidly evolving field with continuous advancements and applications across various domains. As technology progresses, the integration of AI into daily life is likely to expand, influencing industries, healthcare, education, and many other aspects of society.",
    },
    {
      keywords: ["gaming", "video games", "gamer"],
      response:
        "Gaming is awesome! Do you have a favorite video game genre or title? I can recommend some great games!",
    },
    {
      keywords: ["travel", "adventure", "vacation"],
      response:
        "Traveling is a wonderful experience! Any favorite travel destinations or types of vacations you enjoy?",
    },
    {
      keywords: ["books", "reading", "literature"],
      response:
        "Books open up new worlds! Do you have a favorite genre or author? I can suggest some captivating reads.",
    },
    {
      keywords: ["fitness", "exercise", "health"],
      response:
        "Staying healthy is important! What's your preferred way to stay active, whether it's through sports, workouts, or outdoor activities?",
    },
    {
      keywords: ["tell me a joke"],
      response:
        "Sure, here's a funny one for you \nWhy don't skeletons fight each other? \nThey don't have the guts!",
    },
    {
      keywords: ["nice"],
      response: "Thank you",
    },
  ],
};

// Use middlewares
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Function to get AI response based on user input
function getAIResponse(userInput) {
  // Trim and convert user input to lowercase for case-insensitive and space-insensitive matching
  const trimmedUserInput = userInput.trim().toLowerCase();

  // Find a matching response based on keywords
  const matchingResponse = predefinedResponses.responses.find((item) =>
    item.keywords.some((keyword) => trimmedUserInput.includes(keyword))
  );

  // Return the matching response or a default response if no match is found
  if (matchingResponse) {
    return matchingResponse.response;
  } else {
    return "I don't understand the question";
  }
}

// Define a route for the root endpoint
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Define a route to process AI input through a POST request
app.post("/ai/process-input", (req, res) => {
  const userInput = req.body.userInput;
  const aiResponse = getAIResponse(userInput);
  res.json({ response: aiResponse });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
