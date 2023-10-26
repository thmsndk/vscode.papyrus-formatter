// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "papyrus-formatter" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  //   let disposableHello = vscode.commands.registerCommand('papyrus-formatter.helloWorld', () => {
  //   	// The code you place here will be executed every time your command is executed
  //   	// Display a message box to the user
  //   	vscode.window.showInformationMessage('Hello World from papyrus-formatter!');
  //   });
  //   context.subscriptions.push(disposableHello);

  const papyrusFormattingProvider: vscode.DocumentFormattingEditProvider = {
    provideDocumentFormattingEdits(document, options, token) {
      if (document.languageId === "papyrus") {
        const text = document.getText();
        const formattedCode = formatPapyrusCode(text);

        // Calculate the text edits needed to format the code
        const textEdits = [];
        textEdits.push(
          vscode.TextEdit.replace(
            new vscode.Range(
              new vscode.Position(0, 0),
              new vscode.Position(document.lineCount, 0)
            ),
            formattedCode
          )
        );

        return textEdits;
      }
    },
  };

  // Register the formatting provider for the 'papyrus' language
  const disposable = vscode.languages.registerDocumentFormattingEditProvider(
    "papyrus",
    papyrusFormattingProvider
  );

  context.subscriptions.push(disposable);
}

function formatPapyrusCode(unformattedCode: string) {
  // TODO: depends on joelday.papyrus-lang-vscode and their language parsing perhaps

  // Define the indentation size (e.g., 4 spaces)
  const indentSize = 4;

  // Split the code into lines
  const lines = unformattedCode.split("\n");

  // Initialize the formatted code
  let formattedCode = "";
  let currentIndentLevel = 0;

  // Regular expression to identify the start of a block (function or if statement)
  const blockStartRegex = /^(Event|Function|if) .+\)/i;

  // Regular expression to identify the end of a block
  const blockEndRegex = /^(EndEvent|EndFunction|endIf)/i;

  for (const line of lines) {
    // Remove leading and trailing whitespace
    const trimmedLine = line.trim();

    if (trimmedLine.match(blockEndRegex)) {
      // Decrease the current indentation level
      currentIndentLevel -= indentSize;
    }

    // Add the current line with the appropriate indentation
    formattedCode += " ".repeat(currentIndentLevel) + trimmedLine + "\n";

    if (trimmedLine.match(blockStartRegex)) {
      // Increase the current indentation level
      currentIndentLevel += indentSize;
    }
  }

  return formattedCode;
}

// This method is called when your extension is deactivated
export function deactivate() {}
