# @emfts/ocl.model

TypeScript OCL (Object Constraint Language) model generated from an Ecore metamodel. Provides type definitions and implementations for OCL 2.4/2.5 AST (Abstract Syntax Tree) nodes.

The metamodel follows the OMG [Object Constraint Language specification](https://www.omg.org/spec/OCL/) (v2.4, `formal/2014-02-03`).

Part of the [Eclipse Fennec](https://github.com/eclipse-fennec) project.

## Installation

```bash
npm install @emfts/ocl.model
```

## Usage

```typescript
import { OclFactory, OclPackage } from '@emfts/ocl.model';

// Build AST nodes via the factory
const expr = OclFactory.eINSTANCE.createOperationCallExp();
```

The package also exposes `OclSwitch`, a visitor base class over the full OCL
metamodel (with super-type fallback dispatch). Evaluators such as
[`@emfts/ocl.engine`](https://github.com/eclipse-fennec/ocl.engine) extend it:

```typescript
import { OclSwitch } from '@emfts/ocl.model/OclSwitch';
```

## Development

### Build

```bash
npm install
npm run build
```

### Regenerate Model from Ecore

```bash
npm run generate
```

This regenerates all TypeScript classes in `src/generated/` from the Ecore metamodel in `model/ocl.ecore`. Generated files are marked with `@generated` and should not be edited manually.

## Deployment & Artifacts

| | |
|---|---|
| Registry | [npmjs.com](https://www.npmjs.com/package/@emfts/ocl.model) |
| Package | [`@emfts/ocl.model`](https://www.npmjs.com/package/@emfts/ocl.model) (public) |
| Entry points | `.` (model + factory) and `./OclSwitch` (visitor base) |
| Build output | `dist/` (ESM, `tsc`) — only `dist` is published (see `files` in `package.json`) |
| Source | <https://github.com/eclipse-fennec/ocl.model> (default branch `main`) |
| Project | [Eclipse Fennec](https://projects.eclipse.org/projects/modeling.fennec) |

Releases are published to the npm registry under the `@emfts` scope.

## License

[EPL-2.0](https://www.eclipse.org/legal/epl-2.0/) — see [`LICENSE`](./LICENSE).
