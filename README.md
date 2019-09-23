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
```import * as str  from 'string-manipulation';```

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




## License

MIT © Gobinda <br />
[License](LICENSE)
