var colorArray = ["#5A9C6E", "#A8BF5A", "#FAC46E", "#FAD5BB", "#F2FEFF"];
var i = 0;

function changeColor(){
    document.body.style.background = colorArray[i];
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }
}

class Picture {
    constructor(h, w) {
        this.height = h;
        this.weight = w;
        this._h = h;
        this._w = w;
    }

    calcSquare(){
        return this.height*this.weight;
    }

    get height() {
        return this._h;
    }

    set height(value) {
        this._h = value;
    }

    get weight() {
        return this._w;
    }

    set weight(value) {
        this._w = value;
    }
}