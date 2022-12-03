import View from './View.js';

class SearchView {
  #parent = document.querySelector('.search');

  getQuery() {
    const query = this.#parent.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }
  #clearInput() {
    this.#parent.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this.#parent.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();
