import Skeleton from '@mui/material/Skeleton'

export default function PageSkeleton() {
  return (
    <div className="p-6 space-y-4 bg-background">
      <Skeleton variant="text" width="30%" height={32} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Skeleton variant="rectangular" height={150} />
          <Skeleton width="80%" sx={{ mt: 1 }} />
        </div>
        <div>
          <Skeleton variant="rectangular" height={150} />
          <Skeleton width="80%" sx={{ mt: 1 }} />
        </div>
      </div>
      <Skeleton variant="rounded" height={300} />
    </div>
  )
}
