/* =========================================================
   COMPLETE JAVASCRIPT MASTERY SYLLABUS
   From Zero to Expert - All Topics Covered
   ========================================================= */

/////////////////////////////////////////////////////////////////////
// 1. VARIABLES & SCOPE
/////////////////////////////////////////////////////////////////////
//    Declaration:
//      - var (function scoped, hoisted)
//      - let (block scoped, TDZ)
//      - const (block scoped, immutable binding)
//    Scope:
//      - Global scope
//      - Function scope
//      - Block scope
//      - Lexical scope
//    Hoisting:
//      - Variable hoisting
//      - Function hoisting
//      - Temporal Dead Zone (TDZ)

/////////////////////////////////////////////////////////////////////
// 2. DATA TYPES
/////////////////////////////////////////////////////////////////////
//    Primitive Types (7):
//      - number (integers, floats, Infinity, NaN)
//      - string (single, double, template literals)
//      - boolean (true, false)
//      - null (intentional absence)
//      - undefined (uninitialized)
//      - symbol (unique identifiers)
//      - bigint (large integers)
//    Reference Types:
//      - object
//      - array
//      - function
//      - Date, RegExp, Map, Set
//    Type Checking:
//      - typeof operator
//      - instanceof operator
//      - Array.isArray()
//    Type Coercion:
//      - Implicit coercion
//      - Explicit coercion
//      - Truthy & Falsy values

/////////////////////////////////////////////////////////////////////
// 3. OPERATORS
/////////////////////////////////////////////////////////////////////
//    Arithmetic: +, -, *, /, %, ** (exponent)
//    Assignment: =, +=, -=, *=, /=, %=, **=
//    Comparison: ==, ===, !=, !==, >, <, >=, <=
//    Logical: && (AND), || (OR), ! (NOT)
//    Bitwise: &, |, ^, ~, <<, >>, >>>
//    Unary: ++, --, +, -, typeof, delete, void
//    Ternary: condition ? trueVal : falseVal
//    Nullish Coalescing: ?? (null/undefined check)
//    Optional Chaining: ?. (safe property access)
//    Spread: ... (arrays/objects)
//    Comma: , (evaluate expressions)

/////////////////////////////////////////////////////////////////////
// 4. CONTROL FLOW
/////////////////////////////////////////////////////////////////////
//    Conditionals:
//      - if / else if / else
//      - switch / case / default / break
//      - Ternary operator
//    Loops:
//      - for (classic loop)
//      - while (condition first)
//      - do...while (execute first)
//      - for...in (object keys/indices)
//      - for...of (iterable values)
//      - forEach (array method)
//    Loop Control:
//      - break (exit loop)
//      - continue (skip iteration)
//      - Labeled statements

/////////////////////////////////////////////////////////////////////
// 5. FUNCTIONS
/////////////////////////////////////////////////////////////////////
//    Declaration Types:
//      - Function Declaration (hoisted)
//      - Function Expression (not hoisted)
//      - Arrow Function (lexical this)
//      - Named Function Expression
//      - Anonymous Function
//      - IIFE (Immediately Invoked)
//    Parameters:
//      - Default parameters
//      - Rest parameters (...args)
//      - Arguments object
//      - Parameter destructuring
//    Advanced Functions:
//      - Callback functions
//      - Higher-order functions
//      - Pure functions
//      - Recursive functions
//      - Generator functions (function*)
//      - Async functions (async/await)
//    Function Concepts:
//      - First-class functions
//      - Closures
//      - Currying
//      - Partial application
//      - Function composition
//      - Memoization

/////////////////////////////////////////////////////////////////////
// 6. ARRAYS
/////////////////////////////////////////////////////////////////////
//    Creation:
//      - Array literal: []
//      - new Array(length)
//      - Array.from(iterable)
//      - Array.of(elements)
//    Mutating Methods:
//      - push(), pop() (end)
//      - shift(), unshift() (start)
//      - splice() (add/remove anywhere)
//      - sort(), reverse()
//      - fill(), copyWithin()
//    Non-Mutating Methods:
//      - slice() (copy portion)
//      - concat() (merge arrays)
//      - join() (to string)
//      - flat(), flatMap()
//      - toSorted(), toReversed() (ES2023)
//    Search Methods:
//      - indexOf(), lastIndexOf()
//      - includes()
//      - find(), findIndex()
//      - findLast(), findLastIndex() (ES2023)
//    Iteration Methods:
//      - forEach() (no return)
//      - map() (transform)
//      - filter() (select)
//      - reduce(), reduceRight() (accumulate)
//      - some() (any match?)
//      - every() (all match?)
//    Static Methods:
//      - Array.isArray()
//      - Array.from()
//      - Array.of()

