function Rectangle(width, height) {
    this.width = width;
    this.height = height;
 }
 
 Rectangle.prototype.getArea = function () {
    return this.width * this.height;
 };
 
 
 let rect = new Rectangle(5, 20);
 let rect1 = new Rectangle(48, 25);
 
 let rect2 = new Rectangle(54, 50);
 let rect3 = new Rectangle(30, 60);
 
 
 
 console.log('the rect area ', rect.getArea());
 console.log('the rect1 area ', rect1.getArea());
 
 console.log('the rect2 area ', rect2.getArea());
 console.log('the rect3 area ', rect3.getArea());
 
 