# CLI Utilities

This is a CLI Utilities library for Node.js.

Time spent: 15 hours

## Features

### Required

- [x] Completed Requireds marked with `[x]`
- [x] Walkthrough Gif embedded in README
- [x] README `Time spent:` includes the number of hours spent on the assignment
- [x] `echo.js` prints the first argument to stdout
- [x] `cat.js` prints the contents of the first argument to stdout
- [x] `touch.js` updates the modified date of the first argument
- [x] `ls.js` recursively lists the files of the first argument
- [x] `mkdir.js` create a directory at the first argument
- [x] `rm.js` deletes any file or directory at the first argument 

### Optionals

- [x] `ln.js` creates a symlink from the second argument to the first argument
- [x] `grep.js` prints lines matching the first argument in the files matching the second argument
- [x] `grep.js` supports a regex as the second arguments

## Walkthrough Gif:
```bash
./echo.js 'hi there'
./cat.js touch.js
./touch.js hi.txt
./ls.js ./
.ls.js ./ -R
```
![echo_cat_touch_ls](https://github.com/nvpmai95/nodejs_command_lines/blob/master/gifs/echo_cat_touch_ls.gif)

```bash
./mkdir.js f1/f2/f3
./rm.js hi.txt
./ln.js echo.js echo_clone.js
./grep.js console \.js
```
![echo_cat_touch_ls](https://github.com/nvpmai95/nodejs_command_lines/blob/master/gifs/mkdir_rm_ln_grep.gif)
