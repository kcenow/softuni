(function solve() {
    String.prototype.ensureStart = function(str) {
        if (!this.toString().startsWith(str)) {
            return str + this.toString();
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function(str) {
        if (!this.toString().endsWith(str)) {
            return this.toString() + str;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function() {
        return this.toString().length === 0 ? true : false;
    };

    String.prototype.truncate = function(n) {
        if (n <= 3) {
            return '.'.repeat(n);
        }

        if (this.toString().length <= n) {
            return this.toString();
        } else {
            let lastIndex = this.toString().substring(0, n - 2).lastIndexOf(' ');

            if (lastIndex != -1) {
                return this.toString().substring(0, lastIndex) + '...';
            } else {
                return this.toString().substring(0, n - 3) + '...';
            }
        }
    };

    String.format = function(string, ...params) {
        for (let i = 0; i < params.length; i++) {
            let index = string.indexOf(`{${i}}`);

            while (index != -1) {
                string = string.replace(`{${i}}`, params[i]);
                index = string.indexOf(`{${i}}`);
            }
        }
        return string;
    }
})();

let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16); // 'hello my string'
console.log(str);
str = str.truncate(14); // 'hello my...'
console.log(str);
str = str.truncate(8); // 'hello...'
console.log(str);
str = str.truncate(4); // 'h...'
console.log(str);
str = str.truncate(2); // '..'
console.log(str);
str = String.format('The {0} {1} fox', 'quick', 'brown'); // 'The quick brown fox'
console.log(str);
str = String.format('jumps {0} {1}', 'dog'); // 'jumps dog {1}'
console.log(str);