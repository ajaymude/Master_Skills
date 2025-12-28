/* ═══════════════════════════════════════════════════════════════════════════
   📘 COMPLETE TYPESCRIPT SYLLABUS - BEGINNER TO ADVANCED
   Master TypeScript for Modern Web Development
   ═══════════════════════════════════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════════════════════════════════
   🔰 MODULE 1: INTRODUCTION TO TYPESCRIPT
   ═══════════════════════════════════════════════════════════════════════════ */

// 1.1 What is TypeScript?
//     - Superset of JavaScript
//     - Static type checking
//     - Compiles to JavaScript
//     - Created by Microsoft

// 1.2 Why TypeScript?
//     - Type safety & error prevention
//     - Better IDE support & IntelliSense
//     - Easier refactoring
//     - Enhanced code documentation
//     - Scalable for large projects

// 1.3 TypeScript vs JavaScript
//     - Static vs Dynamic typing
//     - Compile-time vs Runtime errors
//     - Type annotations
//     - Interfaces & Generics

// 1.4 Setting Up TypeScript
//     - Installing Node.js
//     - Installing TypeScript: npm install -g typescript
//     - Compiling: tsc filename.ts
//     - ts-node for direct execution
//     - VS Code extensions

// 1.5 tsconfig.json Configuration
//     - target, module, strict
//     - outDir, rootDir
//     - include, exclude
//     - esModuleInterop
//     - strictNullChecks


/* ═══════════════════════════════════════════════════════════════════════════
   📦 MODULE 2: BASIC TYPES & TYPE ANNOTATIONS
   ═══════════════════════════════════════════════════════════════════════════ */

// 2.1 Primitive Types
//     - number (integers, floats, hex, binary, octal)
//     - string (single, double, template literals)
//     - boolean (true/false)
//     - null & undefined
//     - symbol (ES6+)
//     - bigint (ES2020+)

// 2.2 Type Annotations
//     - Variable annotations: let name: string = "Ajay";
//     - Function parameter annotations
//     - Return type annotations
//     - Contextual typing

// 2.3 Type Inference
//     - Automatic type detection
//     - Best common type
//     - When to rely on inference
//     - When to explicitly annotate

// 2.4 Special Types
//     - any (disable type checking)
//     - unknown (type-safe any)
//     - void (no return value)
//     - never (unreachable code)


/* ═══════════════════════════════════════════════════════════════════════════
   📚 MODULE 3: ARRAYS, TUPLES & OBJECTS
   ═══════════════════════════════════════════════════════════════════════════ */

// 3.1 Array Types
//     - Type[] syntax: number[], string[]
//     - Array<Type> generic syntax
//     - Mixed arrays: (string | number)[]
//     - Readonly arrays: readonly string[]
//     - Array methods with type safety

// 3.2 Tuples
//     - Fixed-length arrays with specific types
//     - [string, number] syntax
//     - Optional tuple elements
//     - Rest elements in tuples
//     - Labeled tuples: [name: string, age: number]
//     - readonly tuples

// 3.3 Object Types
//     - Inline object type annotations
//     - Optional properties (?)
//     - Readonly properties
//     - Index signatures
//     - Excess property checks

// 3.4 Object Type Modifiers
//     - readonly modifier
//     - optional (?) modifier
//     - Combining modifiers


