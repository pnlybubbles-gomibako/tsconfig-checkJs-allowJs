# tsconfig-checkjs-allowjs

tsconfig behavior test (with vscode)

# Conclusion

VSCode cannot handle tsconfig.xxx.json correctly. The ts files not included by tsconfig.json (even if included by tsconfig.xxx.json) will be handled as orphan sources checked by default compiler options. In these sources, typechecker behaves weird that errors are inconsistent in each editing time even though the content is same.

I recommend to use sub-directory with tsconfig.json.
