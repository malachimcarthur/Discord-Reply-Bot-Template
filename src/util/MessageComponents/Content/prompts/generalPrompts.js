const { CreateFile } = require("../../CreateFile");

module.exports.generalPrompts = [
  {
    content: "Example Prompt",
  },
  {
    content: "Example prompt with attachment",
    files: [CreateFile("PromptFiles", "example.png")],
  },
];
