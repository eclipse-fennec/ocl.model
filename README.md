# @emfts/ocl.model

TypeScript OCL (Object Constraint Language) model generated from an Ecore metamodel. Provides type definitions and implementations for OCL 2.4/2.5 AST (Abstract Syntax Tree) nodes.

Part of the [Eclipse Fennec](https://github.com/eclipse-fennec) project.

## Installation

```bash
npm install @emfts/ocl.model
```

## Usage

```typescript
import { OclFactory, OclPackage } from '@emfts/ocl.model';
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

## License

[EPL-2.0](https://www.eclipse.org/legal/epl-2.0/)
