/**
 * Source of document and example from http://usejsdoc.org/index.html
 * goto main website for more information.
 */

// ================= The @namespace usage. =================  //

//----------------------------------------------------------
// 1. Using the @namespace tag with an object
/**
 * My namespace.
 * @namespace
 */
var MyNamespace = {
    /** documented as MyNamespace.foo */
    foo: function() {},
    /** documented as MyNamespace.bar */
    bar: 1
};

//----------------------------------------------------------
// 2. Using the @namespace tag for virtual comments
/**
 * A namespace.
 * @namespace MyNamespace
 */

/**
 * A function in MyNamespace (MyNamespace.myFunction).
 * @function myFunction
 * @memberof MyNamespace
 */

//----------------------------------------------------------
// 3. Using the @namespace tag with unusual member names
/** @namespace window */

/**
 * Shorthand for the alert function.
 * Refer to it as {@link window."!"} (note the double quotes).
 */
window["!"] = function(msg) { alert(msg); };

//----------------------------------------------------------
// 4. Custom example.
/** 
 * The String code library.
 * @namespace NString
 */
/**
 * Concat 2 string.
 * @param {String} strA 
 * @param {String} strB 
 * @return The concat string.
 * @function concatString
 * @memberof NString
 */
function concatString(strA, strB) {
    return strA + strB;
};

// ================= The @member usage. =================  //

//----------------------------------------------------------
// 1. Using @member with Data#point
/** @class */
function Data() {
    /** @member {Object} */
    this.point = {};
}

//----------------------------------------------------------
// 2. Using @var to document a virtual member
/**
 * A variable in the global namespace called 'foo'.
 * @var {number} foo
 */

//+---------------------------------------------------------
//| The above example is equivalent to the following:
//+---------------------------------------------------------
//| /**
//| * A variable in the global namespace called 'foo'.
//| * @type {number}
//| */
//| var foo;
//+---------------------------------------------------------

// ================= The @property usage. ================= //

//----------------------------------------------------------
// 1. A namespace with defaults and nested default properties
/**
 * @namespace 
 * @property {object}  defaults               - The default values for parties.
 * @property {number}  defaults.players       - The default number of players.
 * @property {string}  defaults.level         - The default level for the party.
 * @property {object}  defaults.treasure      - The default treasure.
 * @property {number}  defaults.treasure.gold - How much gold the party starts with.
 */
var config = {
    defaults: {
        players: 1,
        level:   'beginner',
        treasure: {
            gold: 0
        }
    }
};
/**
 * User type definition
 * @typedef {Object} User
 * @property {string} email
 * @property {string} [nickName]
 */

//----------------------------------------------------------
// 2. A type definition with required and optional property
/**
 * User type definition
 * @typedef {Object} User
 * @property {string} email
 * @property {string} [nickName]
 */

// ================= The @typedef usage. =================  //

//----------------------------------------------------------
// 1. Using the @typedef tag
/**
 * A number, or a string containing a number.
 * @typedef {(number|string)} NumberLike
 */

/**
 * Set the magic number.
 * @param {NumberLike} x - The magic number.
 */
function setMagicNumber(x) {}

//----------------------------------------------------------
// 2. Using @typedef to document a complex type for a class.
/**
 * @namespace JSDocSample
 * The complete Triforce, or one or more components of the Triforce.
 * @typedef {Object} WishGranter~Triforce
 * @property {boolean} hasCourage - Indicates whether the Courage component is present.
 * @property {boolean} hasPower - Indicates whether the Power component is present.
 * @property {boolean} hasWisdom - Indicates whether the Wisdom component is present.
 */

/**
 * A class for granting wishes, powered by the Triforce.
 * @class
 * @param {...WishGranter~Triforce} triforce - One to three {@link WishGranter~Triforce} objects
 * containing all three components of the Triforce.
 * @memberof JSDocSample
 */
function WishGranter(triforce) {}

// ================= The @example usage. =================  //

//----------------------------------------------------------
// 1. Documenting examples.
/**
 * Solves equations of the form a * x = b
 * @example
 * // returns 2
 * globalNS.method1(5, 10);
 * @example
 * // returns 3
 * globalNS.method(5, 15);
 * @returns {Number} Returns the value of x for the equation.
 */
globalNS.method1 = function (a, b) {
    return b / a;
};

