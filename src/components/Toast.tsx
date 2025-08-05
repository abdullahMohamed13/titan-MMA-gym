import { ReactNode, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface ToastComponentProps {
  title?: string;
  text: string;
  icon: ReactNode;
  severity?: 'error' | 'warning' | 'info' | 'success';
  autoHideDuration?: number;
  ariaLabel?: string;
}

export function ToastComponent({
  title,
  text,
  icon,
  severity = 'success',
  autoHideDuration = 4500,
  ariaLabel,
}: ToastComponentProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <>
      <IconButton
        aria-label={ariaLabel || title || text}
        onClick={handleClick}
        size="small"
        sx={{ p: 1 }}
        className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        {icon}
      </IconButton>

      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          sx={{ width: '100%' }}
          variant="filled"
        >
          {title && <div className="font-semibold">{title}</div>}
          <div>{text}</div>
        </Alert>
      </Snackbar>
    </>
  );
}