/////////////////////////////////////////////////////////////////////
// 7. OBJECTS
/////////////////////////////////////////////////////////////////////
//    Creation:
//      - Object literal: {}
//      - new Object()
//      - Object.create(proto)
//      - Constructor functions
//      - Class syntax
//    Property Access:
//      - Dot notation: obj.key
//      - Bracket notation: obj["key"]
//      - Optional chaining: obj?.key
//    Property Features:
//      - Shorthand properties
//      - Computed property names
//      - Property descriptors
//      - Getters & Setters
//    Object Methods:
//      - Object.keys(), values(), entries()
//      - Object.assign() (shallow copy)
//      - Object.freeze(), Object.seal()
//      - Object.defineProperty()
//      - Object.getOwnPropertyDescriptor()
//      - Object.fromEntries()
//    Concepts:
//      - Destructuring assignment
//      - Spread operator
//      - Rest in objects
//      - Property enumeration
//      - Object comparison

/////////////////////////////////////////////////////////////////////
// 8. THIS KEYWORD
/////////////////////////////////////////////////////////////////////
//    Binding Rules:
//      - Default binding (global/undefined)
//      - Implicit binding (method call)
//      - Explicit binding (call, apply, bind)
//      - new binding (constructor)
//      - Arrow function (lexical this)
//    Methods:
//      - call(thisArg, ...args)
//      - apply(thisArg, [args])
//      - bind(thisArg) → returns function

/////////////////////////////////////////////////////////////////////
// 9. PROTOTYPES & INHERITANCE
/////////////////////////////////////////////////////////////////////
//    Prototype Chain:
//      - [[Prototype]] / __proto__
//      - .prototype property
//      - Object.getPrototypeOf()
//      - Object.setPrototypeOf()
//    Inheritance:
//      - Prototypal inheritance
//      - Constructor functions
//      - Object.create()
//    Property Lookup:
//      - Own properties
//      - Inherited properties
//      - hasOwnProperty()
//      - in operator

/////////////////////////////////////////////////////////////////////
// 10. CLASSES (ES6+)
/////////////////////////////////////////////////////////////////////
//    Basics:
//      - class declaration
//      - constructor method
//      - Instance methods
//      - Instance properties
//    Features:
//      - static methods & properties
//      - Getters & Setters
//      - Private fields (#field)
//      - Public class fields
//    Inheritance:
//      - extends keyword
//      - super() constructor
//      - super.method()
//      - Method overriding

/////////////////////////////////////////////////////////////////////
// 11. STRINGS
/////////////////////////////////////////////////////////////////////
//    Creation:
//      - Single/double quotes
//      - Template literals (``)
//      - String()
//    Methods:
//      - length property
//      - charAt(), charCodeAt(), at()
//      - indexOf(), lastIndexOf(), includes()
//      - startsWith(), endsWith()
//      - slice(), substring(), substr()
//      - toUpperCase(), toLowerCase()
//      - trim(), trimStart(), trimEnd()
//      - split(), repeat(), replace()
//      - padStart(), padEnd()
//      - match(), search() (RegExp)
//    Template Literals:
//      - Interpolation: ${expression}
//      - Multi-line strings
//      - Tagged templates

/////////////////////////////////////////////////////////////////////
// 12. NUMBERS & MATH
/////////////////////////////////////////////////////////////////////
//    Number:
//      - Integer, Float
//      - Infinity, -Infinity, NaN
//      - Number.MAX_VALUE, MIN_VALUE
//      - Number.isInteger(), isNaN(), isFinite()
//      - parseInt(), parseFloat()
//      - toFixed(), toPrecision()
//    Math Object:
//      - Math.round(), floor(), ceil(), trunc()
//      - Math.abs(), sign()
//      - Math.max(), min()
//      - Math.pow(), sqrt(), cbrt()
//      - Math.random()
//      - Math.PI, E
//    BigInt:
//      - Creation: 123n or BigInt(123)
//      - Operations (no mixing with Number)

