import { useSnackbar } from 'react-simple-snackbar';
import { deleteOptions } from 'utils/snackbar';

const RemovedFromBasketFeedback = ({ message }) => {
  const [openSnackbar, closeSnackbar] = useSnackbar(deleteOptions);
  return openSnackbar(`${message}`);
};

export default RemovedFromBasketFeedback;