/* ═══════════════════════════════════════════════════════════════════════════
   ⚡ MODULE 4: FUNCTIONS & FUNCTION TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

// 4.1 Function Type Annotations
//     - Parameter types
//     - Return type annotations
//     - Void functions
//     - Never-returning functions

// 4.2 Optional & Default Parameters
//     - Optional parameters (param?: type)
//     - Default values (param = defaultValue)
//     - Optional vs undefined

// 4.3 Rest Parameters
//     - Rest parameter syntax (...args: type[])
//     - Rest with tuples

// 4.4 Function Overloads
//     - Multiple function signatures
//     - Implementation signature
//     - Overload resolution

// 4.5 Arrow Functions
//     - Arrow function type annotations
//     - Type inference in arrow functions
//     - this in arrow functions

// 4.6 Type Predicates (Type Guards)
//     - param is Type syntax
//     - Custom type guards
//     - Narrowing with type guards

// 4.7 Function Types
//     - Function type expressions: (x: number) => number
//     - Call signatures
//     - Construct signatures
//     - Callable objects


/* ═══════════════════════════════════════════════════════════════════════════
   🔗 MODULE 5: UNION & INTERSECTION TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

// 5.1 Union Types
//     - type | type syntax
//     - Union of primitives
//     - Union of objects
//     - Common properties
//     - Narrowing union types

// 5.2 Literal Types
//     - String literals: "success" | "error"
//     - Numeric literals: 1 | 2 | 3
//     - Boolean literals
//     - Template literal types (TS 4.1+)

// 5.3 Intersection Types
//     - type & type syntax
//     - Combining object types
//     - interface vs intersection
//     - Conflicting property types

// 5.4 Discriminated Unions
//     - Common literal property (discriminant)
//     - Switch statements
//     - Exhaustiveness checking
//     - Pattern matching


/* ═══════════════════════════════════════════════════════════════════════════
   🏗️ MODULE 6: TYPE ALIASES & INTERFACES
   ═══════════════════════════════════════════════════════════════════════════ */

// 6.1 Type Aliases
//     - type keyword
//     - Aliasing primitives
//     - Aliasing unions
//     - Aliasing objects
//     - Aliasing functions

// 6.2 Interfaces
//     - interface keyword
//     - Object structure definition
//     - Optional properties
//     - Readonly properties
//     - Index signatures

// 6.3 Interface Extension
//     - extends keyword
//     - Multiple inheritance
//     - Extending multiple interfaces
//     - Interface vs Type extension

// 6.4 Declaration Merging
//     - Interface merging
//     - Extending built-in types
//     - Module augmentation

// 6.5 Type Alias vs Interface
//     - When to use type
//     - When to use interface
//     - Differences & similarities
//     - Best practices


/* ═══════════════════════════════════════════════════════════════════════════
   📋 MODULE 7: ENUMS
   ═══════════════════════════════════════════════════════════════════════════ */

// 7.1 Numeric Enums
//     - Default numbering (0, 1, 2...)
//     - Custom initializers
//     - Computed members
//     - Reverse mapping

// 7.2 String Enums
//     - String values for each member
//     - No reverse mapping
//     - Serialization benefits

// 7.3 Heterogeneous Enums
//     - Mixed string & numeric values
//     - Use cases (rare)

// 7.4 Const Enums
//     - const enum declaration
//     - Inline at compile time
//     - Performance benefits
//     - Limitations

// 7.5 Enum as Types
//     - Using enums as type annotations
//     - Enum member types
//     - Union enums


/* ═══════════════════════════════════════════════════════════════════════════
   🔄 MODULE 8: TYPE NARROWING & GUARDS
   ═══════════════════════════════════════════════════════════════════════════ */

// 8.1 typeof Guard
//     - typeof for primitives
//     - typeof limitations

// 8.2 Truthiness Narrowing
//     - if/else narrowing
//     - Boolean coercion
//     - null/undefined checks

// 8.3 Equality Narrowing
//     - === and !== checks
//     - == and != checks
//     - switch statements

// 8.4 instanceof Guard
//     - instanceof for classes
//     - Prototype chain checking

// 8.5 in Operator
//     - Property existence checks
//     - Narrowing object types

// 8.6 Type Predicates
//     - is keyword
//     - Custom type guards
//     - Assertion functions (asserts)

// 8.7 Control Flow Analysis
//     - How TypeScript tracks types
//     - Unreachable code detection
//     - Assignment narrowing


