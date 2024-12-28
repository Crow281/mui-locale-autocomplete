import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    //Tell pluginReactConfig how to determine the react version.
    //In this case, it is being told to check for itself.
    {
        settings: {
            react: {
                version: "detect"
            }
        }
    },
    //Tell Lint we want access to browser globals.
    {
        languageOptions: {
            globals: globals.browser
        }
    },
    //Disable unused parameter checking.
    {
        rules: {
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    "args": "none"
                }
            ]
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReactConfig,
    eslintConfigPrettier
];