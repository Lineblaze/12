let app = new Vue({
  el: '#app',
  data: {
  // return {
    msg: "Лабораторная работа",
    names: [],
    counter: 0,
    firstName: '',
    lastName: '',
    warn: false,
    add: function() {
      if (this.firstName.trim() === '' || this.lastName.trim() === '') {
        this.warn = true;
        return;
      }
      let firstName = this.firstName.trim();
      let lastName = this.lastName.trim();
      this.warn = false;
      let fullName = firstName[0].toUpperCase() + firstName.slice(1) + ' ' + lastName[0].toUpperCase() + lastName.slice(1);
      //str[0].toUpperCase() + str.slice(1)
      this.counter += firstName.length + lastName.length;
      this.names.push(fullName);
      this.firstName = '';
      this.lastName = '';
    // }
  }
}
});