/* ═══════════════════════════════════════════════════════════════════════════
   ✨ MODULE 9: GENERICS
   ═══════════════════════════════════════════════════════════════════════════ */

// 9.1 Introduction to Generics
//     - <T> type parameter
//     - Reusable components
//     - Type safety with flexibility

// 9.2 Generic Functions
//     - Function with type parameter
//     - Type inference in generics
//     - Multiple type parameters
//     - Explicit type arguments

// 9.3 Generic Interfaces & Types
//     - Generic interface definition
//     - Generic type aliases
//     - Array<T>, Promise<T>

// 9.4 Generic Classes
//     - Class with type parameters
//     - Static members limitation
//     - Generic class inheritance

// 9.5 Generic Constraints
//     - extends keyword for constraints
//     - Constraining to object shape
//     - keyof constraint
//     - Multiple constraints

// 9.6 Default Type Parameters
//     - Default values for generics
//     - Optional type parameters

// 9.7 Conditional Types
//     - T extends U ? X : Y
//     - infer keyword
//     - Distributive conditional types
//     - Utility type implementation


/* ═══════════════════════════════════════════════════════════════════════════
   🏛️ MODULE 10: CLASSES
   ═══════════════════════════════════════════════════════════════════════════ */

// 10.1 Class Basics
//     - class keyword
//     - Constructor
//     - Properties & methods
//     - this keyword

// 10.2 Access Modifiers
//     - public (default)
//     - private
//     - protected
//     - private vs # (ES private)

// 10.3 Readonly Properties
//     - readonly modifier
//     - Readonly in constructor

// 10.4 Parameter Properties
//     - Shorthand constructor syntax
//     - Combining with modifiers

// 10.5 Inheritance
//     - extends keyword
//     - super keyword
//     - Method overriding
//     - Constructor inheritance

// 10.6 Abstract Classes
//     - abstract keyword
//     - Abstract methods
//     - Cannot instantiate directly
//     - Template pattern

// 10.7 Static Members
//     - static properties
//     - static methods
//     - static blocks (ES2022+)

// 10.8 Getters & Setters
//     - get accessor
//     - set accessor
//     - Computed properties

// 10.9 Implements Clause
//     - implements keyword
//     - Implementing interfaces
//     - Multiple interfaces

// 10.10 Class Expressions
//     - Anonymous classes
//     - Class as value


/* ═══════════════════════════════════════════════════════════════════════════
   🛠️ MODULE 11: UTILITY TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

// 11.1 Partial<T>
//     - Makes all properties optional

// 11.2 Required<T>
//     - Makes all properties required

// 11.3 Readonly<T>
//     - Makes all properties readonly

// 11.4 Record<K, V>
//     - Object type with key-value mapping

// 11.5 Pick<T, K>
//     - Select specific properties

// 11.6 Omit<T, K>
//     - Exclude specific properties

// 11.7 Exclude<T, U>
//     - Exclude types from union

// 11.8 Extract<T, U>
//     - Extract types from union

// 11.9 NonNullable<T>
//     - Remove null & undefined

// 11.10 ReturnType<T>
//     - Get function return type

// 11.11 Parameters<T>
//     - Get function parameter types as tuple

// 11.12 ConstructorParameters<T>
//     - Get constructor parameter types

// 11.13 InstanceType<T>
//     - Get instance type of constructor

// 11.14 ThisParameterType<T>
//     - Extract this parameter type

// 11.15 OmitThisParameter<T>
//     - Remove this parameter

// 11.16 ThisType<T>
//     - Contextual this type

// 11.17 Awaited<T>
//     - Unwrap Promise types (TS 4.5+)

// 11.18 Uppercase<S>, Lowercase<S>, Capitalize<S>, Uncapitalize<S>
//     - String manipulation types


/* ═══════════════════════════════════════════════════════════════════════════
   🔧 MODULE 12: ADVANCED TYPE FEATURES
   ═══════════════════════════════════════════════════════════════════════════ */

