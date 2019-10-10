# string-manipulation

> All possible string related manipulation within one package. It returns what you expect as result.

Useful when you don't want to mess up with a bunch of small functions that can help you during the string related manipulation. Easy to use just call the functions with parameters(sometime not needed) from the below and get the desired result.

It is also handy when you have some numbers to be calculated and also will help you to generate ***human_readable_random_number***.

## Usable Platforms

``` 
It is built for angular 2+ framwork.
```

## Install

``` 
$ npm i string-manipulation
```

## Usage

In your ts file include the package as -<br />

``` js
import * as str from 'string-manipulation';
```

After importing the package from node_modules use 'str' attribute as an instance of the module. Like -

```js 
str.lengthStr('hello'); //5
str.moveStr('123456789', 1, 4, 7); //156723489
str.sliceStr('Lorem Ipsum', 0, 5); //Lorem
str.trimStr('mynameisanthony', 'y'); //mynameisanthon
str.replaceStr('Hi I am Rajat', 'Rajat', 'Gobinda'); //Hi I am Gobinda

str.returnChar(66); //B
str.wordContainStr('No pain, no gain', 'pain'); //true
str.indexOfStr('Victory', 'i'); //1
str.toLowerCaseStr('Victory'); //victory

str.randomReadableStr(); //it will generate random string at a time

```

## Methods

### str.overwriteStr(mainStr: string,start: number, end: number, replaceWith: string)
	Replaces the characters from `start` to `end` with `replaceWith` .

### str.appendStrToEnd(mainStr: string,appendWith: string)
	Appends the specified `appendWith` to the end of the string. Returns `this` .

### str.appendStrToStart(mainStr: string,appendWith: string)
	Appends the specified `appendWith` at the start of the original string.

### str.appendStrToIndex(mainStr: string,index: number, appendWith: string)
	Appends the specified `appendWith` at the `index` in the original string.

### str.cloneStr(mainStr: string)
	Simply returns the duplicate string of the speciefied one.

### str.moveStr(mainStr: string,start: number, end: number, indexPosition: number)
	Moves the characters from `start` and `end` to `indexPosition`. Returns `this`.

### str.removeStr(mainStr: string,start: number, end: number)
	Removes the characters from `start` to `end` (of the original string, **not** the generated string). Removing the same content twice, or making removals that partially overlap, will cause an error. Returns `this`.

### str.sliceStr(mainStr: string,start: number, end: number)
	Returns the content of the generated string that corresponds to the slice between `start` and `end` of the original string. Throws error if the indices are for characters that were already removed.

### str.snipStr(mainStr: string,start: number, end: number)
	Returns a clone of `str`, with all content before the `start` and `end` characters of the original string removed.

### str.trimStr(mainStr: string,characterToBeTrimmed: string)
	Trims content matching `characterToBeTrimmed` (defaults to `\s`, i.e. whitespace) from the start and end. Returns `this`.

### str.trimStrFromStart(mainStr: string,characterToBeTrimmed: string)
	Trims content matching `characterToBeTrimmed` (defaults to `\s`, i.e. whitespace) from the start. Returns `this`.

### str.trimStrFromEnd(mainStr: string,characterToBeTrimmed: string)
	Trims content matching `characterToBeTrimmed` (defaults to `\s`, i.e. whitespace) from the end. Returns `this`.

### str.emptyStrCheck(mainStr: string)
	Returns true if the resulting source is empty (disregarding white space).

### str.replaceStr(mainStr: string,replaceStr: string, replaceWith: string)
	Replaces `replaceStr` with `replaceWith` in sentence and returns it.

### str.lengthStr(mainStr: string)
	Returns the length of a string in numbers.

### str.concatStr(mainStr: string,str1: string, str2: string)
	Concates two strings (i.e `str1` and `str2`) and returns it.

### str.returnChar(mainStr: string,numeric: number)
	It converts and returns the given number into a form of ASCII character.

### str.wordContainStr(mainStr: string,word: string)
	Returns `true` if the passing `word` gets mached with the contents of the original string. Else returns `false`.

### str.charPositionInStr(mainStr: string,position: number)
	Returns a character from a string matching the index position by `position`.

### str.indexOfStr(mainStr: string,searchStr: string)
	Returns index position of a given character(i.e `searchStr`) from a string.

### str.repeatStr(mainStr: string,times: number)
	Repeates the string for given times and returns the repeated string in an appending form.

### str.toLowerCaseStr(mainStr: string,)
	Converts string to a lower-case form.

### str.toUpperCaseStr(mainStr: string,)
	Converts string to a upper-case form.

### randomReadableStr()
	Generates a random string in human-readable form. 

## License

MIT © Gobinda <br />
[License](LICENSE)

