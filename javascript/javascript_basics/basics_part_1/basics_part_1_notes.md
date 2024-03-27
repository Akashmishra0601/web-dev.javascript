chapter - 1:

    Node.js , Deno.js , Typescript , Javascript:
        
        Node.js:
            Node.js is a runtime environment that allows developers to run JavaScript code outside of a web browser. It is built on the V8 JavaScript engine, the same engine that powers Google Chrome. Node.js enables server-side scripting, making it possible to build scalable, high-performance web applications and APIs. It provides a rich set of libraries and frameworks through npm (Node Package Manager), which facilitates easy installation and integration of third-party modules. Node.js is known for its non-blocking, event-driven architecture, which allows for efficient handling of concurrent requests.

        Deno:
            Deno is a secure runtime for JavaScript and TypeScript built on the V8 engine, developed by the creator of Node.js, Ryan Dahl. Deno addresses some of the shortcomings of Node.js by incorporating features like built-in TypeScript support, secure execution by default (with permissions explicitly granted), and a modern module system that utilizes URLs for importing modules. Deno also comes with a set of standard modules that cover essential functionalities such as file system operations, HTTP serving, and testing. It aims to provide a more secure and developer-friendly alternative to Node.js.

        TypeScript:
            TypeScript is a superset of JavaScript developed by Microsoft. It adds optional static typing to JavaScript, which enables developers to catch errors early in the development process and write more maintainable code. TypeScript code is transpiled into plain JavaScript, allowing it to run on any JavaScript runtime, including browsers and Node.js. TypeScript supports modern ECMAScript features while also providing additional features such as interfaces, enums, generics, and access modifiers. It is widely adopted in large-scale JavaScript projects, offering benefits like better code navigation, code refactoring, and improved tooling support.

        JavaScript:
            JavaScript is a high-level, interpreted programming language primarily used for building interactive web pages and web applications. It is a core technology of the World Wide Web, enabling dynamic content, user interaction, and client-side scripting within web browsers. JavaScript is versatile and runs on virtually all platforms, including browsers, servers (via Node.js), and even embedded devices. It supports event-driven, functional, and object-oriented programming paradigms, making it suitable for a wide range of applications. JavaScript is continuously evolving with updates to the ECMAScript specification, introducing new features and improvements to the language.


    console , Inspect , View Source Code:

        Console:
            The console is a built-in object in JavaScript and Node.js that provides methods for interacting with the debugging console of a web browser or a terminal environment. In web browsers, developers can use the console object to log messages, errors, and other information to the browser's developer console for debugging purposes. In Node.js, the console module provides similar functionality for logging messages to the terminal or command line interface during server-side development. The console object/methods are commonly used for debugging, monitoring code execution, and providing feedback during development.

        Inspect:
            In Node.js, the "inspect" module provides a way to inspect JavaScript objects, functions, and other values during runtime. It allows developers to examine the properties, methods, and internal state of objects for debugging purposes. The inspect module is commonly used in conjunction with the console module to log detailed information about JavaScript objects to the console for inspection. Additionally, the inspect module can be customized to control the formatting and depth of inspection output, making it a powerful tool for debugging complex applications in Node.js.

        View Source Code:
            Viewing the source code refers to accessing and examining the underlying code of a web page or a software application. In web browsers, users can typically view the source code of a webpage by right-clicking on the page and selecting "View Page Source" or by using keyboard shortcuts. This action opens a new tab or window displaying the HTML, CSS, and JavaScript code that comprises the webpage. Viewing the source code is useful for understanding how a webpage is structured, diagnosing layout or functionality issues, and learning from other developers' code. Similarly, developers can view the source code of software applications to understand their implementation details, debug issues, and contribute to open-source projects.

                
     
    IDE , Codespaces , Git , GitHub:

        IDE - VS Code:
            Visual Studio Code (VS Code) is a free, open-source code editor developed by Microsoft. It supports various programming languages and offers features like syntax highlighting, code completion, debugging, and version control integration. VS Code's extensive library of extensions allows developers to customize their workflow and enhance productivity.

        Codespaces:
            GitHub Codespaces provides cloud-hosted development environments that can be accessed directly from a web browser or through Visual Studio Code. It allows developers to quickly spin up development environments with specific configurations, dependencies, and extensions. Codespaces facilitates collaborative coding, enabling teams to work on projects seamlessly without worrying about setting up their local development environments.

        Git:
            Git is a distributed version control system that enables developers to track changes to their codebase, collaborate with others, and manage project history efficiently. It allows developers to create branches, commit changes, merge code, and resolve conflicts easily. Git is widely used in software development for its speed, flexibility, and decentralized nature.

        GitHub:
            GitHub is a web-based platform for hosting Git repositories and collaborating on software development projects. It provides features such as code hosting, issue tracking, pull requests, and project management tools. GitHub allows developers to share their code, contribute to open-source projects, and collaborate with other developers worldwide. It has become a central hub for developers to showcase their work, discover new projects, and build communities around software development.

    var , let , const , comment:

        var: 
            Declares a variable globally, or locally to an entire function, regardless of block scope. It can be redeclared and reassigned.

        let: 
            Introduces block-scoped variables, allowing for more predictable behavior within blocks like if statements or loops. Variables declared with let can be reassigned but not redeclared within the same scope.

        const: 
            Declares variables that are block-scoped like let but cannot be reassigned after initialization. However, the properties of objects and arrays declared with const can be modified.

        Comments in JavaScript:
            Comments are non-executable text used to annotate code, providing explanations.
    

    "use strict"; , ECMAScript Standard , TC39:


        "use strict";:
            "use strict"; is a directive introduced in ECMAScript 5 (ES5) that enables strict mode in JavaScript. When placed at the beginning of a script or a function, it instructs the JavaScript engine to execute code in a stricter mode, enforcing better error handling and more rigorous syntax rules. Strict mode helps catch common coding mistakes, promotes safer coding practices, and prevents certain actions that were allowed in non-strict mode but might lead to errors or unpredictable behavior. Some of the benefits of using strict mode include preventing the use of undeclared variables, disabling implicit variable declarations, and prohibiting certain potentially unsafe actions.

        ECMAScript Standard:
            ECMAScript is a standardized specification for scripting languages, with JavaScript being the most well-known implementation of it. The ECMAScript standard defines the syntax, semantics, and behavior of the scripting language, ensuring interoperability across different platforms and environments. It undergoes regular revisions, with each version introducing new features, improvements, and clarifications. Major versions of ECMAScript are typically referred to by their year of release, such as ES6 (ECMAScript 2015), ES7, ES8, and so on. The standard is maintained by ECMA International, a standards organization that oversees the development and evolution of various technology standards.

        TC39:
            TC39, short for Technical Committee 39, is the committee responsible for the evolution and standardization of ECMAScript (JavaScript). It operates under the umbrella of ECMA International and consists of representatives from major technology companies, browser vendors, and individual contributors. TC39 meets regularly to discuss proposals for new language features, syntax enhancements, and improvements to the JavaScript language. Proposals go through several stages of evaluation, including drafting, feedback, specification, and implementation, before being included in the ECMAScript standard. TC39's goal is to ensure that JavaScript remains a modern, reliable, and versatile programming language that meets the needs of developers and the demands of the ever-evolving web ecosystem.


    typeof() , console.table , Datatype , Datatype converion:

        typeof():
            typeof() is an operator in JavaScript that returns the data type of a given operand. It accepts a single argument and evaluates to a string indicating the data type of that argument. The typeof() operator is useful for dynamically determining the type of a variable or value at runtime. It returns the following possible values:

        console.table():
            to see data in a tabuler form


        Datatype:

            "undefined" - if the value is undefined.
            "null" - typeof(object) // not a number
            "boolean" - if the value is a boolean.
            "number" - if the value is a number (including NaN and Infinity).
            "string" - if the value is a string.
            "symbol" - if the value is a symbol.
            "object" - if the value is an object (including arrays and functions).
            "function" - if the value is a function.
            Note that typeof(null) returns "object", which is considered a quirk of the language and not indicative of null being an object.

        Datatype conversion:
        
            String(): Convert values to strings.
            Number(): Convert values to numbers.
            Boolean(): Convert values to boolean values (true or false).
            toString(): Convert values to strings.
            toFixed(): Convert numbers to strings with a specified number of decimal places.

chapter - 2:

