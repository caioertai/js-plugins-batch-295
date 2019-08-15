import swal from 'sweetalert';

const initSwal = () => {
  const button = document.querySelector('#changes-button');
  button.addEventListener('click', () => {
    swal("Changes submitted!", "You clicked the button!", "success")
  })
}

export { initSwal };
