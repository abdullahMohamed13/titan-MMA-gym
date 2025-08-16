import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Stack } from "@mui/material";
import { ClassesProps } from '../../features/slices/classesSlice'

interface LearnMorePopupProps {
  card: ClassesProps;
}

export default function LearnMorePopup({card}: LearnMorePopupProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="outlined"
        fullWidth
        onClick={() => setOpen(true)}
        sx={{
          borderColor: 'rgba(255,255,255,0.3)',
          color: 'white',
          fontWeight: 600,
          py: 1.5,
          borderRadius: 2,
          textTransform: 'none',
          '&:hover': {
            borderColor: '#e20000',
            backgroundColor: 'rgba(226, 0, 0, 0.1)'
          },
          transition: 'all 0.3s ease'
        }}
      >
        📖 Learn More
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: 3,
            color: 'white'
          }
        }}
      >
        <DialogTitle
          sx={{
            background: 'linear-gradient(45deg, #e20000, #ff6b35, #f1c40f)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography>{card.name} Class</Typography>
          <Typography>${card.price}</Typography>
        </DialogTitle>
        <DialogContent dividers>
          <DialogTitle sx={{ fontWeight: 600, paddingLeft: 0, }}>🥋 You'll Learn</DialogTitle>
          <Stack style={{ margin: 0, paddingLeft: '20px' }}>
            {card.drillsAndSkills.map((skill, index) => {
              return <li key={index}>
                {skill}
              </li>
            })}
          </Stack>
          <Box>
            <DialogTitle sx={{ fontWeight: 600, paddingLeft: 0 }}>⏰ Schedule</DialogTitle>
            <Typography sx={{ paddingLeft: '20px'}}>
              {card.schedule}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="error" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
