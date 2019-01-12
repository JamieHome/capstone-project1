export default (Vue) => {
  Vue.directive('red', {
    inserted(el, binding, vnode) {
        el.style.color = '#E7442E';
    }
  });
  Vue.filter('format', function (value) {
    let obj = {
        '0': '00',
        '1': '11',
        '2': '22',
        '3': '33'
    };
    return obj[value];
  });
}