/////////////////////////////////////////////////////////////////////
// 13. DATE & TIME
/////////////////////////////////////////////////////////////////////
//    Creation:
//      - new Date()
//      - new Date(milliseconds)
//      - new Date(dateString)
//      - new Date(year, month, day, ...)
//    Get Methods:
//      - getFullYear(), getMonth(), getDate()
//      - getHours(), getMinutes(), getSeconds()
//      - getDay(), getTime()
//    Set Methods:
//      - setFullYear(), setMonth(), setDate()
//      - setHours(), setMinutes(), setSeconds()
//    Formatting:
//      - toLocaleDateString()
//      - toLocaleTimeString()
//      - toISOString()
//      - Intl.DateTimeFormat

/////////////////////////////////////////////////////////////////////
// 14. REGULAR EXPRESSIONS
/////////////////////////////////////////////////////////////////////
//    Creation:
//      - Literal: /pattern/flags
//      - Constructor: new RegExp()
//    Flags:
//      - g (global), i (case-insensitive)
//      - m (multiline), s (dotAll)
//      - u (unicode), y (sticky)
//    Methods:
//      - test() → boolean
//      - exec() → array or null
//      - match(), matchAll()
//      - replace(), replaceAll()
//      - search(), split()
//    Patterns:
//      - Character classes: \d, \w, \s
//      - Anchors: ^, $, \b
//      - Quantifiers: *, +, ?, {n}
//      - Groups: (), (?:), (?<name>)
//      - Assertions: (?=), (?!)

/////////////////////////////////////////////////////////////////////
// 15. MAP & SET (ES6)
/////////////////////////////////////////////////////////////////////
//    Map:
//      - new Map()
//      - set(), get(), has(), delete()
//      - size, clear()
//      - keys(), values(), entries()
//      - forEach()
//    WeakMap:
//      - Only object keys
//      - No enumeration
//      - Garbage collectable
//    Set:
//      - new Set()
//      - add(), has(), delete()
//      - size, clear()
//      - Unique values only
//    WeakSet:
//      - Only objects
//      - No enumeration
//      - Garbage collectable

/////////////////////////////////////////////////////////////////////
// 16. ITERATORS & GENERATORS
/////////////////////////////////////////////////////////////////////
//    Iterators:
//      - Symbol.iterator
//      - next() method
//      - { value, done } object
//      - for...of loop
//    Generators:
//      - function* syntax
//      - yield keyword
//      - yield* delegation
//      - .next(), .return(), .throw()
//    Iterables:
//      - Arrays, Strings, Maps, Sets
//      - Custom iterables

/////////////////////////////////////////////////////////////////////
// 17. SYMBOLS
/////////////////////////////////////////////////////////////////////
//    Creation:
//      - Symbol(description)
//      - Symbol.for(key) (global registry)
//    Well-known Symbols:
//      - Symbol.iterator
//      - Symbol.toStringTag
//      - Symbol.hasInstance
//      - Symbol.toPrimitive
//    Use Cases:
//      - Unique property keys
//      - Private-like properties
//      - Metaprogramming

/////////////////////////////////////////////////////////////////////
// 18. ASYNCHRONOUS JAVASCRIPT
/////////////////////////////////////////////////////////////////////
//    Event Loop:
//      - Call Stack
//      - Web APIs
//      - Callback Queue (Task Queue)
//      - Microtask Queue
//      - Event Loop mechanism
//    Callbacks:
//      - Callback functions
//      - Callback hell / Pyramid of doom
//      - Error-first callbacks
//    Timers:
//      - setTimeout()
//      - setInterval()
//      - clearTimeout(), clearInterval()
//      - requestAnimationFrame()
//    Promises:
//      - new Promise((resolve, reject) => {})
//      - States: pending, fulfilled, rejected
//      - .then(), .catch(), .finally()
//      - Promise.all(), Promise.race()
//      - Promise.allSettled(), Promise.any()
//      - Promise.resolve(), Promise.reject()
//    Async/Await:
//      - async function declaration
//      - await keyword
//      - Error handling (try/catch)
//      - Parallel execution
//      - Sequential execution

/////////////////////////////////////////////////////////////////////
// 19. ERROR HANDLING
/////////////////////////////////////////////////////////////////////
//    try / catch / finally
//    throw statement
//    Error Object:
//      - new Error(message)
//      - name, message, stack
//    Error Types:
//      - TypeError
//      - ReferenceError
//      - SyntaxError
//      - RangeError
//      - URIError
//      - EvalError
//    Custom Errors:
//      - Extending Error class
//    Async Error Handling:
//      - Promise .catch()
//      - try/catch with async/await
//      - Global handlers

