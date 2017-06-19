/**
 * Created by yQiu on 17/6/19.
 */

(function () {

})(window);

function Cut(obj) {
    this.imgUrl = obj.imgUrl || '';
    this.createImg();
}

// 用于显示用的图片
Cut.prototype.img = new Image();

// 创建一张图片
Cut.prototype.createImg = function (imgUrlStr) {
    var cutImg = this;
    cutImg.imgUrl = imgUrlStr || cutImg.imgUrl;

    if (!cutImg.imgUrl) return false;
    console.log('加载图片...');
    cutImg.img.src = cutImg.imgUrl;

    cutImg.img.onload = function () {
        document.body.appendChild(cutImg.img);
        console.log('加载完成...');
    };
};

Cut.prototype.init = function () {
    console.log("Cut.prototype.init");
};

Cut.prototype.setImg = function () {

};