//----------------------------------------------------------
// 2. Documenting examples with a caption.
/**
 * Solves equations of the form a * x = b
 * @example <caption>Example usage of method1.</caption>
 * // returns 2
 * globalNS.method1(5, 10);
 * @returns {Number} Returns the value of x for the equation.
 */
globalNS.method1 = function (a, b) {
    return b / a;
};

// ================= The @function usage. =================  //

//----------------------------------------------------------
// 1. Using @function to mark a function.
/** @function */
var paginate = paginateFactory(pages);

//----------------------------------------------------------
// 2. Using @function with a name.
/** @function myFunction */

//+---------------------------------------------------------
//| The above is the same as:
//+---------------------------------------------------------
//| /** @function
//| * @name myFunction */
//+---------------------------------------------------------

// ================= The @memberof usage. =================  //

//----------------------------------------------------------
// 1. Using @memberof.
/** @namespace */
var Tools = {};

/** @memberof Tools */
var hammer = function() {
};

Tools.hammer = hammer;

//----------------------------------------------------------
// 2. Using @memberof with a class prototype.
/** @class Observable */
create(
    'Observable', {
        /**
         * This will be a static member, Observable.cache.
         * @memberof Observable
         */
        cache: [],
        /**
         * This will be an instance member, Observable#publish.
         * @memberof Observable.prototype
         */
        publish: function(msg) {},
        /**
         * This will also be an instance member, Observable#save.
         * @memberof Observable#
         */
        save: function() {},
        /**
         * This will also be an instance member, Observable#end.
         * @memberof Observable
         * @instance
         */
        end: function() {}
    }
);

//----------------------------------------------------------
// 3. Using @memberof! for object properties.
/** @class */
function Data() {
    /**
     * @type {object}
     * @property {number} y This will show up as a property of `Data#point`,
     * but you cannot link to the property as {@link Data#point.y}.
     */
    this.point = {
        /**
         * The @alias and @memberof! tags force JSDoc to document the
         * property as `point.x` (rather than `x`) and to be a member of
         * `Data#`. You can link to the property as {@link Data#point.x}.
         * @alias point.x
         * @memberof! Data#
         */
        x: 0,
        y: 1
    };
}

// ================= The @instance usage. =================  //

//----------------------------------------------------------
// 1. Using @instance to make a virtual doclet an instance member.
/** @namespace MyNamespace */
/**
 * myFunction is now MyNamespace#myFunction.
 * @function myFunction
 * @memberof MyNamespace
 * @instance
 */

//----------------------------------------------------------
// 2. Using @instance to identify an instance member.
/** @namespace */
var BaseObject = {
    /**
     * foo is now BaseObject#foo rather than BaseObject.foo.
     * @instance
     */
    foo: null
};

/** Generates BaseObject instances. */
function fooFactory(fooValue) {
    var props = { foo: fooValue };
    return Object.create(BaseObject, props);
}

// ================= The @override usage. =================  //

//----------------------------------------------------------
// 1. Method that overrides a parent.
/**
 * @classdesc Abstract class representing a network connection.
 * @class
 */
function Connection() {}

/**
 * Open the connection.
 */
Connection.prototype.open = function() {
    // ...
};

/**
 * @classdesc Class representing a socket connection.
 * @class
 * @augments Connection
 */
function Socket() {}

/**
 * Open the socket.
 * @override
 */
Socket.prototype.open = function() {
    // ...
};


// ================= The @returns usage. =================  //

//----------------------------------------------------------
// 1. Return value with a type.
/**
 * Returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a, b) {
    return a + b;
}

//----------------------------------------------------------
// 2. Return value with a type and description
/**
 * Returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @returns {number} Sum of a and b
 */
function sum(a, b) {
    return a + b;
}

//----------------------------------------------------------
// 3. Return value with multiple types.
/**
 * Returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @param {boolean} retArr If set to true, the function will return an array
 * @returns {(number|Array)} Sum of a and b or an array that contains a, b and the sum of a and b.
 */
function sum(a, b, retArr) {
    if (retArr) {
        return [a, b, a + b];
    }
    return a + b;
}

//----------------------------------------------------------
// 4. Returns a promise.
/**
 * Returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @returns {Promise} Promise object represents the sum of a and b
 */
function sumAsync(a, b) {
    return new Promise(function(resolve, reject) {
        resolve(a + b);
    });
}