// 12.1 keyof Operator
//     - Get union of keys
//     - keyof with generics
//     - Index access type

// 12.2 typeof Operator (Type Context)
//     - Get type from value
//     - typeof with objects
//     - typeof with functions

// 12.3 Indexed Access Types
//     - Type["property"]
//     - Accessing array element types
//     - Chaining indexed access

// 12.4 Mapped Types
//     - { [K in keyof T]: ... }
//     - Transforming properties
//     - Key remapping (as clause)
//     - Filtering keys

// 12.5 Template Literal Types
//     - `${Type}` syntax
//     - String unions
//     - Pattern matching
//     - Intrinsic string types

// 12.6 Conditional Types
//     - T extends U ? X : Y
//     - Distributive behavior
//     - infer within conditionals
//     - Recursive conditional types

// 12.7 Type Assertions
//     - as keyword
//     - <Type> syntax
//     - const assertions
//     - Non-null assertion (!)

// 12.8 Satisfies Operator (TS 4.9+)
//     - Type validation without widening
//     - Keeping literal types
//     - satisfies vs as


/* ═══════════════════════════════════════════════════════════════════════════
   📁 MODULE 13: MODULES & NAMESPACES
   ═══════════════════════════════════════════════════════════════════════════ */

// 13.1 ES Modules
//     - import/export syntax
//     - Default exports
//     - Named exports
//     - Barrel files (index.ts)

// 13.2 Module Resolution
//     - Node resolution
//     - Classic resolution
//     - Path mapping
//     - baseUrl configuration

// 13.3 Type-Only Imports/Exports
//     - import type { ... }
//     - export type { ... }
//     - Compilation optimization

// 13.4 Namespaces
//     - namespace keyword
//     - Nested namespaces
//     - When to use (rarely)
//     - namespace vs modules

// 13.5 Ambient Modules
//     - declare module
//     - .d.ts files
//     - Module augmentation

// 13.6 Global Declarations
//     - declare global
//     - Global augmentation


/* ═══════════════════════════════════════════════════════════════════════════
   📝 MODULE 14: DECLARATION FILES (.d.ts)
   ═══════════════════════════════════════════════════════════════════════════ */

// 14.1 Introduction to .d.ts Files
//     - Type definitions for JS libraries
//     - DefinitelyTyped (@types/*)
//     - Installing type definitions

// 14.2 Writing Declaration Files
//     - declare keyword
//     - declare function
//     - declare class
//     - declare namespace

// 14.3 Module Declarations
//     - declare module "module-name"
//     - Wildcard modules
//     - Shorthand ambient modules

// 14.4 Global Declarations
//     - declare global
//     - Extending Window
//     - Extending global objects

// 14.5 Declaration File Structure
//     - Library structure patterns
//     - Global library
//     - Modular library
//     - UMD library


/* ═══════════════════════════════════════════════════════════════════════════
   🎭 MODULE 15: DECORATORS
   ═══════════════════════════════════════════════════════════════════════════ */

// 15.1 Decorator Basics
//     - @ syntax
//     - experimentalDecorators flag
//     - Decorator factories

// 15.2 Class Decorators
//     - Modifying class constructor
//     - Sealing classes
//     - Metadata injection

// 15.3 Method Decorators
//     - target, propertyKey, descriptor
//     - Logging decorators
//     - Authorization decorators

// 15.4 Property Decorators
//     - Validation decorators
//     - Observable properties

// 15.5 Parameter Decorators
//     - Metadata reflection
//     - Dependency injection

// 15.6 Accessor Decorators
//     - Getter/setter decorators

// 15.7 Decorator Composition
//     - Multiple decorators
//     - Evaluation order

// 15.8 Stage 3 Decorators (TS 5.0+)
//     - New decorator syntax
//     - decorator keyword
//     - Decorator metadata


