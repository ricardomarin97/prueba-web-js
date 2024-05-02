function createCircle(left, top) {
   var circleElement = document.createElement('div');
   circleElement.className = 'circle';

   circleElement.style.left = `${left}px`;
   circleElement.style.top = `${top}px`;

   mouseAreaElement.appendChild(circleElement);
}


var mouseAreaElement = document.getElementById('mouse-area');

mouseAreaElement.onmousedown = function(e) {
   createCircle(e.clientX - this.offsetLeft, e.clientY - this.offsetTop);
}