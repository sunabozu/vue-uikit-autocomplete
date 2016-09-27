# vue-uikit-autocomplete

> A small set of [Vue 2.x](https://vuejs.org/) input components adjusted for [Uikit](https://getuikit.com/)

## Links
- [Demo](http://sunabozu.github.io/vue-uikit-autocomplete/)
- [Vuikit](https://github.com/vuikit/vuikit/tree/next)

Currently it consists of 3 components:

- VkInput
- VkAutocomplete
- VkAutocompleteHttp

They are built as UMD modules, so you can use them in any way you want.

Directly in an HTML page (they will be available as global variables by their names):

``` html
<script type="text/javascript" src="http://cdn.rawgit.com/sunabozu/vue-uikit-autocomplete/master/dist/vue.min.js/VkInput.js"></script>
<script type="text/javascript" src="http://cdn.rawgit.com/sunabozu/vue-uikit-autocomplete/master/dist/vue.min.js/VkAutocomplete.js"></script>
<script type="text/javascript" src="http://cdn.rawgit.com/sunabozu/vue-uikit-autocomplete/master/dist/vue.min.js/VkAutocompleteHttp.js"></script>
```

Or by importing them:

``` javascript
import VkInput from 'vue-uikit-autocomplete/dist/VkInput'
import VkAutocomplete from 'vue-uikit-autocomplete/dist/VkAutocomplete'
import VkAutocompleteHttp from 'vue-uikit-autocomplete/dist/VkAutocompleteHttp'
```

## VkInput

A simple input field

Property | Values | Description
-------- | ------ | -----------
type | `text`, `number` etc. | Just a regular `type` attribute for `input` element
placeholder | any text | A regular placeholder
icon | see [icons](http://getuikit.com/docs/icon.html) | One of the supported icons
color | `danger` or `sucess` | Makes the border red or green
disabled | `true` or `false` | Disables or enables the input
size |  `large` or `small` | General size of the component
wide | `large`, `medium`, `small` or `mini` | Width of the component
flip-icon | `true` or `false` | Should the icon be animated?

Event | Description
----- | -----------
input | A standard `input` event, just not native

## VkAutocomplete

An input field with autocompletion. Based on `VkInput`, generates all of it events, and accepts all of it properties. You just have to provide an array of objects, and it will automatically search for matches and display only proper items. It uses `text` field for matching by default, but you can change it using `field` property.
You can also provide a custom delegate to display the results in a way you want to (see [Demo](http://sunabozu.github.io/vue-uikit-autocomplete/))

Property | Values | Description
-------- | ------ | -----------
items | `Array` | An array of objects such as `[{ text: 'something'}]`
field | `String` | A name of the field in the `items` objects you want to view and match
delegate | `Object` | A Vue component you want to use instead of the standard delegate

Event | Description
----- | -----------
select | When user hits Enter; passes the selected object as an argument

## VkAutocompleteHttp

A variation of `VkAutocomplete` that fetches suggestions from the network. Generates all of it events and accepts all of the properties of the previous two (except for `items`). You have to provide a URL of your data source and a filter function that processes the fetched list of objects and returns a proper array.

Property | Values | Description
-------- | ------ | -----------
url | http://... | A URL of your data source
http-headers | `Array` | Array of key-value pairs with the headers you want to pass during the request
debounce | `Number` | An interval between the network calls (ms)
filter | `Function` | Accepts a raw array and returns a proper array

Event | Description
----- | -----------
error | Returns an error if something wrong happened during fetching
