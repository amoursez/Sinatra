import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { productContext } from '../../../Contexts/ProductsContext';
import ProductCard from '../ProductCard/ProductCard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSearchParams } from 'react-router-dom';



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProductList() {
    const { products, getProducts, paginatedPages } = React.useContext(productContext)
    const [searchParams, setSearchParams] = useSearchParams()

    const [limit, setLimit] = React.useState(3)
    const [page, setPage] = React.useState(searchParams.get('_page') ? searchParams.get('_page') : 1)

    React.useEffect(() => {
        getProducts()
    }, [])

    React.useEffect(() => {
      setSearchParams({
        '_limit' : limit,
        '_page': page
      })
    }, [limit, page])

    const handlePage = (e, pageVal) => {
      setSearchParams({'_page': pageVal, '_limit': limit})
      getProducts()
      setPage(pageVal)
      console.log('hello');
    }

  return (
    <Box sx={{ flexGrow: 1, margin: 4}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                products ? (
                    products.map((item, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <ProductCard item={item} key={index}/>
                        </Grid>
                    ))
                ) : (<h1>loading...</h1>)
            }
      </Grid>
      <Stack spacing={2}>
        <Pagination 
          count={paginatedPages}
          onChange={handlePage}
          page={+page} />
      </Stack>
    </Box>
  );
}