/////////////////////////////////////////////////////////////////////
// 20. MODULES
/////////////////////////////////////////////////////////////////////
//    ES Modules (ESM):
//      - export (named)
//      - export default
//      - import { } from
//      - import * as
//      - Dynamic import()
//      - Re-exporting
//    CommonJS (Node.js):
//      - module.exports
//      - require()
//    Module Features:
//      - Strict mode by default
//      - Module scope
//      - Static structure
//      - Tree shaking

/////////////////////////////////////////////////////////////////////
// 21. DOM MANIPULATION
/////////////////////////////////////////////////////////////////////
//    Selection:
//      - getElementById()
//      - getElementsByClassName()
//      - getElementsByTagName()
//      - querySelector()
//      - querySelectorAll()
//    Traversal:
//      - parentNode, parentElement
//      - children, childNodes
//      - firstElementChild, lastElementChild
//      - nextElementSibling, previousElementSibling
//    Manipulation:
//      - createElement()
//      - appendChild(), prepend(), append()
//      - insertBefore(), insertAdjacentHTML()
//      - removeChild(), remove()
//      - cloneNode()
//      - replaceChild()
//    Content:
//      - innerHTML, outerHTML
//      - textContent, innerText
//    Attributes:
//      - getAttribute(), setAttribute()
//      - removeAttribute(), hasAttribute()
//      - dataset (data-* attributes)
//    Styles:
//      - style property
//      - classList.add/remove/toggle/contains
//      - getComputedStyle()

/////////////////////////////////////////////////////////////////////
// 22. EVENTS
/////////////////////////////////////////////////////////////////////
//    Event Handling:
//      - addEventListener()
//      - removeEventListener()
//      - Inline handlers (avoid)
//    Event Object:
//      - type, target, currentTarget
//      - preventDefault()
//      - stopPropagation()
//      - stopImmediatePropagation()
//    Event Flow:
//      - Capturing phase
//      - Target phase
//      - Bubbling phase
//      - Event delegation
//    Common Events:
//      - Mouse: click, dblclick, mouseenter, mouseleave
//      - Keyboard: keydown, keyup, keypress
//      - Form: submit, change, input, focus, blur
//      - Window: load, DOMContentLoaded, resize, scroll
//      - Touch: touchstart, touchmove, touchend
//    Custom Events:
//      - new CustomEvent()
//      - dispatchEvent()

/////////////////////////////////////////////////////////////////////
// 23. WEB APIs
/////////////////////////////////////////////////////////////////////
//    Fetch API:
//      - fetch(url, options)
//      - Response methods: json(), text(), blob()
//      - Headers, Request objects
//      - AbortController
//    Storage:
//      - localStorage
//      - sessionStorage
//      - Cookies (document.cookie)
//      - IndexedDB
//    URL & Location:
//      - window.location
//      - URL object
//      - URLSearchParams
//    History:
//      - history.pushState()
//      - history.replaceState()
//      - popstate event
//    Others:
//      - Geolocation API
//      - Notification API
//      - Clipboard API
//      - Intersection Observer
//      - Resize Observer
//      - MutationObserver

/////////////////////////////////////////////////////////////////////
// 24. JSON
/////////////////////////////////////////////////////////////////////
//    Methods:
//      - JSON.stringify(value, replacer, space)
//      - JSON.parse(text, reviver)
//    Features:
//      - Supported types
//      - Handling circular references
//      - Custom serialization

/////////////////////////////////////////////////////////////////////
// 25. PROXY & REFLECT
/////////////////////////////////////////////////////////////////////
//    Proxy:
//      - new Proxy(target, handler)
//      - Traps: get, set, has, deleteProperty
//      - apply, construct traps
//      - Revocable proxies
//    Reflect:
//      - Reflect.get(), set()
//      - Reflect.has(), deleteProperty()
//      - Reflect.apply(), construct()

/////////////////////////////////////////////////////////////////////
// 26. CLOSURES & SCOPE
/////////////////////////////////////////////////////////////////////
//    Lexical Environment
//    Scope Chain
//    Closure:
//      - Definition & Use cases
//      - Data encapsulation
//      - Factory functions
//      - Module pattern
//    Memory:
//      - Garbage collection
//      - Memory leaks with closures

/////////////////////////////////////////////////////////////////////
// 27. FUNCTIONAL PROGRAMMING
/////////////////////////////////////////////////////////////////////
//    Concepts:
//      - Pure functions
//      - Immutability
//      - First-class functions
//      - Higher-order functions
//    Techniques:
//      - map, filter, reduce
//      - Currying
//      - Partial application
//      - Function composition
//      - Point-free style

