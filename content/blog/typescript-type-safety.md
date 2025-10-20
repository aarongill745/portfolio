---
title: "TypeScript: Beyond Basic Types"
date: "2025-10-10"
excerpt: "Exploring advanced TypeScript patterns that make your code safer and more maintainable without sacrificing developer experience."
featured: true
---

# TypeScript: Beyond Basic Types

TypeScript's type system is incredibly powerful, but many developers stop at basic type annotations. Let's explore some patterns that can make your code significantly safer.

## The Problem with "any"

```typescript
// Bad: Loses all type safety
function processData(data: any) {
  return data.value.toUpperCase() // Runtime error waiting to happen
}
```

## Pattern 1: Discriminated Unions

When you have different data shapes, use discriminated unions:

```typescript
type Success = {
  status: 'success'
  data: User
}

type Error = {
  status: 'error'
  message: string
}

type Result = Success | Error

function handleResult(result: Result) {
  if (result.status === 'success') {
    // TypeScript knows result.data exists here!
    console.log(result.data)
  } else {
    // TypeScript knows result.message exists here!
    console.log(result.message)
  }
}
```

This pattern eliminates entire classes of runtime errors.

## Pattern 2: Template Literal Types

Create strongly-typed string patterns:

```typescript
type Color = 'red' | 'blue' | 'green'
type Shade = 'light' | 'dark'
type ColorWithShade = `${Shade}-${Color}`

// Valid
const color1: ColorWithShade = 'light-red'
const color2: ColorWithShade = 'dark-blue'

// Invalid - TypeScript error!
const color3: ColorWithShade = 'light-purple'
```

## Pattern 3: Branded Types

Prevent mixing up similar types:

```typescript
type UserId = string & { readonly brand: unique symbol }
type PostId = string & { readonly brand: unique symbol }

function getUser(id: UserId) { /* ... */ }
function getPost(id: PostId) { /* ... */ }

// This will be caught at compile time!
const userId = '123' as UserId
getPost(userId) // Error: Type 'UserId' is not assignable to 'PostId'
```

## The Trade-offs

> "The best code is code that's impossible to misuse."

Advanced types add complexity. Use them when:
- ✅ You want to prevent entire classes of bugs
- ✅ Your API is public or long-lived
- ✅ The types make the code **more** clear, not less

Skip them when:
- ❌ Simple types would do
- ❌ They make your code harder to read
- ❌ You're prototyping rapidly

## Conclusion

TypeScript's type system can catch bugs before they reach production. But remember: types are a tool, not a goal.

The best type system is one that helps you write better code without getting in your way.
