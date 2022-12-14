/**
 * @description Массив цветов для измены фона сайта
 */
var colorArray = ["#5A9C6E", "#A8BF5A", "#FAC46E", "#FAD5BB", "#F2FEFF"];
var i = 0;

/**
 * @author soforl
 * @description Меняет цвет фона сайта
 */
function changeColor(){
    document.body.style.background = colorArray[i];
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }
}

class Picture {
    /**
     * Создает экземпляр Picture.
     *
     * @constructor
     * @this  {Picture}
     * @param {h} h - высота картинки.
     * @param {w} w - ширина картинки.
     */
    constructor(h, w) {
        this.height = h;
        this.weight = w;
        this._h = h;
        this._w = w;
    }

    /**
     * @deprecated
     * @description Расчет площади картинки
     * @return {number} Площадь картинки
     */
    calcSquare(){
        return this.height*this.weight;
    }

    /**
     * @description Возвращает высоту картинки
     * @return {number} Высота картинки
     */
    get height() {
        return this._h;
    }

    /**
     * @description Присваивает высоту картинки
     * @param {value} value - высота картинки.
     */
    set height(value) {
        this._h = value;
    }

    /**
     * @description Возвращает ширину картинки
     * @return {number} Ширина картинки
     */
    get weight() {
        return this._w;
    }

    /**
     * @description Присваивает ширину картинки
     * @param {value} value - ширина картинки.
     */
    set weight(value) {
        this._w = value;
    }
}