/////////////////////////////////////////////////////////////////////
// 28. DESIGN PATTERNS
/////////////////////////////////////////////////////////////////////
//    Creational:
//      - Factory Pattern
//      - Singleton Pattern
//      - Constructor Pattern
//      - Module Pattern
//    Structural:
//      - Decorator Pattern
//      - Facade Pattern
//      - Adapter Pattern
//    Behavioral:
//      - Observer Pattern
//      - Pub/Sub Pattern
//      - Strategy Pattern
//      - Command Pattern

/////////////////////////////////////////////////////////////////////
// 29. PERFORMANCE & OPTIMIZATION
/////////////////////////////////////////////////////////////////////
//    Techniques:
//      - Debouncing
//      - Throttling
//      - Memoization
//      - Lazy loading
//      - Code splitting
//    Memory:
//      - Memory leaks
//      - Garbage collection
//      - WeakMap/WeakSet usage
//    Web Workers:
//      - Dedicated Workers
//      - Shared Workers
//      - postMessage()
//    Tools:
//      - Performance API
//      - Chrome DevTools Performance tab

/////////////////////////////////////////////////////////////////////
// 30. TESTING
/////////////////////////////////////////////////////////////////////
//    Types:
//      - Unit testing
//      - Integration testing
//      - End-to-end (E2E) testing
//    Frameworks:
//      - Jest
//      - Mocha + Chai
//      - Vitest
//    E2E Tools:
//      - Cypress
//      - Playwright
//      - Puppeteer
//    Concepts:
//      - Test-Driven Development (TDD)
//      - Behavior-Driven Development (BDD)
//      - Mocking & Stubbing

/////////////////////////////////////////////////////////////////////
// 31. SECURITY
/////////////////////////////////////////////////////////////////////
//    Vulnerabilities:
//      - XSS (Cross-Site Scripting)
//      - CSRF (Cross-Site Request Forgery)
//      - Injection attacks
//      - Clickjacking
//    Prevention:
//      - Input validation & sanitization
//      - Content Security Policy (CSP)
//      - HTTPS
//      - HttpOnly cookies
//      - SameSite cookies
//      - CORS understanding

/////////////////////////////////////////////////////////////////////
// 32. DEBUGGING
/////////////////////////////////////////////////////////////////////
//    Console Methods:
//      - log(), error(), warn(), info()
//      - table(), dir(), dirxml()
//      - group(), groupEnd()
//      - time(), timeEnd()
//      - trace(), assert()
//    Debugger:
//      - debugger statement
//      - Breakpoints
//      - Step through (over, into, out)
//      - Watch expressions
//      - Call stack inspection

/////////////////////////////////////////////////////////////////////
// 33. STRICT MODE
/////////////////////////////////////////////////////////////////////
//    Enable: "use strict";
//    Changes:
//      - No undeclared variables
//      - No duplicate parameters
//      - No octal literals
//      - this is undefined in functions
//      - Cannot delete non-configurable properties

/////////////////////////////////////////////////////////////////////
// 34. ES2020+ FEATURES
/////////////////////////////////////////////////////////////////////
//    ES2020:
//      - Optional chaining (?.)
//      - Nullish coalescing (??)
//      - BigInt
//      - Promise.allSettled()
//      - Dynamic import()
//      - globalThis
//    ES2021:
//      - String.replaceAll()
//      - Promise.any()
//      - Logical assignment (||=, &&=, ??=)
//      - Numeric separators (1_000_000)
//    ES2022:
//      - Top-level await
//      - Private class fields (#)
//      - Static class blocks
//      - .at() method
//      - Object.hasOwn()
//    ES2023:
//      - Array findLast(), findLastIndex()
//      - Array toSorted(), toReversed(), toSpliced()
//      - Array.with()
//      - Hashbang grammar

/////////////////////////////////////////////////////////////////////
// 35. BEST PRACTICES
/////////////////////////////////////////////////////////////////////
//    Code Quality:
//      - Clean code principles
//      - DRY (Don't Repeat Yourself)
//      - KISS (Keep It Simple)
//      - YAGNI (You Aren't Gonna Need It)
//    Style:
//      - Consistent naming conventions
//      - ESLint & Prettier
//      - Code comments & documentation
//    Workflow:
//      - Version control (Git)
//      - Code reviews
//      - Continuous Integration

/* =========================================================
   END OF COMPLETE JAVASCRIPT MASTERY SYLLABUS
   ========================================================= */