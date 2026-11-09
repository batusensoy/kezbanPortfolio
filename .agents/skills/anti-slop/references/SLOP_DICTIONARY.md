# The Anti-Slop Dictionary: Banned Buzzwords & Concrete Alternatives

Use this reference when reviewing copy, microcopy, documentation, and commit messages.

---

## 1. Banned Corporate & AI Slop Terms

| Slop Word / Phrase | Why It Fails | Concrete, High-Signal Replacement |
| :--- | :--- | :--- |
| **"Delve into"** | Overused AI cliché with zero semantic value. | "Explore", "Analyze", "Inspect", or jump straight into the subject. |
| **"Seamless / Seamlessly"** | Every app claims this; it conveys nothing concrete. | Specify the actual mechanism (e.g. "Syncs instantly in the background"). |
| **"Testament to..."** | Pompous, melodramatic filler. | "Demonstrates", "Shows", or state the benchmark metric directly. |
| **"Tapestry of..."** | Flowery AI hallucination language. | "Collection of", "Combination of", "System of". |
| **"Bespoke"** | Pretentious buzzword for custom-built. | "Custom", "Tailored", "Handcrafted". |
| **"Unlock / Unleash"** | Hyperbolic marketing trope. | "Enable", "Access", "Activate". |
| **"Cutting-edge / State-of-the-art"** | Unprovable puffery. | Cite specific technology or architecture (e.g. "WebAssembly", "Edge runtime"). |
| **"Robust and scalable"** | Meaningless without throughput numbers. | "Handles 10,000 req/sec" or "Stateless container on AWS ECS". |
| **"Revolutionize"** | Overblown hyperbole. | "Reduces compile time by 40%". |

---

## 2. Code Slop Anti-Patterns

### Anti-Pattern 1: The Echo Comment
```typescript
// SLOP: Redundant narration of syntax
// Set active tab to projects
setActiveTab('projects');

// CLEAN: No comment needed; the code is self-documenting.
setActiveTab('projects');
```

### Anti-Pattern 2: The Speculative Generic Wrapper
```typescript
// SLOP: Wrapping standard elements with no added behavior
export const GenericTextWrapper = ({ children, style }: any) => {
  return <span style={style}>{children}</span>;
};

// CLEAN: Use standard HTML tags directly
```

### Anti-Pattern 3: Defensive Over-Nesting
```typescript
// SLOP: Multi-level nested ternary statements
const status = isLoading ? 'Loading...' : isError ? 'Error occurred' : data ? data.name : 'No data';

// CLEAN: Early returns or explicit status map
if (isLoading) return <Spinner />;
if (isError) return <ErrorMessage />;
if (!data) return <EmptyState />;
return <UserProfile name={data.name} />;
```

