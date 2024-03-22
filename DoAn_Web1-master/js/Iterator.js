class Iterator {
    constructor(items) {
        this.items = items;
        this.index = 0;
    }

    hasNext() {
        return this.index < this.items.length;
    }

    next() {
        return this.items[this.index++];
    }
}

// Định nghĩa Concrete Iterator
class CSSIterator extends Iterator {
    constructor(items) {
        super(items);
    }

    next() {
        const item = this.items[this.index++];
        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.href = item;
        document.head.appendChild(linkElement);
        return item;
    }
}

// Sử dụng Iterator
const cssFiles = ["css/style.css", "css/topnav.css", "css/header.css", "css/taikhoan.css", "css/footer.css", "css/gioithieu.css"];

const iterator = new CSSIterator(cssFiles);

while (iterator.hasNext()) {
    iterator.next();
}