/* ═══════════════════════════════════════════════════════════════════════════
   ⚙️ MODULE 16: COMPILER OPTIONS & CONFIGURATION
   ═══════════════════════════════════════════════════════════════════════════ */

// 16.1 tsconfig.json Structure
//     - compilerOptions
//     - include/exclude
//     - files
//     - extends
//     - references

// 16.2 Target & Module Options
//     - target: ES5, ES6, ESNext
//     - module: CommonJS, ESNext, AMD
//     - moduleResolution
//     - lib options

// 16.3 Strict Mode Options
//     - strict: true (all strict checks)
//     - strictNullChecks
//     - strictFunctionTypes
//     - strictPropertyInitialization
//     - noImplicitAny
//     - noImplicitThis

// 16.4 Type Checking Options
//     - noUnusedLocals
//     - noUnusedParameters
//     - noImplicitReturns
//     - noFallthroughCasesInSwitch
//     - exactOptionalPropertyTypes

// 16.5 Output Options
//     - outDir, rootDir
//     - declaration, declarationDir
//     - sourceMap
//     - inlineSources
//     - removeComments

// 16.6 Path Mapping
//     - baseUrl
//     - paths configuration
//     - Project references
//     - composite projects


/* ═══════════════════════════════════════════════════════════════════════════
   🧪 MODULE 17: TESTING WITH TYPESCRIPT
   ═══════════════════════════════════════════════════════════════════════════ */

// 17.1 Testing Frameworks Setup
//     - Jest with TypeScript
//     - Vitest configuration
//     - ts-jest or vitest
//     - @types for testing libraries

// 17.2 Writing Type-Safe Tests
//     - Typed mocks
//     - Type assertions in tests
//     - Generic test utilities

// 17.3 Mocking in TypeScript
//     - jest.Mock<T>
//     - MockedFunction type
//     - Partial mocking
//     - Class mocking

// 17.4 Testing Types
//     - Testing type definitions
//     - tsd library
//     - Compile-time type tests


/* ═══════════════════════════════════════════════════════════════════════════
   ⚛️ MODULE 18: TYPESCRIPT WITH REACT
   ═══════════════════════════════════════════════════════════════════════════ */

// 18.1 React Component Types
//     - React.FC / React.FunctionComponent
//     - Pros & cons of React.FC
//     - Props typing

// 18.2 Props & State Typing
//     - Interface for props
//     - Optional props
//     - Children type
//     - PropsWithChildren<P>

// 18.3 Event Handlers
//     - React.MouseEvent
//     - React.ChangeEvent
//     - React.FormEvent
//     - Event handler types

// 18.4 Hooks Typing
//     - useState<T>
//     - useRef<T>
//     - useReducer types
//     - useContext with generics
//     - Custom hooks typing

// 18.5 Context API
//     - createContext with types
//     - Context provider typing
//     - Avoiding undefined context

// 18.6 Higher-Order Components
//     - HOC type patterns
//     - Props injection
//     - ComponentType utility

// 18.7 Render Props & Children
//     - Render prop patterns
//     - Function as children

// 18.8 Refs & ForwardRef
//     - useRef with element types
//     - forwardRef typing
//     - useImperativeHandle


/* ═══════════════════════════════════════════════════════════════════════════
   🟢 MODULE 19: TYPESCRIPT WITH NODE.JS
   ═══════════════════════════════════════════════════════════════════════════ */

// 19.1 Node.js Setup
//     - @types/node
//     - ts-node for development
//     - tsx for ESM support
//     - nodemon with TypeScript

// 19.2 Express.js Typing
//     - @types/express
//     - Request & Response types
//     - Middleware typing
//     - Route handlers

// 19.3 Request/Response Extensions
//     - Extending Request type
//     - Custom properties
//     - Declaration merging

// 19.4 Database Integration
//     - Prisma (native TS support)
//     - TypeORM entities
//     - Mongoose with TS
//     - Type-safe queries

