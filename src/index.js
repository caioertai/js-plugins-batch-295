// Plugin init imports
// Similar to require_relative in Ruby, but with a little more involved.
import { formSubmit, fetchMovies } from './movies';
import { initSortable } from './plugins/init_sortable';
import { initSwal } from './plugins/init_swal';
import { initSelect2 } from './plugins/init_select2';

// Plugin initializations
initSortable();
initSwal();
initSelect2();

// Bindings
const searchForm = document.querySelector('#search-movies');
searchForm.addEventListener('submit', formSubmit);

// Ajax Calls
fetchMovies('harry');
