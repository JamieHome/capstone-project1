export default (Vue) => {
  Vue.filter('formatDateTime', function (value) {
      if (!value) return '';
      let date = new Date(value);
      let year = date.getFullYear();
      let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
      let day = (date.getDate() + 1) < 10 ? '0' + (date.getDate()) : (date.getDate());
      let hours = (date.getHours() + 1) < 10 ? '0' + (date.getHours()) : (date.getHours());
      let minutes = (date.getMinutes() + 1) < 10 ? '0' + (date.getMinutes()) : (date.getMinutes());
      // let seconds = (date.getSeconds() + 1) < 10 ? '0' + (date.getSeconds()) : (date.getSeconds());
      let formatDate = [year, month, day];
      // let formatTime = [hours,minutes,seconds];
       let formatTime = [hours,minutes];
      return `${formatDate.join('/')} ${formatTime.join(':')}`;
  });
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