// 19.5 API Response Types
//     - Generic API responses
//     - Error types
//     - Validation types (Zod/Yup)


/* ═══════════════════════════════════════════════════════════════════════════
   🔷 MODULE 20: TYPESCRIPT WITH NEXT.JS
   ═══════════════════════════════════════════════════════════════════════════ */

// 20.1 Next.js Built-in Types
//     - NextPage type
//     - GetServerSideProps
//     - GetStaticProps
//     - GetStaticPaths

// 20.2 Page Props Types
//     - InferGetServerSidePropsType
//     - InferGetStaticPropsType
//     - Custom App types
//     - Custom Document types

// 20.3 API Routes
//     - NextApiRequest
//     - NextApiResponse
//     - Typed API handlers

// 20.4 App Router Types (Next.js 13+)
//     - PageProps types
//     - Metadata types
//     - Route handlers
//     - Server components


/* ═══════════════════════════════════════════════════════════════════════════
   🎯 MODULE 21: ADVANCED PATTERNS
   ═══════════════════════════════════════════════════════════════════════════ */

// 21.1 Builder Pattern
//     - Method chaining with types
//     - Fluent interfaces
//     - Type-safe builders

// 21.2 Factory Pattern
//     - Generic factories
//     - Abstract factory
//     - Type-safe creation

// 21.3 Singleton Pattern
//     - Private constructor
//     - Static instance
//     - Module pattern alternative

// 21.4 Repository Pattern
//     - Generic repository
//     - Type-safe CRUD
//     - Interface-based design

// 21.5 Dependency Injection
//     - Constructor injection
//     - Interface-based DI
//     - InversifyJS / TSyringe

// 21.6 State Machines
//     - XState with TypeScript
//     - Type-safe transitions
//     - State inference

// 21.7 Event Emitter Pattern
//     - Typed events
//     - Generic event emitter
//     - Event maps

// 21.8 Result/Either Pattern
//     - Type-safe error handling
//     - Success/Failure types
//     - Monadic patterns


/* ═══════════════════════════════════════════════════════════════════════════
   🔐 MODULE 22: TYPE-SAFE VALIDATION
   ═══════════════════════════════════════════════════════════════════════════ */

// 22.1 Zod
//     - Schema definition
//     - Type inference: z.infer<typeof schema>
//     - Validation & parsing
//     - Custom error messages

// 22.2 Yup
//     - Yup with TypeScript
//     - InferType utility
//     - Schema composition

// 22.3 io-ts
//     - Runtime type checking
//     - Codec definition
//     - Decoding validation

// 22.4 TypeBox
//     - JSON Schema compatible
//     - Static type extraction
//     - Fast validation


/* ═══════════════════════════════════════════════════════════════════════════
   🌐 MODULE 23: API TYPE SAFETY
   ═══════════════════════════════════════════════════════════════════════════ */

// 23.1 REST API Typing
//     - Request/response types
//     - Generic fetch wrappers
//     - Axios type configuration

// 23.2 GraphQL with TypeScript
//     - GraphQL Code Generator
//     - Typed queries/mutations
//     - Apollo Client types

// 23.3 tRPC
//     - End-to-end type safety
//     - Procedure definition
//     - Type inference across client/server

// 23.4 OpenAPI/Swagger
//     - openapi-typescript
//     - Generated types
//     - Type-safe API clients


/* ═══════════════════════════════════════════════════════════════════════════
   🚀 MODULE 24: PERFORMANCE & OPTIMIZATION
   ═══════════════════════════════════════════════════════════════════════════ */

// 24.1 Compilation Performance
//     - incremental builds
//     - tsBuildInfoFile
//     - Project references
//     - skipLibCheck

// 24.2 Type Complexity
//     - Avoiding deep recursion
//     - Union type limits
//     - Simplifying conditional types
//     - Type instantiation limits

// 24.3 Bundle Size
//     - Tree shaking
//     - Dead code elimination
//     - const enums
//     - Type-only imports


