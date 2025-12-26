# [ESLint Config Hive](http://eslint-config-hive.hive.pt)

Simple ESLint configuration for Hive Solutions.

## Requirements

- ESLint 9.x
- Node.js 18.x or higher

## Installation

```bash
npm install --save-dev eslint eslint-config-hive
```

## Usage

ESLint 9 uses the flat config format. Create an `eslint.config.js` file in your project root:

### Basic Configuration

```javascript
import hive from "eslint-config-hive";

export default [
    ...hive
];
```

### Vue.js Configuration

```javascript
import hive from "eslint-config-hive/vue";

export default [
    ...hive
];
```

### With Prettier

```javascript
import hive from "eslint-config-hive/prettier";

export default [
    ...hive
];
```

### Custom Rules

You can extend the configuration with your own rules:

```javascript
import hive from "eslint-config-hive";

export default [
    ...hive,
    {
        rules: {
            "no-console": "warn"
        }
    }
];
```

## Migration from ESLint 8

If you're upgrading from the previous version (v0.x) that used ESLint 8:

1. Update your ESLint to version 9.x
2. Rename `.eslintrc.js` (or similar) to `eslint.config.js`
3. Update the config format as shown above
4. Replace `extends: "hive"` with the spread syntax `...hive`

## License

ESLint Config Hive is currently licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/).

## Build Automation

[![Build Status](https://github.com/hivesolutions/eslint-config-hive/workflows/Main%20Workflow/badge.svg)](https://github.com/hivesolutions/eslint-config-hive/actions)
[![npm Status](https://img.shields.io/npm/v/eslint-config-hive.svg)](https://www.npmjs.com/package/eslint-config-hive)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://www.apache.org/licenses/)
