import Sortable from 'sortablejs';

const initSortable = () => {
  const list = document.querySelector('#movies-list');
  Sortable.create(list, {
    ghostClass: "ghost",
    animation: 150,
    onEnd: (event) => {
      console.log(`${event.oldIndex} moved to ${event.newIndex}`);
    }
  });
};

export { initSortable };
