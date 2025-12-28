/* =========================================================
   COMPLETE TYPESCRIPT MODULE (VARIABLES + TYPES)
   CLEAN SINGLE SCREEN – NO REPEATED LOGIC
   ========================================================= */

/* ▶ Run with Node */
// node index.js
// ts-node index.ts

/* =========================================================
   1️⃣ BASIC & PRIMITIVE TYPES
   ========================================================= */
let age: number = 25;
const country: string = "India";
let isActive: boolean = true;

/* Type Inference */
let city = "Mumbai";
let count = 10;

/* =========================================================
   2️⃣ ARRAYS & TUPLES
   ========================================================= */

// what is the array type?
// An array type is a type that represents an array of values of a specific type.

let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Ajay", "Rahul"];
let mixedArr: (number | string)[] = [1, "two"];

let userTuple: [number, string] = [1, "Ajay"];

/* =========================================================
   3️⃣ OBJECT TYPES
   ========================================================= */

// what is the object type?
// An object type is a type that represents an object with a set of properties.

let person: {
    name: string;
    age: number;
    isAdmin: boolean;
} = {
    name: "Ajay",
    age: 25,
    isAdmin: true
};

/* Optional property */
let employee: {
    id: number;
    salary?: number;
} = { id: 101 };

/* =========================================================
   4️⃣ FUNCTION TYPES
   ========================================================= */
function add(a: number, b: number): number {
    return a + b;
}

let operation: (x: number, y: number) => number;
operation = (a, b) => a * b;

/* Void */
function logMessage(): void {
    console.log("Hello");
}

/* Never */
function crash(msg: string): never {
    throw new Error(msg);
}

/* =========================================================
   5️⃣ UNION, LITERAL & ENUM
   ========================================================= */
let userId: number | string = "A1";
// what is the union type?
// A union type allows a variable to hold values of multiple specified types.


// what is the literal type?
//A literal type restricts a variable to specific fixed values.


// what is the enum type?
// An enum type defines a set of named constants.

let status: "success" | "error" | "loading";
status = "success";



enum Role {
    Admin,
    User,
    Guest
}
let userRole: Role = Role.Admin;

/* =========================================================
   6️⃣ TYPE ALIAS, INTERFACE & RECORD
   ========================================================= */
type User = {
    id: number;
    name: string;
};

let user1: User = { id: 1, name: "Ajay" };

interface Product {
    id: number;
    title: string;
    price: number;
}

let product: Product = {
    id: 1,
    title: "Laptop",
    price: 50000
};

type Roles = "admin" | "user";
let permissions: Record<Roles, boolean> = {
    admin: true,
    user: false
};

/* =========================================================
   7️⃣ ANY vs UNKNOWN
   ========================================================= */
let risky: any = "danger";
risky = 10;

let safe: unknown = "TypeScript";
if (typeof safe === "string") {
    safe.toUpperCase();
}

/* =========================================================
   8️⃣ NULL, UNDEFINED & NARROWING
   ========================================================= */
let n: null = null;
let u: undefined = undefined;

let value: string | number = "hello";
if (typeof value === "string") {
    value.toUpperCase();
}

/* =========================================================
   9️⃣ OPTIONAL CHAINING & NULLISH COALESCING
   ========================================================= */
type ApiResponse = {
    user?: {
        profile?: {
            email?: string;
        };
    };
};

const res: ApiResponse = {};
const email = res.user?.profile?.email ?? "no-email";

/* =========================================================
   🔟 TYPE ASSERTION & NON-NULL
   ========================================================= */
let input: unknown = "TS";
let len = (input as string).length;

/* Non-null assertion (DOM) */
const el = document.getElementById("app")!;
el.innerHTML = "Loaded";

/* =========================================================
   1️⃣1️⃣ READONLY, BIGINT, SYMBOL, AS CONST
   ========================================================= */
const config: Readonly<{ apiUrl: string }> = {
    apiUrl: "https://api.example.com"
};

let bigNumber: bigint = 12345678901234567890n;
let sym: symbol = Symbol("id");

const roles = ["admin", "user"] as const;

/* typeof */
console.log(typeof bigNumber);

/* =========================================================
   END – CLEAN, NON-REPEATED, EXAM-READY TYPESCRIPT FILE
   ========================================================= */





/* =========================================================
1️⃣2️⃣ ADVANCED BUT IMPORTANT TYPES (MISSING PART)
========================================================= */

/* Exhaustive check with never */
type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "square"; size: number };

function area(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.size * shape.size;
        default:
            const _exhaustive: never = shape;
            return _exhaustive;
    }
}

/* keyof */
type UserKeys = keyof User; // "id" | "name"

/* typeof as TYPE */
const serverConfig = {
    port: 3000,
    secure: true
};
type ServerConfig = typeof serverConfig;

/* Index signature */
type ErrorBag = {
    [key: string]: string;
};
const errors: ErrorBag = {
    email: "Invalid email",
    password: "Too short"
};

/* Utility Types */
type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
type UserNameOnly = Pick<User, "name">;
type UserWithoutId = Omit<User, "id">;

/* Function Overloads */
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any) {
    return a + b;
}
