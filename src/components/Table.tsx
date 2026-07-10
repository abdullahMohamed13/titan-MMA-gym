import { useState } from 'react';
// MUI Components
import {
  Paper,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
  Button
} from '@mui/material';
// MUI Icons
import { CloseOutlined, HiveSharp, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Collapse, IconButton, Avatar, Tooltip } from '@mui/material';
// MUI Table
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// MUI Dialog
import { Dialog, DialogTitle, DialogActions } from '@mui/material';

interface DataProps {
  name: string;
  img: string;
  category: string;
  age: string;
  placeOfBirth: string;
  details: {
    status: string;
    nickname: string;
    octagonDebut: string;
    reach: string;
    weight: string;
    height: string;
    record: {
      wins: string;
      draws: string;
      loses: string;
    };
  };
}

export function createData({ name, img, category, age, placeOfBirth, details }: DataProps) {
  return {
    name,
    img,
    category,
    placeOfBirth,
    age,
    details
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const [seeFullImage, setSeeFullImage] = useState(false);

  const defaultAvatar =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iMjQiIGZpbGw9IiMzNzM3MzciLz4KPHN2ZyB4PSIxMiIgeT0iMTIiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTIgMTJjMi4yMSAwIDQtMS43OSA0LTRzLTEuNzktNC00LTQtNCAxLjc5LTQgNCAxLjc5IDQgNCA0em0wIDJjLTIuNjcgMC04IDEuMzQtOCA0djJoMTZ2LTJjMC0yLjY2LTUuMzMtNC04LTR6IiBmaWxsPSIjOEM4QzhDIi8+Cjwvc3ZnPgo8L3N2Zz4K';

  return (
    <>
      <TableRow sx={{ '&:hover': { backgroundColor: 'rgba(226, 0, 0, 0.08)' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            sx={{ color: '#e20000' }}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
          {row.name}
        </TableCell>
        <TableCell align="right">
          <Tooltip
            title="Open image"
            children={
              <Avatar
                src={row.img}
                alt={row.name}
                onClick={() => setSeeFullImage(true)}
                sx={{
                  width: 48,
                  height: 48,
                  margin: '0 auto',
                  cursor: 'pointer',
                  objectPosition: 'top'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = defaultAvatar;
                }}
              />
            }
          />

          <Dialog
            open={seeFullImage}
            onClose={() => setSeeFullImage(false)}
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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ flexDirection: 'column' }}>
                <Typography
                  sx={{
                    background: 'linear-gradient(45deg, #e20000, #ff6b35, #f1c40f)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {row.name}
                </Typography>
                <Typography>
                  {row.details.nickname
                    ? `Nickname: ${row.details.nickname}`
                    : `Division: ${row.category}`}
                </Typography>
              </Box>
              <DialogActions>
                <Button
                  onClick={() => setSeeFullImage(false)}
                  color="error"
                  size="small"
                  variant="contained"
                >
                  <CloseOutlined />
                </Button>
              </DialogActions>
            </DialogTitle>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
              <img
                src={row.img}
                alt={row.name}
                style={{ maxWidth: '100%' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = defaultAvatar;
                }}
              />
            </Box>
          </Dialog>
        </TableCell>

        <TableCell align="right">
          <Chip
            label={row.category}
            size="small"
            sx={{
              backgroundColor: 'rgba(226, 0, 0, 0.2)',
              color: '#e20000',
              fontWeight: 500
            }}
          />
        </TableCell>
        <TableCell align="right">{row.age}</TableCell>
        <TableCell align="right">{row.placeOfBirth}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: { xs: 1, md: 3 }, mt: 2 }}>
              <Typography
                variant="h6"
                gutterBottom
                component="h6"
                sx={{ color: '#e20000', fontWeight: 600, mb: { xs: 1, md: 2 } }}
              >
                Fighter Details
              </Typography>

              {/* Updated responsive Grid layout */}
              <Grid justifyContent='space-evenly' flexDirection={{xs: 'column', md: 'row'}} container spacing={2}>
                <Grid>
                  <Card sx={{ backgroundColor: '#2a2a2a', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', px: 2 }}>
                    <CardContent>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: '#e20000', mb: 2, fontWeight: 600 }}
                      >
                        Basic Info
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 1.5
                        }}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2">Nickname:</Typography>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {row.details.nickname || 'Unknown'}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2">Octagon Debut:</Typography>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {row.details.octagonDebut}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2">Status:</Typography>
                          <Chip
                            label={row.details.status}
                            size="small"
                            color={row.details.status === 'Active' ? 'success' : 'default'}
                            sx={{ height: 20, fontSize: '0.75rem' }}
                          />
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid>
                  <Card sx={{ backgroundColor: '#2a2a2a', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', px: 2 }}>
                    <CardContent>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: '#e20000', mb: 2, fontWeight: 600 }}
                      >
                        Physical Stats
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2">Height:</Typography>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {row.details.height}"
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2">Weight:</Typography>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {row.details.weight} lbs
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2">Reach:</Typography>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {row.details.reach}"
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid>
                  <Card sx={{ backgroundColor: '#2a2a2a', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', px: 4 }}>
                    <CardContent>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: '#e20000', mb: 2, fontWeight: 600 }}
                      >
                        Fight Record
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2">Wins:</Typography>
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: 500, color: '#4caf50' }}
                          >
                            {row.details.record.wins}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2">Losses:</Typography>
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: 500, color: '#f44336' }}
                          >
                            {row.details.record.loses}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2">Draws:</Typography>
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: 500, color: '#ff9800' }}
                          >
                            {row.details.record.draws}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            pt: 1.5,
                            borderTop: 1,
                            borderColor: 'rgba(255,255,255,0.12)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 600, mr: 1 }}>
                            Total:
                          </Typography>
                          <Typography component='span' fontWeight={500} className="text-[#4caf50]">
                            {row.details.record.wins} - 
                          </Typography>
                          <Typography component='span' fontWeight={500} ml={0.5} className="text-[#e20000]">
                            {row.details.record.loses} - 
                          </Typography>
                          <Typography component='span' fontWeight={500}ml={0.5} className="text-[#ff9800]">
                            {row.details.record.draws}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

interface RowProps {
  rows: ReturnType<typeof createData>[];
}

export default function CollapsibleTable({ rows }: RowProps) {
  return (
    <Box sx={{ margin: '0 auto' }}>
      <TableContainer
        component={Paper}
        sx={{
          overflowX: 'auto',
          backgroundColor: '#1e1e1e',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          borderRadius: 2
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: '#2a2a2a',
                  color: '#e20000',
                  fontWeight: 600,
                  width: 60
                }}
              />
              <TableCell
                sx={{
                  backgroundColor: '#2a2a2a',
                  color: '#e20000',
                  fontWeight: 600
                }}
              >
                NAME
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  backgroundColor: '#2a2a2a',
                  color: '#e20000',
                  fontWeight: 600
                }}
              >
                IMAGE
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  backgroundColor: '#2a2a2a',
                  color: '#e20000',
                  fontWeight: 600
                }}
              >
                CATEGORY
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  backgroundColor: '#2a2a2a',
                  color: '#e20000',
                  fontWeight: 600
                }}
              >
                AGE
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  backgroundColor: '#2a2a2a',
                  color: '#e20000',
                  fontWeight: 600
                }}
              >
                PLACE OF BIRTH
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
