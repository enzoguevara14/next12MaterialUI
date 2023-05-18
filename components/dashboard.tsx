/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Movies, Result } from '../themes/services/models/moviesRequest';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { DashboardStyles } from './dashboardStyles.styles';

function Dashboard() {
  const [dataApi, setData] = useState<Result[]>([])




  const getUsers = async () => {

    const { data } = await axios.get<Movies>('https://api.themoviedb.org/3/movie/now_playing', {
      method: 'GET',
      headers: {
        'Content-Type': 'multipart/form-data',
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTFmZDY4YTRkYWU4ZjM5YjdhYmQ5NWY2OThkM2VhNiIsInN1YiI6IjY0NjU3ZjE3MmJjZjY3MDE3MmFmOWU1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wkrudsekYbWLoaTvA1K4Cg8MoEeD2pg1CxVsm1ojcSM'
      }
    })
    setData(data.results);
    console.log(dataApi);

  }


  useEffect(() => {
    void getUsers()
  }, [])



  return (
    <div >

      <Grid sx={{

        '&.MuiGrid-root': {
          display: 'grid',
          gap: '2rem',
          gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 2fr))'

        },
      }} >
        {dataApi.map((item) => (
          <Card sx={{ maxWidth: 500 }} key={item.id}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="450"
                image={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt="cartelera"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.overview}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}


      </Grid>
      <style jsx>{DashboardStyles}</style>
    </div>
  )
}

export default Dashboard