/* ═══════════════════════════════════════════════════════════════════════════
   🎓 MODULE 25: BEST PRACTICES & PATTERNS
   ═══════════════════════════════════════════════════════════════════════════ */

// 25.1 Coding Standards
//     - Naming conventions
//     - File organization
//     - Export patterns
//     - Barrel files best practices

// 25.2 Type Safety Guidelines
//     - Avoid any when possible
//     - Prefer unknown over any
//     - Use readonly for immutability
//     - Explicit return types for public APIs

// 25.3 Code Organization
//     - Feature-based structure
//     - Shared types location
//     - Index files for exports
//     - Circular dependency prevention

// 25.4 Documentation
//     - JSDoc for types
//     - TSDoc standard
//     - Type documentation tools

// 25.5 Migration from JavaScript
//     - allowJs option
//     - Gradual migration strategy
//     - checkJs for JS files
//     - JSDoc type annotations


/* ═══════════════════════════════════════════════════════════════════════════
   🆕 MODULE 26: NEW FEATURES (TYPESCRIPT 5.x)
   ═══════════════════════════════════════════════════════════════════════════ */

// 26.1 TypeScript 5.0 Features
//     - Decorators (Stage 3)
//     - const Type Parameters
//     - extends support for multiple configs
//     - All enums are Union enums

// 26.2 TypeScript 5.1 Features
//     - Easier implicit returns for undefined
//     - Unrelated types for getters/setters
//     - Linked cursors in JSX

// 26.3 TypeScript 5.2 Features
//     - using declarations (Explicit Resource Management)
//     - Decorator metadata
//     - Named tuple members

// 26.4 TypeScript 5.3 Features
//     - Import attributes
//     - Resolution-mode in import types
//     - switch(true) narrowing

// 26.5 TypeScript 5.4 Features
//     - NoInfer utility type
//     - Preserved narrowing in closures
//     - Object.groupBy and Map.groupBy types

// 26.6 TypeScript 5.5+ Features
//     - Inferred type predicates
//     - Control flow narrowing for const indexed access
//     - Isolated declarations
//     - Regular expression syntax checking


/* ═══════════════════════════════════════════════════════════════════════════
   📖 QUICK REFERENCE CHEAT SHEET
   ═══════════════════════════════════════════════════════════════════════════ */

// BASIC TYPES
// let str: string = "hello";
// let num: number = 42;
// let bool: boolean = true;
// let arr: number[] = [1, 2, 3];
// let tuple: [string, number] = ["a", 1];
// let obj: { name: string; age: number };

// FUNCTIONS
// function fn(param: string): number { }
// const arrow = (x: number): number => x * 2;
// function optional(x?: string): void { }
// function rest(...args: number[]): void { }

// UNION & INTERSECTION
// type Union = string | number;
// type Intersection = TypeA & TypeB;

// TYPE ALIAS & INTERFACE
// type User = { name: string; };
// interface IUser { name: string; }

// GENERICS
// function identity<T>(arg: T): T { return arg; }
// interface Container<T> { value: T; }
// class Box<T> { constructor(public value: T) {} }

// UTILITY TYPES
// Partial<T>  Required<T>  Readonly<T>  Record<K,V>
// Pick<T,K>   Omit<T,K>    Exclude<T,U> Extract<T,U>
// NonNullable<T>  ReturnType<T>  Parameters<T>

// TYPE GUARDS
// typeof x === "string"
// x instanceof MyClass
// "property" in obj
// function isType(x: unknown): x is Type { }

// ASSERTIONS
// value as Type
// value!  (non-null assertion)
// const x = { } as const;


/* ═══════════════════════════════════════════════════════════════════════════
   END OF COMPLETE TYPESCRIPT SYLLABUS
   Total Modules: 26
   Comprehensive coverage from Basics to Advanced TypeScript
   ═══════════════════════════════════════════════════════════════════════════ */
